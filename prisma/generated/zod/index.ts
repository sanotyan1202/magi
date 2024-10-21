import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const GroupScalarFieldEnumSchema = z.enum(['id','name','userId','isOpen','created_at','updated_at']);

export const ChannelScalarFieldEnumSchema = z.enum(['id','title','url','groupId','created_at','updated_at']);

export const MessageScalarFieldEnumSchema = z.enum(['id','content','name','channelId','created_at','updated_at']);

export const ThreadScalarFieldEnumSchema = z.enum(['id','content','name','messageId','created_at','updated_at']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// GROUP SCHEMA
/////////////////////////////////////////

export const GroupSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  userId: z.string(),
  isOpen: z.boolean(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Group = z.infer<typeof GroupSchema>

/////////////////////////////////////////
// CHANNEL SCHEMA
/////////////////////////////////////////

export const ChannelSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  url: z.string(),
  groupId: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Channel = z.infer<typeof ChannelSchema>

/////////////////////////////////////////
// MESSAGE SCHEMA
/////////////////////////////////////////

export const MessageSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  name: z.string(),
  channelId: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Message = z.infer<typeof MessageSchema>

/////////////////////////////////////////
// THREAD SCHEMA
/////////////////////////////////////////

export const ThreadSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  name: z.string(),
  messageId: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Thread = z.infer<typeof ThreadSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// GROUP
//------------------------------------------------------

export const GroupIncludeSchema: z.ZodType<Prisma.GroupInclude> = z.object({
  channels: z.union([z.boolean(),z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GroupArgsSchema: z.ZodType<Prisma.GroupDefaultArgs> = z.object({
  select: z.lazy(() => GroupSelectSchema).optional(),
  include: z.lazy(() => GroupIncludeSchema).optional(),
}).strict();

export const GroupCountOutputTypeArgsSchema: z.ZodType<Prisma.GroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => GroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export const GroupCountOutputTypeSelectSchema: z.ZodType<Prisma.GroupCountOutputTypeSelect> = z.object({
  channels: z.boolean().optional(),
}).strict();

export const GroupSelectSchema: z.ZodType<Prisma.GroupSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  isOpen: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  channels: z.union([z.boolean(),z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CHANNEL
//------------------------------------------------------

export const ChannelIncludeSchema: z.ZodType<Prisma.ChannelInclude> = z.object({
  group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  messages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChannelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ChannelArgsSchema: z.ZodType<Prisma.ChannelDefaultArgs> = z.object({
  select: z.lazy(() => ChannelSelectSchema).optional(),
  include: z.lazy(() => ChannelIncludeSchema).optional(),
}).strict();

export const ChannelCountOutputTypeArgsSchema: z.ZodType<Prisma.ChannelCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ChannelCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ChannelCountOutputTypeSelectSchema: z.ZodType<Prisma.ChannelCountOutputTypeSelect> = z.object({
  messages: z.boolean().optional(),
}).strict();

export const ChannelSelectSchema: z.ZodType<Prisma.ChannelSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  url: z.boolean().optional(),
  groupId: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  messages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChannelCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MESSAGE
//------------------------------------------------------

export const MessageIncludeSchema: z.ZodType<Prisma.MessageInclude> = z.object({
  channel: z.union([z.boolean(),z.lazy(() => ChannelArgsSchema)]).optional(),
  threads: z.union([z.boolean(),z.lazy(() => ThreadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MessageArgsSchema: z.ZodType<Prisma.MessageDefaultArgs> = z.object({
  select: z.lazy(() => MessageSelectSchema).optional(),
  include: z.lazy(() => MessageIncludeSchema).optional(),
}).strict();

export const MessageCountOutputTypeArgsSchema: z.ZodType<Prisma.MessageCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MessageCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MessageCountOutputTypeSelectSchema: z.ZodType<Prisma.MessageCountOutputTypeSelect> = z.object({
  threads: z.boolean().optional(),
}).strict();

export const MessageSelectSchema: z.ZodType<Prisma.MessageSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  name: z.boolean().optional(),
  channelId: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  channel: z.union([z.boolean(),z.lazy(() => ChannelArgsSchema)]).optional(),
  threads: z.union([z.boolean(),z.lazy(() => ThreadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional(),
}).strict()

// THREAD
//------------------------------------------------------

export const ThreadIncludeSchema: z.ZodType<Prisma.ThreadInclude> = z.object({
  message: z.union([z.boolean(),z.lazy(() => MessageArgsSchema)]).optional(),
}).strict()

export const ThreadArgsSchema: z.ZodType<Prisma.ThreadDefaultArgs> = z.object({
  select: z.lazy(() => ThreadSelectSchema).optional(),
  include: z.lazy(() => ThreadIncludeSchema).optional(),
}).strict();

export const ThreadSelectSchema: z.ZodType<Prisma.ThreadSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  name: z.boolean().optional(),
  messageId: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  message: z.union([z.boolean(),z.lazy(() => MessageArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const GroupWhereInputSchema: z.ZodType<Prisma.GroupWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isOpen: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  channels: z.lazy(() => ChannelListRelationFilterSchema).optional()
}).strict();

export const GroupOrderByWithRelationInputSchema: z.ZodType<Prisma.GroupOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  isOpen: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  channels: z.lazy(() => ChannelOrderByRelationAggregateInputSchema).optional()
}).strict();

export const GroupWhereUniqueInputSchema: z.ZodType<Prisma.GroupWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isOpen: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  channels: z.lazy(() => ChannelListRelationFilterSchema).optional()
}).strict());

export const GroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.GroupOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  isOpen: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GroupCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GroupAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GroupMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GroupSumOrderByAggregateInputSchema).optional()
}).strict();

export const GroupScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GroupScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GroupScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isOpen: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ChannelWhereInputSchema: z.ZodType<Prisma.ChannelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  messages: z.lazy(() => MessageListRelationFilterSchema).optional()
}).strict();

export const ChannelOrderByWithRelationInputSchema: z.ZodType<Prisma.ChannelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  messages: z.lazy(() => MessageOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ChannelWhereUniqueInputSchema: z.ZodType<Prisma.ChannelWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  messages: z.lazy(() => MessageListRelationFilterSchema).optional()
}).strict());

export const ChannelOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChannelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChannelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ChannelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChannelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChannelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ChannelSumOrderByAggregateInputSchema).optional()
}).strict();

export const ChannelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChannelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema),z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema),z.lazy(() => ChannelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MessageWhereInputSchema: z.ZodType<Prisma.MessageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  channelId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  channel: z.union([ z.lazy(() => ChannelRelationFilterSchema),z.lazy(() => ChannelWhereInputSchema) ]).optional(),
  threads: z.lazy(() => ThreadListRelationFilterSchema).optional()
}).strict();

