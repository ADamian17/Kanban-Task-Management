import { GraphQLResolveInfo } from 'graphql';
import { InternalContext } from '.';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Board = {
  __typename?: 'Board';
  columns: Array<Maybe<Column>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Column = {
  __typename?: 'Column';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tasks: Array<Maybe<Task>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  completeSubtask: Subtask;
  createBoard: Board;
  createColumn: Column;
  createSubtask: Subtask;
  deleteBoard: Board;
  deleteColumn: Column;
  updateBoard: Board;
  updateColumn: Column;
};


export type MutationCompleteSubtaskArgs = {
  id: Scalars['Int']['input'];
};


export type MutationCreateBoardArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateColumnArgs = {
  boardId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateSubtaskArgs = {
  taskId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteBoardArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteColumnArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateBoardArgs = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateColumnArgs = {
  boardId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  board: Board;
  boards: Array<Maybe<Board>>;
  subtask: Subtask;
  subtasks: Array<Maybe<Subtask>>;
};


export type QueryBoardArgs = {
  name: Scalars['String']['input'];
};


export type QuerySubtaskArgs = {
  id: Scalars['Int']['input'];
};

export type Subtask = {
  __typename?: 'Subtask';
  id?: Maybe<Scalars['Int']['output']>;
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Task = {
  __typename?: 'Task';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtasks: Array<Maybe<Subtask>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Board: ResolverTypeWrapper<Board>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Column: ResolverTypeWrapper<Column>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subtask: ResolverTypeWrapper<Subtask>;
  Task: ResolverTypeWrapper<Task>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Board: Board;
  Boolean: Scalars['Boolean']['output'];
  Column: Column;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Subtask: Subtask;
  Task: Task;
}>;

export type BoardResolvers<ContextType = InternalContext, ParentType extends ResolversParentTypes['Board'] = ResolversParentTypes['Board']> = ResolversObject<{
  columns?: Resolver<Array<Maybe<ResolversTypes['Column']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ColumnResolvers<ContextType = InternalContext, ParentType extends ResolversParentTypes['Column'] = ResolversParentTypes['Column']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = InternalContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  completeSubtask?: Resolver<ResolversTypes['Subtask'], ParentType, ContextType, RequireFields<MutationCompleteSubtaskArgs, 'id'>>;
  createBoard?: Resolver<ResolversTypes['Board'], ParentType, ContextType, RequireFields<MutationCreateBoardArgs, 'name'>>;
  createColumn?: Resolver<ResolversTypes['Column'], ParentType, ContextType, RequireFields<MutationCreateColumnArgs, 'boardId' | 'name'>>;
  createSubtask?: Resolver<ResolversTypes['Subtask'], ParentType, ContextType, RequireFields<MutationCreateSubtaskArgs, 'taskId' | 'title'>>;
  deleteBoard?: Resolver<ResolversTypes['Board'], ParentType, ContextType, RequireFields<MutationDeleteBoardArgs, 'id'>>;
  deleteColumn?: Resolver<ResolversTypes['Column'], ParentType, ContextType, RequireFields<MutationDeleteColumnArgs, 'id'>>;
  updateBoard?: Resolver<ResolversTypes['Board'], ParentType, ContextType, RequireFields<MutationUpdateBoardArgs, 'id' | 'name'>>;
  updateColumn?: Resolver<ResolversTypes['Column'], ParentType, ContextType, RequireFields<MutationUpdateColumnArgs, 'id' | 'name'>>;
}>;

export type QueryResolvers<ContextType = InternalContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  board?: Resolver<ResolversTypes['Board'], ParentType, ContextType, RequireFields<QueryBoardArgs, 'name'>>;
  boards?: Resolver<Array<Maybe<ResolversTypes['Board']>>, ParentType, ContextType>;
  subtask?: Resolver<ResolversTypes['Subtask'], ParentType, ContextType, RequireFields<QuerySubtaskArgs, 'id'>>;
  subtasks?: Resolver<Array<Maybe<ResolversTypes['Subtask']>>, ParentType, ContextType>;
}>;

export type SubtaskResolvers<ContextType = InternalContext, ParentType extends ResolversParentTypes['Subtask'] = ResolversParentTypes['Subtask']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isCompleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskResolvers<ContextType = InternalContext, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtasks?: Resolver<Array<Maybe<ResolversTypes['Subtask']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = InternalContext> = ResolversObject<{
  Board?: BoardResolvers<ContextType>;
  Column?: ColumnResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subtask?: SubtaskResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
}>;

