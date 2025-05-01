
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model courses
 * 
 */
export type courses = $Result.DefaultSelection<Prisma.$coursesPayload>
/**
 * Model enrollments
 * 
 */
export type enrollments = $Result.DefaultSelection<Prisma.$enrollmentsPayload>
/**
 * Model modules
 * 
 */
export type modules = $Result.DefaultSelection<Prisma.$modulesPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model videos
 * 
 */
export type videos = $Result.DefaultSelection<Prisma.$videosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const payment_status: {
  success: 'success',
  failed: 'failed',
  pending: 'pending'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]


export const user_role: {
  admin: 'admin',
  learner: 'learner'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.courses.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Courses
   * const courses = await prisma.courses.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.courses`: Exposes CRUD operations for the **courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.coursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollments`: Exposes CRUD operations for the **enrollments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollments.findMany()
    * ```
    */
  get enrollments(): Prisma.enrollmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modules`: Exposes CRUD operations for the **modules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.modules.findMany()
    * ```
    */
  get modules(): Prisma.modulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videos`: Exposes CRUD operations for the **videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.videos.findMany()
    * ```
    */
  get videos(): Prisma.videosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    courses: 'courses',
    enrollments: 'enrollments',
    modules: 'modules',
    payments: 'payments',
    users: 'users',
    videos: 'videos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "courses" | "enrollments" | "modules" | "payments" | "users" | "videos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      courses: {
        payload: Prisma.$coursesPayload<ExtArgs>
        fields: Prisma.coursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findFirst: {
            args: Prisma.coursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findMany: {
            args: Prisma.coursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          create: {
            args: Prisma.coursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          createMany: {
            args: Prisma.coursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.coursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          delete: {
            args: Prisma.coursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          update: {
            args: Prisma.coursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          deleteMany: {
            args: Prisma.coursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.coursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          upsert: {
            args: Prisma.coursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.coursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.coursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      enrollments: {
        payload: Prisma.$enrollmentsPayload<ExtArgs>
        fields: Prisma.enrollmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          findFirst: {
            args: Prisma.enrollmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          findMany: {
            args: Prisma.enrollmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          create: {
            args: Prisma.enrollmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          createMany: {
            args: Prisma.enrollmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enrollmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          delete: {
            args: Prisma.enrollmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          update: {
            args: Prisma.enrollmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          deleteMany: {
            args: Prisma.enrollmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrollmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enrollmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>[]
          }
          upsert: {
            args: Prisma.enrollmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentsPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollments>
          }
          groupBy: {
            args: Prisma.enrollmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollmentsCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsCountAggregateOutputType> | number
          }
        }
      }
      modules: {
        payload: Prisma.$modulesPayload<ExtArgs>
        fields: Prisma.modulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          findFirst: {
            args: Prisma.modulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          findMany: {
            args: Prisma.modulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>[]
          }
          create: {
            args: Prisma.modulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          createMany: {
            args: Prisma.modulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.modulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>[]
          }
          delete: {
            args: Prisma.modulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          update: {
            args: Prisma.modulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          deleteMany: {
            args: Prisma.modulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.modulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>[]
          }
          upsert: {
            args: Prisma.modulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          aggregate: {
            args: Prisma.ModulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModules>
          }
          groupBy: {
            args: Prisma.modulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.modulesCountArgs<ExtArgs>
            result: $Utils.Optional<ModulesCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      videos: {
        payload: Prisma.$videosPayload<ExtArgs>
        fields: Prisma.videosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findFirst: {
            args: Prisma.videosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findMany: {
            args: Prisma.videosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          create: {
            args: Prisma.videosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          createMany: {
            args: Prisma.videosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          delete: {
            args: Prisma.videosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          update: {
            args: Prisma.videosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          deleteMany: {
            args: Prisma.videosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          upsert: {
            args: Prisma.videosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          aggregate: {
            args: Prisma.VideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos>
          }
          groupBy: {
            args: Prisma.videosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.videosCountArgs<ExtArgs>
            result: $Utils.Optional<VideosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    courses?: coursesOmit
    enrollments?: enrollmentsOmit
    modules?: modulesOmit
    payments?: paymentsOmit
    users?: usersOmit
    videos?: videosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CoursesCountOutputType
   */

  export type CoursesCountOutputType = {
    enrollments: number
    modules: number
    payments: number
  }

  export type CoursesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | CoursesCountOutputTypeCountEnrollmentsArgs
    modules?: boolean | CoursesCountOutputTypeCountModulesArgs
    payments?: boolean | CoursesCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursesCountOutputType
     */
    select?: CoursesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulesWhereInput
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Count Type ModulesCountOutputType
   */

  export type ModulesCountOutputType = {
    videos: number
  }

  export type ModulesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | ModulesCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * ModulesCountOutputType without action
   */
  export type ModulesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulesCountOutputType
     */
    select?: ModulesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModulesCountOutputType without action
   */
  export type ModulesCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    courses: number
    enrollments: number
    payments: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UsersCountOutputTypeCountCoursesArgs
    enrollments?: boolean | UsersCountOutputTypeCountEnrollmentsArgs
    payments?: boolean | UsersCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    created_by: number | null
  }

  export type CoursesSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    created_by: number | null
  }

  export type CoursesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    provider_name: string | null
    thumbnail_url: string | null
    preview_url: string | null
    created_by: number | null
    created_at: Date | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    provider_name: string | null
    thumbnail_url: string | null
    preview_url: string | null
    created_by: number | null
    created_at: Date | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    provider_name: number
    thumbnail_url: number
    preview_url: number
    created_by: number
    created_at: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    id?: true
    price?: true
    created_by?: true
  }

  export type CoursesSumAggregateInputType = {
    id?: true
    price?: true
    created_by?: true
  }

  export type CoursesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    provider_name?: true
    thumbnail_url?: true
    preview_url?: true
    created_by?: true
    created_at?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    provider_name?: true
    thumbnail_url?: true
    preview_url?: true
    created_by?: true
    created_at?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    provider_name?: true
    thumbnail_url?: true
    preview_url?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to aggregate.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type coursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithAggregationInput | coursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: coursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: number
    title: string | null
    description: string | null
    price: Decimal | null
    provider_name: string | null
    thumbnail_url: string | null
    preview_url: string | null
    created_by: number | null
    created_at: Date | null
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends coursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type coursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    provider_name?: boolean
    thumbnail_url?: boolean
    preview_url?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | courses$usersArgs<ExtArgs>
    enrollments?: boolean | courses$enrollmentsArgs<ExtArgs>
    modules?: boolean | courses$modulesArgs<ExtArgs>
    payments?: boolean | courses$paymentsArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    provider_name?: boolean
    thumbnail_url?: boolean
    preview_url?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | courses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    provider_name?: boolean
    thumbnail_url?: boolean
    preview_url?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | courses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    provider_name?: boolean
    thumbnail_url?: boolean
    preview_url?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type coursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "provider_name" | "thumbnail_url" | "preview_url" | "created_by" | "created_at", ExtArgs["result"]["courses"]>
  export type coursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | courses$usersArgs<ExtArgs>
    enrollments?: boolean | courses$enrollmentsArgs<ExtArgs>
    modules?: boolean | courses$modulesArgs<ExtArgs>
    payments?: boolean | courses$paymentsArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type coursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | courses$usersArgs<ExtArgs>
  }
  export type coursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | courses$usersArgs<ExtArgs>
  }

  export type $coursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "courses"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      enrollments: Prisma.$enrollmentsPayload<ExtArgs>[]
      modules: Prisma.$modulesPayload<ExtArgs>[]
      payments: Prisma.$paymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      description: string | null
      price: Prisma.Decimal | null
      provider_name: string | null
      thumbnail_url: string | null
      preview_url: string | null
      created_by: number | null
      created_at: Date | null
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type coursesGetPayload<S extends boolean | null | undefined | coursesDefaultArgs> = $Result.GetResult<Prisma.$coursesPayload, S>

  type coursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<coursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface coursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['courses'], meta: { name: 'courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {coursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coursesFindUniqueArgs>(args: SelectSubset<T, coursesFindUniqueArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {coursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coursesFindUniqueOrThrowArgs>(args: SelectSubset<T, coursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coursesFindFirstArgs>(args?: SelectSubset<T, coursesFindFirstArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coursesFindFirstOrThrowArgs>(args?: SelectSubset<T, coursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends coursesFindManyArgs>(args?: SelectSubset<T, coursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {coursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends coursesCreateArgs>(args: SelectSubset<T, coursesCreateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {coursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coursesCreateManyArgs>(args?: SelectSubset<T, coursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {coursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends coursesCreateManyAndReturnArgs>(args?: SelectSubset<T, coursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {coursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends coursesDeleteArgs>(args: SelectSubset<T, coursesDeleteArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {coursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coursesUpdateArgs>(args: SelectSubset<T, coursesUpdateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {coursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coursesDeleteManyArgs>(args?: SelectSubset<T, coursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coursesUpdateManyArgs>(args: SelectSubset<T, coursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {coursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends coursesUpdateManyAndReturnArgs>(args: SelectSubset<T, coursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {coursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends coursesUpsertArgs>(args: SelectSubset<T, coursesUpsertArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends coursesCountArgs>(
      args?: Subset<T, coursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends coursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coursesGroupByArgs['orderBy'] }
        : { orderBy?: coursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, coursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the courses model
   */
  readonly fields: coursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends courses$usersArgs<ExtArgs> = {}>(args?: Subset<T, courses$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends courses$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, courses$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modules<T extends courses$modulesArgs<ExtArgs> = {}>(args?: Subset<T, courses$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends courses$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, courses$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the courses model
   */
  interface coursesFieldRefs {
    readonly id: FieldRef<"courses", 'Int'>
    readonly title: FieldRef<"courses", 'String'>
    readonly description: FieldRef<"courses", 'String'>
    readonly price: FieldRef<"courses", 'Decimal'>
    readonly provider_name: FieldRef<"courses", 'String'>
    readonly thumbnail_url: FieldRef<"courses", 'String'>
    readonly preview_url: FieldRef<"courses", 'String'>
    readonly created_by: FieldRef<"courses", 'Int'>
    readonly created_at: FieldRef<"courses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * courses findUnique
   */
  export type coursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findUniqueOrThrow
   */
  export type coursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findFirst
   */
  export type coursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findFirstOrThrow
   */
  export type coursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findMany
   */
  export type coursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses create
   */
  export type coursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to create a courses.
     */
    data?: XOR<coursesCreateInput, coursesUncheckedCreateInput>
  }

  /**
   * courses createMany
   */
  export type coursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * courses createManyAndReturn
   */
  export type coursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * courses update
   */
  export type coursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to update a courses.
     */
    data: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
    /**
     * Choose, which courses to update.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses updateMany
   */
  export type coursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * courses updateManyAndReturn
   */
  export type coursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * courses upsert
   */
  export type coursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The filter to search for the courses to update in case it exists.
     */
    where: coursesWhereUniqueInput
    /**
     * In case the courses found by the `where` argument doesn't exist, create a new courses with this data.
     */
    create: XOR<coursesCreateInput, coursesUncheckedCreateInput>
    /**
     * In case the courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
  }

  /**
   * courses delete
   */
  export type coursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter which courses to delete.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses deleteMany
   */
  export type coursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * courses.users
   */
  export type courses$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * courses.enrollments
   */
  export type courses$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    cursor?: enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * courses.modules
   */
  export type courses$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    where?: modulesWhereInput
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    cursor?: modulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModulesScalarFieldEnum | ModulesScalarFieldEnum[]
  }

  /**
   * courses.payments
   */
  export type courses$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * courses without action
   */
  export type coursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
  }


  /**
   * Model enrollments
   */

  export type AggregateEnrollments = {
    _count: EnrollmentsCountAggregateOutputType | null
    _avg: EnrollmentsAvgAggregateOutputType | null
    _sum: EnrollmentsSumAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  export type EnrollmentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
  }

  export type EnrollmentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
  }

  export type EnrollmentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    enrolled_at: Date | null
    paid: boolean | null
  }

  export type EnrollmentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    enrolled_at: Date | null
    paid: boolean | null
  }

  export type EnrollmentsCountAggregateOutputType = {
    id: number
    user_id: number
    course_id: number
    enrolled_at: number
    paid: number
    _all: number
  }


  export type EnrollmentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
  }

  export type EnrollmentsSumAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
  }

  export type EnrollmentsMinAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    enrolled_at?: true
    paid?: true
  }

  export type EnrollmentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    enrolled_at?: true
    paid?: true
  }

  export type EnrollmentsCountAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    enrolled_at?: true
    paid?: true
    _all?: true
  }

  export type EnrollmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to aggregate.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrollments
    **/
    _count?: true | EnrollmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type GetEnrollmentsAggregateType<T extends EnrollmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollments[P]>
      : GetScalarType<T[P], AggregateEnrollments[P]>
  }




  export type enrollmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithAggregationInput | enrollmentsOrderByWithAggregationInput[]
    by: EnrollmentsScalarFieldEnum[] | EnrollmentsScalarFieldEnum
    having?: enrollmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentsCountAggregateInputType | true
    _avg?: EnrollmentsAvgAggregateInputType
    _sum?: EnrollmentsSumAggregateInputType
    _min?: EnrollmentsMinAggregateInputType
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type EnrollmentsGroupByOutputType = {
    id: number
    user_id: number | null
    course_id: number | null
    enrolled_at: Date | null
    paid: boolean | null
    _count: EnrollmentsCountAggregateOutputType | null
    _avg: EnrollmentsAvgAggregateOutputType | null
    _sum: EnrollmentsSumAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  type GetEnrollmentsGroupByPayload<T extends enrollmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
        }
      >
    >


  export type enrollmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    enrolled_at?: boolean
    paid?: boolean
    courses?: boolean | enrollments$coursesArgs<ExtArgs>
    users?: boolean | enrollments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    enrolled_at?: boolean
    paid?: boolean
    courses?: boolean | enrollments$coursesArgs<ExtArgs>
    users?: boolean | enrollments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    enrolled_at?: boolean
    paid?: boolean
    courses?: boolean | enrollments$coursesArgs<ExtArgs>
    users?: boolean | enrollments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type enrollmentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    enrolled_at?: boolean
    paid?: boolean
  }

  export type enrollmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "course_id" | "enrolled_at" | "paid", ExtArgs["result"]["enrollments"]>
  export type enrollmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | enrollments$coursesArgs<ExtArgs>
    users?: boolean | enrollments$usersArgs<ExtArgs>
  }
  export type enrollmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | enrollments$coursesArgs<ExtArgs>
    users?: boolean | enrollments$usersArgs<ExtArgs>
  }
  export type enrollmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | enrollments$coursesArgs<ExtArgs>
    users?: boolean | enrollments$usersArgs<ExtArgs>
  }

  export type $enrollmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrollments"
    objects: {
      courses: Prisma.$coursesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      course_id: number | null
      enrolled_at: Date | null
      paid: boolean | null
    }, ExtArgs["result"]["enrollments"]>
    composites: {}
  }

  type enrollmentsGetPayload<S extends boolean | null | undefined | enrollmentsDefaultArgs> = $Result.GetResult<Prisma.$enrollmentsPayload, S>

  type enrollmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrollmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentsCountAggregateInputType | true
    }

  export interface enrollmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollments'], meta: { name: 'enrollments' } }
    /**
     * Find zero or one Enrollments that matches the filter.
     * @param {enrollmentsFindUniqueArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrollmentsFindUniqueArgs>(args: SelectSubset<T, enrollmentsFindUniqueArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrollmentsFindUniqueOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrollmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, enrollmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindFirstArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrollmentsFindFirstArgs>(args?: SelectSubset<T, enrollmentsFindFirstArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindFirstOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrollmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, enrollmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollments.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentsWithIdOnly = await prisma.enrollments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enrollmentsFindManyArgs>(args?: SelectSubset<T, enrollmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollments.
     * @param {enrollmentsCreateArgs} args - Arguments to create a Enrollments.
     * @example
     * // Create one Enrollments
     * const Enrollments = await prisma.enrollments.create({
     *   data: {
     *     // ... data to create a Enrollments
     *   }
     * })
     * 
     */
    create<T extends enrollmentsCreateArgs>(args: SelectSubset<T, enrollmentsCreateArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {enrollmentsCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrollmentsCreateManyArgs>(args?: SelectSubset<T, enrollmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {enrollmentsCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentsWithIdOnly = await prisma.enrollments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enrollmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, enrollmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollments.
     * @param {enrollmentsDeleteArgs} args - Arguments to delete one Enrollments.
     * @example
     * // Delete one Enrollments
     * const Enrollments = await prisma.enrollments.delete({
     *   where: {
     *     // ... filter to delete one Enrollments
     *   }
     * })
     * 
     */
    delete<T extends enrollmentsDeleteArgs>(args: SelectSubset<T, enrollmentsDeleteArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollments.
     * @param {enrollmentsUpdateArgs} args - Arguments to update one Enrollments.
     * @example
     * // Update one Enrollments
     * const enrollments = await prisma.enrollments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrollmentsUpdateArgs>(args: SelectSubset<T, enrollmentsUpdateArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {enrollmentsDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrollmentsDeleteManyArgs>(args?: SelectSubset<T, enrollmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrollmentsUpdateManyArgs>(args: SelectSubset<T, enrollmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {enrollmentsUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentsWithIdOnly = await prisma.enrollments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends enrollmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, enrollmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollments.
     * @param {enrollmentsUpsertArgs} args - Arguments to update or create a Enrollments.
     * @example
     * // Update or create a Enrollments
     * const enrollments = await prisma.enrollments.upsert({
     *   create: {
     *     // ... data to create a Enrollments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollments we want to update
     *   }
     * })
     */
    upsert<T extends enrollmentsUpsertArgs>(args: SelectSubset<T, enrollmentsUpsertArgs<ExtArgs>>): Prisma__enrollmentsClient<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollments.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends enrollmentsCountArgs>(
      args?: Subset<T, enrollmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentsAggregateArgs>(args: Subset<T, EnrollmentsAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentsAggregateType<T>>

    /**
     * Group by Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enrollmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollmentsGroupByArgs['orderBy'] }
        : { orderBy?: enrollmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enrollmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrollments model
   */
  readonly fields: enrollmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends enrollments$coursesArgs<ExtArgs> = {}>(args?: Subset<T, enrollments$coursesArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends enrollments$usersArgs<ExtArgs> = {}>(args?: Subset<T, enrollments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the enrollments model
   */
  interface enrollmentsFieldRefs {
    readonly id: FieldRef<"enrollments", 'Int'>
    readonly user_id: FieldRef<"enrollments", 'Int'>
    readonly course_id: FieldRef<"enrollments", 'Int'>
    readonly enrolled_at: FieldRef<"enrollments", 'DateTime'>
    readonly paid: FieldRef<"enrollments", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * enrollments findUnique
   */
  export type enrollmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments findUniqueOrThrow
   */
  export type enrollmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments findFirst
   */
  export type enrollmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments findFirstOrThrow
   */
  export type enrollmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments findMany
   */
  export type enrollmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrollments.
     */
    cursor?: enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * enrollments create
   */
  export type enrollmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a enrollments.
     */
    data?: XOR<enrollmentsCreateInput, enrollmentsUncheckedCreateInput>
  }

  /**
   * enrollments createMany
   */
  export type enrollmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentsCreateManyInput | enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enrollments createManyAndReturn
   */
  export type enrollmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentsCreateManyInput | enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollments update
   */
  export type enrollmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a enrollments.
     */
    data: XOR<enrollmentsUpdateInput, enrollmentsUncheckedUpdateInput>
    /**
     * Choose, which enrollments to update.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments updateMany
   */
  export type enrollmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
  }

  /**
   * enrollments updateManyAndReturn
   */
  export type enrollmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollments upsert
   */
  export type enrollmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the enrollments to update in case it exists.
     */
    where: enrollmentsWhereUniqueInput
    /**
     * In case the enrollments found by the `where` argument doesn't exist, create a new enrollments with this data.
     */
    create: XOR<enrollmentsCreateInput, enrollmentsUncheckedCreateInput>
    /**
     * In case the enrollments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollmentsUpdateInput, enrollmentsUncheckedUpdateInput>
  }

  /**
   * enrollments delete
   */
  export type enrollmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    /**
     * Filter which enrollments to delete.
     */
    where: enrollmentsWhereUniqueInput
  }

  /**
   * enrollments deleteMany
   */
  export type enrollmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to delete
     */
    where?: enrollmentsWhereInput
    /**
     * Limit how many enrollments to delete.
     */
    limit?: number
  }

  /**
   * enrollments.courses
   */
  export type enrollments$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
  }

  /**
   * enrollments.users
   */
  export type enrollments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * enrollments without action
   */
  export type enrollmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
  }


  /**
   * Model modules
   */

  export type AggregateModules = {
    _count: ModulesCountAggregateOutputType | null
    _avg: ModulesAvgAggregateOutputType | null
    _sum: ModulesSumAggregateOutputType | null
    _min: ModulesMinAggregateOutputType | null
    _max: ModulesMaxAggregateOutputType | null
  }

  export type ModulesAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
    position: number | null
  }

  export type ModulesSumAggregateOutputType = {
    id: number | null
    course_id: number | null
    position: number | null
  }

  export type ModulesMinAggregateOutputType = {
    id: number | null
    course_id: number | null
    title: string | null
    position: number | null
  }

  export type ModulesMaxAggregateOutputType = {
    id: number | null
    course_id: number | null
    title: string | null
    position: number | null
  }

  export type ModulesCountAggregateOutputType = {
    id: number
    course_id: number
    title: number
    position: number
    _all: number
  }


  export type ModulesAvgAggregateInputType = {
    id?: true
    course_id?: true
    position?: true
  }

  export type ModulesSumAggregateInputType = {
    id?: true
    course_id?: true
    position?: true
  }

  export type ModulesMinAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    position?: true
  }

  export type ModulesMaxAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    position?: true
  }

  export type ModulesCountAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    position?: true
    _all?: true
  }

  export type ModulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to aggregate.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modules
    **/
    _count?: true | ModulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModulesMaxAggregateInputType
  }

  export type GetModulesAggregateType<T extends ModulesAggregateArgs> = {
        [P in keyof T & keyof AggregateModules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModules[P]>
      : GetScalarType<T[P], AggregateModules[P]>
  }




  export type modulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulesWhereInput
    orderBy?: modulesOrderByWithAggregationInput | modulesOrderByWithAggregationInput[]
    by: ModulesScalarFieldEnum[] | ModulesScalarFieldEnum
    having?: modulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModulesCountAggregateInputType | true
    _avg?: ModulesAvgAggregateInputType
    _sum?: ModulesSumAggregateInputType
    _min?: ModulesMinAggregateInputType
    _max?: ModulesMaxAggregateInputType
  }

  export type ModulesGroupByOutputType = {
    id: number
    course_id: number | null
    title: string | null
    position: number | null
    _count: ModulesCountAggregateOutputType | null
    _avg: ModulesAvgAggregateOutputType | null
    _sum: ModulesSumAggregateOutputType | null
    _min: ModulesMinAggregateOutputType | null
    _max: ModulesMaxAggregateOutputType | null
  }

  type GetModulesGroupByPayload<T extends modulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModulesGroupByOutputType[P]>
            : GetScalarType<T[P], ModulesGroupByOutputType[P]>
        }
      >
    >


  export type modulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    title?: boolean
    position?: boolean
    courses?: boolean | modules$coursesArgs<ExtArgs>
    videos?: boolean | modules$videosArgs<ExtArgs>
    _count?: boolean | ModulesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modules"]>

  export type modulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    title?: boolean
    position?: boolean
    courses?: boolean | modules$coursesArgs<ExtArgs>
  }, ExtArgs["result"]["modules"]>

  export type modulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    title?: boolean
    position?: boolean
    courses?: boolean | modules$coursesArgs<ExtArgs>
  }, ExtArgs["result"]["modules"]>

  export type modulesSelectScalar = {
    id?: boolean
    course_id?: boolean
    title?: boolean
    position?: boolean
  }

  export type modulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "title" | "position", ExtArgs["result"]["modules"]>
  export type modulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | modules$coursesArgs<ExtArgs>
    videos?: boolean | modules$videosArgs<ExtArgs>
    _count?: boolean | ModulesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type modulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | modules$coursesArgs<ExtArgs>
  }
  export type modulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | modules$coursesArgs<ExtArgs>
  }

  export type $modulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modules"
    objects: {
      courses: Prisma.$coursesPayload<ExtArgs> | null
      videos: Prisma.$videosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      course_id: number | null
      title: string | null
      position: number | null
    }, ExtArgs["result"]["modules"]>
    composites: {}
  }

  type modulesGetPayload<S extends boolean | null | undefined | modulesDefaultArgs> = $Result.GetResult<Prisma.$modulesPayload, S>

  type modulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<modulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModulesCountAggregateInputType | true
    }

  export interface modulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modules'], meta: { name: 'modules' } }
    /**
     * Find zero or one Modules that matches the filter.
     * @param {modulesFindUniqueArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modulesFindUniqueArgs>(args: SelectSubset<T, modulesFindUniqueArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {modulesFindUniqueOrThrowArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modulesFindUniqueOrThrowArgs>(args: SelectSubset<T, modulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesFindFirstArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modulesFindFirstArgs>(args?: SelectSubset<T, modulesFindFirstArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesFindFirstOrThrowArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modulesFindFirstOrThrowArgs>(args?: SelectSubset<T, modulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.modules.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.modules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modulesWithIdOnly = await prisma.modules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends modulesFindManyArgs>(args?: SelectSubset<T, modulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modules.
     * @param {modulesCreateArgs} args - Arguments to create a Modules.
     * @example
     * // Create one Modules
     * const Modules = await prisma.modules.create({
     *   data: {
     *     // ... data to create a Modules
     *   }
     * })
     * 
     */
    create<T extends modulesCreateArgs>(args: SelectSubset<T, modulesCreateArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {modulesCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const modules = await prisma.modules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modulesCreateManyArgs>(args?: SelectSubset<T, modulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {modulesCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const modules = await prisma.modules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const modulesWithIdOnly = await prisma.modules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends modulesCreateManyAndReturnArgs>(args?: SelectSubset<T, modulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modules.
     * @param {modulesDeleteArgs} args - Arguments to delete one Modules.
     * @example
     * // Delete one Modules
     * const Modules = await prisma.modules.delete({
     *   where: {
     *     // ... filter to delete one Modules
     *   }
     * })
     * 
     */
    delete<T extends modulesDeleteArgs>(args: SelectSubset<T, modulesDeleteArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modules.
     * @param {modulesUpdateArgs} args - Arguments to update one Modules.
     * @example
     * // Update one Modules
     * const modules = await prisma.modules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modulesUpdateArgs>(args: SelectSubset<T, modulesUpdateArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {modulesDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.modules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modulesDeleteManyArgs>(args?: SelectSubset<T, modulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const modules = await prisma.modules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modulesUpdateManyArgs>(args: SelectSubset<T, modulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {modulesUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const modules = await prisma.modules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const modulesWithIdOnly = await prisma.modules.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends modulesUpdateManyAndReturnArgs>(args: SelectSubset<T, modulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modules.
     * @param {modulesUpsertArgs} args - Arguments to update or create a Modules.
     * @example
     * // Update or create a Modules
     * const modules = await prisma.modules.upsert({
     *   create: {
     *     // ... data to create a Modules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modules we want to update
     *   }
     * })
     */
    upsert<T extends modulesUpsertArgs>(args: SelectSubset<T, modulesUpsertArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.modules.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends modulesCountArgs>(
      args?: Subset<T, modulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModulesAggregateArgs>(args: Subset<T, ModulesAggregateArgs>): Prisma.PrismaPromise<GetModulesAggregateType<T>>

    /**
     * Group by Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends modulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modulesGroupByArgs['orderBy'] }
        : { orderBy?: modulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, modulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modules model
   */
  readonly fields: modulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends modules$coursesArgs<ExtArgs> = {}>(args?: Subset<T, modules$coursesArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    videos<T extends modules$videosArgs<ExtArgs> = {}>(args?: Subset<T, modules$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the modules model
   */
  interface modulesFieldRefs {
    readonly id: FieldRef<"modules", 'Int'>
    readonly course_id: FieldRef<"modules", 'Int'>
    readonly title: FieldRef<"modules", 'String'>
    readonly position: FieldRef<"modules", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * modules findUnique
   */
  export type modulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules findUniqueOrThrow
   */
  export type modulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules findFirst
   */
  export type modulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModulesScalarFieldEnum | ModulesScalarFieldEnum[]
  }

  /**
   * modules findFirstOrThrow
   */
  export type modulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModulesScalarFieldEnum | ModulesScalarFieldEnum[]
  }

  /**
   * modules findMany
   */
  export type modulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modules.
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    distinct?: ModulesScalarFieldEnum | ModulesScalarFieldEnum[]
  }

  /**
   * modules create
   */
  export type modulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * The data needed to create a modules.
     */
    data?: XOR<modulesCreateInput, modulesUncheckedCreateInput>
  }

  /**
   * modules createMany
   */
  export type modulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: modulesCreateManyInput | modulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modules createManyAndReturn
   */
  export type modulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * The data used to create many modules.
     */
    data: modulesCreateManyInput | modulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * modules update
   */
  export type modulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * The data needed to update a modules.
     */
    data: XOR<modulesUpdateInput, modulesUncheckedUpdateInput>
    /**
     * Choose, which modules to update.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules updateMany
   */
  export type modulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<modulesUpdateManyMutationInput, modulesUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: modulesWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
  }

  /**
   * modules updateManyAndReturn
   */
  export type modulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * The data used to update modules.
     */
    data: XOR<modulesUpdateManyMutationInput, modulesUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: modulesWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * modules upsert
   */
  export type modulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * The filter to search for the modules to update in case it exists.
     */
    where: modulesWhereUniqueInput
    /**
     * In case the modules found by the `where` argument doesn't exist, create a new modules with this data.
     */
    create: XOR<modulesCreateInput, modulesUncheckedCreateInput>
    /**
     * In case the modules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modulesUpdateInput, modulesUncheckedUpdateInput>
  }

  /**
   * modules delete
   */
  export type modulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    /**
     * Filter which modules to delete.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules deleteMany
   */
  export type modulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: modulesWhereInput
    /**
     * Limit how many modules to delete.
     */
    limit?: number
  }

  /**
   * modules.courses
   */
  export type modules$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
  }

  /**
   * modules.videos
   */
  export type modules$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    where?: videosWhereInput
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    cursor?: videosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * modules without action
   */
  export type modulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    amount: Decimal | null
    status: $Enums.payment_status | null
    payment_date: Date | null
    provider: string | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    amount: Decimal | null
    status: $Enums.payment_status | null
    payment_date: Date | null
    provider: string | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    user_id: number
    course_id: number
    amount: number
    status: number
    payment_date: number
    provider: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    amount?: true
    status?: true
    payment_date?: true
    provider?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    amount?: true
    status?: true
    payment_date?: true
    provider?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    amount?: true
    status?: true
    payment_date?: true
    provider?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    user_id: number | null
    course_id: number | null
    amount: Decimal | null
    status: $Enums.payment_status | null
    payment_date: Date | null
    provider: string | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    amount?: boolean
    status?: boolean
    payment_date?: boolean
    provider?: boolean
    courses?: boolean | payments$coursesArgs<ExtArgs>
    users?: boolean | payments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    amount?: boolean
    status?: boolean
    payment_date?: boolean
    provider?: boolean
    courses?: boolean | payments$coursesArgs<ExtArgs>
    users?: boolean | payments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    amount?: boolean
    status?: boolean
    payment_date?: boolean
    provider?: boolean
    courses?: boolean | payments$coursesArgs<ExtArgs>
    users?: boolean | payments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    amount?: boolean
    status?: boolean
    payment_date?: boolean
    provider?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "course_id" | "amount" | "status" | "payment_date" | "provider", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | payments$coursesArgs<ExtArgs>
    users?: boolean | payments$usersArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | payments$coursesArgs<ExtArgs>
    users?: boolean | payments$usersArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | payments$coursesArgs<ExtArgs>
    users?: boolean | payments$usersArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      courses: Prisma.$coursesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      course_id: number | null
      amount: Prisma.Decimal | null
      status: $Enums.payment_status | null
      payment_date: Date | null
      provider: string | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends payments$coursesArgs<ExtArgs> = {}>(args?: Subset<T, payments$coursesArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends payments$usersArgs<ExtArgs> = {}>(args?: Subset<T, payments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly user_id: FieldRef<"payments", 'Int'>
    readonly course_id: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly status: FieldRef<"payments", 'payment_status'>
    readonly payment_date: FieldRef<"payments", 'DateTime'>
    readonly provider: FieldRef<"payments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data?: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments.courses
   */
  export type payments$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
  }

  /**
   * payments.users
   */
  export type payments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.user_role | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.user_role | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    role: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.user_role | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    courses?: boolean | users$coursesArgs<ExtArgs>
    enrollments?: boolean | users$enrollmentsArgs<ExtArgs>
    payments?: boolean | users$paymentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "role" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | users$coursesArgs<ExtArgs>
    enrollments?: boolean | users$enrollmentsArgs<ExtArgs>
    payments?: boolean | users$paymentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      courses: Prisma.$coursesPayload<ExtArgs>[]
      enrollments: Prisma.$enrollmentsPayload<ExtArgs>[]
      payments: Prisma.$paymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      password_hash: string | null
      role: $Enums.user_role | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends users$coursesArgs<ExtArgs> = {}>(args?: Subset<T, users$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends users$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends users$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, users$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'user_role'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.courses
   */
  export type users$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    cursor?: coursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * users.enrollments
   */
  export type users$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollments
     */
    select?: enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollments
     */
    omit?: enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentsInclude<ExtArgs> | null
    where?: enrollmentsWhereInput
    orderBy?: enrollmentsOrderByWithRelationInput | enrollmentsOrderByWithRelationInput[]
    cursor?: enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * users.payments
   */
  export type users$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model videos
   */

  export type AggregateVideos = {
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  export type VideosAvgAggregateOutputType = {
    id: number | null
    module_id: number | null
    position: number | null
  }

  export type VideosSumAggregateOutputType = {
    id: number | null
    module_id: number | null
    position: number | null
  }

  export type VideosMinAggregateOutputType = {
    id: number | null
    module_id: number | null
    title: string | null
    video_url: string | null
    position: number | null
  }

  export type VideosMaxAggregateOutputType = {
    id: number | null
    module_id: number | null
    title: string | null
    video_url: string | null
    position: number | null
  }

  export type VideosCountAggregateOutputType = {
    id: number
    module_id: number
    title: number
    video_url: number
    position: number
    _all: number
  }


  export type VideosAvgAggregateInputType = {
    id?: true
    module_id?: true
    position?: true
  }

  export type VideosSumAggregateInputType = {
    id?: true
    module_id?: true
    position?: true
  }

  export type VideosMinAggregateInputType = {
    id?: true
    module_id?: true
    title?: true
    video_url?: true
    position?: true
  }

  export type VideosMaxAggregateInputType = {
    id?: true
    module_id?: true
    title?: true
    video_url?: true
    position?: true
  }

  export type VideosCountAggregateInputType = {
    id?: true
    module_id?: true
    title?: true
    video_url?: true
    position?: true
    _all?: true
  }

  export type VideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to aggregate.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos
    **/
    _count?: true | VideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideosMaxAggregateInputType
  }

  export type GetVideosAggregateType<T extends VideosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos[P]>
      : GetScalarType<T[P], AggregateVideos[P]>
  }




  export type videosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
    orderBy?: videosOrderByWithAggregationInput | videosOrderByWithAggregationInput[]
    by: VideosScalarFieldEnum[] | VideosScalarFieldEnum
    having?: videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideosCountAggregateInputType | true
    _avg?: VideosAvgAggregateInputType
    _sum?: VideosSumAggregateInputType
    _min?: VideosMinAggregateInputType
    _max?: VideosMaxAggregateInputType
  }

  export type VideosGroupByOutputType = {
    id: number
    module_id: number | null
    title: string | null
    video_url: string | null
    position: number | null
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  type GetVideosGroupByPayload<T extends videosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideosGroupByOutputType[P]>
            : GetScalarType<T[P], VideosGroupByOutputType[P]>
        }
      >
    >


  export type videosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    title?: boolean
    video_url?: boolean
    position?: boolean
    modules?: boolean | videos$modulesArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    title?: boolean
    video_url?: boolean
    position?: boolean
    modules?: boolean | videos$modulesArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    title?: boolean
    video_url?: boolean
    position?: boolean
    modules?: boolean | videos$modulesArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectScalar = {
    id?: boolean
    module_id?: boolean
    title?: boolean
    video_url?: boolean
    position?: boolean
  }

  export type videosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "module_id" | "title" | "video_url" | "position", ExtArgs["result"]["videos"]>
  export type videosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | videos$modulesArgs<ExtArgs>
  }
  export type videosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | videos$modulesArgs<ExtArgs>
  }
  export type videosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | videos$modulesArgs<ExtArgs>
  }

  export type $videosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videos"
    objects: {
      modules: Prisma.$modulesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      module_id: number | null
      title: string | null
      video_url: string | null
      position: number | null
    }, ExtArgs["result"]["videos"]>
    composites: {}
  }

  type videosGetPayload<S extends boolean | null | undefined | videosDefaultArgs> = $Result.GetResult<Prisma.$videosPayload, S>

  type videosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideosCountAggregateInputType | true
    }

  export interface videosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videos'], meta: { name: 'videos' } }
    /**
     * Find zero or one Videos that matches the filter.
     * @param {videosFindUniqueArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videosFindUniqueArgs>(args: SelectSubset<T, videosFindUniqueArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videosFindUniqueOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videosFindUniqueOrThrowArgs>(args: SelectSubset<T, videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videosFindFirstArgs>(args?: SelectSubset<T, videosFindFirstArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videosFindFirstOrThrowArgs>(args?: SelectSubset<T, videosFindFirstOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.videos.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videosWithIdOnly = await prisma.videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videosFindManyArgs>(args?: SelectSubset<T, videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videos.
     * @param {videosCreateArgs} args - Arguments to create a Videos.
     * @example
     * // Create one Videos
     * const Videos = await prisma.videos.create({
     *   data: {
     *     // ... data to create a Videos
     *   }
     * })
     * 
     */
    create<T extends videosCreateArgs>(args: SelectSubset<T, videosCreateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {videosCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videosCreateManyArgs>(args?: SelectSubset<T, videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {videosCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videosCreateManyAndReturnArgs>(args?: SelectSubset<T, videosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videos.
     * @param {videosDeleteArgs} args - Arguments to delete one Videos.
     * @example
     * // Delete one Videos
     * const Videos = await prisma.videos.delete({
     *   where: {
     *     // ... filter to delete one Videos
     *   }
     * })
     * 
     */
    delete<T extends videosDeleteArgs>(args: SelectSubset<T, videosDeleteArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videos.
     * @param {videosUpdateArgs} args - Arguments to update one Videos.
     * @example
     * // Update one Videos
     * const videos = await prisma.videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videosUpdateArgs>(args: SelectSubset<T, videosUpdateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {videosDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videosDeleteManyArgs>(args?: SelectSubset<T, videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videosUpdateManyArgs>(args: SelectSubset<T, videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {videosUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends videosUpdateManyAndReturnArgs>(args: SelectSubset<T, videosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videos.
     * @param {videosUpsertArgs} args - Arguments to update or create a Videos.
     * @example
     * // Update or create a Videos
     * const videos = await prisma.videos.upsert({
     *   create: {
     *     // ... data to create a Videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos we want to update
     *   }
     * })
     */
    upsert<T extends videosUpsertArgs>(args: SelectSubset<T, videosUpsertArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.videos.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends videosCountArgs>(
      args?: Subset<T, videosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideosAggregateArgs>(args: Subset<T, VideosAggregateArgs>): Prisma.PrismaPromise<GetVideosAggregateType<T>>

    /**
     * Group by Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videosGroupByArgs['orderBy'] }
        : { orderBy?: videosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videos model
   */
  readonly fields: videosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modules<T extends videos$modulesArgs<ExtArgs> = {}>(args?: Subset<T, videos$modulesArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the videos model
   */
  interface videosFieldRefs {
    readonly id: FieldRef<"videos", 'Int'>
    readonly module_id: FieldRef<"videos", 'Int'>
    readonly title: FieldRef<"videos", 'String'>
    readonly video_url: FieldRef<"videos", 'String'>
    readonly position: FieldRef<"videos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * videos findUnique
   */
  export type videosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findUniqueOrThrow
   */
  export type videosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findFirst
   */
  export type videosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findFirstOrThrow
   */
  export type videosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findMany
   */
  export type videosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos create
   */
  export type videosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to create a videos.
     */
    data?: XOR<videosCreateInput, videosUncheckedCreateInput>
  }

  /**
   * videos createMany
   */
  export type videosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos createManyAndReturn
   */
  export type videosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * videos update
   */
  export type videosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to update a videos.
     */
    data: XOR<videosUpdateInput, videosUncheckedUpdateInput>
    /**
     * Choose, which videos to update.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos updateMany
   */
  export type videosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
  }

  /**
   * videos updateManyAndReturn
   */
  export type videosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * videos upsert
   */
  export type videosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The filter to search for the videos to update in case it exists.
     */
    where: videosWhereUniqueInput
    /**
     * In case the videos found by the `where` argument doesn't exist, create a new videos with this data.
     */
    create: XOR<videosCreateInput, videosUncheckedCreateInput>
    /**
     * In case the videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videosUpdateInput, videosUncheckedUpdateInput>
  }

  /**
   * videos delete
   */
  export type videosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter which videos to delete.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos deleteMany
   */
  export type videosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to delete.
     */
    limit?: number
  }

  /**
   * videos.modules
   */
  export type videos$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modules
     */
    omit?: modulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulesInclude<ExtArgs> | null
    where?: modulesWhereInput
  }

  /**
   * videos without action
   */
  export type videosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CoursesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    provider_name: 'provider_name',
    thumbnail_url: 'thumbnail_url',
    preview_url: 'preview_url',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const EnrollmentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    enrolled_at: 'enrolled_at',
    paid: 'paid'
  };

  export type EnrollmentsScalarFieldEnum = (typeof EnrollmentsScalarFieldEnum)[keyof typeof EnrollmentsScalarFieldEnum]


  export const ModulesScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    title: 'title',
    position: 'position'
  };

  export type ModulesScalarFieldEnum = (typeof ModulesScalarFieldEnum)[keyof typeof ModulesScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    amount: 'amount',
    status: 'status',
    payment_date: 'payment_date',
    provider: 'provider'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VideosScalarFieldEnum: {
    id: 'id',
    module_id: 'module_id',
    title: 'title',
    video_url: 'video_url',
    position: 'position'
  };

  export type VideosScalarFieldEnum = (typeof VideosScalarFieldEnum)[keyof typeof VideosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'payment_status[]'
   */
  export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type coursesWhereInput = {
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    id?: IntFilter<"courses"> | number
    title?: StringNullableFilter<"courses"> | string | null
    description?: StringNullableFilter<"courses"> | string | null
    price?: DecimalNullableFilter<"courses"> | Decimal | DecimalJsLike | number | string | null
    provider_name?: StringNullableFilter<"courses"> | string | null
    thumbnail_url?: StringNullableFilter<"courses"> | string | null
    preview_url?: StringNullableFilter<"courses"> | string | null
    created_by?: IntNullableFilter<"courses"> | number | null
    created_at?: DateTimeNullableFilter<"courses"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    enrollments?: EnrollmentsListRelationFilter
    modules?: ModulesListRelationFilter
    payments?: PaymentsListRelationFilter
  }

  export type coursesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    provider_name?: SortOrderInput | SortOrder
    thumbnail_url?: SortOrderInput | SortOrder
    preview_url?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    enrollments?: enrollmentsOrderByRelationAggregateInput
    modules?: modulesOrderByRelationAggregateInput
    payments?: paymentsOrderByRelationAggregateInput
  }

  export type coursesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    title?: StringNullableFilter<"courses"> | string | null
    description?: StringNullableFilter<"courses"> | string | null
    price?: DecimalNullableFilter<"courses"> | Decimal | DecimalJsLike | number | string | null
    provider_name?: StringNullableFilter<"courses"> | string | null
    thumbnail_url?: StringNullableFilter<"courses"> | string | null
    preview_url?: StringNullableFilter<"courses"> | string | null
    created_by?: IntNullableFilter<"courses"> | number | null
    created_at?: DateTimeNullableFilter<"courses"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    enrollments?: EnrollmentsListRelationFilter
    modules?: ModulesListRelationFilter
    payments?: PaymentsListRelationFilter
  }, "id">

  export type coursesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    provider_name?: SortOrderInput | SortOrder
    thumbnail_url?: SortOrderInput | SortOrder
    preview_url?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: coursesCountOrderByAggregateInput
    _avg?: coursesAvgOrderByAggregateInput
    _max?: coursesMaxOrderByAggregateInput
    _min?: coursesMinOrderByAggregateInput
    _sum?: coursesSumOrderByAggregateInput
  }

  export type coursesScalarWhereWithAggregatesInput = {
    AND?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    OR?: coursesScalarWhereWithAggregatesInput[]
    NOT?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"courses"> | number
    title?: StringNullableWithAggregatesFilter<"courses"> | string | null
    description?: StringNullableWithAggregatesFilter<"courses"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"courses"> | Decimal | DecimalJsLike | number | string | null
    provider_name?: StringNullableWithAggregatesFilter<"courses"> | string | null
    thumbnail_url?: StringNullableWithAggregatesFilter<"courses"> | string | null
    preview_url?: StringNullableWithAggregatesFilter<"courses"> | string | null
    created_by?: IntNullableWithAggregatesFilter<"courses"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"courses"> | Date | string | null
  }

  export type enrollmentsWhereInput = {
    AND?: enrollmentsWhereInput | enrollmentsWhereInput[]
    OR?: enrollmentsWhereInput[]
    NOT?: enrollmentsWhereInput | enrollmentsWhereInput[]
    id?: IntFilter<"enrollments"> | number
    user_id?: IntNullableFilter<"enrollments"> | number | null
    course_id?: IntNullableFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    paid?: BoolNullableFilter<"enrollments"> | boolean | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type enrollmentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    paid?: SortOrderInput | SortOrder
    courses?: coursesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type enrollmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: enrollmentsWhereInput | enrollmentsWhereInput[]
    OR?: enrollmentsWhereInput[]
    NOT?: enrollmentsWhereInput | enrollmentsWhereInput[]
    user_id?: IntNullableFilter<"enrollments"> | number | null
    course_id?: IntNullableFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    paid?: BoolNullableFilter<"enrollments"> | boolean | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type enrollmentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    enrolled_at?: SortOrderInput | SortOrder
    paid?: SortOrderInput | SortOrder
    _count?: enrollmentsCountOrderByAggregateInput
    _avg?: enrollmentsAvgOrderByAggregateInput
    _max?: enrollmentsMaxOrderByAggregateInput
    _min?: enrollmentsMinOrderByAggregateInput
    _sum?: enrollmentsSumOrderByAggregateInput
  }

  export type enrollmentsScalarWhereWithAggregatesInput = {
    AND?: enrollmentsScalarWhereWithAggregatesInput | enrollmentsScalarWhereWithAggregatesInput[]
    OR?: enrollmentsScalarWhereWithAggregatesInput[]
    NOT?: enrollmentsScalarWhereWithAggregatesInput | enrollmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"enrollments"> | number
    user_id?: IntNullableWithAggregatesFilter<"enrollments"> | number | null
    course_id?: IntNullableWithAggregatesFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableWithAggregatesFilter<"enrollments"> | Date | string | null
    paid?: BoolNullableWithAggregatesFilter<"enrollments"> | boolean | null
  }

  export type modulesWhereInput = {
    AND?: modulesWhereInput | modulesWhereInput[]
    OR?: modulesWhereInput[]
    NOT?: modulesWhereInput | modulesWhereInput[]
    id?: IntFilter<"modules"> | number
    course_id?: IntNullableFilter<"modules"> | number | null
    title?: StringNullableFilter<"modules"> | string | null
    position?: IntNullableFilter<"modules"> | number | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    videos?: VideosListRelationFilter
  }

  export type modulesOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    courses?: coursesOrderByWithRelationInput
    videos?: videosOrderByRelationAggregateInput
  }

  export type modulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: modulesWhereInput | modulesWhereInput[]
    OR?: modulesWhereInput[]
    NOT?: modulesWhereInput | modulesWhereInput[]
    course_id?: IntNullableFilter<"modules"> | number | null
    title?: StringNullableFilter<"modules"> | string | null
    position?: IntNullableFilter<"modules"> | number | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    videos?: VideosListRelationFilter
  }, "id">

  export type modulesOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    _count?: modulesCountOrderByAggregateInput
    _avg?: modulesAvgOrderByAggregateInput
    _max?: modulesMaxOrderByAggregateInput
    _min?: modulesMinOrderByAggregateInput
    _sum?: modulesSumOrderByAggregateInput
  }

  export type modulesScalarWhereWithAggregatesInput = {
    AND?: modulesScalarWhereWithAggregatesInput | modulesScalarWhereWithAggregatesInput[]
    OR?: modulesScalarWhereWithAggregatesInput[]
    NOT?: modulesScalarWhereWithAggregatesInput | modulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"modules"> | number
    course_id?: IntNullableWithAggregatesFilter<"modules"> | number | null
    title?: StringNullableWithAggregatesFilter<"modules"> | string | null
    position?: IntNullableWithAggregatesFilter<"modules"> | number | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    user_id?: IntNullableFilter<"payments"> | number | null
    course_id?: IntNullableFilter<"payments"> | number | null
    amount?: DecimalNullableFilter<"payments"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumpayment_statusNullableFilter<"payments"> | $Enums.payment_status | null
    payment_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    provider?: StringNullableFilter<"payments"> | string | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    courses?: coursesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    user_id?: IntNullableFilter<"payments"> | number | null
    course_id?: IntNullableFilter<"payments"> | number | null
    amount?: DecimalNullableFilter<"payments"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumpayment_statusNullableFilter<"payments"> | $Enums.payment_status | null
    payment_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    provider?: StringNullableFilter<"payments"> | string | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    user_id?: IntNullableWithAggregatesFilter<"payments"> | number | null
    course_id?: IntNullableWithAggregatesFilter<"payments"> | number | null
    amount?: DecimalNullableWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumpayment_statusNullableWithAggregatesFilter<"payments"> | $Enums.payment_status | null
    payment_date?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    provider?: StringNullableWithAggregatesFilter<"payments"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password_hash?: StringNullableFilter<"users"> | string | null
    role?: Enumuser_roleNullableFilter<"users"> | $Enums.user_role | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    courses?: CoursesListRelationFilter
    enrollments?: EnrollmentsListRelationFilter
    payments?: PaymentsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    courses?: coursesOrderByRelationAggregateInput
    enrollments?: enrollmentsOrderByRelationAggregateInput
    payments?: paymentsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password_hash?: StringNullableFilter<"users"> | string | null
    role?: Enumuser_roleNullableFilter<"users"> | $Enums.user_role | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    courses?: CoursesListRelationFilter
    enrollments?: EnrollmentsListRelationFilter
    payments?: PaymentsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: Enumuser_roleNullableWithAggregatesFilter<"users"> | $Enums.user_role | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type videosWhereInput = {
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    id?: IntFilter<"videos"> | number
    module_id?: IntNullableFilter<"videos"> | number | null
    title?: StringNullableFilter<"videos"> | string | null
    video_url?: StringNullableFilter<"videos"> | string | null
    position?: IntNullableFilter<"videos"> | number | null
    modules?: XOR<ModulesNullableScalarRelationFilter, modulesWhereInput> | null
  }

  export type videosOrderByWithRelationInput = {
    id?: SortOrder
    module_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    modules?: modulesOrderByWithRelationInput
  }

  export type videosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    module_id?: IntNullableFilter<"videos"> | number | null
    title?: StringNullableFilter<"videos"> | string | null
    video_url?: StringNullableFilter<"videos"> | string | null
    position?: IntNullableFilter<"videos"> | number | null
    modules?: XOR<ModulesNullableScalarRelationFilter, modulesWhereInput> | null
  }, "id">

  export type videosOrderByWithAggregationInput = {
    id?: SortOrder
    module_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    _count?: videosCountOrderByAggregateInput
    _avg?: videosAvgOrderByAggregateInput
    _max?: videosMaxOrderByAggregateInput
    _min?: videosMinOrderByAggregateInput
    _sum?: videosSumOrderByAggregateInput
  }

  export type videosScalarWhereWithAggregatesInput = {
    AND?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    OR?: videosScalarWhereWithAggregatesInput[]
    NOT?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"videos"> | number
    module_id?: IntNullableWithAggregatesFilter<"videos"> | number | null
    title?: StringNullableWithAggregatesFilter<"videos"> | string | null
    video_url?: StringNullableWithAggregatesFilter<"videos"> | string | null
    position?: IntNullableWithAggregatesFilter<"videos"> | number | null
  }

  export type coursesCreateInput = {
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCoursesInput
    enrollments?: enrollmentsCreateNestedManyWithoutCoursesInput
    modules?: modulesCreateNestedManyWithoutCoursesInput
    payments?: paymentsCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutCoursesInput
    modules?: modulesUncheckedCreateNestedManyWithoutCoursesInput
    payments?: paymentsUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCoursesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutCoursesNestedInput
    modules?: modulesUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUncheckedUpdateManyWithoutCoursesNestedInput
    modules?: modulesUncheckedUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type coursesCreateManyInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type coursesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type coursesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsCreateInput = {
    enrolled_at?: Date | string | null
    paid?: boolean | null
    courses?: coursesCreateNestedOneWithoutEnrollmentsInput
    users?: usersCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    course_id?: number | null
    enrolled_at?: Date | string | null
    paid?: boolean | null
  }

  export type enrollmentsUpdateInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    courses?: coursesUpdateOneWithoutEnrollmentsNestedInput
    users?: usersUpdateOneWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type enrollmentsCreateManyInput = {
    id?: number
    user_id?: number | null
    course_id?: number | null
    enrolled_at?: Date | string | null
    paid?: boolean | null
  }

  export type enrollmentsUpdateManyMutationInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type enrollmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type modulesCreateInput = {
    title?: string | null
    position?: number | null
    courses?: coursesCreateNestedOneWithoutModulesInput
    videos?: videosCreateNestedManyWithoutModulesInput
  }

  export type modulesUncheckedCreateInput = {
    id?: number
    course_id?: number | null
    title?: string | null
    position?: number | null
    videos?: videosUncheckedCreateNestedManyWithoutModulesInput
  }

  export type modulesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    courses?: coursesUpdateOneWithoutModulesNestedInput
    videos?: videosUpdateManyWithoutModulesNestedInput
  }

  export type modulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    videos?: videosUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type modulesCreateManyInput = {
    id?: number
    course_id?: number | null
    title?: string | null
    position?: number | null
  }

  export type modulesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type modulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentsCreateInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
    courses?: coursesCreateNestedOneWithoutPaymentsInput
    users?: usersCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    course_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
  }

  export type paymentsUpdateInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: coursesUpdateOneWithoutPaymentsNestedInput
    users?: usersUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsCreateManyInput = {
    id?: number
    user_id?: number | null
    course_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
  }

  export type paymentsUpdateManyMutationInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    courses?: coursesCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsCreateNestedManyWithoutUsersInput
    payments?: paymentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    courses?: coursesUncheckedCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUpdateManyWithoutUsersNestedInput
    payments?: paymentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUncheckedUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videosCreateInput = {
    title?: string | null
    video_url?: string | null
    position?: number | null
    modules?: modulesCreateNestedOneWithoutVideosInput
  }

  export type videosUncheckedCreateInput = {
    id?: number
    module_id?: number | null
    title?: string | null
    video_url?: string | null
    position?: number | null
  }

  export type videosUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    modules?: modulesUpdateOneWithoutVideosNestedInput
  }

  export type videosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosCreateManyInput = {
    id?: number
    module_id?: number | null
    title?: string | null
    video_url?: string | null
    position?: number | null
  }

  export type videosUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    module_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type EnrollmentsListRelationFilter = {
    every?: enrollmentsWhereInput
    some?: enrollmentsWhereInput
    none?: enrollmentsWhereInput
  }

  export type ModulesListRelationFilter = {
    every?: modulesWhereInput
    some?: modulesWhereInput
    none?: modulesWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type enrollmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type modulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type coursesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    provider_name?: SortOrder
    thumbnail_url?: SortOrder
    preview_url?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type coursesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    created_by?: SortOrder
  }

  export type coursesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    provider_name?: SortOrder
    thumbnail_url?: SortOrder
    preview_url?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type coursesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    provider_name?: SortOrder
    thumbnail_url?: SortOrder
    preview_url?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type coursesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    created_by?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CoursesNullableScalarRelationFilter = {
    is?: coursesWhereInput | null
    isNot?: coursesWhereInput | null
  }

  export type enrollmentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    enrolled_at?: SortOrder
    paid?: SortOrder
  }

  export type enrollmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
  }

  export type enrollmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    enrolled_at?: SortOrder
    paid?: SortOrder
  }

  export type enrollmentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    enrolled_at?: SortOrder
    paid?: SortOrder
  }

  export type enrollmentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type VideosListRelationFilter = {
    every?: videosWhereInput
    some?: videosWhereInput
    none?: videosWhereInput
  }

  export type videosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type modulesCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    position?: SortOrder
  }

  export type modulesAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    position?: SortOrder
  }

  export type modulesMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    position?: SortOrder
  }

  export type modulesMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    position?: SortOrder
  }

  export type modulesSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    position?: SortOrder
  }

  export type Enumpayment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableFilter<$PrismaModel> | $Enums.payment_status | null
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_date?: SortOrder
    provider?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_date?: SortOrder
    provider?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_date?: SortOrder
    provider?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    amount?: SortOrder
  }

  export type Enumpayment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type CoursesListRelationFilter = {
    every?: coursesWhereInput
    some?: coursesWhereInput
    none?: coursesWhereInput
  }

  export type coursesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type ModulesNullableScalarRelationFilter = {
    is?: modulesWhereInput | null
    isNot?: modulesWhereInput | null
  }

  export type videosCountOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
    video_url?: SortOrder
    position?: SortOrder
  }

  export type videosAvgOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    position?: SortOrder
  }

  export type videosMaxOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
    video_url?: SortOrder
    position?: SortOrder
  }

  export type videosMinOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
    video_url?: SortOrder
    position?: SortOrder
  }

  export type videosSumOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    position?: SortOrder
  }

  export type usersCreateNestedOneWithoutCoursesInput = {
    create?: XOR<usersCreateWithoutCoursesInput, usersUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCoursesInput
    connect?: usersWhereUniqueInput
  }

  export type enrollmentsCreateNestedManyWithoutCoursesInput = {
    create?: XOR<enrollmentsCreateWithoutCoursesInput, enrollmentsUncheckedCreateWithoutCoursesInput> | enrollmentsCreateWithoutCoursesInput[] | enrollmentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCoursesInput | enrollmentsCreateOrConnectWithoutCoursesInput[]
    createMany?: enrollmentsCreateManyCoursesInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type modulesCreateNestedManyWithoutCoursesInput = {
    create?: XOR<modulesCreateWithoutCoursesInput, modulesUncheckedCreateWithoutCoursesInput> | modulesCreateWithoutCoursesInput[] | modulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: modulesCreateOrConnectWithoutCoursesInput | modulesCreateOrConnectWithoutCoursesInput[]
    createMany?: modulesCreateManyCoursesInputEnvelope
    connect?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
  }

  export type paymentsCreateNestedManyWithoutCoursesInput = {
    create?: XOR<paymentsCreateWithoutCoursesInput, paymentsUncheckedCreateWithoutCoursesInput> | paymentsCreateWithoutCoursesInput[] | paymentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutCoursesInput | paymentsCreateOrConnectWithoutCoursesInput[]
    createMany?: paymentsCreateManyCoursesInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type enrollmentsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<enrollmentsCreateWithoutCoursesInput, enrollmentsUncheckedCreateWithoutCoursesInput> | enrollmentsCreateWithoutCoursesInput[] | enrollmentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCoursesInput | enrollmentsCreateOrConnectWithoutCoursesInput[]
    createMany?: enrollmentsCreateManyCoursesInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type modulesUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<modulesCreateWithoutCoursesInput, modulesUncheckedCreateWithoutCoursesInput> | modulesCreateWithoutCoursesInput[] | modulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: modulesCreateOrConnectWithoutCoursesInput | modulesCreateOrConnectWithoutCoursesInput[]
    createMany?: modulesCreateManyCoursesInputEnvelope
    connect?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<paymentsCreateWithoutCoursesInput, paymentsUncheckedCreateWithoutCoursesInput> | paymentsCreateWithoutCoursesInput[] | paymentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutCoursesInput | paymentsCreateOrConnectWithoutCoursesInput[]
    createMany?: paymentsCreateManyCoursesInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<usersCreateWithoutCoursesInput, usersUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCoursesInput
    upsert?: usersUpsertWithoutCoursesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCoursesInput, usersUpdateWithoutCoursesInput>, usersUncheckedUpdateWithoutCoursesInput>
  }

  export type enrollmentsUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<enrollmentsCreateWithoutCoursesInput, enrollmentsUncheckedCreateWithoutCoursesInput> | enrollmentsCreateWithoutCoursesInput[] | enrollmentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCoursesInput | enrollmentsCreateOrConnectWithoutCoursesInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutCoursesInput | enrollmentsUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: enrollmentsCreateManyCoursesInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutCoursesInput | enrollmentsUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutCoursesInput | enrollmentsUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type modulesUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<modulesCreateWithoutCoursesInput, modulesUncheckedCreateWithoutCoursesInput> | modulesCreateWithoutCoursesInput[] | modulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: modulesCreateOrConnectWithoutCoursesInput | modulesCreateOrConnectWithoutCoursesInput[]
    upsert?: modulesUpsertWithWhereUniqueWithoutCoursesInput | modulesUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: modulesCreateManyCoursesInputEnvelope
    set?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    disconnect?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    delete?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    connect?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    update?: modulesUpdateWithWhereUniqueWithoutCoursesInput | modulesUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: modulesUpdateManyWithWhereWithoutCoursesInput | modulesUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: modulesScalarWhereInput | modulesScalarWhereInput[]
  }

  export type paymentsUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<paymentsCreateWithoutCoursesInput, paymentsUncheckedCreateWithoutCoursesInput> | paymentsCreateWithoutCoursesInput[] | paymentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutCoursesInput | paymentsCreateOrConnectWithoutCoursesInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutCoursesInput | paymentsUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: paymentsCreateManyCoursesInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutCoursesInput | paymentsUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutCoursesInput | paymentsUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type enrollmentsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<enrollmentsCreateWithoutCoursesInput, enrollmentsUncheckedCreateWithoutCoursesInput> | enrollmentsCreateWithoutCoursesInput[] | enrollmentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutCoursesInput | enrollmentsCreateOrConnectWithoutCoursesInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutCoursesInput | enrollmentsUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: enrollmentsCreateManyCoursesInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutCoursesInput | enrollmentsUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutCoursesInput | enrollmentsUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type modulesUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<modulesCreateWithoutCoursesInput, modulesUncheckedCreateWithoutCoursesInput> | modulesCreateWithoutCoursesInput[] | modulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: modulesCreateOrConnectWithoutCoursesInput | modulesCreateOrConnectWithoutCoursesInput[]
    upsert?: modulesUpsertWithWhereUniqueWithoutCoursesInput | modulesUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: modulesCreateManyCoursesInputEnvelope
    set?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    disconnect?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    delete?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    connect?: modulesWhereUniqueInput | modulesWhereUniqueInput[]
    update?: modulesUpdateWithWhereUniqueWithoutCoursesInput | modulesUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: modulesUpdateManyWithWhereWithoutCoursesInput | modulesUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: modulesScalarWhereInput | modulesScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<paymentsCreateWithoutCoursesInput, paymentsUncheckedCreateWithoutCoursesInput> | paymentsCreateWithoutCoursesInput[] | paymentsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutCoursesInput | paymentsCreateOrConnectWithoutCoursesInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutCoursesInput | paymentsUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: paymentsCreateManyCoursesInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutCoursesInput | paymentsUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutCoursesInput | paymentsUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type coursesCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<coursesCreateWithoutEnrollmentsInput, coursesUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: coursesCreateOrConnectWithoutEnrollmentsInput
    connect?: coursesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEnrollmentsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type coursesUpdateOneWithoutEnrollmentsNestedInput = {
    create?: XOR<coursesCreateWithoutEnrollmentsInput, coursesUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: coursesCreateOrConnectWithoutEnrollmentsInput
    upsert?: coursesUpsertWithoutEnrollmentsInput
    disconnect?: coursesWhereInput | boolean
    delete?: coursesWhereInput | boolean
    connect?: coursesWhereUniqueInput
    update?: XOR<XOR<coursesUpdateToOneWithWhereWithoutEnrollmentsInput, coursesUpdateWithoutEnrollmentsInput>, coursesUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type usersUpdateOneWithoutEnrollmentsNestedInput = {
    create?: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEnrollmentsInput
    upsert?: usersUpsertWithoutEnrollmentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEnrollmentsInput, usersUpdateWithoutEnrollmentsInput>, usersUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type coursesCreateNestedOneWithoutModulesInput = {
    create?: XOR<coursesCreateWithoutModulesInput, coursesUncheckedCreateWithoutModulesInput>
    connectOrCreate?: coursesCreateOrConnectWithoutModulesInput
    connect?: coursesWhereUniqueInput
  }

  export type videosCreateNestedManyWithoutModulesInput = {
    create?: XOR<videosCreateWithoutModulesInput, videosUncheckedCreateWithoutModulesInput> | videosCreateWithoutModulesInput[] | videosUncheckedCreateWithoutModulesInput[]
    connectOrCreate?: videosCreateOrConnectWithoutModulesInput | videosCreateOrConnectWithoutModulesInput[]
    createMany?: videosCreateManyModulesInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type videosUncheckedCreateNestedManyWithoutModulesInput = {
    create?: XOR<videosCreateWithoutModulesInput, videosUncheckedCreateWithoutModulesInput> | videosCreateWithoutModulesInput[] | videosUncheckedCreateWithoutModulesInput[]
    connectOrCreate?: videosCreateOrConnectWithoutModulesInput | videosCreateOrConnectWithoutModulesInput[]
    createMany?: videosCreateManyModulesInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type coursesUpdateOneWithoutModulesNestedInput = {
    create?: XOR<coursesCreateWithoutModulesInput, coursesUncheckedCreateWithoutModulesInput>
    connectOrCreate?: coursesCreateOrConnectWithoutModulesInput
    upsert?: coursesUpsertWithoutModulesInput
    disconnect?: coursesWhereInput | boolean
    delete?: coursesWhereInput | boolean
    connect?: coursesWhereUniqueInput
    update?: XOR<XOR<coursesUpdateToOneWithWhereWithoutModulesInput, coursesUpdateWithoutModulesInput>, coursesUncheckedUpdateWithoutModulesInput>
  }

  export type videosUpdateManyWithoutModulesNestedInput = {
    create?: XOR<videosCreateWithoutModulesInput, videosUncheckedCreateWithoutModulesInput> | videosCreateWithoutModulesInput[] | videosUncheckedCreateWithoutModulesInput[]
    connectOrCreate?: videosCreateOrConnectWithoutModulesInput | videosCreateOrConnectWithoutModulesInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutModulesInput | videosUpsertWithWhereUniqueWithoutModulesInput[]
    createMany?: videosCreateManyModulesInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutModulesInput | videosUpdateWithWhereUniqueWithoutModulesInput[]
    updateMany?: videosUpdateManyWithWhereWithoutModulesInput | videosUpdateManyWithWhereWithoutModulesInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type videosUncheckedUpdateManyWithoutModulesNestedInput = {
    create?: XOR<videosCreateWithoutModulesInput, videosUncheckedCreateWithoutModulesInput> | videosCreateWithoutModulesInput[] | videosUncheckedCreateWithoutModulesInput[]
    connectOrCreate?: videosCreateOrConnectWithoutModulesInput | videosCreateOrConnectWithoutModulesInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutModulesInput | videosUpsertWithWhereUniqueWithoutModulesInput[]
    createMany?: videosCreateManyModulesInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutModulesInput | videosUpdateWithWhereUniqueWithoutModulesInput[]
    updateMany?: videosUpdateManyWithWhereWithoutModulesInput | videosUpdateManyWithWhereWithoutModulesInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type coursesCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<coursesCreateWithoutPaymentsInput, coursesUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: coursesCreateOrConnectWithoutPaymentsInput
    connect?: coursesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPaymentsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableEnumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status | null
  }

  export type coursesUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<coursesCreateWithoutPaymentsInput, coursesUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: coursesCreateOrConnectWithoutPaymentsInput
    upsert?: coursesUpsertWithoutPaymentsInput
    disconnect?: coursesWhereInput | boolean
    delete?: coursesWhereInput | boolean
    connect?: coursesWhereUniqueInput
    update?: XOR<XOR<coursesUpdateToOneWithWhereWithoutPaymentsInput, coursesUpdateWithoutPaymentsInput>, coursesUncheckedUpdateWithoutPaymentsInput>
  }

  export type usersUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPaymentsInput
    upsert?: usersUpsertWithoutPaymentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPaymentsInput, usersUpdateWithoutPaymentsInput>, usersUncheckedUpdateWithoutPaymentsInput>
  }

  export type coursesCreateNestedManyWithoutUsersInput = {
    create?: XOR<coursesCreateWithoutUsersInput, coursesUncheckedCreateWithoutUsersInput> | coursesCreateWithoutUsersInput[] | coursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutUsersInput | coursesCreateOrConnectWithoutUsersInput[]
    createMany?: coursesCreateManyUsersInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type enrollmentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type paymentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type coursesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<coursesCreateWithoutUsersInput, coursesUncheckedCreateWithoutUsersInput> | coursesCreateWithoutUsersInput[] | coursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutUsersInput | coursesCreateOrConnectWithoutUsersInput[]
    createMany?: coursesCreateManyUsersInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type enrollmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type NullableEnumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role | null
  }

  export type coursesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<coursesCreateWithoutUsersInput, coursesUncheckedCreateWithoutUsersInput> | coursesCreateWithoutUsersInput[] | coursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutUsersInput | coursesCreateOrConnectWithoutUsersInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutUsersInput | coursesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: coursesCreateManyUsersInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutUsersInput | coursesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutUsersInput | coursesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type enrollmentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutUsersInput | enrollmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutUsersInput | enrollmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutUsersInput | enrollmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type paymentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsersInput | paymentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsersInput | paymentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsersInput | paymentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type coursesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<coursesCreateWithoutUsersInput, coursesUncheckedCreateWithoutUsersInput> | coursesCreateWithoutUsersInput[] | coursesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutUsersInput | coursesCreateOrConnectWithoutUsersInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutUsersInput | coursesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: coursesCreateManyUsersInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutUsersInput | coursesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutUsersInput | coursesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type enrollmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput> | enrollmentsCreateWithoutUsersInput[] | enrollmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentsCreateOrConnectWithoutUsersInput | enrollmentsCreateOrConnectWithoutUsersInput[]
    upsert?: enrollmentsUpsertWithWhereUniqueWithoutUsersInput | enrollmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: enrollmentsCreateManyUsersInputEnvelope
    set?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    disconnect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    delete?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    connect?: enrollmentsWhereUniqueInput | enrollmentsWhereUniqueInput[]
    update?: enrollmentsUpdateWithWhereUniqueWithoutUsersInput | enrollmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: enrollmentsUpdateManyWithWhereWithoutUsersInput | enrollmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput> | paymentsCreateWithoutUsersInput[] | paymentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutUsersInput | paymentsCreateOrConnectWithoutUsersInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutUsersInput | paymentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: paymentsCreateManyUsersInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutUsersInput | paymentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutUsersInput | paymentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type modulesCreateNestedOneWithoutVideosInput = {
    create?: XOR<modulesCreateWithoutVideosInput, modulesUncheckedCreateWithoutVideosInput>
    connectOrCreate?: modulesCreateOrConnectWithoutVideosInput
    connect?: modulesWhereUniqueInput
  }

  export type modulesUpdateOneWithoutVideosNestedInput = {
    create?: XOR<modulesCreateWithoutVideosInput, modulesUncheckedCreateWithoutVideosInput>
    connectOrCreate?: modulesCreateOrConnectWithoutVideosInput
    upsert?: modulesUpsertWithoutVideosInput
    disconnect?: modulesWhereInput | boolean
    delete?: modulesWhereInput | boolean
    connect?: modulesWhereUniqueInput
    update?: XOR<XOR<modulesUpdateToOneWithWhereWithoutVideosInput, modulesUpdateWithoutVideosInput>, modulesUncheckedUpdateWithoutVideosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableFilter<$PrismaModel> | $Enums.payment_status | null
  }

  export type NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutCoursesInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    enrollments?: enrollmentsCreateNestedManyWithoutUsersInput
    payments?: paymentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCoursesInput = {
    id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCoursesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCoursesInput, usersUncheckedCreateWithoutCoursesInput>
  }

  export type enrollmentsCreateWithoutCoursesInput = {
    enrolled_at?: Date | string | null
    paid?: boolean | null
    users?: usersCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateWithoutCoursesInput = {
    id?: number
    user_id?: number | null
    enrolled_at?: Date | string | null
    paid?: boolean | null
  }

  export type enrollmentsCreateOrConnectWithoutCoursesInput = {
    where: enrollmentsWhereUniqueInput
    create: XOR<enrollmentsCreateWithoutCoursesInput, enrollmentsUncheckedCreateWithoutCoursesInput>
  }

  export type enrollmentsCreateManyCoursesInputEnvelope = {
    data: enrollmentsCreateManyCoursesInput | enrollmentsCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type modulesCreateWithoutCoursesInput = {
    title?: string | null
    position?: number | null
    videos?: videosCreateNestedManyWithoutModulesInput
  }

  export type modulesUncheckedCreateWithoutCoursesInput = {
    id?: number
    title?: string | null
    position?: number | null
    videos?: videosUncheckedCreateNestedManyWithoutModulesInput
  }

  export type modulesCreateOrConnectWithoutCoursesInput = {
    where: modulesWhereUniqueInput
    create: XOR<modulesCreateWithoutCoursesInput, modulesUncheckedCreateWithoutCoursesInput>
  }

  export type modulesCreateManyCoursesInputEnvelope = {
    data: modulesCreateManyCoursesInput | modulesCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutCoursesInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
    users?: usersCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateWithoutCoursesInput = {
    id?: number
    user_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
  }

  export type paymentsCreateOrConnectWithoutCoursesInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutCoursesInput, paymentsUncheckedCreateWithoutCoursesInput>
  }

  export type paymentsCreateManyCoursesInputEnvelope = {
    data: paymentsCreateManyCoursesInput | paymentsCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCoursesInput = {
    update: XOR<usersUpdateWithoutCoursesInput, usersUncheckedUpdateWithoutCoursesInput>
    create: XOR<usersCreateWithoutCoursesInput, usersUncheckedCreateWithoutCoursesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCoursesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCoursesInput, usersUncheckedUpdateWithoutCoursesInput>
  }

  export type usersUpdateWithoutCoursesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUpdateManyWithoutUsersNestedInput
    payments?: paymentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type enrollmentsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: enrollmentsWhereUniqueInput
    update: XOR<enrollmentsUpdateWithoutCoursesInput, enrollmentsUncheckedUpdateWithoutCoursesInput>
    create: XOR<enrollmentsCreateWithoutCoursesInput, enrollmentsUncheckedCreateWithoutCoursesInput>
  }

  export type enrollmentsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: enrollmentsWhereUniqueInput
    data: XOR<enrollmentsUpdateWithoutCoursesInput, enrollmentsUncheckedUpdateWithoutCoursesInput>
  }

  export type enrollmentsUpdateManyWithWhereWithoutCoursesInput = {
    where: enrollmentsScalarWhereInput
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyWithoutCoursesInput>
  }

  export type enrollmentsScalarWhereInput = {
    AND?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
    OR?: enrollmentsScalarWhereInput[]
    NOT?: enrollmentsScalarWhereInput | enrollmentsScalarWhereInput[]
    id?: IntFilter<"enrollments"> | number
    user_id?: IntNullableFilter<"enrollments"> | number | null
    course_id?: IntNullableFilter<"enrollments"> | number | null
    enrolled_at?: DateTimeNullableFilter<"enrollments"> | Date | string | null
    paid?: BoolNullableFilter<"enrollments"> | boolean | null
  }

  export type modulesUpsertWithWhereUniqueWithoutCoursesInput = {
    where: modulesWhereUniqueInput
    update: XOR<modulesUpdateWithoutCoursesInput, modulesUncheckedUpdateWithoutCoursesInput>
    create: XOR<modulesCreateWithoutCoursesInput, modulesUncheckedCreateWithoutCoursesInput>
  }

  export type modulesUpdateWithWhereUniqueWithoutCoursesInput = {
    where: modulesWhereUniqueInput
    data: XOR<modulesUpdateWithoutCoursesInput, modulesUncheckedUpdateWithoutCoursesInput>
  }

  export type modulesUpdateManyWithWhereWithoutCoursesInput = {
    where: modulesScalarWhereInput
    data: XOR<modulesUpdateManyMutationInput, modulesUncheckedUpdateManyWithoutCoursesInput>
  }

  export type modulesScalarWhereInput = {
    AND?: modulesScalarWhereInput | modulesScalarWhereInput[]
    OR?: modulesScalarWhereInput[]
    NOT?: modulesScalarWhereInput | modulesScalarWhereInput[]
    id?: IntFilter<"modules"> | number
    course_id?: IntNullableFilter<"modules"> | number | null
    title?: StringNullableFilter<"modules"> | string | null
    position?: IntNullableFilter<"modules"> | number | null
  }

  export type paymentsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutCoursesInput, paymentsUncheckedUpdateWithoutCoursesInput>
    create: XOR<paymentsCreateWithoutCoursesInput, paymentsUncheckedCreateWithoutCoursesInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutCoursesInput, paymentsUncheckedUpdateWithoutCoursesInput>
  }

  export type paymentsUpdateManyWithWhereWithoutCoursesInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutCoursesInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    user_id?: IntNullableFilter<"payments"> | number | null
    course_id?: IntNullableFilter<"payments"> | number | null
    amount?: DecimalNullableFilter<"payments"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumpayment_statusNullableFilter<"payments"> | $Enums.payment_status | null
    payment_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    provider?: StringNullableFilter<"payments"> | string | null
  }

  export type coursesCreateWithoutEnrollmentsInput = {
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCoursesInput
    modules?: modulesCreateNestedManyWithoutCoursesInput
    payments?: paymentsCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    modules?: modulesUncheckedCreateNestedManyWithoutCoursesInput
    payments?: paymentsUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutEnrollmentsInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutEnrollmentsInput, coursesUncheckedCreateWithoutEnrollmentsInput>
  }

  export type usersCreateWithoutEnrollmentsInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    courses?: coursesCreateNestedManyWithoutUsersInput
    payments?: paymentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    courses?: coursesUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEnrollmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
  }

  export type coursesUpsertWithoutEnrollmentsInput = {
    update: XOR<coursesUpdateWithoutEnrollmentsInput, coursesUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<coursesCreateWithoutEnrollmentsInput, coursesUncheckedCreateWithoutEnrollmentsInput>
    where?: coursesWhereInput
  }

  export type coursesUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: coursesWhereInput
    data: XOR<coursesUpdateWithoutEnrollmentsInput, coursesUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type coursesUpdateWithoutEnrollmentsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCoursesNestedInput
    modules?: modulesUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modules?: modulesUncheckedUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type usersUpsertWithoutEnrollmentsInput = {
    update: XOR<usersUpdateWithoutEnrollmentsInput, usersUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<usersCreateWithoutEnrollmentsInput, usersUncheckedCreateWithoutEnrollmentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEnrollmentsInput, usersUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type usersUpdateWithoutEnrollmentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUpdateManyWithoutUsersNestedInput
    payments?: paymentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type coursesCreateWithoutModulesInput = {
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCoursesInput
    enrollments?: enrollmentsCreateNestedManyWithoutCoursesInput
    payments?: paymentsCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutModulesInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutCoursesInput
    payments?: paymentsUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutModulesInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutModulesInput, coursesUncheckedCreateWithoutModulesInput>
  }

  export type videosCreateWithoutModulesInput = {
    title?: string | null
    video_url?: string | null
    position?: number | null
  }

  export type videosUncheckedCreateWithoutModulesInput = {
    id?: number
    title?: string | null
    video_url?: string | null
    position?: number | null
  }

  export type videosCreateOrConnectWithoutModulesInput = {
    where: videosWhereUniqueInput
    create: XOR<videosCreateWithoutModulesInput, videosUncheckedCreateWithoutModulesInput>
  }

  export type videosCreateManyModulesInputEnvelope = {
    data: videosCreateManyModulesInput | videosCreateManyModulesInput[]
    skipDuplicates?: boolean
  }

  export type coursesUpsertWithoutModulesInput = {
    update: XOR<coursesUpdateWithoutModulesInput, coursesUncheckedUpdateWithoutModulesInput>
    create: XOR<coursesCreateWithoutModulesInput, coursesUncheckedCreateWithoutModulesInput>
    where?: coursesWhereInput
  }

  export type coursesUpdateToOneWithWhereWithoutModulesInput = {
    where?: coursesWhereInput
    data: XOR<coursesUpdateWithoutModulesInput, coursesUncheckedUpdateWithoutModulesInput>
  }

  export type coursesUpdateWithoutModulesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCoursesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUncheckedUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type videosUpsertWithWhereUniqueWithoutModulesInput = {
    where: videosWhereUniqueInput
    update: XOR<videosUpdateWithoutModulesInput, videosUncheckedUpdateWithoutModulesInput>
    create: XOR<videosCreateWithoutModulesInput, videosUncheckedCreateWithoutModulesInput>
  }

  export type videosUpdateWithWhereUniqueWithoutModulesInput = {
    where: videosWhereUniqueInput
    data: XOR<videosUpdateWithoutModulesInput, videosUncheckedUpdateWithoutModulesInput>
  }

  export type videosUpdateManyWithWhereWithoutModulesInput = {
    where: videosScalarWhereInput
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyWithoutModulesInput>
  }

  export type videosScalarWhereInput = {
    AND?: videosScalarWhereInput | videosScalarWhereInput[]
    OR?: videosScalarWhereInput[]
    NOT?: videosScalarWhereInput | videosScalarWhereInput[]
    id?: IntFilter<"videos"> | number
    module_id?: IntNullableFilter<"videos"> | number | null
    title?: StringNullableFilter<"videos"> | string | null
    video_url?: StringNullableFilter<"videos"> | string | null
    position?: IntNullableFilter<"videos"> | number | null
  }

  export type coursesCreateWithoutPaymentsInput = {
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCoursesInput
    enrollments?: enrollmentsCreateNestedManyWithoutCoursesInput
    modules?: modulesCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutPaymentsInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_by?: number | null
    created_at?: Date | string | null
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutCoursesInput
    modules?: modulesUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutPaymentsInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutPaymentsInput, coursesUncheckedCreateWithoutPaymentsInput>
  }

  export type usersCreateWithoutPaymentsInput = {
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    courses?: coursesCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name?: string | null
    email?: string | null
    password_hash?: string | null
    role?: $Enums.user_role | null
    created_at?: Date | string | null
    courses?: coursesUncheckedCreateNestedManyWithoutUsersInput
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPaymentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
  }

  export type coursesUpsertWithoutPaymentsInput = {
    update: XOR<coursesUpdateWithoutPaymentsInput, coursesUncheckedUpdateWithoutPaymentsInput>
    create: XOR<coursesCreateWithoutPaymentsInput, coursesUncheckedCreateWithoutPaymentsInput>
    where?: coursesWhereInput
  }

  export type coursesUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: coursesWhereInput
    data: XOR<coursesUpdateWithoutPaymentsInput, coursesUncheckedUpdateWithoutPaymentsInput>
  }

  export type coursesUpdateWithoutPaymentsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCoursesNestedInput
    enrollments?: enrollmentsUpdateManyWithoutCoursesNestedInput
    modules?: modulesUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUncheckedUpdateManyWithoutCoursesNestedInput
    modules?: modulesUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type usersUpsertWithoutPaymentsInput = {
    update: XOR<usersUpdateWithoutPaymentsInput, usersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<usersCreateWithoutPaymentsInput, usersUncheckedCreateWithoutPaymentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPaymentsInput, usersUncheckedUpdateWithoutPaymentsInput>
  }

  export type usersUpdateWithoutPaymentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUncheckedUpdateManyWithoutUsersNestedInput
    enrollments?: enrollmentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type coursesCreateWithoutUsersInput = {
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_at?: Date | string | null
    enrollments?: enrollmentsCreateNestedManyWithoutCoursesInput
    modules?: modulesCreateNestedManyWithoutCoursesInput
    payments?: paymentsCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_at?: Date | string | null
    enrollments?: enrollmentsUncheckedCreateNestedManyWithoutCoursesInput
    modules?: modulesUncheckedCreateNestedManyWithoutCoursesInput
    payments?: paymentsUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutUsersInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutUsersInput, coursesUncheckedCreateWithoutUsersInput>
  }

  export type coursesCreateManyUsersInputEnvelope = {
    data: coursesCreateManyUsersInput | coursesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentsCreateWithoutUsersInput = {
    enrolled_at?: Date | string | null
    paid?: boolean | null
    courses?: coursesCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentsUncheckedCreateWithoutUsersInput = {
    id?: number
    course_id?: number | null
    enrolled_at?: Date | string | null
    paid?: boolean | null
  }

  export type enrollmentsCreateOrConnectWithoutUsersInput = {
    where: enrollmentsWhereUniqueInput
    create: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput>
  }

  export type enrollmentsCreateManyUsersInputEnvelope = {
    data: enrollmentsCreateManyUsersInput | enrollmentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutUsersInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
    courses?: coursesCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateWithoutUsersInput = {
    id?: number
    course_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
  }

  export type paymentsCreateOrConnectWithoutUsersInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput>
  }

  export type paymentsCreateManyUsersInputEnvelope = {
    data: paymentsCreateManyUsersInput | paymentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type coursesUpsertWithWhereUniqueWithoutUsersInput = {
    where: coursesWhereUniqueInput
    update: XOR<coursesUpdateWithoutUsersInput, coursesUncheckedUpdateWithoutUsersInput>
    create: XOR<coursesCreateWithoutUsersInput, coursesUncheckedCreateWithoutUsersInput>
  }

  export type coursesUpdateWithWhereUniqueWithoutUsersInput = {
    where: coursesWhereUniqueInput
    data: XOR<coursesUpdateWithoutUsersInput, coursesUncheckedUpdateWithoutUsersInput>
  }

  export type coursesUpdateManyWithWhereWithoutUsersInput = {
    where: coursesScalarWhereInput
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyWithoutUsersInput>
  }

  export type coursesScalarWhereInput = {
    AND?: coursesScalarWhereInput | coursesScalarWhereInput[]
    OR?: coursesScalarWhereInput[]
    NOT?: coursesScalarWhereInput | coursesScalarWhereInput[]
    id?: IntFilter<"courses"> | number
    title?: StringNullableFilter<"courses"> | string | null
    description?: StringNullableFilter<"courses"> | string | null
    price?: DecimalNullableFilter<"courses"> | Decimal | DecimalJsLike | number | string | null
    provider_name?: StringNullableFilter<"courses"> | string | null
    thumbnail_url?: StringNullableFilter<"courses"> | string | null
    preview_url?: StringNullableFilter<"courses"> | string | null
    created_by?: IntNullableFilter<"courses"> | number | null
    created_at?: DateTimeNullableFilter<"courses"> | Date | string | null
  }

  export type enrollmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: enrollmentsWhereUniqueInput
    update: XOR<enrollmentsUpdateWithoutUsersInput, enrollmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<enrollmentsCreateWithoutUsersInput, enrollmentsUncheckedCreateWithoutUsersInput>
  }

  export type enrollmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: enrollmentsWhereUniqueInput
    data: XOR<enrollmentsUpdateWithoutUsersInput, enrollmentsUncheckedUpdateWithoutUsersInput>
  }

  export type enrollmentsUpdateManyWithWhereWithoutUsersInput = {
    where: enrollmentsScalarWhereInput
    data: XOR<enrollmentsUpdateManyMutationInput, enrollmentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type paymentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutUsersInput, paymentsUncheckedUpdateWithoutUsersInput>
    create: XOR<paymentsCreateWithoutUsersInput, paymentsUncheckedCreateWithoutUsersInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutUsersInput, paymentsUncheckedUpdateWithoutUsersInput>
  }

  export type paymentsUpdateManyWithWhereWithoutUsersInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type modulesCreateWithoutVideosInput = {
    title?: string | null
    position?: number | null
    courses?: coursesCreateNestedOneWithoutModulesInput
  }

  export type modulesUncheckedCreateWithoutVideosInput = {
    id?: number
    course_id?: number | null
    title?: string | null
    position?: number | null
  }

  export type modulesCreateOrConnectWithoutVideosInput = {
    where: modulesWhereUniqueInput
    create: XOR<modulesCreateWithoutVideosInput, modulesUncheckedCreateWithoutVideosInput>
  }

  export type modulesUpsertWithoutVideosInput = {
    update: XOR<modulesUpdateWithoutVideosInput, modulesUncheckedUpdateWithoutVideosInput>
    create: XOR<modulesCreateWithoutVideosInput, modulesUncheckedCreateWithoutVideosInput>
    where?: modulesWhereInput
  }

  export type modulesUpdateToOneWithWhereWithoutVideosInput = {
    where?: modulesWhereInput
    data: XOR<modulesUpdateWithoutVideosInput, modulesUncheckedUpdateWithoutVideosInput>
  }

  export type modulesUpdateWithoutVideosInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    courses?: coursesUpdateOneWithoutModulesNestedInput
  }

  export type modulesUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enrollmentsCreateManyCoursesInput = {
    id?: number
    user_id?: number | null
    enrolled_at?: Date | string | null
    paid?: boolean | null
  }

  export type modulesCreateManyCoursesInput = {
    id?: number
    title?: string | null
    position?: number | null
  }

  export type paymentsCreateManyCoursesInput = {
    id?: number
    user_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
  }

  export type enrollmentsUpdateWithoutCoursesInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type enrollmentsUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type modulesUpdateWithoutCoursesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    videos?: videosUpdateManyWithoutModulesNestedInput
  }

  export type modulesUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    videos?: videosUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type modulesUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentsUpdateWithoutCoursesInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videosCreateManyModulesInput = {
    id?: number
    title?: string | null
    video_url?: string | null
    position?: number | null
  }

  export type videosUpdateWithoutModulesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosUncheckedUpdateManyWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type coursesCreateManyUsersInput = {
    id?: number
    title?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    provider_name?: string | null
    thumbnail_url?: string | null
    preview_url?: string | null
    created_at?: Date | string | null
  }

  export type enrollmentsCreateManyUsersInput = {
    id?: number
    course_id?: number | null
    enrolled_at?: Date | string | null
    paid?: boolean | null
  }

  export type paymentsCreateManyUsersInput = {
    id?: number
    course_id?: number | null
    amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.payment_status | null
    payment_date?: Date | string | null
    provider?: string | null
  }

  export type coursesUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUpdateManyWithoutCoursesNestedInput
    modules?: modulesUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: enrollmentsUncheckedUpdateManyWithoutCoursesNestedInput
    modules?: modulesUncheckedUpdateManyWithoutCoursesNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enrollmentsUpdateWithoutUsersInput = {
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    courses?: coursesUpdateOneWithoutEnrollmentsNestedInput
  }

  export type enrollmentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type enrollmentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrolled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type paymentsUpdateWithoutUsersInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: coursesUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableEnumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}