export const MessageOrderByWithRelationInputSchema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  channel: z.lazy(() => ChannelOrderByWithRelationInputSchema).optional(),
  threads: z.lazy(() => ThreadOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MessageWhereUniqueInputSchema: z.ZodType<Prisma.MessageWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  channelId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  channel: z.union([ z.lazy(() => ChannelRelationFilterSchema),z.lazy(() => ChannelWhereInputSchema) ]).optional(),
  threads: z.lazy(() => ThreadListRelationFilterSchema).optional()
}).strict());

export const MessageOrderByWithAggregationInputSchema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MessageCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MessageAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MessageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MessageMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MessageSumOrderByAggregateInputSchema).optional()
}).strict();

export const MessageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MessageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MessageScalarWhereWithAggregatesInputSchema),z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageScalarWhereWithAggregatesInputSchema),z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  channelId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ThreadWhereInputSchema: z.ZodType<Prisma.ThreadWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThreadWhereInputSchema),z.lazy(() => ThreadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThreadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThreadWhereInputSchema),z.lazy(() => ThreadWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  messageId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  message: z.union([ z.lazy(() => MessageRelationFilterSchema),z.lazy(() => MessageWhereInputSchema) ]).optional(),
}).strict();

export const ThreadOrderByWithRelationInputSchema: z.ZodType<Prisma.ThreadOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => MessageOrderByWithRelationInputSchema).optional()
}).strict();

export const ThreadWhereUniqueInputSchema: z.ZodType<Prisma.ThreadWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ThreadWhereInputSchema),z.lazy(() => ThreadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThreadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThreadWhereInputSchema),z.lazy(() => ThreadWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  messageId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  message: z.union([ z.lazy(() => MessageRelationFilterSchema),z.lazy(() => MessageWhereInputSchema) ]).optional(),
}).strict());

export const ThreadOrderByWithAggregationInputSchema: z.ZodType<Prisma.ThreadOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ThreadCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ThreadAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ThreadMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ThreadMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ThreadSumOrderByAggregateInputSchema).optional()
}).strict();

export const ThreadScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ThreadScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ThreadScalarWhereWithAggregatesInputSchema),z.lazy(() => ThreadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThreadScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThreadScalarWhereWithAggregatesInputSchema),z.lazy(() => ThreadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  messageId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GroupCreateInputSchema: z.ZodType<Prisma.GroupCreateInput> = z.object({
  name: z.string(),
  userId: z.string(),
  isOpen: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUncheckedCreateInputSchema: z.ZodType<Prisma.GroupUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  userId: z.string(),
  isOpen: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUpdateInputSchema: z.ZodType<Prisma.GroupUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isOpen: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isOpen: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupCreateManyInputSchema: z.ZodType<Prisma.GroupCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  userId: z.string(),
  isOpen: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const GroupUpdateManyMutationInputSchema: z.ZodType<Prisma.GroupUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isOpen: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isOpen: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChannelCreateInputSchema: z.ZodType<Prisma.ChannelCreateInput> = z.object({
  title: z.string(),
  url: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  group: z.lazy(() => GroupCreateNestedOneWithoutChannelsInputSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutChannelInputSchema).optional()
}).strict();

export const ChannelUncheckedCreateInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  url: z.string(),
  groupId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutChannelInputSchema).optional()
}).strict();

export const ChannelUpdateInputSchema: z.ZodType<Prisma.ChannelUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.lazy(() => GroupUpdateOneRequiredWithoutChannelsNestedInputSchema).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutChannelNestedInputSchema).optional()
}).strict();

export const ChannelUncheckedUpdateInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  messages: z.lazy(() => MessageUncheckedUpdateManyWithoutChannelNestedInputSchema).optional()
}).strict();

export const ChannelCreateManyInputSchema: z.ZodType<Prisma.ChannelCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  url: z.string(),
  groupId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ChannelUpdateManyMutationInputSchema: z.ZodType<Prisma.ChannelUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChannelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageCreateInputSchema: z.ZodType<Prisma.MessageCreateInput> = z.object({
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  channel: z.lazy(() => ChannelCreateNestedOneWithoutMessagesInputSchema),
  threads: z.lazy(() => ThreadCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export const MessageUncheckedCreateInputSchema: z.ZodType<Prisma.MessageUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  channelId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  threads: z.lazy(() => ThreadUncheckedCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export const MessageUpdateInputSchema: z.ZodType<Prisma.MessageUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  channel: z.lazy(() => ChannelUpdateOneRequiredWithoutMessagesNestedInputSchema).optional(),
  threads: z.lazy(() => ThreadUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channelId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  threads: z.lazy(() => ThreadUncheckedUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export const MessageCreateManyInputSchema: z.ZodType<Prisma.MessageCreateManyInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  channelId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MessageUpdateManyMutationInputSchema: z.ZodType<Prisma.MessageUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channelId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThreadCreateInputSchema: z.ZodType<Prisma.ThreadCreateInput> = z.object({
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  message: z.lazy(() => MessageCreateNestedOneWithoutThreadsInputSchema)
}).strict();

export const ThreadUncheckedCreateInputSchema: z.ZodType<Prisma.ThreadUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  messageId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ThreadUpdateInputSchema: z.ZodType<Prisma.ThreadUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.lazy(() => MessageUpdateOneRequiredWithoutThreadsNestedInputSchema).optional()
}).strict();

export const ThreadUncheckedUpdateInputSchema: z.ZodType<Prisma.ThreadUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  messageId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThreadCreateManyInputSchema: z.ZodType<Prisma.ThreadCreateManyInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  messageId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ThreadUpdateManyMutationInputSchema: z.ZodType<Prisma.ThreadUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThreadUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ThreadUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  messageId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const ChannelListRelationFilterSchema: z.ZodType<Prisma.ChannelListRelationFilter> = z.object({
  every: z.lazy(() => ChannelWhereInputSchema).optional(),
  some: z.lazy(() => ChannelWhereInputSchema).optional(),
  none: z.lazy(() => ChannelWhereInputSchema).optional()
}).strict();

export const ChannelOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChannelOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupCountOrderByAggregateInputSchema: z.ZodType<Prisma.GroupCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  isOpen: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GroupAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GroupMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  isOpen: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupMinOrderByAggregateInputSchema: z.ZodType<Prisma.GroupMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  isOpen: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupSumOrderByAggregateInputSchema: z.ZodType<Prisma.GroupSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const GroupRelationFilterSchema: z.ZodType<Prisma.GroupRelationFilter> = z.object({
  is: z.lazy(() => GroupWhereInputSchema).optional(),
  isNot: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const MessageListRelationFilterSchema: z.ZodType<Prisma.MessageListRelationFilter> = z.object({
  every: z.lazy(() => MessageWhereInputSchema).optional(),
  some: z.lazy(() => MessageWhereInputSchema).optional(),
  none: z.lazy(() => MessageWhereInputSchema).optional()
}).strict();

export const MessageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MessageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelSumOrderByAggregateInputSchema: z.ZodType<Prisma.ChannelSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelRelationFilterSchema: z.ZodType<Prisma.ChannelRelationFilter> = z.object({
  is: z.lazy(() => ChannelWhereInputSchema).optional(),
  isNot: z.lazy(() => ChannelWhereInputSchema).optional()
}).strict();

export const ThreadListRelationFilterSchema: z.ZodType<Prisma.ThreadListRelationFilter> = z.object({
  every: z.lazy(() => ThreadWhereInputSchema).optional(),
  some: z.lazy(() => ThreadWhereInputSchema).optional(),
  none: z.lazy(() => ThreadWhereInputSchema).optional()
}).strict();

export const ThreadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ThreadOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageCountOrderByAggregateInputSchema: z.ZodType<Prisma.MessageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MessageAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMinOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageSumOrderByAggregateInputSchema: z.ZodType<Prisma.MessageSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageRelationFilterSchema: z.ZodType<Prisma.MessageRelationFilter> = z.object({
  is: z.lazy(() => MessageWhereInputSchema).optional(),
  isNot: z.lazy(() => MessageWhereInputSchema).optional()
}).strict();

export const ThreadCountOrderByAggregateInputSchema: z.ZodType<Prisma.ThreadCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThreadAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ThreadAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThreadMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ThreadMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThreadMinOrderByAggregateInputSchema: z.ZodType<Prisma.ThreadMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ThreadSumOrderByAggregateInputSchema: z.ZodType<Prisma.ThreadSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChannelCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.ChannelCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutGroupInputSchema),z.lazy(() => ChannelCreateWithoutGroupInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChannelUncheckedCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutGroupInputSchema),z.lazy(() => ChannelCreateWithoutGroupInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const ChannelUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.ChannelUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutGroupInputSchema),z.lazy(() => ChannelCreateWithoutGroupInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChannelUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => ChannelUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChannelUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => ChannelUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChannelUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => ChannelUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ChannelUncheckedUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutGroupInputSchema),z.lazy(() => ChannelCreateWithoutGroupInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChannelUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => ChannelUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChannelUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => ChannelUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChannelUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => ChannelUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GroupCreateNestedOneWithoutChannelsInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutChannelsInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutChannelsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutChannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutChannelsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export const MessageCreateNestedManyWithoutChannelInputSchema: z.ZodType<Prisma.MessageCreateNestedManyWithoutChannelInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutChannelInputSchema),z.lazy(() => MessageCreateWithoutChannelInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema),z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyChannelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MessageUncheckedCreateNestedManyWithoutChannelInputSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutChannelInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutChannelInputSchema),z.lazy(() => MessageCreateWithoutChannelInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema),z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyChannelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GroupUpdateOneRequiredWithoutChannelsNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutChannelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutChannelsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutChannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutChannelsInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutChannelsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutChannelsInputSchema),z.lazy(() => GroupUpdateWithoutChannelsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutChannelsInputSchema) ]).optional(),
}).strict();

export const MessageUpdateManyWithoutChannelNestedInputSchema: z.ZodType<Prisma.MessageUpdateManyWithoutChannelNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutChannelInputSchema),z.lazy(() => MessageCreateWithoutChannelInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema),z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessageUpsertWithWhereUniqueWithoutChannelInputSchema),z.lazy(() => MessageUpsertWithWhereUniqueWithoutChannelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyChannelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithWhereUniqueWithoutChannelInputSchema),z.lazy(() => MessageUpdateWithWhereUniqueWithoutChannelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessageUpdateManyWithWhereWithoutChannelInputSchema),z.lazy(() => MessageUpdateManyWithWhereWithoutChannelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutChannelNestedInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutChannelNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutChannelInputSchema),z.lazy(() => MessageCreateWithoutChannelInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema),z.lazy(() => MessageCreateOrConnectWithoutChannelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessageUpsertWithWhereUniqueWithoutChannelInputSchema),z.lazy(() => MessageUpsertWithWhereUniqueWithoutChannelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyChannelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithWhereUniqueWithoutChannelInputSchema),z.lazy(() => MessageUpdateWithWhereUniqueWithoutChannelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessageUpdateManyWithWhereWithoutChannelInputSchema),z.lazy(() => MessageUpdateManyWithWhereWithoutChannelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChannelCreateNestedOneWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelCreateNestedOneWithoutMessagesInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutMessagesInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChannelCreateOrConnectWithoutMessagesInputSchema).optional(),
  connect: z.lazy(() => ChannelWhereUniqueInputSchema).optional()
}).strict();

export const ThreadCreateNestedManyWithoutMessageInputSchema: z.ZodType<Prisma.ThreadCreateNestedManyWithoutMessageInput> = z.object({
  create: z.union([ z.lazy(() => ThreadCreateWithoutMessageInputSchema),z.lazy(() => ThreadCreateWithoutMessageInputSchema).array(),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema),z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThreadCreateManyMessageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ThreadUncheckedCreateNestedManyWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUncheckedCreateNestedManyWithoutMessageInput> = z.object({
  create: z.union([ z.lazy(() => ThreadCreateWithoutMessageInputSchema),z.lazy(() => ThreadCreateWithoutMessageInputSchema).array(),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema),z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThreadCreateManyMessageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChannelUpdateOneRequiredWithoutMessagesNestedInputSchema: z.ZodType<Prisma.ChannelUpdateOneRequiredWithoutMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutMessagesInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChannelCreateOrConnectWithoutMessagesInputSchema).optional(),
  upsert: z.lazy(() => ChannelUpsertWithoutMessagesInputSchema).optional(),
  connect: z.lazy(() => ChannelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChannelUpdateToOneWithWhereWithoutMessagesInputSchema),z.lazy(() => ChannelUpdateWithoutMessagesInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutMessagesInputSchema) ]).optional(),
}).strict();

export const ThreadUpdateManyWithoutMessageNestedInputSchema: z.ZodType<Prisma.ThreadUpdateManyWithoutMessageNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThreadCreateWithoutMessageInputSchema),z.lazy(() => ThreadCreateWithoutMessageInputSchema).array(),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema),z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ThreadUpsertWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => ThreadUpsertWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThreadCreateManyMessageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ThreadUpdateWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => ThreadUpdateWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ThreadUpdateManyWithWhereWithoutMessageInputSchema),z.lazy(() => ThreadUpdateManyWithWhereWithoutMessageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ThreadScalarWhereInputSchema),z.lazy(() => ThreadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ThreadUncheckedUpdateManyWithoutMessageNestedInputSchema: z.ZodType<Prisma.ThreadUncheckedUpdateManyWithoutMessageNestedInput> = z.object({
  create: z.union([ z.lazy(() => ThreadCreateWithoutMessageInputSchema),z.lazy(() => ThreadCreateWithoutMessageInputSchema).array(),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema),z.lazy(() => ThreadCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ThreadUpsertWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => ThreadUpsertWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThreadCreateManyMessageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ThreadWhereUniqueInputSchema),z.lazy(() => ThreadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ThreadUpdateWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => ThreadUpdateWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ThreadUpdateManyWithWhereWithoutMessageInputSchema),z.lazy(() => ThreadUpdateManyWithWhereWithoutMessageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ThreadScalarWhereInputSchema),z.lazy(() => ThreadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MessageCreateNestedOneWithoutThreadsInputSchema: z.ZodType<Prisma.MessageCreateNestedOneWithoutThreadsInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutThreadsInputSchema),z.lazy(() => MessageUncheckedCreateWithoutThreadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutThreadsInputSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional()
}).strict();

export const MessageUpdateOneRequiredWithoutThreadsNestedInputSchema: z.ZodType<Prisma.MessageUpdateOneRequiredWithoutThreadsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutThreadsInputSchema),z.lazy(() => MessageUncheckedCreateWithoutThreadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutThreadsInputSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutThreadsInputSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MessageUpdateToOneWithWhereWithoutThreadsInputSchema),z.lazy(() => MessageUpdateWithoutThreadsInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutThreadsInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ChannelCreateWithoutGroupInputSchema: z.ZodType<Prisma.ChannelCreateWithoutGroupInput> = z.object({
  title: z.string(),
  url: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutChannelInputSchema).optional()
}).strict();

export const ChannelUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateWithoutGroupInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  url: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutChannelInputSchema).optional()
}).strict();

export const ChannelCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChannelCreateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const ChannelCreateManyGroupInputEnvelopeSchema: z.ZodType<Prisma.ChannelCreateManyGroupInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChannelCreateManyGroupInputSchema),z.lazy(() => ChannelCreateManyGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ChannelUpsertWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChannelUpdateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => ChannelCreateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const ChannelUpdateWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChannelUpdateWithoutGroupInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export const ChannelUpdateManyWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => ChannelScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChannelUpdateManyMutationInputSchema),z.lazy(() => ChannelUncheckedUpdateManyWithoutGroupInputSchema) ]),
}).strict();

export const ChannelScalarWhereInputSchema: z.ZodType<Prisma.ChannelScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GroupCreateWithoutChannelsInputSchema: z.ZodType<Prisma.GroupCreateWithoutChannelsInput> = z.object({
  name: z.string(),
  userId: z.string(),
  isOpen: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const GroupUncheckedCreateWithoutChannelsInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutChannelsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  userId: z.string(),
  isOpen: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const GroupCreateOrConnectWithoutChannelsInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutChannelsInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutChannelsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutChannelsInputSchema) ]),
}).strict();

export const MessageCreateWithoutChannelInputSchema: z.ZodType<Prisma.MessageCreateWithoutChannelInput> = z.object({
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  threads: z.lazy(() => ThreadCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export const MessageUncheckedCreateWithoutChannelInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutChannelInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  threads: z.lazy(() => ThreadUncheckedCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export const MessageCreateOrConnectWithoutChannelInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutChannelInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessageCreateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema) ]),
}).strict();

export const MessageCreateManyChannelInputEnvelopeSchema: z.ZodType<Prisma.MessageCreateManyChannelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MessageCreateManyChannelInputSchema),z.lazy(() => MessageCreateManyChannelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const GroupUpsertWithoutChannelsInputSchema: z.ZodType<Prisma.GroupUpsertWithoutChannelsInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutChannelsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutChannelsInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutChannelsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutChannelsInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const GroupUpdateToOneWithWhereWithoutChannelsInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutChannelsInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutChannelsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutChannelsInputSchema) ]),
}).strict();

export const GroupUpdateWithoutChannelsInputSchema: z.ZodType<Prisma.GroupUpdateWithoutChannelsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isOpen: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupUncheckedUpdateWithoutChannelsInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutChannelsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isOpen: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUpsertWithWhereUniqueWithoutChannelInputSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutChannelInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MessageUpdateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutChannelInputSchema) ]),
  create: z.union([ z.lazy(() => MessageCreateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedCreateWithoutChannelInputSchema) ]),
}).strict();

export const MessageUpdateWithWhereUniqueWithoutChannelInputSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutChannelInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateWithoutChannelInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutChannelInputSchema) ]),
}).strict();

export const MessageUpdateManyWithWhereWithoutChannelInputSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutChannelInput> = z.object({
  where: z.lazy(() => MessageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateManyMutationInputSchema),z.lazy(() => MessageUncheckedUpdateManyWithoutChannelInputSchema) ]),
}).strict();

export const MessageScalarWhereInputSchema: z.ZodType<Prisma.MessageScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  channelId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ChannelCreateWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelCreateWithoutMessagesInput> = z.object({
  title: z.string(),
  url: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  group: z.lazy(() => GroupCreateNestedOneWithoutChannelsInputSchema)
}).strict();

export const ChannelUncheckedCreateWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateWithoutMessagesInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  url: z.string(),
  groupId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ChannelCreateOrConnectWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutMessagesInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChannelCreateWithoutMessagesInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputSchema) ]),
}).strict();

export const ThreadCreateWithoutMessageInputSchema: z.ZodType<Prisma.ThreadCreateWithoutMessageInput> = z.object({
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ThreadUncheckedCreateWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUncheckedCreateWithoutMessageInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ThreadCreateOrConnectWithoutMessageInputSchema: z.ZodType<Prisma.ThreadCreateOrConnectWithoutMessageInput> = z.object({
  where: z.lazy(() => ThreadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ThreadCreateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema) ]),
}).strict();

export const ThreadCreateManyMessageInputEnvelopeSchema: z.ZodType<Prisma.ThreadCreateManyMessageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ThreadCreateManyMessageInputSchema),z.lazy(() => ThreadCreateManyMessageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ChannelUpsertWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelUpsertWithoutMessagesInput> = z.object({
  update: z.union([ z.lazy(() => ChannelUpdateWithoutMessagesInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutMessagesInputSchema) ]),
  create: z.union([ z.lazy(() => ChannelCreateWithoutMessagesInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutMessagesInputSchema) ]),
  where: z.lazy(() => ChannelWhereInputSchema).optional()
}).strict();

export const ChannelUpdateToOneWithWhereWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelUpdateToOneWithWhereWithoutMessagesInput> = z.object({
  where: z.lazy(() => ChannelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChannelUpdateWithoutMessagesInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutMessagesInputSchema) ]),
}).strict();

export const ChannelUpdateWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelUpdateWithoutMessagesInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.lazy(() => GroupUpdateOneRequiredWithoutChannelsNestedInputSchema).optional()
}).strict();

export const ChannelUncheckedUpdateWithoutMessagesInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateWithoutMessagesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThreadUpsertWithWhereUniqueWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUpsertWithWhereUniqueWithoutMessageInput> = z.object({
  where: z.lazy(() => ThreadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ThreadUpdateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedUpdateWithoutMessageInputSchema) ]),
  create: z.union([ z.lazy(() => ThreadCreateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedCreateWithoutMessageInputSchema) ]),
}).strict();

export const ThreadUpdateWithWhereUniqueWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUpdateWithWhereUniqueWithoutMessageInput> = z.object({
  where: z.lazy(() => ThreadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ThreadUpdateWithoutMessageInputSchema),z.lazy(() => ThreadUncheckedUpdateWithoutMessageInputSchema) ]),
}).strict();

export const ThreadUpdateManyWithWhereWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUpdateManyWithWhereWithoutMessageInput> = z.object({
  where: z.lazy(() => ThreadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ThreadUpdateManyMutationInputSchema),z.lazy(() => ThreadUncheckedUpdateManyWithoutMessageInputSchema) ]),
}).strict();

export const ThreadScalarWhereInputSchema: z.ZodType<Prisma.ThreadScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThreadScalarWhereInputSchema),z.lazy(() => ThreadScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThreadScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThreadScalarWhereInputSchema),z.lazy(() => ThreadScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  messageId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MessageCreateWithoutThreadsInputSchema: z.ZodType<Prisma.MessageCreateWithoutThreadsInput> = z.object({
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  channel: z.lazy(() => ChannelCreateNestedOneWithoutMessagesInputSchema)
}).strict();

export const MessageUncheckedCreateWithoutThreadsInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutThreadsInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  channelId: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MessageCreateOrConnectWithoutThreadsInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutThreadsInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessageCreateWithoutThreadsInputSchema),z.lazy(() => MessageUncheckedCreateWithoutThreadsInputSchema) ]),
}).strict();

export const MessageUpsertWithoutThreadsInputSchema: z.ZodType<Prisma.MessageUpsertWithoutThreadsInput> = z.object({
  update: z.union([ z.lazy(() => MessageUpdateWithoutThreadsInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutThreadsInputSchema) ]),
  create: z.union([ z.lazy(() => MessageCreateWithoutThreadsInputSchema),z.lazy(() => MessageUncheckedCreateWithoutThreadsInputSchema) ]),
  where: z.lazy(() => MessageWhereInputSchema).optional()
}).strict();

export const MessageUpdateToOneWithWhereWithoutThreadsInputSchema: z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutThreadsInput> = z.object({
  where: z.lazy(() => MessageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MessageUpdateWithoutThreadsInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutThreadsInputSchema) ]),
}).strict();

export const MessageUpdateWithoutThreadsInputSchema: z.ZodType<Prisma.MessageUpdateWithoutThreadsInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  channel: z.lazy(() => ChannelUpdateOneRequiredWithoutMessagesNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateWithoutThreadsInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutThreadsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channelId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChannelCreateManyGroupInputSchema: z.ZodType<Prisma.ChannelCreateManyGroupInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  url: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ChannelUpdateWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUpdateWithoutGroupInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutChannelNestedInputSchema).optional()
}).strict();

export const ChannelUncheckedUpdateWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  messages: z.lazy(() => MessageUncheckedUpdateManyWithoutChannelNestedInputSchema).optional()
}).strict();

export const ChannelUncheckedUpdateManyWithoutGroupInputSchema: z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutGroupInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageCreateManyChannelInputSchema: z.ZodType<Prisma.MessageCreateManyChannelInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const MessageUpdateWithoutChannelInputSchema: z.ZodType<Prisma.MessageUpdateWithoutChannelInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  threads: z.lazy(() => ThreadUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateWithoutChannelInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutChannelInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  threads: z.lazy(() => ThreadUncheckedUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateManyWithoutChannelInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutChannelInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThreadCreateManyMessageInputSchema: z.ZodType<Prisma.ThreadCreateManyMessageInput> = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const ThreadUpdateWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUpdateWithoutMessageInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThreadUncheckedUpdateWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUncheckedUpdateWithoutMessageInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ThreadUncheckedUpdateManyWithoutMessageInputSchema: z.ZodType<Prisma.ThreadUncheckedUpdateManyWithoutMessageInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const GroupFindFirstArgsSchema: z.ZodType<Prisma.GroupFindFirstArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupScalarFieldEnumSchema,GroupScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GroupFindFirstOrThrowArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupScalarFieldEnumSchema,GroupScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupFindManyArgsSchema: z.ZodType<Prisma.GroupFindManyArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupScalarFieldEnumSchema,GroupScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupAggregateArgsSchema: z.ZodType<Prisma.GroupAggregateArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GroupGroupByArgsSchema: z.ZodType<Prisma.GroupGroupByArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithAggregationInputSchema.array(),GroupOrderByWithAggregationInputSchema ]).optional(),
  by: GroupScalarFieldEnumSchema.array(),
  having: GroupScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GroupFindUniqueArgsSchema: z.ZodType<Prisma.GroupFindUniqueArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const GroupFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GroupFindUniqueOrThrowArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const ChannelFindFirstArgsSchema: z.ZodType<Prisma.ChannelFindFirstArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChannelScalarFieldEnumSchema,ChannelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChannelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChannelFindFirstOrThrowArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChannelScalarFieldEnumSchema,ChannelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChannelFindManyArgsSchema: z.ZodType<Prisma.ChannelFindManyArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChannelScalarFieldEnumSchema,ChannelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChannelAggregateArgsSchema: z.ZodType<Prisma.ChannelAggregateArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChannelGroupByArgsSchema: z.ZodType<Prisma.ChannelGroupByArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithAggregationInputSchema.array(),ChannelOrderByWithAggregationInputSchema ]).optional(),
  by: ChannelScalarFieldEnumSchema.array(),
  having: ChannelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChannelFindUniqueArgsSchema: z.ZodType<Prisma.ChannelFindUniqueArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
}).strict() ;

export const ChannelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChannelFindUniqueOrThrowArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
}).strict() ;

export const MessageFindFirstArgsSchema: z.ZodType<Prisma.MessageFindFirstArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessageScalarFieldEnumSchema,MessageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MessageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MessageFindFirstOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessageScalarFieldEnumSchema,MessageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MessageFindManyArgsSchema: z.ZodType<Prisma.MessageFindManyArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessageScalarFieldEnumSchema,MessageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MessageAggregateArgsSchema: z.ZodType<Prisma.MessageAggregateArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MessageGroupByArgsSchema: z.ZodType<Prisma.MessageGroupByArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithAggregationInputSchema.array(),MessageOrderByWithAggregationInputSchema ]).optional(),
  by: MessageScalarFieldEnumSchema.array(),
  having: MessageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MessageFindUniqueArgsSchema: z.ZodType<Prisma.MessageFindUniqueArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict() ;

export const MessageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MessageFindUniqueOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict() ;

export const ThreadFindFirstArgsSchema: z.ZodType<Prisma.ThreadFindFirstArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  where: ThreadWhereInputSchema.optional(),
  orderBy: z.union([ ThreadOrderByWithRelationInputSchema.array(),ThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThreadScalarFieldEnumSchema,ThreadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThreadFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ThreadFindFirstOrThrowArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  where: ThreadWhereInputSchema.optional(),
  orderBy: z.union([ ThreadOrderByWithRelationInputSchema.array(),ThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThreadScalarFieldEnumSchema,ThreadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThreadFindManyArgsSchema: z.ZodType<Prisma.ThreadFindManyArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  where: ThreadWhereInputSchema.optional(),
  orderBy: z.union([ ThreadOrderByWithRelationInputSchema.array(),ThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThreadScalarFieldEnumSchema,ThreadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ThreadAggregateArgsSchema: z.ZodType<Prisma.ThreadAggregateArgs> = z.object({
  where: ThreadWhereInputSchema.optional(),
  orderBy: z.union([ ThreadOrderByWithRelationInputSchema.array(),ThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ThreadGroupByArgsSchema: z.ZodType<Prisma.ThreadGroupByArgs> = z.object({
  where: ThreadWhereInputSchema.optional(),
  orderBy: z.union([ ThreadOrderByWithAggregationInputSchema.array(),ThreadOrderByWithAggregationInputSchema ]).optional(),
  by: ThreadScalarFieldEnumSchema.array(),
  having: ThreadScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ThreadFindUniqueArgsSchema: z.ZodType<Prisma.ThreadFindUniqueArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  where: ThreadWhereUniqueInputSchema,
}).strict() ;

export const ThreadFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ThreadFindUniqueOrThrowArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  where: ThreadWhereUniqueInputSchema,
}).strict() ;

export const GroupCreateArgsSchema: z.ZodType<Prisma.GroupCreateArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  data: z.union([ GroupCreateInputSchema,GroupUncheckedCreateInputSchema ]),
}).strict() ;

export const GroupUpsertArgsSchema: z.ZodType<Prisma.GroupUpsertArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
  create: z.union([ GroupCreateInputSchema,GroupUncheckedCreateInputSchema ]),
  update: z.union([ GroupUpdateInputSchema,GroupUncheckedUpdateInputSchema ]),
}).strict() ;

export const GroupCreateManyArgsSchema: z.ZodType<Prisma.GroupCreateManyArgs> = z.object({
  data: z.union([ GroupCreateManyInputSchema,GroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GroupCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GroupCreateManyAndReturnArgs> = z.object({
  data: z.union([ GroupCreateManyInputSchema,GroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GroupDeleteArgsSchema: z.ZodType<Prisma.GroupDeleteArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const GroupUpdateArgsSchema: z.ZodType<Prisma.GroupUpdateArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  data: z.union([ GroupUpdateInputSchema,GroupUncheckedUpdateInputSchema ]),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const GroupUpdateManyArgsSchema: z.ZodType<Prisma.GroupUpdateManyArgs> = z.object({
  data: z.union([ GroupUpdateManyMutationInputSchema,GroupUncheckedUpdateManyInputSchema ]),
  where: GroupWhereInputSchema.optional(),
}).strict() ;

export const GroupDeleteManyArgsSchema: z.ZodType<Prisma.GroupDeleteManyArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
}).strict() ;

export const ChannelCreateArgsSchema: z.ZodType<Prisma.ChannelCreateArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  data: z.union([ ChannelCreateInputSchema,ChannelUncheckedCreateInputSchema ]),
}).strict() ;

export const ChannelUpsertArgsSchema: z.ZodType<Prisma.ChannelUpsertArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
  create: z.union([ ChannelCreateInputSchema,ChannelUncheckedCreateInputSchema ]),
  update: z.union([ ChannelUpdateInputSchema,ChannelUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChannelCreateManyArgsSchema: z.ZodType<Prisma.ChannelCreateManyArgs> = z.object({
  data: z.union([ ChannelCreateManyInputSchema,ChannelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ChannelCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ChannelCreateManyAndReturnArgs> = z.object({
  data: z.union([ ChannelCreateManyInputSchema,ChannelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ChannelDeleteArgsSchema: z.ZodType<Prisma.ChannelDeleteArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
}).strict() ;

export const ChannelUpdateArgsSchema: z.ZodType<Prisma.ChannelUpdateArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  data: z.union([ ChannelUpdateInputSchema,ChannelUncheckedUpdateInputSchema ]),
  where: ChannelWhereUniqueInputSchema,
}).strict() ;

export const ChannelUpdateManyArgsSchema: z.ZodType<Prisma.ChannelUpdateManyArgs> = z.object({
  data: z.union([ ChannelUpdateManyMutationInputSchema,ChannelUncheckedUpdateManyInputSchema ]),
  where: ChannelWhereInputSchema.optional(),
}).strict() ;

export const ChannelDeleteManyArgsSchema: z.ZodType<Prisma.ChannelDeleteManyArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
}).strict() ;

export const MessageCreateArgsSchema: z.ZodType<Prisma.MessageCreateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([ MessageCreateInputSchema,MessageUncheckedCreateInputSchema ]),
}).strict() ;

export const MessageUpsertArgsSchema: z.ZodType<Prisma.MessageUpsertArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
  create: z.union([ MessageCreateInputSchema,MessageUncheckedCreateInputSchema ]),
  update: z.union([ MessageUpdateInputSchema,MessageUncheckedUpdateInputSchema ]),
}).strict() ;

export const MessageCreateManyArgsSchema: z.ZodType<Prisma.MessageCreateManyArgs> = z.object({
  data: z.union([ MessageCreateManyInputSchema,MessageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const MessageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MessageCreateManyAndReturnArgs> = z.object({
  data: z.union([ MessageCreateManyInputSchema,MessageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const MessageDeleteArgsSchema: z.ZodType<Prisma.MessageDeleteArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict() ;

export const MessageUpdateArgsSchema: z.ZodType<Prisma.MessageUpdateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([ MessageUpdateInputSchema,MessageUncheckedUpdateInputSchema ]),
  where: MessageWhereUniqueInputSchema,
}).strict() ;

export const MessageUpdateManyArgsSchema: z.ZodType<Prisma.MessageUpdateManyArgs> = z.object({
  data: z.union([ MessageUpdateManyMutationInputSchema,MessageUncheckedUpdateManyInputSchema ]),
  where: MessageWhereInputSchema.optional(),
}).strict() ;

export const MessageDeleteManyArgsSchema: z.ZodType<Prisma.MessageDeleteManyArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
}).strict() ;

export const ThreadCreateArgsSchema: z.ZodType<Prisma.ThreadCreateArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  data: z.union([ ThreadCreateInputSchema,ThreadUncheckedCreateInputSchema ]),
}).strict() ;

export const ThreadUpsertArgsSchema: z.ZodType<Prisma.ThreadUpsertArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  where: ThreadWhereUniqueInputSchema,
  create: z.union([ ThreadCreateInputSchema,ThreadUncheckedCreateInputSchema ]),
  update: z.union([ ThreadUpdateInputSchema,ThreadUncheckedUpdateInputSchema ]),
}).strict() ;

export const ThreadCreateManyArgsSchema: z.ZodType<Prisma.ThreadCreateManyArgs> = z.object({
  data: z.union([ ThreadCreateManyInputSchema,ThreadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ThreadCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ThreadCreateManyAndReturnArgs> = z.object({
  data: z.union([ ThreadCreateManyInputSchema,ThreadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ThreadDeleteArgsSchema: z.ZodType<Prisma.ThreadDeleteArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  where: ThreadWhereUniqueInputSchema,
}).strict() ;

export const ThreadUpdateArgsSchema: z.ZodType<Prisma.ThreadUpdateArgs> = z.object({
  select: ThreadSelectSchema.optional(),
  include: ThreadIncludeSchema.optional(),
  data: z.union([ ThreadUpdateInputSchema,ThreadUncheckedUpdateInputSchema ]),
  where: ThreadWhereUniqueInputSchema,
}).strict() ;

export const ThreadUpdateManyArgsSchema: z.ZodType<Prisma.ThreadUpdateManyArgs> = z.object({
  data: z.union([ ThreadUpdateManyMutationInputSchema,ThreadUncheckedUpdateManyInputSchema ]),
  where: ThreadWhereInputSchema.optional(),
}).strict() ;

export const ThreadDeleteManyArgsSchema: z.ZodType<Prisma.ThreadDeleteManyArgs> = z.object({
  where: ThreadWhereInputSchema.optional(),
}).strict() ;