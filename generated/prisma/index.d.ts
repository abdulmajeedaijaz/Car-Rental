
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model brands
 * 
 */
export type brands = $Result.DefaultSelection<Prisma.$brandsPayload>
/**
 * Model models
 * 
 */
export type models = $Result.DefaultSelection<Prisma.$modelsPayload>
/**
 * Model variants
 * 
 */
export type variants = $Result.DefaultSelection<Prisma.$variantsPayload>
/**
 * Model states
 * 
 */
export type states = $Result.DefaultSelection<Prisma.$statesPayload>
/**
 * Model cities
 * 
 */
export type cities = $Result.DefaultSelection<Prisma.$citiesPayload>
/**
 * Model checklist_categories
 * 
 */
export type checklist_categories = $Result.DefaultSelection<Prisma.$checklist_categoriesPayload>
/**
 * Model checklist_options
 * 
 */
export type checklist_options = $Result.DefaultSelection<Prisma.$checklist_optionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  HOSTER: 'HOSTER',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brands`: Exposes CRUD operations for the **brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.brandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.models`: Exposes CRUD operations for the **models** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.models.findMany()
    * ```
    */
  get models(): Prisma.modelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variants`: Exposes CRUD operations for the **variants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variants.findMany()
    * ```
    */
  get variants(): Prisma.variantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.states`: Exposes CRUD operations for the **states** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.states.findMany()
    * ```
    */
  get states(): Prisma.statesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist_categories`: Exposes CRUD operations for the **checklist_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklist_categories
    * const checklist_categories = await prisma.checklist_categories.findMany()
    * ```
    */
  get checklist_categories(): Prisma.checklist_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist_options`: Exposes CRUD operations for the **checklist_options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklist_options
    * const checklist_options = await prisma.checklist_options.findMany()
    * ```
    */
  get checklist_options(): Prisma.checklist_optionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    user: 'user',
    brands: 'brands',
    models: 'models',
    variants: 'variants',
    states: 'states',
    cities: 'cities',
    checklist_categories: 'checklist_categories',
    checklist_options: 'checklist_options'
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
      modelProps: "user" | "brands" | "models" | "variants" | "states" | "cities" | "checklist_categories" | "checklist_options"
      txIsolationLevel: never
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.userFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.userAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      brands: {
        payload: Prisma.$brandsPayload<ExtArgs>
        fields: Prisma.brandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.brandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.brandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findFirst: {
            args: Prisma.brandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.brandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findMany: {
            args: Prisma.brandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>[]
          }
          create: {
            args: Prisma.brandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          createMany: {
            args: Prisma.brandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.brandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          update: {
            args: Prisma.brandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          deleteMany: {
            args: Prisma.brandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.brandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.brandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.brandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.brandsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.brandsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.brandsCountArgs<ExtArgs>
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      models: {
        payload: Prisma.$modelsPayload<ExtArgs>
        fields: Prisma.modelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          findFirst: {
            args: Prisma.modelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          findMany: {
            args: Prisma.modelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>[]
          }
          create: {
            args: Prisma.modelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          createMany: {
            args: Prisma.modelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.modelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          update: {
            args: Prisma.modelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          deleteMany: {
            args: Prisma.modelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.modelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          aggregate: {
            args: Prisma.ModelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModels>
          }
          groupBy: {
            args: Prisma.modelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.modelsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.modelsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.modelsCountArgs<ExtArgs>
            result: $Utils.Optional<ModelsCountAggregateOutputType> | number
          }
        }
      }
      variants: {
        payload: Prisma.$variantsPayload<ExtArgs>
        fields: Prisma.variantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          findFirst: {
            args: Prisma.variantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          findMany: {
            args: Prisma.variantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>[]
          }
          create: {
            args: Prisma.variantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          createMany: {
            args: Prisma.variantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.variantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          update: {
            args: Prisma.variantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          deleteMany: {
            args: Prisma.variantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.variantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          aggregate: {
            args: Prisma.VariantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariants>
          }
          groupBy: {
            args: Prisma.variantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.variantsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.variantsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.variantsCountArgs<ExtArgs>
            result: $Utils.Optional<VariantsCountAggregateOutputType> | number
          }
        }
      }
      states: {
        payload: Prisma.$statesPayload<ExtArgs>
        fields: Prisma.statesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          findFirst: {
            args: Prisma.statesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          findMany: {
            args: Prisma.statesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>[]
          }
          create: {
            args: Prisma.statesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          createMany: {
            args: Prisma.statesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.statesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          update: {
            args: Prisma.statesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          deleteMany: {
            args: Prisma.statesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.statesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          aggregate: {
            args: Prisma.StatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStates>
          }
          groupBy: {
            args: Prisma.statesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.statesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.statesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.statesCountArgs<ExtArgs>
            result: $Utils.Optional<StatesCountAggregateOutputType> | number
          }
        }
      }
      cities: {
        payload: Prisma.$citiesPayload<ExtArgs>
        fields: Prisma.citiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.citiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.citiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findFirst: {
            args: Prisma.citiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.citiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findMany: {
            args: Prisma.citiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          create: {
            args: Prisma.citiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          createMany: {
            args: Prisma.citiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.citiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          update: {
            args: Prisma.citiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          deleteMany: {
            args: Prisma.citiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.citiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.citiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          aggregate: {
            args: Prisma.CitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCities>
          }
          groupBy: {
            args: Prisma.citiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitiesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.citiesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.citiesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.citiesCountArgs<ExtArgs>
            result: $Utils.Optional<CitiesCountAggregateOutputType> | number
          }
        }
      }
      checklist_categories: {
        payload: Prisma.$checklist_categoriesPayload<ExtArgs>
        fields: Prisma.checklist_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.checklist_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.checklist_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload>
          }
          findFirst: {
            args: Prisma.checklist_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.checklist_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload>
          }
          findMany: {
            args: Prisma.checklist_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload>[]
          }
          create: {
            args: Prisma.checklist_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload>
          }
          createMany: {
            args: Prisma.checklist_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.checklist_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload>
          }
          update: {
            args: Prisma.checklist_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.checklist_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.checklist_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.checklist_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Checklist_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist_categories>
          }
          groupBy: {
            args: Prisma.checklist_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Checklist_categoriesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.checklist_categoriesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.checklist_categoriesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.checklist_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Checklist_categoriesCountAggregateOutputType> | number
          }
        }
      }
      checklist_options: {
        payload: Prisma.$checklist_optionsPayload<ExtArgs>
        fields: Prisma.checklist_optionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.checklist_optionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.checklist_optionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload>
          }
          findFirst: {
            args: Prisma.checklist_optionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.checklist_optionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload>
          }
          findMany: {
            args: Prisma.checklist_optionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload>[]
          }
          create: {
            args: Prisma.checklist_optionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload>
          }
          createMany: {
            args: Prisma.checklist_optionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.checklist_optionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload>
          }
          update: {
            args: Prisma.checklist_optionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload>
          }
          deleteMany: {
            args: Prisma.checklist_optionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.checklist_optionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.checklist_optionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checklist_optionsPayload>
          }
          aggregate: {
            args: Prisma.Checklist_optionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist_options>
          }
          groupBy: {
            args: Prisma.checklist_optionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Checklist_optionsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.checklist_optionsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.checklist_optionsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.checklist_optionsCountArgs<ExtArgs>
            result: $Utils.Optional<Checklist_optionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: userOmit
    brands?: brandsOmit
    models?: modelsOmit
    variants?: variantsOmit
    states?: statesOmit
    cities?: citiesOmit
    checklist_categories?: checklist_categoriesOmit
    checklist_options?: checklist_optionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BrandsCountOutputType
   */

  export type BrandsCountOutputType = {
    models: number
  }

  export type BrandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | BrandsCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes
  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     */
    select?: BrandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modelsWhereInput
  }


  /**
   * Count Type ModelsCountOutputType
   */

  export type ModelsCountOutputType = {
    variants: number
  }

  export type ModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ModelsCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelsCountOutputType
     */
    select?: ModelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantsWhereInput
  }


  /**
   * Count Type StatesCountOutputType
   */

  export type StatesCountOutputType = {
    cities: number
  }

  export type StatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | StatesCountOutputTypeCountCitiesArgs
  }

  // Custom InputTypes
  /**
   * StatesCountOutputType without action
   */
  export type StatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatesCountOutputType
     */
    select?: StatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatesCountOutputType without action
   */
  export type StatesCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    password: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    password: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    role: number
    is_active: number
    password: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    role?: true
    is_active?: true
    password?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    role?: true
    is_active?: true
    password?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    role?: true
    is_active?: true
    password?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    role: $Enums.Role
    is_active: boolean
    password: string
    craetedAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    role?: boolean
    is_active?: boolean
    password?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    role?: boolean
    is_active?: boolean
    password?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "role" | "is_active" | "password" | "craetedAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      role: $Enums.Role
      is_active: boolean
      password: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: userFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: userAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'Role'>
    readonly is_active: FieldRef<"user", 'Boolean'>
    readonly password: FieldRef<"user", 'String'>
    readonly craetedAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user findRaw
   */
  export type userFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user aggregateRaw
   */
  export type userAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsMinAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    name: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type BrandsMinAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to aggregate.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type brandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: brandsWhereInput
    orderBy?: brandsOrderByWithAggregationInput | brandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: brandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: string
    name: string
    craetedAt: Date
    updatedAt: Date
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends brandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type brandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    models?: boolean | brands$modelsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brands"]>



  export type brandsSelectScalar = {
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type brandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "craetedAt" | "updatedAt", ExtArgs["result"]["brands"]>
  export type brandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | brands$modelsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $brandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "brands"
    objects: {
      models: Prisma.$modelsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }

  type brandsGetPayload<S extends boolean | null | undefined | brandsDefaultArgs> = $Result.GetResult<Prisma.$brandsPayload, S>

  type brandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<brandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface brandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['brands'], meta: { name: 'brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {brandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends brandsFindUniqueArgs>(args: SelectSubset<T, brandsFindUniqueArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {brandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends brandsFindUniqueOrThrowArgs>(args: SelectSubset<T, brandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends brandsFindFirstArgs>(args?: SelectSubset<T, brandsFindFirstArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends brandsFindFirstOrThrowArgs>(args?: SelectSubset<T, brandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends brandsFindManyArgs>(args?: SelectSubset<T, brandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brands.
     * @param {brandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
     */
    create<T extends brandsCreateArgs>(args: SelectSubset<T, brandsCreateArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {brandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends brandsCreateManyArgs>(args?: SelectSubset<T, brandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brands.
     * @param {brandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
     */
    delete<T extends brandsDeleteArgs>(args: SelectSubset<T, brandsDeleteArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brands.
     * @param {brandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends brandsUpdateArgs>(args: SelectSubset<T, brandsUpdateArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {brandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends brandsDeleteManyArgs>(args?: SelectSubset<T, brandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends brandsUpdateManyArgs>(args: SelectSubset<T, brandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brands.
     * @param {brandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends brandsUpsertArgs>(args: SelectSubset<T, brandsUpsertArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * @param {brandsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const brands = await prisma.brands.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: brandsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Brands.
     * @param {brandsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const brands = await prisma.brands.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: brandsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends brandsCountArgs>(
      args?: Subset<T, brandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsGroupByArgs} args - Group by arguments.
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
      T extends brandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: brandsGroupByArgs['orderBy'] }
        : { orderBy?: brandsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, brandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the brands model
   */
  readonly fields: brandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__brandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends brands$modelsArgs<ExtArgs> = {}>(args?: Subset<T, brands$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the brands model
   */
  interface brandsFieldRefs {
    readonly id: FieldRef<"brands", 'String'>
    readonly name: FieldRef<"brands", 'String'>
    readonly craetedAt: FieldRef<"brands", 'DateTime'>
    readonly updatedAt: FieldRef<"brands", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * brands findUnique
   */
  export type brandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands findUniqueOrThrow
   */
  export type brandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands findFirst
   */
  export type brandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands findFirstOrThrow
   */
  export type brandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands findMany
   */
  export type brandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands create
   */
  export type brandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The data needed to create a brands.
     */
    data: XOR<brandsCreateInput, brandsUncheckedCreateInput>
  }

  /**
   * brands createMany
   */
  export type brandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many brands.
     */
    data: brandsCreateManyInput | brandsCreateManyInput[]
  }

  /**
   * brands update
   */
  export type brandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The data needed to update a brands.
     */
    data: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
    /**
     * Choose, which brands to update.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands updateMany
   */
  export type brandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update brands.
     */
    data: XOR<brandsUpdateManyMutationInput, brandsUncheckedUpdateManyInput>
    /**
     * Filter which brands to update
     */
    where?: brandsWhereInput
    /**
     * Limit how many brands to update.
     */
    limit?: number
  }

  /**
   * brands upsert
   */
  export type brandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The filter to search for the brands to update in case it exists.
     */
    where: brandsWhereUniqueInput
    /**
     * In case the brands found by the `where` argument doesn't exist, create a new brands with this data.
     */
    create: XOR<brandsCreateInput, brandsUncheckedCreateInput>
    /**
     * In case the brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
  }

  /**
   * brands delete
   */
  export type brandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter which brands to delete.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands deleteMany
   */
  export type brandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to delete
     */
    where?: brandsWhereInput
    /**
     * Limit how many brands to delete.
     */
    limit?: number
  }

  /**
   * brands findRaw
   */
  export type brandsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * brands aggregateRaw
   */
  export type brandsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * brands.models
   */
  export type brands$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    where?: modelsWhereInput
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    cursor?: modelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * brands without action
   */
  export type brandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
  }


  /**
   * Model models
   */

  export type AggregateModels = {
    _count: ModelsCountAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  export type ModelsMinAggregateOutputType = {
    id: string | null
    name: string | null
    brandId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type ModelsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brandId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type ModelsCountAggregateOutputType = {
    id: number
    name: number
    brandId: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type ModelsMinAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type ModelsMaxAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type ModelsCountAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which models to aggregate.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned models
    **/
    _count?: true | ModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelsMaxAggregateInputType
  }

  export type GetModelsAggregateType<T extends ModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModels[P]>
      : GetScalarType<T[P], AggregateModels[P]>
  }




  export type modelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modelsWhereInput
    orderBy?: modelsOrderByWithAggregationInput | modelsOrderByWithAggregationInput[]
    by: ModelsScalarFieldEnum[] | ModelsScalarFieldEnum
    having?: modelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelsCountAggregateInputType | true
    _min?: ModelsMinAggregateInputType
    _max?: ModelsMaxAggregateInputType
  }

  export type ModelsGroupByOutputType = {
    id: string
    name: string
    brandId: string
    craetedAt: Date
    updatedAt: Date
    _count: ModelsCountAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  type GetModelsGroupByPayload<T extends modelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelsGroupByOutputType[P]>
            : GetScalarType<T[P], ModelsGroupByOutputType[P]>
        }
      >
    >


  export type modelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    brand?: boolean | brandsDefaultArgs<ExtArgs>
    variants?: boolean | models$variantsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>



  export type modelsSelectScalar = {
    id?: boolean
    name?: boolean
    brandId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type modelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brandId" | "craetedAt" | "updatedAt", ExtArgs["result"]["models"]>
  export type modelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | brandsDefaultArgs<ExtArgs>
    variants?: boolean | models$variantsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $modelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "models"
    objects: {
      brand: Prisma.$brandsPayload<ExtArgs>
      variants: Prisma.$variantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brandId: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["models"]>
    composites: {}
  }

  type modelsGetPayload<S extends boolean | null | undefined | modelsDefaultArgs> = $Result.GetResult<Prisma.$modelsPayload, S>

  type modelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<modelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelsCountAggregateInputType | true
    }

  export interface modelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['models'], meta: { name: 'models' } }
    /**
     * Find zero or one Models that matches the filter.
     * @param {modelsFindUniqueArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modelsFindUniqueArgs>(args: SelectSubset<T, modelsFindUniqueArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Models that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {modelsFindUniqueOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modelsFindUniqueOrThrowArgs>(args: SelectSubset<T, modelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsFindFirstArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modelsFindFirstArgs>(args?: SelectSubset<T, modelsFindFirstArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsFindFirstOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modelsFindFirstOrThrowArgs>(args?: SelectSubset<T, modelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.models.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.models.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelsWithIdOnly = await prisma.models.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends modelsFindManyArgs>(args?: SelectSubset<T, modelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Models.
     * @param {modelsCreateArgs} args - Arguments to create a Models.
     * @example
     * // Create one Models
     * const Models = await prisma.models.create({
     *   data: {
     *     // ... data to create a Models
     *   }
     * })
     * 
     */
    create<T extends modelsCreateArgs>(args: SelectSubset<T, modelsCreateArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {modelsCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modelsCreateManyArgs>(args?: SelectSubset<T, modelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Models.
     * @param {modelsDeleteArgs} args - Arguments to delete one Models.
     * @example
     * // Delete one Models
     * const Models = await prisma.models.delete({
     *   where: {
     *     // ... filter to delete one Models
     *   }
     * })
     * 
     */
    delete<T extends modelsDeleteArgs>(args: SelectSubset<T, modelsDeleteArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Models.
     * @param {modelsUpdateArgs} args - Arguments to update one Models.
     * @example
     * // Update one Models
     * const models = await prisma.models.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modelsUpdateArgs>(args: SelectSubset<T, modelsUpdateArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {modelsDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.models.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modelsDeleteManyArgs>(args?: SelectSubset<T, modelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modelsUpdateManyArgs>(args: SelectSubset<T, modelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Models.
     * @param {modelsUpsertArgs} args - Arguments to update or create a Models.
     * @example
     * // Update or create a Models
     * const models = await prisma.models.upsert({
     *   create: {
     *     // ... data to create a Models
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Models we want to update
     *   }
     * })
     */
    upsert<T extends modelsUpsertArgs>(args: SelectSubset<T, modelsUpsertArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * @param {modelsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const models = await prisma.models.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: modelsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Models.
     * @param {modelsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const models = await prisma.models.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: modelsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.models.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends modelsCountArgs>(
      args?: Subset<T, modelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelsAggregateArgs>(args: Subset<T, ModelsAggregateArgs>): Prisma.PrismaPromise<GetModelsAggregateType<T>>

    /**
     * Group by Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsGroupByArgs} args - Group by arguments.
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
      T extends modelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modelsGroupByArgs['orderBy'] }
        : { orderBy?: modelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, modelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the models model
   */
  readonly fields: modelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for models.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends brandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, brandsDefaultArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends models$variantsArgs<ExtArgs> = {}>(args?: Subset<T, models$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the models model
   */
  interface modelsFieldRefs {
    readonly id: FieldRef<"models", 'String'>
    readonly name: FieldRef<"models", 'String'>
    readonly brandId: FieldRef<"models", 'String'>
    readonly craetedAt: FieldRef<"models", 'DateTime'>
    readonly updatedAt: FieldRef<"models", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * models findUnique
   */
  export type modelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models findUniqueOrThrow
   */
  export type modelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models findFirst
   */
  export type modelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for models.
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * models findFirstOrThrow
   */
  export type modelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for models.
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * models findMany
   */
  export type modelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing models.
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * models create
   */
  export type modelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * The data needed to create a models.
     */
    data: XOR<modelsCreateInput, modelsUncheckedCreateInput>
  }

  /**
   * models createMany
   */
  export type modelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many models.
     */
    data: modelsCreateManyInput | modelsCreateManyInput[]
  }

  /**
   * models update
   */
  export type modelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * The data needed to update a models.
     */
    data: XOR<modelsUpdateInput, modelsUncheckedUpdateInput>
    /**
     * Choose, which models to update.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models updateMany
   */
  export type modelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update models.
     */
    data: XOR<modelsUpdateManyMutationInput, modelsUncheckedUpdateManyInput>
    /**
     * Filter which models to update
     */
    where?: modelsWhereInput
    /**
     * Limit how many models to update.
     */
    limit?: number
  }

  /**
   * models upsert
   */
  export type modelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * The filter to search for the models to update in case it exists.
     */
    where: modelsWhereUniqueInput
    /**
     * In case the models found by the `where` argument doesn't exist, create a new models with this data.
     */
    create: XOR<modelsCreateInput, modelsUncheckedCreateInput>
    /**
     * In case the models was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modelsUpdateInput, modelsUncheckedUpdateInput>
  }

  /**
   * models delete
   */
  export type modelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter which models to delete.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models deleteMany
   */
  export type modelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which models to delete
     */
    where?: modelsWhereInput
    /**
     * Limit how many models to delete.
     */
    limit?: number
  }

  /**
   * models findRaw
   */
  export type modelsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * models aggregateRaw
   */
  export type modelsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * models.variants
   */
  export type models$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    where?: variantsWhereInput
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    cursor?: variantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * models without action
   */
  export type modelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
  }


  /**
   * Model variants
   */

  export type AggregateVariants = {
    _count: VariantsCountAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  export type VariantsMinAggregateOutputType = {
    id: string | null
    name: string | null
    modelId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type VariantsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    modelId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type VariantsCountAggregateOutputType = {
    id: number
    name: number
    modelId: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type VariantsMinAggregateInputType = {
    id?: true
    name?: true
    modelId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type VariantsMaxAggregateInputType = {
    id?: true
    name?: true
    modelId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type VariantsCountAggregateInputType = {
    id?: true
    name?: true
    modelId?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variants to aggregate.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variants
    **/
    _count?: true | VariantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantsMaxAggregateInputType
  }

  export type GetVariantsAggregateType<T extends VariantsAggregateArgs> = {
        [P in keyof T & keyof AggregateVariants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariants[P]>
      : GetScalarType<T[P], AggregateVariants[P]>
  }




  export type variantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantsWhereInput
    orderBy?: variantsOrderByWithAggregationInput | variantsOrderByWithAggregationInput[]
    by: VariantsScalarFieldEnum[] | VariantsScalarFieldEnum
    having?: variantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantsCountAggregateInputType | true
    _min?: VariantsMinAggregateInputType
    _max?: VariantsMaxAggregateInputType
  }

  export type VariantsGroupByOutputType = {
    id: string
    name: string
    modelId: string
    craetedAt: Date
    updatedAt: Date
    _count: VariantsCountAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  type GetVariantsGroupByPayload<T extends variantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantsGroupByOutputType[P]>
            : GetScalarType<T[P], VariantsGroupByOutputType[P]>
        }
      >
    >


  export type variantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    modelId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    model?: boolean | modelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variants"]>



  export type variantsSelectScalar = {
    id?: boolean
    name?: boolean
    modelId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type variantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "modelId" | "craetedAt" | "updatedAt", ExtArgs["result"]["variants"]>
  export type variantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | modelsDefaultArgs<ExtArgs>
  }

  export type $variantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variants"
    objects: {
      model: Prisma.$modelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      modelId: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variants"]>
    composites: {}
  }

  type variantsGetPayload<S extends boolean | null | undefined | variantsDefaultArgs> = $Result.GetResult<Prisma.$variantsPayload, S>

  type variantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantsCountAggregateInputType | true
    }

  export interface variantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variants'], meta: { name: 'variants' } }
    /**
     * Find zero or one Variants that matches the filter.
     * @param {variantsFindUniqueArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variantsFindUniqueArgs>(args: SelectSubset<T, variantsFindUniqueArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variantsFindUniqueOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variantsFindUniqueOrThrowArgs>(args: SelectSubset<T, variantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsFindFirstArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variantsFindFirstArgs>(args?: SelectSubset<T, variantsFindFirstArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsFindFirstOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variantsFindFirstOrThrowArgs>(args?: SelectSubset<T, variantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variants.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantsWithIdOnly = await prisma.variants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends variantsFindManyArgs>(args?: SelectSubset<T, variantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variants.
     * @param {variantsCreateArgs} args - Arguments to create a Variants.
     * @example
     * // Create one Variants
     * const Variants = await prisma.variants.create({
     *   data: {
     *     // ... data to create a Variants
     *   }
     * })
     * 
     */
    create<T extends variantsCreateArgs>(args: SelectSubset<T, variantsCreateArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {variantsCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variants = await prisma.variants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variantsCreateManyArgs>(args?: SelectSubset<T, variantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Variants.
     * @param {variantsDeleteArgs} args - Arguments to delete one Variants.
     * @example
     * // Delete one Variants
     * const Variants = await prisma.variants.delete({
     *   where: {
     *     // ... filter to delete one Variants
     *   }
     * })
     * 
     */
    delete<T extends variantsDeleteArgs>(args: SelectSubset<T, variantsDeleteArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variants.
     * @param {variantsUpdateArgs} args - Arguments to update one Variants.
     * @example
     * // Update one Variants
     * const variants = await prisma.variants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variantsUpdateArgs>(args: SelectSubset<T, variantsUpdateArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {variantsDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variantsDeleteManyArgs>(args?: SelectSubset<T, variantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variants = await prisma.variants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variantsUpdateManyArgs>(args: SelectSubset<T, variantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variants.
     * @param {variantsUpsertArgs} args - Arguments to update or create a Variants.
     * @example
     * // Update or create a Variants
     * const variants = await prisma.variants.upsert({
     *   create: {
     *     // ... data to create a Variants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variants we want to update
     *   }
     * })
     */
    upsert<T extends variantsUpsertArgs>(args: SelectSubset<T, variantsUpsertArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * @param {variantsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const variants = await prisma.variants.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: variantsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Variants.
     * @param {variantsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const variants = await prisma.variants.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: variantsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variants.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends variantsCountArgs>(
      args?: Subset<T, variantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantsAggregateArgs>(args: Subset<T, VariantsAggregateArgs>): Prisma.PrismaPromise<GetVariantsAggregateType<T>>

    /**
     * Group by Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsGroupByArgs} args - Group by arguments.
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
      T extends variantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variantsGroupByArgs['orderBy'] }
        : { orderBy?: variantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, variantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variants model
   */
  readonly fields: variantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends modelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, modelsDefaultArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the variants model
   */
  interface variantsFieldRefs {
    readonly id: FieldRef<"variants", 'String'>
    readonly name: FieldRef<"variants", 'String'>
    readonly modelId: FieldRef<"variants", 'String'>
    readonly craetedAt: FieldRef<"variants", 'DateTime'>
    readonly updatedAt: FieldRef<"variants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * variants findUnique
   */
  export type variantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants findUniqueOrThrow
   */
  export type variantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants findFirst
   */
  export type variantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variants.
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * variants findFirstOrThrow
   */
  export type variantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variants.
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * variants findMany
   */
  export type variantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variants.
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * variants create
   */
  export type variantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * The data needed to create a variants.
     */
    data: XOR<variantsCreateInput, variantsUncheckedCreateInput>
  }

  /**
   * variants createMany
   */
  export type variantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variants.
     */
    data: variantsCreateManyInput | variantsCreateManyInput[]
  }

  /**
   * variants update
   */
  export type variantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * The data needed to update a variants.
     */
    data: XOR<variantsUpdateInput, variantsUncheckedUpdateInput>
    /**
     * Choose, which variants to update.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants updateMany
   */
  export type variantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variants.
     */
    data: XOR<variantsUpdateManyMutationInput, variantsUncheckedUpdateManyInput>
    /**
     * Filter which variants to update
     */
    where?: variantsWhereInput
    /**
     * Limit how many variants to update.
     */
    limit?: number
  }

  /**
   * variants upsert
   */
  export type variantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * The filter to search for the variants to update in case it exists.
     */
    where: variantsWhereUniqueInput
    /**
     * In case the variants found by the `where` argument doesn't exist, create a new variants with this data.
     */
    create: XOR<variantsCreateInput, variantsUncheckedCreateInput>
    /**
     * In case the variants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variantsUpdateInput, variantsUncheckedUpdateInput>
  }

  /**
   * variants delete
   */
  export type variantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter which variants to delete.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants deleteMany
   */
  export type variantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variants to delete
     */
    where?: variantsWhereInput
    /**
     * Limit how many variants to delete.
     */
    limit?: number
  }

  /**
   * variants findRaw
   */
  export type variantsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * variants aggregateRaw
   */
  export type variantsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * variants without action
   */
  export type variantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
  }


  /**
   * Model states
   */

  export type AggregateStates = {
    _count: StatesCountAggregateOutputType | null
    _min: StatesMinAggregateOutputType | null
    _max: StatesMaxAggregateOutputType | null
  }

  export type StatesMinAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type StatesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type StatesCountAggregateOutputType = {
    id: number
    name: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type StatesMinAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type StatesMaxAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type StatesCountAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which states to aggregate.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned states
    **/
    _count?: true | StatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatesMaxAggregateInputType
  }

  export type GetStatesAggregateType<T extends StatesAggregateArgs> = {
        [P in keyof T & keyof AggregateStates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStates[P]>
      : GetScalarType<T[P], AggregateStates[P]>
  }




  export type statesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statesWhereInput
    orderBy?: statesOrderByWithAggregationInput | statesOrderByWithAggregationInput[]
    by: StatesScalarFieldEnum[] | StatesScalarFieldEnum
    having?: statesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatesCountAggregateInputType | true
    _min?: StatesMinAggregateInputType
    _max?: StatesMaxAggregateInputType
  }

  export type StatesGroupByOutputType = {
    id: string
    name: string
    craetedAt: Date
    updatedAt: Date
    _count: StatesCountAggregateOutputType | null
    _min: StatesMinAggregateOutputType | null
    _max: StatesMaxAggregateOutputType | null
  }

  type GetStatesGroupByPayload<T extends statesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatesGroupByOutputType[P]>
            : GetScalarType<T[P], StatesGroupByOutputType[P]>
        }
      >
    >


  export type statesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    cities?: boolean | states$citiesArgs<ExtArgs>
    _count?: boolean | StatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["states"]>



  export type statesSelectScalar = {
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type statesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "craetedAt" | "updatedAt", ExtArgs["result"]["states"]>
  export type statesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | states$citiesArgs<ExtArgs>
    _count?: boolean | StatesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $statesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "states"
    objects: {
      cities: Prisma.$citiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["states"]>
    composites: {}
  }

  type statesGetPayload<S extends boolean | null | undefined | statesDefaultArgs> = $Result.GetResult<Prisma.$statesPayload, S>

  type statesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<statesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatesCountAggregateInputType | true
    }

  export interface statesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['states'], meta: { name: 'states' } }
    /**
     * Find zero or one States that matches the filter.
     * @param {statesFindUniqueArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statesFindUniqueArgs>(args: SelectSubset<T, statesFindUniqueArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one States that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {statesFindUniqueOrThrowArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statesFindUniqueOrThrowArgs>(args: SelectSubset<T, statesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindFirstArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statesFindFirstArgs>(args?: SelectSubset<T, statesFindFirstArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first States that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindFirstOrThrowArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statesFindFirstOrThrowArgs>(args?: SelectSubset<T, statesFindFirstOrThrowArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.states.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.states.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statesWithIdOnly = await prisma.states.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends statesFindManyArgs>(args?: SelectSubset<T, statesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a States.
     * @param {statesCreateArgs} args - Arguments to create a States.
     * @example
     * // Create one States
     * const States = await prisma.states.create({
     *   data: {
     *     // ... data to create a States
     *   }
     * })
     * 
     */
    create<T extends statesCreateArgs>(args: SelectSubset<T, statesCreateArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {statesCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const states = await prisma.states.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends statesCreateManyArgs>(args?: SelectSubset<T, statesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a States.
     * @param {statesDeleteArgs} args - Arguments to delete one States.
     * @example
     * // Delete one States
     * const States = await prisma.states.delete({
     *   where: {
     *     // ... filter to delete one States
     *   }
     * })
     * 
     */
    delete<T extends statesDeleteArgs>(args: SelectSubset<T, statesDeleteArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one States.
     * @param {statesUpdateArgs} args - Arguments to update one States.
     * @example
     * // Update one States
     * const states = await prisma.states.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends statesUpdateArgs>(args: SelectSubset<T, statesUpdateArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {statesDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.states.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends statesDeleteManyArgs>(args?: SelectSubset<T, statesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const states = await prisma.states.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends statesUpdateManyArgs>(args: SelectSubset<T, statesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one States.
     * @param {statesUpsertArgs} args - Arguments to update or create a States.
     * @example
     * // Update or create a States
     * const states = await prisma.states.upsert({
     *   create: {
     *     // ... data to create a States
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the States we want to update
     *   }
     * })
     */
    upsert<T extends statesUpsertArgs>(args: SelectSubset<T, statesUpsertArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * @param {statesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const states = await prisma.states.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: statesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a States.
     * @param {statesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const states = await prisma.states.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: statesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.states.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends statesCountArgs>(
      args?: Subset<T, statesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatesAggregateArgs>(args: Subset<T, StatesAggregateArgs>): Prisma.PrismaPromise<GetStatesAggregateType<T>>

    /**
     * Group by States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesGroupByArgs} args - Group by arguments.
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
      T extends statesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statesGroupByArgs['orderBy'] }
        : { orderBy?: statesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, statesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the states model
   */
  readonly fields: statesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for states.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends states$citiesArgs<ExtArgs> = {}>(args?: Subset<T, states$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the states model
   */
  interface statesFieldRefs {
    readonly id: FieldRef<"states", 'String'>
    readonly name: FieldRef<"states", 'String'>
    readonly craetedAt: FieldRef<"states", 'DateTime'>
    readonly updatedAt: FieldRef<"states", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * states findUnique
   */
  export type statesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states findUniqueOrThrow
   */
  export type statesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states findFirst
   */
  export type statesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * states findFirstOrThrow
   */
  export type statesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * states findMany
   */
  export type statesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing states.
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * states create
   */
  export type statesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * The data needed to create a states.
     */
    data: XOR<statesCreateInput, statesUncheckedCreateInput>
  }

  /**
   * states createMany
   */
  export type statesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many states.
     */
    data: statesCreateManyInput | statesCreateManyInput[]
  }

  /**
   * states update
   */
  export type statesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * The data needed to update a states.
     */
    data: XOR<statesUpdateInput, statesUncheckedUpdateInput>
    /**
     * Choose, which states to update.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states updateMany
   */
  export type statesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update states.
     */
    data: XOR<statesUpdateManyMutationInput, statesUncheckedUpdateManyInput>
    /**
     * Filter which states to update
     */
    where?: statesWhereInput
    /**
     * Limit how many states to update.
     */
    limit?: number
  }

  /**
   * states upsert
   */
  export type statesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * The filter to search for the states to update in case it exists.
     */
    where: statesWhereUniqueInput
    /**
     * In case the states found by the `where` argument doesn't exist, create a new states with this data.
     */
    create: XOR<statesCreateInput, statesUncheckedCreateInput>
    /**
     * In case the states was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statesUpdateInput, statesUncheckedUpdateInput>
  }

  /**
   * states delete
   */
  export type statesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter which states to delete.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states deleteMany
   */
  export type statesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which states to delete
     */
    where?: statesWhereInput
    /**
     * Limit how many states to delete.
     */
    limit?: number
  }

  /**
   * states findRaw
   */
  export type statesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * states aggregateRaw
   */
  export type statesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * states.cities
   */
  export type states$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    cursor?: citiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * states without action
   */
  export type statesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the states
     */
    omit?: statesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
  }


  /**
   * Model cities
   */

  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesMinAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type CitiesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type CitiesCountAggregateOutputType = {
    id: number
    name: number
    stateId: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type CitiesMinAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type CitiesMaxAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type CitiesCountAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to aggregate.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type citiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithAggregationInput | citiesOrderByWithAggregationInput[]
    by: CitiesScalarFieldEnum[] | CitiesScalarFieldEnum
    having?: citiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }

  export type CitiesGroupByOutputType = {
    id: string
    name: string
    stateId: string
    craetedAt: Date
    updatedAt: Date
    _count: CitiesCountAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends citiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type citiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
    state?: boolean | statesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>



  export type citiesSelectScalar = {
    id?: boolean
    name?: boolean
    stateId?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type citiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stateId" | "craetedAt" | "updatedAt", ExtArgs["result"]["cities"]>
  export type citiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | statesDefaultArgs<ExtArgs>
  }

  export type $citiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cities"
    objects: {
      state: Prisma.$statesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stateId: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cities"]>
    composites: {}
  }

  type citiesGetPayload<S extends boolean | null | undefined | citiesDefaultArgs> = $Result.GetResult<Prisma.$citiesPayload, S>

  type citiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<citiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitiesCountAggregateInputType | true
    }

  export interface citiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cities'], meta: { name: 'cities' } }
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends citiesFindUniqueArgs>(args: SelectSubset<T, citiesFindUniqueArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {citiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(args: SelectSubset<T, citiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends citiesFindFirstArgs>(args?: SelectSubset<T, citiesFindFirstArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(args?: SelectSubset<T, citiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citiesWithIdOnly = await prisma.cities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends citiesFindManyArgs>(args?: SelectSubset<T, citiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
     */
    create<T extends citiesCreateArgs>(args: SelectSubset<T, citiesCreateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {citiesCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends citiesCreateManyArgs>(args?: SelectSubset<T, citiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
     */
    delete<T extends citiesDeleteArgs>(args: SelectSubset<T, citiesDeleteArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends citiesUpdateArgs>(args: SelectSubset<T, citiesUpdateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends citiesDeleteManyArgs>(args?: SelectSubset<T, citiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends citiesUpdateManyArgs>(args: SelectSubset<T, citiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
     */
    upsert<T extends citiesUpsertArgs>(args: SelectSubset<T, citiesUpsertArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * @param {citiesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cities = await prisma.cities.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: citiesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cities.
     * @param {citiesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cities = await prisma.cities.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: citiesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesGroupByArgs} args - Group by arguments.
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
      T extends citiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citiesGroupByArgs['orderBy'] }
        : { orderBy?: citiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, citiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cities model
   */
  readonly fields: citiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends statesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, statesDefaultArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cities model
   */
  interface citiesFieldRefs {
    readonly id: FieldRef<"cities", 'String'>
    readonly name: FieldRef<"cities", 'String'>
    readonly stateId: FieldRef<"cities", 'String'>
    readonly craetedAt: FieldRef<"cities", 'DateTime'>
    readonly updatedAt: FieldRef<"cities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cities findUnique
   */
  export type citiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findUniqueOrThrow
   */
  export type citiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findFirst
   */
  export type citiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findFirstOrThrow
   */
  export type citiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findMany
   */
  export type citiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities create
   */
  export type citiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to create a cities.
     */
    data: XOR<citiesCreateInput, citiesUncheckedCreateInput>
  }

  /**
   * cities createMany
   */
  export type citiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
  }

  /**
   * cities update
   */
  export type citiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to update a cities.
     */
    data: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
    /**
     * Choose, which cities to update.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * cities upsert
   */
  export type citiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The filter to search for the cities to update in case it exists.
     */
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
     */
    create: XOR<citiesCreateInput, citiesUncheckedCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
  }

  /**
   * cities delete
   */
  export type citiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter which cities to delete.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to delete.
     */
    limit?: number
  }

  /**
   * cities findRaw
   */
  export type citiesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * cities aggregateRaw
   */
  export type citiesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * cities without action
   */
  export type citiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
  }


  /**
   * Model checklist_categories
   */

  export type AggregateChecklist_categories = {
    _count: Checklist_categoriesCountAggregateOutputType | null
    _min: Checklist_categoriesMinAggregateOutputType | null
    _max: Checklist_categoriesMaxAggregateOutputType | null
  }

  export type Checklist_categoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type Checklist_categoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type Checklist_categoriesCountAggregateOutputType = {
    id: number
    name: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type Checklist_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type Checklist_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type Checklist_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Checklist_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checklist_categories to aggregate.
     */
    where?: checklist_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_categories to fetch.
     */
    orderBy?: checklist_categoriesOrderByWithRelationInput | checklist_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: checklist_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned checklist_categories
    **/
    _count?: true | Checklist_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Checklist_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Checklist_categoriesMaxAggregateInputType
  }

  export type GetChecklist_categoriesAggregateType<T extends Checklist_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist_categories[P]>
      : GetScalarType<T[P], AggregateChecklist_categories[P]>
  }




  export type checklist_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checklist_categoriesWhereInput
    orderBy?: checklist_categoriesOrderByWithAggregationInput | checklist_categoriesOrderByWithAggregationInput[]
    by: Checklist_categoriesScalarFieldEnum[] | Checklist_categoriesScalarFieldEnum
    having?: checklist_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Checklist_categoriesCountAggregateInputType | true
    _min?: Checklist_categoriesMinAggregateInputType
    _max?: Checklist_categoriesMaxAggregateInputType
  }

  export type Checklist_categoriesGroupByOutputType = {
    id: string
    name: string
    craetedAt: Date
    updatedAt: Date
    _count: Checklist_categoriesCountAggregateOutputType | null
    _min: Checklist_categoriesMinAggregateOutputType | null
    _max: Checklist_categoriesMaxAggregateOutputType | null
  }

  type GetChecklist_categoriesGroupByPayload<T extends checklist_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Checklist_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Checklist_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Checklist_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Checklist_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type checklist_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["checklist_categories"]>



  export type checklist_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type checklist_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "craetedAt" | "updatedAt", ExtArgs["result"]["checklist_categories"]>

  export type $checklist_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "checklist_categories"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checklist_categories"]>
    composites: {}
  }

  type checklist_categoriesGetPayload<S extends boolean | null | undefined | checklist_categoriesDefaultArgs> = $Result.GetResult<Prisma.$checklist_categoriesPayload, S>

  type checklist_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<checklist_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Checklist_categoriesCountAggregateInputType | true
    }

  export interface checklist_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['checklist_categories'], meta: { name: 'checklist_categories' } }
    /**
     * Find zero or one Checklist_categories that matches the filter.
     * @param {checklist_categoriesFindUniqueArgs} args - Arguments to find a Checklist_categories
     * @example
     * // Get one Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends checklist_categoriesFindUniqueArgs>(args: SelectSubset<T, checklist_categoriesFindUniqueArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {checklist_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Checklist_categories
     * @example
     * // Get one Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends checklist_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, checklist_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_categoriesFindFirstArgs} args - Arguments to find a Checklist_categories
     * @example
     * // Get one Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends checklist_categoriesFindFirstArgs>(args?: SelectSubset<T, checklist_categoriesFindFirstArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_categoriesFindFirstOrThrowArgs} args - Arguments to find a Checklist_categories
     * @example
     * // Get one Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends checklist_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, checklist_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklist_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.findMany()
     * 
     * // Get first 10 Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklist_categoriesWithIdOnly = await prisma.checklist_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends checklist_categoriesFindManyArgs>(args?: SelectSubset<T, checklist_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist_categories.
     * @param {checklist_categoriesCreateArgs} args - Arguments to create a Checklist_categories.
     * @example
     * // Create one Checklist_categories
     * const Checklist_categories = await prisma.checklist_categories.create({
     *   data: {
     *     // ... data to create a Checklist_categories
     *   }
     * })
     * 
     */
    create<T extends checklist_categoriesCreateArgs>(args: SelectSubset<T, checklist_categoriesCreateArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklist_categories.
     * @param {checklist_categoriesCreateManyArgs} args - Arguments to create many Checklist_categories.
     * @example
     * // Create many Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends checklist_categoriesCreateManyArgs>(args?: SelectSubset<T, checklist_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Checklist_categories.
     * @param {checklist_categoriesDeleteArgs} args - Arguments to delete one Checklist_categories.
     * @example
     * // Delete one Checklist_categories
     * const Checklist_categories = await prisma.checklist_categories.delete({
     *   where: {
     *     // ... filter to delete one Checklist_categories
     *   }
     * })
     * 
     */
    delete<T extends checklist_categoriesDeleteArgs>(args: SelectSubset<T, checklist_categoriesDeleteArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist_categories.
     * @param {checklist_categoriesUpdateArgs} args - Arguments to update one Checklist_categories.
     * @example
     * // Update one Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends checklist_categoriesUpdateArgs>(args: SelectSubset<T, checklist_categoriesUpdateArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklist_categories.
     * @param {checklist_categoriesDeleteManyArgs} args - Arguments to filter Checklist_categories to delete.
     * @example
     * // Delete a few Checklist_categories
     * const { count } = await prisma.checklist_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends checklist_categoriesDeleteManyArgs>(args?: SelectSubset<T, checklist_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklist_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends checklist_categoriesUpdateManyArgs>(args: SelectSubset<T, checklist_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checklist_categories.
     * @param {checklist_categoriesUpsertArgs} args - Arguments to update or create a Checklist_categories.
     * @example
     * // Update or create a Checklist_categories
     * const checklist_categories = await prisma.checklist_categories.upsert({
     *   create: {
     *     // ... data to create a Checklist_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist_categories we want to update
     *   }
     * })
     */
    upsert<T extends checklist_categoriesUpsertArgs>(args: SelectSubset<T, checklist_categoriesUpsertArgs<ExtArgs>>): Prisma__checklist_categoriesClient<$Result.GetResult<Prisma.$checklist_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklist_categories that matches the filter.
     * @param {checklist_categoriesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const checklist_categories = await prisma.checklist_categories.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: checklist_categoriesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Checklist_categories.
     * @param {checklist_categoriesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const checklist_categories = await prisma.checklist_categories.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: checklist_categoriesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Checklist_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_categoriesCountArgs} args - Arguments to filter Checklist_categories to count.
     * @example
     * // Count the number of Checklist_categories
     * const count = await prisma.checklist_categories.count({
     *   where: {
     *     // ... the filter for the Checklist_categories we want to count
     *   }
     * })
    **/
    count<T extends checklist_categoriesCountArgs>(
      args?: Subset<T, checklist_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Checklist_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checklist_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Checklist_categoriesAggregateArgs>(args: Subset<T, Checklist_categoriesAggregateArgs>): Prisma.PrismaPromise<GetChecklist_categoriesAggregateType<T>>

    /**
     * Group by Checklist_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_categoriesGroupByArgs} args - Group by arguments.
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
      T extends checklist_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: checklist_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: checklist_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, checklist_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklist_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the checklist_categories model
   */
  readonly fields: checklist_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for checklist_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__checklist_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the checklist_categories model
   */
  interface checklist_categoriesFieldRefs {
    readonly id: FieldRef<"checklist_categories", 'String'>
    readonly name: FieldRef<"checklist_categories", 'String'>
    readonly craetedAt: FieldRef<"checklist_categories", 'DateTime'>
    readonly updatedAt: FieldRef<"checklist_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * checklist_categories findUnique
   */
  export type checklist_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * Filter, which checklist_categories to fetch.
     */
    where: checklist_categoriesWhereUniqueInput
  }

  /**
   * checklist_categories findUniqueOrThrow
   */
  export type checklist_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * Filter, which checklist_categories to fetch.
     */
    where: checklist_categoriesWhereUniqueInput
  }

  /**
   * checklist_categories findFirst
   */
  export type checklist_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * Filter, which checklist_categories to fetch.
     */
    where?: checklist_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_categories to fetch.
     */
    orderBy?: checklist_categoriesOrderByWithRelationInput | checklist_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checklist_categories.
     */
    cursor?: checklist_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checklist_categories.
     */
    distinct?: Checklist_categoriesScalarFieldEnum | Checklist_categoriesScalarFieldEnum[]
  }

  /**
   * checklist_categories findFirstOrThrow
   */
  export type checklist_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * Filter, which checklist_categories to fetch.
     */
    where?: checklist_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_categories to fetch.
     */
    orderBy?: checklist_categoriesOrderByWithRelationInput | checklist_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checklist_categories.
     */
    cursor?: checklist_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checklist_categories.
     */
    distinct?: Checklist_categoriesScalarFieldEnum | Checklist_categoriesScalarFieldEnum[]
  }

  /**
   * checklist_categories findMany
   */
  export type checklist_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * Filter, which checklist_categories to fetch.
     */
    where?: checklist_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_categories to fetch.
     */
    orderBy?: checklist_categoriesOrderByWithRelationInput | checklist_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing checklist_categories.
     */
    cursor?: checklist_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_categories.
     */
    skip?: number
    distinct?: Checklist_categoriesScalarFieldEnum | Checklist_categoriesScalarFieldEnum[]
  }

  /**
   * checklist_categories create
   */
  export type checklist_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * The data needed to create a checklist_categories.
     */
    data: XOR<checklist_categoriesCreateInput, checklist_categoriesUncheckedCreateInput>
  }

  /**
   * checklist_categories createMany
   */
  export type checklist_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many checklist_categories.
     */
    data: checklist_categoriesCreateManyInput | checklist_categoriesCreateManyInput[]
  }

  /**
   * checklist_categories update
   */
  export type checklist_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * The data needed to update a checklist_categories.
     */
    data: XOR<checklist_categoriesUpdateInput, checklist_categoriesUncheckedUpdateInput>
    /**
     * Choose, which checklist_categories to update.
     */
    where: checklist_categoriesWhereUniqueInput
  }

  /**
   * checklist_categories updateMany
   */
  export type checklist_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update checklist_categories.
     */
    data: XOR<checklist_categoriesUpdateManyMutationInput, checklist_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which checklist_categories to update
     */
    where?: checklist_categoriesWhereInput
    /**
     * Limit how many checklist_categories to update.
     */
    limit?: number
  }

  /**
   * checklist_categories upsert
   */
  export type checklist_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * The filter to search for the checklist_categories to update in case it exists.
     */
    where: checklist_categoriesWhereUniqueInput
    /**
     * In case the checklist_categories found by the `where` argument doesn't exist, create a new checklist_categories with this data.
     */
    create: XOR<checklist_categoriesCreateInput, checklist_categoriesUncheckedCreateInput>
    /**
     * In case the checklist_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<checklist_categoriesUpdateInput, checklist_categoriesUncheckedUpdateInput>
  }

  /**
   * checklist_categories delete
   */
  export type checklist_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
    /**
     * Filter which checklist_categories to delete.
     */
    where: checklist_categoriesWhereUniqueInput
  }

  /**
   * checklist_categories deleteMany
   */
  export type checklist_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checklist_categories to delete
     */
    where?: checklist_categoriesWhereInput
    /**
     * Limit how many checklist_categories to delete.
     */
    limit?: number
  }

  /**
   * checklist_categories findRaw
   */
  export type checklist_categoriesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * checklist_categories aggregateRaw
   */
  export type checklist_categoriesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * checklist_categories without action
   */
  export type checklist_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_categories
     */
    select?: checklist_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_categories
     */
    omit?: checklist_categoriesOmit<ExtArgs> | null
  }


  /**
   * Model checklist_options
   */

  export type AggregateChecklist_options = {
    _count: Checklist_optionsCountAggregateOutputType | null
    _min: Checklist_optionsMinAggregateOutputType | null
    _max: Checklist_optionsMaxAggregateOutputType | null
  }

  export type Checklist_optionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type Checklist_optionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    craetedAt: Date | null
    updatedAt: Date | null
  }

  export type Checklist_optionsCountAggregateOutputType = {
    id: number
    name: number
    craetedAt: number
    updatedAt: number
    _all: number
  }


  export type Checklist_optionsMinAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type Checklist_optionsMaxAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
  }

  export type Checklist_optionsCountAggregateInputType = {
    id?: true
    name?: true
    craetedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Checklist_optionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checklist_options to aggregate.
     */
    where?: checklist_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_options to fetch.
     */
    orderBy?: checklist_optionsOrderByWithRelationInput | checklist_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: checklist_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned checklist_options
    **/
    _count?: true | Checklist_optionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Checklist_optionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Checklist_optionsMaxAggregateInputType
  }

  export type GetChecklist_optionsAggregateType<T extends Checklist_optionsAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist_options]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist_options[P]>
      : GetScalarType<T[P], AggregateChecklist_options[P]>
  }




  export type checklist_optionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checklist_optionsWhereInput
    orderBy?: checklist_optionsOrderByWithAggregationInput | checklist_optionsOrderByWithAggregationInput[]
    by: Checklist_optionsScalarFieldEnum[] | Checklist_optionsScalarFieldEnum
    having?: checklist_optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Checklist_optionsCountAggregateInputType | true
    _min?: Checklist_optionsMinAggregateInputType
    _max?: Checklist_optionsMaxAggregateInputType
  }

  export type Checklist_optionsGroupByOutputType = {
    id: string
    name: string
    craetedAt: Date
    updatedAt: Date
    _count: Checklist_optionsCountAggregateOutputType | null
    _min: Checklist_optionsMinAggregateOutputType | null
    _max: Checklist_optionsMaxAggregateOutputType | null
  }

  type GetChecklist_optionsGroupByPayload<T extends checklist_optionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Checklist_optionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Checklist_optionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Checklist_optionsGroupByOutputType[P]>
            : GetScalarType<T[P], Checklist_optionsGroupByOutputType[P]>
        }
      >
    >


  export type checklist_optionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["checklist_options"]>



  export type checklist_optionsSelectScalar = {
    id?: boolean
    name?: boolean
    craetedAt?: boolean
    updatedAt?: boolean
  }

  export type checklist_optionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "craetedAt" | "updatedAt", ExtArgs["result"]["checklist_options"]>

  export type $checklist_optionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "checklist_options"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      craetedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checklist_options"]>
    composites: {}
  }

  type checklist_optionsGetPayload<S extends boolean | null | undefined | checklist_optionsDefaultArgs> = $Result.GetResult<Prisma.$checklist_optionsPayload, S>

  type checklist_optionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<checklist_optionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Checklist_optionsCountAggregateInputType | true
    }

  export interface checklist_optionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['checklist_options'], meta: { name: 'checklist_options' } }
    /**
     * Find zero or one Checklist_options that matches the filter.
     * @param {checklist_optionsFindUniqueArgs} args - Arguments to find a Checklist_options
     * @example
     * // Get one Checklist_options
     * const checklist_options = await prisma.checklist_options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends checklist_optionsFindUniqueArgs>(args: SelectSubset<T, checklist_optionsFindUniqueArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist_options that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {checklist_optionsFindUniqueOrThrowArgs} args - Arguments to find a Checklist_options
     * @example
     * // Get one Checklist_options
     * const checklist_options = await prisma.checklist_options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends checklist_optionsFindUniqueOrThrowArgs>(args: SelectSubset<T, checklist_optionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_optionsFindFirstArgs} args - Arguments to find a Checklist_options
     * @example
     * // Get one Checklist_options
     * const checklist_options = await prisma.checklist_options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends checklist_optionsFindFirstArgs>(args?: SelectSubset<T, checklist_optionsFindFirstArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist_options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_optionsFindFirstOrThrowArgs} args - Arguments to find a Checklist_options
     * @example
     * // Get one Checklist_options
     * const checklist_options = await prisma.checklist_options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends checklist_optionsFindFirstOrThrowArgs>(args?: SelectSubset<T, checklist_optionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklist_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_optionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklist_options
     * const checklist_options = await prisma.checklist_options.findMany()
     * 
     * // Get first 10 Checklist_options
     * const checklist_options = await prisma.checklist_options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklist_optionsWithIdOnly = await prisma.checklist_options.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends checklist_optionsFindManyArgs>(args?: SelectSubset<T, checklist_optionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist_options.
     * @param {checklist_optionsCreateArgs} args - Arguments to create a Checklist_options.
     * @example
     * // Create one Checklist_options
     * const Checklist_options = await prisma.checklist_options.create({
     *   data: {
     *     // ... data to create a Checklist_options
     *   }
     * })
     * 
     */
    create<T extends checklist_optionsCreateArgs>(args: SelectSubset<T, checklist_optionsCreateArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklist_options.
     * @param {checklist_optionsCreateManyArgs} args - Arguments to create many Checklist_options.
     * @example
     * // Create many Checklist_options
     * const checklist_options = await prisma.checklist_options.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends checklist_optionsCreateManyArgs>(args?: SelectSubset<T, checklist_optionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Checklist_options.
     * @param {checklist_optionsDeleteArgs} args - Arguments to delete one Checklist_options.
     * @example
     * // Delete one Checklist_options
     * const Checklist_options = await prisma.checklist_options.delete({
     *   where: {
     *     // ... filter to delete one Checklist_options
     *   }
     * })
     * 
     */
    delete<T extends checklist_optionsDeleteArgs>(args: SelectSubset<T, checklist_optionsDeleteArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist_options.
     * @param {checklist_optionsUpdateArgs} args - Arguments to update one Checklist_options.
     * @example
     * // Update one Checklist_options
     * const checklist_options = await prisma.checklist_options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends checklist_optionsUpdateArgs>(args: SelectSubset<T, checklist_optionsUpdateArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklist_options.
     * @param {checklist_optionsDeleteManyArgs} args - Arguments to filter Checklist_options to delete.
     * @example
     * // Delete a few Checklist_options
     * const { count } = await prisma.checklist_options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends checklist_optionsDeleteManyArgs>(args?: SelectSubset<T, checklist_optionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklist_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklist_options
     * const checklist_options = await prisma.checklist_options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends checklist_optionsUpdateManyArgs>(args: SelectSubset<T, checklist_optionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checklist_options.
     * @param {checklist_optionsUpsertArgs} args - Arguments to update or create a Checklist_options.
     * @example
     * // Update or create a Checklist_options
     * const checklist_options = await prisma.checklist_options.upsert({
     *   create: {
     *     // ... data to create a Checklist_options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist_options we want to update
     *   }
     * })
     */
    upsert<T extends checklist_optionsUpsertArgs>(args: SelectSubset<T, checklist_optionsUpsertArgs<ExtArgs>>): Prisma__checklist_optionsClient<$Result.GetResult<Prisma.$checklist_optionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklist_options that matches the filter.
     * @param {checklist_optionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const checklist_options = await prisma.checklist_options.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: checklist_optionsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Checklist_options.
     * @param {checklist_optionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const checklist_options = await prisma.checklist_options.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: checklist_optionsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Checklist_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_optionsCountArgs} args - Arguments to filter Checklist_options to count.
     * @example
     * // Count the number of Checklist_options
     * const count = await prisma.checklist_options.count({
     *   where: {
     *     // ... the filter for the Checklist_options we want to count
     *   }
     * })
    **/
    count<T extends checklist_optionsCountArgs>(
      args?: Subset<T, checklist_optionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Checklist_optionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checklist_optionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Checklist_optionsAggregateArgs>(args: Subset<T, Checklist_optionsAggregateArgs>): Prisma.PrismaPromise<GetChecklist_optionsAggregateType<T>>

    /**
     * Group by Checklist_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checklist_optionsGroupByArgs} args - Group by arguments.
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
      T extends checklist_optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: checklist_optionsGroupByArgs['orderBy'] }
        : { orderBy?: checklist_optionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, checklist_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklist_optionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the checklist_options model
   */
  readonly fields: checklist_optionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for checklist_options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__checklist_optionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the checklist_options model
   */
  interface checklist_optionsFieldRefs {
    readonly id: FieldRef<"checklist_options", 'String'>
    readonly name: FieldRef<"checklist_options", 'String'>
    readonly craetedAt: FieldRef<"checklist_options", 'DateTime'>
    readonly updatedAt: FieldRef<"checklist_options", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * checklist_options findUnique
   */
  export type checklist_optionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * Filter, which checklist_options to fetch.
     */
    where: checklist_optionsWhereUniqueInput
  }

  /**
   * checklist_options findUniqueOrThrow
   */
  export type checklist_optionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * Filter, which checklist_options to fetch.
     */
    where: checklist_optionsWhereUniqueInput
  }

  /**
   * checklist_options findFirst
   */
  export type checklist_optionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * Filter, which checklist_options to fetch.
     */
    where?: checklist_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_options to fetch.
     */
    orderBy?: checklist_optionsOrderByWithRelationInput | checklist_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checklist_options.
     */
    cursor?: checklist_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checklist_options.
     */
    distinct?: Checklist_optionsScalarFieldEnum | Checklist_optionsScalarFieldEnum[]
  }

  /**
   * checklist_options findFirstOrThrow
   */
  export type checklist_optionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * Filter, which checklist_options to fetch.
     */
    where?: checklist_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_options to fetch.
     */
    orderBy?: checklist_optionsOrderByWithRelationInput | checklist_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checklist_options.
     */
    cursor?: checklist_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checklist_options.
     */
    distinct?: Checklist_optionsScalarFieldEnum | Checklist_optionsScalarFieldEnum[]
  }

  /**
   * checklist_options findMany
   */
  export type checklist_optionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * Filter, which checklist_options to fetch.
     */
    where?: checklist_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checklist_options to fetch.
     */
    orderBy?: checklist_optionsOrderByWithRelationInput | checklist_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing checklist_options.
     */
    cursor?: checklist_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checklist_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checklist_options.
     */
    skip?: number
    distinct?: Checklist_optionsScalarFieldEnum | Checklist_optionsScalarFieldEnum[]
  }

  /**
   * checklist_options create
   */
  export type checklist_optionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * The data needed to create a checklist_options.
     */
    data: XOR<checklist_optionsCreateInput, checklist_optionsUncheckedCreateInput>
  }

  /**
   * checklist_options createMany
   */
  export type checklist_optionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many checklist_options.
     */
    data: checklist_optionsCreateManyInput | checklist_optionsCreateManyInput[]
  }

  /**
   * checklist_options update
   */
  export type checklist_optionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * The data needed to update a checklist_options.
     */
    data: XOR<checklist_optionsUpdateInput, checklist_optionsUncheckedUpdateInput>
    /**
     * Choose, which checklist_options to update.
     */
    where: checklist_optionsWhereUniqueInput
  }

  /**
   * checklist_options updateMany
   */
  export type checklist_optionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update checklist_options.
     */
    data: XOR<checklist_optionsUpdateManyMutationInput, checklist_optionsUncheckedUpdateManyInput>
    /**
     * Filter which checklist_options to update
     */
    where?: checklist_optionsWhereInput
    /**
     * Limit how many checklist_options to update.
     */
    limit?: number
  }

  /**
   * checklist_options upsert
   */
  export type checklist_optionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * The filter to search for the checklist_options to update in case it exists.
     */
    where: checklist_optionsWhereUniqueInput
    /**
     * In case the checklist_options found by the `where` argument doesn't exist, create a new checklist_options with this data.
     */
    create: XOR<checklist_optionsCreateInput, checklist_optionsUncheckedCreateInput>
    /**
     * In case the checklist_options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<checklist_optionsUpdateInput, checklist_optionsUncheckedUpdateInput>
  }

  /**
   * checklist_options delete
   */
  export type checklist_optionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
    /**
     * Filter which checklist_options to delete.
     */
    where: checklist_optionsWhereUniqueInput
  }

  /**
   * checklist_options deleteMany
   */
  export type checklist_optionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checklist_options to delete
     */
    where?: checklist_optionsWhereInput
    /**
     * Limit how many checklist_options to delete.
     */
    limit?: number
  }

  /**
   * checklist_options findRaw
   */
  export type checklist_optionsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * checklist_options aggregateRaw
   */
  export type checklist_optionsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * checklist_options without action
   */
  export type checklist_optionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checklist_options
     */
    select?: checklist_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checklist_options
     */
    omit?: checklist_optionsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    role: 'role',
    is_active: 'is_active',
    password: 'password',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BrandsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const ModelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandId: 'brandId',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type ModelsScalarFieldEnum = (typeof ModelsScalarFieldEnum)[keyof typeof ModelsScalarFieldEnum]


  export const VariantsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    modelId: 'modelId',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type VariantsScalarFieldEnum = (typeof VariantsScalarFieldEnum)[keyof typeof VariantsScalarFieldEnum]


  export const StatesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type StatesScalarFieldEnum = (typeof StatesScalarFieldEnum)[keyof typeof StatesScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateId: 'stateId',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const Checklist_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type Checklist_categoriesScalarFieldEnum = (typeof Checklist_categoriesScalarFieldEnum)[keyof typeof Checklist_categoriesScalarFieldEnum]


  export const Checklist_optionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    craetedAt: 'craetedAt',
    updatedAt: 'updatedAt'
  };

  export type Checklist_optionsScalarFieldEnum = (typeof Checklist_optionsScalarFieldEnum)[keyof typeof Checklist_optionsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    is_active?: BoolFilter<"user"> | boolean
    password?: StringFilter<"user"> | string
    craetedAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    password?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    is_active?: BoolFilter<"user"> | boolean
    password?: StringFilter<"user"> | string
    craetedAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
  }, "id" | "username">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    password?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    role?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
    is_active?: BoolWithAggregatesFilter<"user"> | boolean
    password?: StringWithAggregatesFilter<"user"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type brandsWhereInput = {
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    id?: StringFilter<"brands"> | string
    name?: StringFilter<"brands"> | string
    craetedAt?: DateTimeFilter<"brands"> | Date | string
    updatedAt?: DateTimeFilter<"brands"> | Date | string
    models?: ModelsListRelationFilter
  }

  export type brandsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    models?: modelsOrderByRelationAggregateInput
  }

  export type brandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    name?: StringFilter<"brands"> | string
    craetedAt?: DateTimeFilter<"brands"> | Date | string
    updatedAt?: DateTimeFilter<"brands"> | Date | string
    models?: ModelsListRelationFilter
  }, "id">

  export type brandsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: brandsCountOrderByAggregateInput
    _max?: brandsMaxOrderByAggregateInput
    _min?: brandsMinOrderByAggregateInput
  }

  export type brandsScalarWhereWithAggregatesInput = {
    AND?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    OR?: brandsScalarWhereWithAggregatesInput[]
    NOT?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"brands"> | string
    name?: StringWithAggregatesFilter<"brands"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"brands"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"brands"> | Date | string
  }

  export type modelsWhereInput = {
    AND?: modelsWhereInput | modelsWhereInput[]
    OR?: modelsWhereInput[]
    NOT?: modelsWhereInput | modelsWhereInput[]
    id?: StringFilter<"models"> | string
    name?: StringFilter<"models"> | string
    brandId?: StringFilter<"models"> | string
    craetedAt?: DateTimeFilter<"models"> | Date | string
    updatedAt?: DateTimeFilter<"models"> | Date | string
    brand?: XOR<BrandsScalarRelationFilter, brandsWhereInput>
    variants?: VariantsListRelationFilter
  }

  export type modelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    brand?: brandsOrderByWithRelationInput
    variants?: variantsOrderByRelationAggregateInput
  }

  export type modelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: modelsWhereInput | modelsWhereInput[]
    OR?: modelsWhereInput[]
    NOT?: modelsWhereInput | modelsWhereInput[]
    name?: StringFilter<"models"> | string
    brandId?: StringFilter<"models"> | string
    craetedAt?: DateTimeFilter<"models"> | Date | string
    updatedAt?: DateTimeFilter<"models"> | Date | string
    brand?: XOR<BrandsScalarRelationFilter, brandsWhereInput>
    variants?: VariantsListRelationFilter
  }, "id">

  export type modelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: modelsCountOrderByAggregateInput
    _max?: modelsMaxOrderByAggregateInput
    _min?: modelsMinOrderByAggregateInput
  }

  export type modelsScalarWhereWithAggregatesInput = {
    AND?: modelsScalarWhereWithAggregatesInput | modelsScalarWhereWithAggregatesInput[]
    OR?: modelsScalarWhereWithAggregatesInput[]
    NOT?: modelsScalarWhereWithAggregatesInput | modelsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"models"> | string
    name?: StringWithAggregatesFilter<"models"> | string
    brandId?: StringWithAggregatesFilter<"models"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"models"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"models"> | Date | string
  }

  export type variantsWhereInput = {
    AND?: variantsWhereInput | variantsWhereInput[]
    OR?: variantsWhereInput[]
    NOT?: variantsWhereInput | variantsWhereInput[]
    id?: StringFilter<"variants"> | string
    name?: StringFilter<"variants"> | string
    modelId?: StringFilter<"variants"> | string
    craetedAt?: DateTimeFilter<"variants"> | Date | string
    updatedAt?: DateTimeFilter<"variants"> | Date | string
    model?: XOR<ModelsScalarRelationFilter, modelsWhereInput>
  }

  export type variantsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    model?: modelsOrderByWithRelationInput
  }

  export type variantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: variantsWhereInput | variantsWhereInput[]
    OR?: variantsWhereInput[]
    NOT?: variantsWhereInput | variantsWhereInput[]
    name?: StringFilter<"variants"> | string
    modelId?: StringFilter<"variants"> | string
    craetedAt?: DateTimeFilter<"variants"> | Date | string
    updatedAt?: DateTimeFilter<"variants"> | Date | string
    model?: XOR<ModelsScalarRelationFilter, modelsWhereInput>
  }, "id">

  export type variantsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: variantsCountOrderByAggregateInput
    _max?: variantsMaxOrderByAggregateInput
    _min?: variantsMinOrderByAggregateInput
  }

  export type variantsScalarWhereWithAggregatesInput = {
    AND?: variantsScalarWhereWithAggregatesInput | variantsScalarWhereWithAggregatesInput[]
    OR?: variantsScalarWhereWithAggregatesInput[]
    NOT?: variantsScalarWhereWithAggregatesInput | variantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"variants"> | string
    name?: StringWithAggregatesFilter<"variants"> | string
    modelId?: StringWithAggregatesFilter<"variants"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"variants"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"variants"> | Date | string
  }

  export type statesWhereInput = {
    AND?: statesWhereInput | statesWhereInput[]
    OR?: statesWhereInput[]
    NOT?: statesWhereInput | statesWhereInput[]
    id?: StringFilter<"states"> | string
    name?: StringFilter<"states"> | string
    craetedAt?: DateTimeFilter<"states"> | Date | string
    updatedAt?: DateTimeFilter<"states"> | Date | string
    cities?: CitiesListRelationFilter
  }

  export type statesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    cities?: citiesOrderByRelationAggregateInput
  }

  export type statesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: statesWhereInput | statesWhereInput[]
    OR?: statesWhereInput[]
    NOT?: statesWhereInput | statesWhereInput[]
    name?: StringFilter<"states"> | string
    craetedAt?: DateTimeFilter<"states"> | Date | string
    updatedAt?: DateTimeFilter<"states"> | Date | string
    cities?: CitiesListRelationFilter
  }, "id">

  export type statesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: statesCountOrderByAggregateInput
    _max?: statesMaxOrderByAggregateInput
    _min?: statesMinOrderByAggregateInput
  }

  export type statesScalarWhereWithAggregatesInput = {
    AND?: statesScalarWhereWithAggregatesInput | statesScalarWhereWithAggregatesInput[]
    OR?: statesScalarWhereWithAggregatesInput[]
    NOT?: statesScalarWhereWithAggregatesInput | statesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"states"> | string
    name?: StringWithAggregatesFilter<"states"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"states"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"states"> | Date | string
  }

  export type citiesWhereInput = {
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    id?: StringFilter<"cities"> | string
    name?: StringFilter<"cities"> | string
    stateId?: StringFilter<"cities"> | string
    craetedAt?: DateTimeFilter<"cities"> | Date | string
    updatedAt?: DateTimeFilter<"cities"> | Date | string
    state?: XOR<StatesScalarRelationFilter, statesWhereInput>
  }

  export type citiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    state?: statesOrderByWithRelationInput
  }

  export type citiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    name?: StringFilter<"cities"> | string
    stateId?: StringFilter<"cities"> | string
    craetedAt?: DateTimeFilter<"cities"> | Date | string
    updatedAt?: DateTimeFilter<"cities"> | Date | string
    state?: XOR<StatesScalarRelationFilter, statesWhereInput>
  }, "id">

  export type citiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: citiesCountOrderByAggregateInput
    _max?: citiesMaxOrderByAggregateInput
    _min?: citiesMinOrderByAggregateInput
  }

  export type citiesScalarWhereWithAggregatesInput = {
    AND?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    OR?: citiesScalarWhereWithAggregatesInput[]
    NOT?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cities"> | string
    name?: StringWithAggregatesFilter<"cities"> | string
    stateId?: StringWithAggregatesFilter<"cities"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"cities"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cities"> | Date | string
  }

  export type checklist_categoriesWhereInput = {
    AND?: checklist_categoriesWhereInput | checklist_categoriesWhereInput[]
    OR?: checklist_categoriesWhereInput[]
    NOT?: checklist_categoriesWhereInput | checklist_categoriesWhereInput[]
    id?: StringFilter<"checklist_categories"> | string
    name?: StringFilter<"checklist_categories"> | string
    craetedAt?: DateTimeFilter<"checklist_categories"> | Date | string
    updatedAt?: DateTimeFilter<"checklist_categories"> | Date | string
  }

  export type checklist_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: checklist_categoriesWhereInput | checklist_categoriesWhereInput[]
    OR?: checklist_categoriesWhereInput[]
    NOT?: checklist_categoriesWhereInput | checklist_categoriesWhereInput[]
    name?: StringFilter<"checklist_categories"> | string
    craetedAt?: DateTimeFilter<"checklist_categories"> | Date | string
    updatedAt?: DateTimeFilter<"checklist_categories"> | Date | string
  }, "id">

  export type checklist_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: checklist_categoriesCountOrderByAggregateInput
    _max?: checklist_categoriesMaxOrderByAggregateInput
    _min?: checklist_categoriesMinOrderByAggregateInput
  }

  export type checklist_categoriesScalarWhereWithAggregatesInput = {
    AND?: checklist_categoriesScalarWhereWithAggregatesInput | checklist_categoriesScalarWhereWithAggregatesInput[]
    OR?: checklist_categoriesScalarWhereWithAggregatesInput[]
    NOT?: checklist_categoriesScalarWhereWithAggregatesInput | checklist_categoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"checklist_categories"> | string
    name?: StringWithAggregatesFilter<"checklist_categories"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"checklist_categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"checklist_categories"> | Date | string
  }

  export type checklist_optionsWhereInput = {
    AND?: checklist_optionsWhereInput | checklist_optionsWhereInput[]
    OR?: checklist_optionsWhereInput[]
    NOT?: checklist_optionsWhereInput | checklist_optionsWhereInput[]
    id?: StringFilter<"checklist_options"> | string
    name?: StringFilter<"checklist_options"> | string
    craetedAt?: DateTimeFilter<"checklist_options"> | Date | string
    updatedAt?: DateTimeFilter<"checklist_options"> | Date | string
  }

  export type checklist_optionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: checklist_optionsWhereInput | checklist_optionsWhereInput[]
    OR?: checklist_optionsWhereInput[]
    NOT?: checklist_optionsWhereInput | checklist_optionsWhereInput[]
    name?: StringFilter<"checklist_options"> | string
    craetedAt?: DateTimeFilter<"checklist_options"> | Date | string
    updatedAt?: DateTimeFilter<"checklist_options"> | Date | string
  }, "id">

  export type checklist_optionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: checklist_optionsCountOrderByAggregateInput
    _max?: checklist_optionsMaxOrderByAggregateInput
    _min?: checklist_optionsMinOrderByAggregateInput
  }

  export type checklist_optionsScalarWhereWithAggregatesInput = {
    AND?: checklist_optionsScalarWhereWithAggregatesInput | checklist_optionsScalarWhereWithAggregatesInput[]
    OR?: checklist_optionsScalarWhereWithAggregatesInput[]
    NOT?: checklist_optionsScalarWhereWithAggregatesInput | checklist_optionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"checklist_options"> | string
    name?: StringWithAggregatesFilter<"checklist_options"> | string
    craetedAt?: DateTimeWithAggregatesFilter<"checklist_options"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"checklist_options"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    username: string
    role: $Enums.Role
    is_active?: boolean
    password: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    role: $Enums.Role
    is_active?: boolean
    password: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    username: string
    role: $Enums.Role
    is_active?: boolean
    password: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type brandsCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    models?: modelsCreateNestedManyWithoutBrandInput
  }

  export type brandsUncheckedCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    models?: modelsUncheckedCreateNestedManyWithoutBrandInput
  }

  export type brandsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: modelsUpdateManyWithoutBrandNestedInput
  }

  export type brandsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: modelsUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type brandsCreateManyInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type brandsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type brandsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelsCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    brand: brandsCreateNestedOneWithoutModelsInput
    variants?: variantsCreateNestedManyWithoutModelInput
  }

  export type modelsUncheckedCreateInput = {
    id?: string
    name: string
    brandId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    variants?: variantsUncheckedCreateNestedManyWithoutModelInput
  }

  export type modelsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: brandsUpdateOneRequiredWithoutModelsNestedInput
    variants?: variantsUpdateManyWithoutModelNestedInput
  }

  export type modelsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: variantsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type modelsCreateManyInput = {
    id?: string
    name: string
    brandId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type modelsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantsCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    model: modelsCreateNestedOneWithoutVariantsInput
  }

  export type variantsUncheckedCreateInput = {
    id?: string
    name: string
    modelId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type variantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: modelsUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type variantsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantsCreateManyInput = {
    id?: string
    name: string
    modelId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type variantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statesCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    cities?: citiesCreateNestedManyWithoutStateInput
  }

  export type statesUncheckedCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    cities?: citiesUncheckedCreateNestedManyWithoutStateInput
  }

  export type statesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: citiesUpdateManyWithoutStateNestedInput
  }

  export type statesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: citiesUncheckedUpdateManyWithoutStateNestedInput
  }

  export type statesCreateManyInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type statesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    state: statesCreateNestedOneWithoutCitiesInput
  }

  export type citiesUncheckedCreateInput = {
    id?: string
    name: string
    stateId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type citiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: statesUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesCreateManyInput = {
    id?: string
    name: string
    stateId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type citiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_categoriesCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type checklist_categoriesUncheckedCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type checklist_categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_categoriesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_categoriesCreateManyInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type checklist_categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_categoriesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_optionsCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type checklist_optionsUncheckedCreateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type checklist_optionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_optionsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_optionsCreateManyInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type checklist_optionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checklist_optionsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    password?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    password?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    password?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ModelsListRelationFilter = {
    every?: modelsWhereInput
    some?: modelsWhereInput
    none?: modelsWhereInput
  }

  export type modelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type brandsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type brandsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type brandsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandsScalarRelationFilter = {
    is?: brandsWhereInput
    isNot?: brandsWhereInput
  }

  export type VariantsListRelationFilter = {
    every?: variantsWhereInput
    some?: variantsWhereInput
    none?: variantsWhereInput
  }

  export type variantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type modelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type modelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type modelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelsScalarRelationFilter = {
    is?: modelsWhereInput
    isNot?: modelsWhereInput
  }

  export type variantsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type variantsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type variantsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CitiesListRelationFilter = {
    every?: citiesWhereInput
    some?: citiesWhereInput
    none?: citiesWhereInput
  }

  export type citiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type statesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type statesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type statesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatesScalarRelationFilter = {
    is?: statesWhereInput
    isNot?: statesWhereInput
  }

  export type citiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type citiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type citiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_optionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_optionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type checklist_optionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    craetedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type modelsCreateNestedManyWithoutBrandInput = {
    create?: XOR<modelsCreateWithoutBrandInput, modelsUncheckedCreateWithoutBrandInput> | modelsCreateWithoutBrandInput[] | modelsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: modelsCreateOrConnectWithoutBrandInput | modelsCreateOrConnectWithoutBrandInput[]
    createMany?: modelsCreateManyBrandInputEnvelope
    connect?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
  }

  export type modelsUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<modelsCreateWithoutBrandInput, modelsUncheckedCreateWithoutBrandInput> | modelsCreateWithoutBrandInput[] | modelsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: modelsCreateOrConnectWithoutBrandInput | modelsCreateOrConnectWithoutBrandInput[]
    createMany?: modelsCreateManyBrandInputEnvelope
    connect?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
  }

  export type modelsUpdateManyWithoutBrandNestedInput = {
    create?: XOR<modelsCreateWithoutBrandInput, modelsUncheckedCreateWithoutBrandInput> | modelsCreateWithoutBrandInput[] | modelsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: modelsCreateOrConnectWithoutBrandInput | modelsCreateOrConnectWithoutBrandInput[]
    upsert?: modelsUpsertWithWhereUniqueWithoutBrandInput | modelsUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: modelsCreateManyBrandInputEnvelope
    set?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    disconnect?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    delete?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    connect?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    update?: modelsUpdateWithWhereUniqueWithoutBrandInput | modelsUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: modelsUpdateManyWithWhereWithoutBrandInput | modelsUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: modelsScalarWhereInput | modelsScalarWhereInput[]
  }

  export type modelsUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<modelsCreateWithoutBrandInput, modelsUncheckedCreateWithoutBrandInput> | modelsCreateWithoutBrandInput[] | modelsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: modelsCreateOrConnectWithoutBrandInput | modelsCreateOrConnectWithoutBrandInput[]
    upsert?: modelsUpsertWithWhereUniqueWithoutBrandInput | modelsUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: modelsCreateManyBrandInputEnvelope
    set?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    disconnect?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    delete?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    connect?: modelsWhereUniqueInput | modelsWhereUniqueInput[]
    update?: modelsUpdateWithWhereUniqueWithoutBrandInput | modelsUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: modelsUpdateManyWithWhereWithoutBrandInput | modelsUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: modelsScalarWhereInput | modelsScalarWhereInput[]
  }

  export type brandsCreateNestedOneWithoutModelsInput = {
    create?: XOR<brandsCreateWithoutModelsInput, brandsUncheckedCreateWithoutModelsInput>
    connectOrCreate?: brandsCreateOrConnectWithoutModelsInput
    connect?: brandsWhereUniqueInput
  }

  export type variantsCreateNestedManyWithoutModelInput = {
    create?: XOR<variantsCreateWithoutModelInput, variantsUncheckedCreateWithoutModelInput> | variantsCreateWithoutModelInput[] | variantsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutModelInput | variantsCreateOrConnectWithoutModelInput[]
    createMany?: variantsCreateManyModelInputEnvelope
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
  }

  export type variantsUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<variantsCreateWithoutModelInput, variantsUncheckedCreateWithoutModelInput> | variantsCreateWithoutModelInput[] | variantsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutModelInput | variantsCreateOrConnectWithoutModelInput[]
    createMany?: variantsCreateManyModelInputEnvelope
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
  }

  export type brandsUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<brandsCreateWithoutModelsInput, brandsUncheckedCreateWithoutModelsInput>
    connectOrCreate?: brandsCreateOrConnectWithoutModelsInput
    upsert?: brandsUpsertWithoutModelsInput
    connect?: brandsWhereUniqueInput
    update?: XOR<XOR<brandsUpdateToOneWithWhereWithoutModelsInput, brandsUpdateWithoutModelsInput>, brandsUncheckedUpdateWithoutModelsInput>
  }

  export type variantsUpdateManyWithoutModelNestedInput = {
    create?: XOR<variantsCreateWithoutModelInput, variantsUncheckedCreateWithoutModelInput> | variantsCreateWithoutModelInput[] | variantsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutModelInput | variantsCreateOrConnectWithoutModelInput[]
    upsert?: variantsUpsertWithWhereUniqueWithoutModelInput | variantsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: variantsCreateManyModelInputEnvelope
    set?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    disconnect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    delete?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    update?: variantsUpdateWithWhereUniqueWithoutModelInput | variantsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: variantsUpdateManyWithWhereWithoutModelInput | variantsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: variantsScalarWhereInput | variantsScalarWhereInput[]
  }

  export type variantsUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<variantsCreateWithoutModelInput, variantsUncheckedCreateWithoutModelInput> | variantsCreateWithoutModelInput[] | variantsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutModelInput | variantsCreateOrConnectWithoutModelInput[]
    upsert?: variantsUpsertWithWhereUniqueWithoutModelInput | variantsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: variantsCreateManyModelInputEnvelope
    set?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    disconnect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    delete?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    update?: variantsUpdateWithWhereUniqueWithoutModelInput | variantsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: variantsUpdateManyWithWhereWithoutModelInput | variantsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: variantsScalarWhereInput | variantsScalarWhereInput[]
  }

  export type modelsCreateNestedOneWithoutVariantsInput = {
    create?: XOR<modelsCreateWithoutVariantsInput, modelsUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: modelsCreateOrConnectWithoutVariantsInput
    connect?: modelsWhereUniqueInput
  }

  export type modelsUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<modelsCreateWithoutVariantsInput, modelsUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: modelsCreateOrConnectWithoutVariantsInput
    upsert?: modelsUpsertWithoutVariantsInput
    connect?: modelsWhereUniqueInput
    update?: XOR<XOR<modelsUpdateToOneWithWhereWithoutVariantsInput, modelsUpdateWithoutVariantsInput>, modelsUncheckedUpdateWithoutVariantsInput>
  }

  export type citiesCreateNestedManyWithoutStateInput = {
    create?: XOR<citiesCreateWithoutStateInput, citiesUncheckedCreateWithoutStateInput> | citiesCreateWithoutStateInput[] | citiesUncheckedCreateWithoutStateInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutStateInput | citiesCreateOrConnectWithoutStateInput[]
    createMany?: citiesCreateManyStateInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type citiesUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<citiesCreateWithoutStateInput, citiesUncheckedCreateWithoutStateInput> | citiesCreateWithoutStateInput[] | citiesUncheckedCreateWithoutStateInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutStateInput | citiesCreateOrConnectWithoutStateInput[]
    createMany?: citiesCreateManyStateInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type citiesUpdateManyWithoutStateNestedInput = {
    create?: XOR<citiesCreateWithoutStateInput, citiesUncheckedCreateWithoutStateInput> | citiesCreateWithoutStateInput[] | citiesUncheckedCreateWithoutStateInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutStateInput | citiesCreateOrConnectWithoutStateInput[]
    upsert?: citiesUpsertWithWhereUniqueWithoutStateInput | citiesUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: citiesCreateManyStateInputEnvelope
    set?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    disconnect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    delete?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    update?: citiesUpdateWithWhereUniqueWithoutStateInput | citiesUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: citiesUpdateManyWithWhereWithoutStateInput | citiesUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: citiesScalarWhereInput | citiesScalarWhereInput[]
  }

  export type citiesUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<citiesCreateWithoutStateInput, citiesUncheckedCreateWithoutStateInput> | citiesCreateWithoutStateInput[] | citiesUncheckedCreateWithoutStateInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutStateInput | citiesCreateOrConnectWithoutStateInput[]
    upsert?: citiesUpsertWithWhereUniqueWithoutStateInput | citiesUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: citiesCreateManyStateInputEnvelope
    set?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    disconnect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    delete?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    update?: citiesUpdateWithWhereUniqueWithoutStateInput | citiesUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: citiesUpdateManyWithWhereWithoutStateInput | citiesUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: citiesScalarWhereInput | citiesScalarWhereInput[]
  }

  export type statesCreateNestedOneWithoutCitiesInput = {
    create?: XOR<statesCreateWithoutCitiesInput, statesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: statesCreateOrConnectWithoutCitiesInput
    connect?: statesWhereUniqueInput
  }

  export type statesUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<statesCreateWithoutCitiesInput, statesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: statesCreateOrConnectWithoutCitiesInput
    upsert?: statesUpsertWithoutCitiesInput
    connect?: statesWhereUniqueInput
    update?: XOR<XOR<statesUpdateToOneWithWhereWithoutCitiesInput, statesUpdateWithoutCitiesInput>, statesUncheckedUpdateWithoutCitiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type modelsCreateWithoutBrandInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    variants?: variantsCreateNestedManyWithoutModelInput
  }

  export type modelsUncheckedCreateWithoutBrandInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    variants?: variantsUncheckedCreateNestedManyWithoutModelInput
  }

  export type modelsCreateOrConnectWithoutBrandInput = {
    where: modelsWhereUniqueInput
    create: XOR<modelsCreateWithoutBrandInput, modelsUncheckedCreateWithoutBrandInput>
  }

  export type modelsCreateManyBrandInputEnvelope = {
    data: modelsCreateManyBrandInput | modelsCreateManyBrandInput[]
  }

  export type modelsUpsertWithWhereUniqueWithoutBrandInput = {
    where: modelsWhereUniqueInput
    update: XOR<modelsUpdateWithoutBrandInput, modelsUncheckedUpdateWithoutBrandInput>
    create: XOR<modelsCreateWithoutBrandInput, modelsUncheckedCreateWithoutBrandInput>
  }

  export type modelsUpdateWithWhereUniqueWithoutBrandInput = {
    where: modelsWhereUniqueInput
    data: XOR<modelsUpdateWithoutBrandInput, modelsUncheckedUpdateWithoutBrandInput>
  }

  export type modelsUpdateManyWithWhereWithoutBrandInput = {
    where: modelsScalarWhereInput
    data: XOR<modelsUpdateManyMutationInput, modelsUncheckedUpdateManyWithoutBrandInput>
  }

  export type modelsScalarWhereInput = {
    AND?: modelsScalarWhereInput | modelsScalarWhereInput[]
    OR?: modelsScalarWhereInput[]
    NOT?: modelsScalarWhereInput | modelsScalarWhereInput[]
    id?: StringFilter<"models"> | string
    name?: StringFilter<"models"> | string
    brandId?: StringFilter<"models"> | string
    craetedAt?: DateTimeFilter<"models"> | Date | string
    updatedAt?: DateTimeFilter<"models"> | Date | string
  }

  export type brandsCreateWithoutModelsInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type brandsUncheckedCreateWithoutModelsInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type brandsCreateOrConnectWithoutModelsInput = {
    where: brandsWhereUniqueInput
    create: XOR<brandsCreateWithoutModelsInput, brandsUncheckedCreateWithoutModelsInput>
  }

  export type variantsCreateWithoutModelInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type variantsUncheckedCreateWithoutModelInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type variantsCreateOrConnectWithoutModelInput = {
    where: variantsWhereUniqueInput
    create: XOR<variantsCreateWithoutModelInput, variantsUncheckedCreateWithoutModelInput>
  }

  export type variantsCreateManyModelInputEnvelope = {
    data: variantsCreateManyModelInput | variantsCreateManyModelInput[]
  }

  export type brandsUpsertWithoutModelsInput = {
    update: XOR<brandsUpdateWithoutModelsInput, brandsUncheckedUpdateWithoutModelsInput>
    create: XOR<brandsCreateWithoutModelsInput, brandsUncheckedCreateWithoutModelsInput>
    where?: brandsWhereInput
  }

  export type brandsUpdateToOneWithWhereWithoutModelsInput = {
    where?: brandsWhereInput
    data: XOR<brandsUpdateWithoutModelsInput, brandsUncheckedUpdateWithoutModelsInput>
  }

  export type brandsUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type brandsUncheckedUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantsUpsertWithWhereUniqueWithoutModelInput = {
    where: variantsWhereUniqueInput
    update: XOR<variantsUpdateWithoutModelInput, variantsUncheckedUpdateWithoutModelInput>
    create: XOR<variantsCreateWithoutModelInput, variantsUncheckedCreateWithoutModelInput>
  }

  export type variantsUpdateWithWhereUniqueWithoutModelInput = {
    where: variantsWhereUniqueInput
    data: XOR<variantsUpdateWithoutModelInput, variantsUncheckedUpdateWithoutModelInput>
  }

  export type variantsUpdateManyWithWhereWithoutModelInput = {
    where: variantsScalarWhereInput
    data: XOR<variantsUpdateManyMutationInput, variantsUncheckedUpdateManyWithoutModelInput>
  }

  export type variantsScalarWhereInput = {
    AND?: variantsScalarWhereInput | variantsScalarWhereInput[]
    OR?: variantsScalarWhereInput[]
    NOT?: variantsScalarWhereInput | variantsScalarWhereInput[]
    id?: StringFilter<"variants"> | string
    name?: StringFilter<"variants"> | string
    modelId?: StringFilter<"variants"> | string
    craetedAt?: DateTimeFilter<"variants"> | Date | string
    updatedAt?: DateTimeFilter<"variants"> | Date | string
  }

  export type modelsCreateWithoutVariantsInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
    brand: brandsCreateNestedOneWithoutModelsInput
  }

  export type modelsUncheckedCreateWithoutVariantsInput = {
    id?: string
    name: string
    brandId: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type modelsCreateOrConnectWithoutVariantsInput = {
    where: modelsWhereUniqueInput
    create: XOR<modelsCreateWithoutVariantsInput, modelsUncheckedCreateWithoutVariantsInput>
  }

  export type modelsUpsertWithoutVariantsInput = {
    update: XOR<modelsUpdateWithoutVariantsInput, modelsUncheckedUpdateWithoutVariantsInput>
    create: XOR<modelsCreateWithoutVariantsInput, modelsUncheckedCreateWithoutVariantsInput>
    where?: modelsWhereInput
  }

  export type modelsUpdateToOneWithWhereWithoutVariantsInput = {
    where?: modelsWhereInput
    data: XOR<modelsUpdateWithoutVariantsInput, modelsUncheckedUpdateWithoutVariantsInput>
  }

  export type modelsUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: brandsUpdateOneRequiredWithoutModelsNestedInput
  }

  export type modelsUncheckedUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesCreateWithoutStateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type citiesUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type citiesCreateOrConnectWithoutStateInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutStateInput, citiesUncheckedCreateWithoutStateInput>
  }

  export type citiesCreateManyStateInputEnvelope = {
    data: citiesCreateManyStateInput | citiesCreateManyStateInput[]
  }

  export type citiesUpsertWithWhereUniqueWithoutStateInput = {
    where: citiesWhereUniqueInput
    update: XOR<citiesUpdateWithoutStateInput, citiesUncheckedUpdateWithoutStateInput>
    create: XOR<citiesCreateWithoutStateInput, citiesUncheckedCreateWithoutStateInput>
  }

  export type citiesUpdateWithWhereUniqueWithoutStateInput = {
    where: citiesWhereUniqueInput
    data: XOR<citiesUpdateWithoutStateInput, citiesUncheckedUpdateWithoutStateInput>
  }

  export type citiesUpdateManyWithWhereWithoutStateInput = {
    where: citiesScalarWhereInput
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyWithoutStateInput>
  }

  export type citiesScalarWhereInput = {
    AND?: citiesScalarWhereInput | citiesScalarWhereInput[]
    OR?: citiesScalarWhereInput[]
    NOT?: citiesScalarWhereInput | citiesScalarWhereInput[]
    id?: StringFilter<"cities"> | string
    name?: StringFilter<"cities"> | string
    stateId?: StringFilter<"cities"> | string
    craetedAt?: DateTimeFilter<"cities"> | Date | string
    updatedAt?: DateTimeFilter<"cities"> | Date | string
  }

  export type statesCreateWithoutCitiesInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type statesUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type statesCreateOrConnectWithoutCitiesInput = {
    where: statesWhereUniqueInput
    create: XOR<statesCreateWithoutCitiesInput, statesUncheckedCreateWithoutCitiesInput>
  }

  export type statesUpsertWithoutCitiesInput = {
    update: XOR<statesUpdateWithoutCitiesInput, statesUncheckedUpdateWithoutCitiesInput>
    create: XOR<statesCreateWithoutCitiesInput, statesUncheckedCreateWithoutCitiesInput>
    where?: statesWhereInput
  }

  export type statesUpdateToOneWithWhereWithoutCitiesInput = {
    where?: statesWhereInput
    data: XOR<statesUpdateWithoutCitiesInput, statesUncheckedUpdateWithoutCitiesInput>
  }

  export type statesUpdateWithoutCitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statesUncheckedUpdateWithoutCitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelsCreateManyBrandInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type modelsUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: variantsUpdateManyWithoutModelNestedInput
  }

  export type modelsUncheckedUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: variantsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type modelsUncheckedUpdateManyWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantsCreateManyModelInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type variantsUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantsUncheckedUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantsUncheckedUpdateManyWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesCreateManyStateInput = {
    id?: string
    name: string
    craetedAt?: Date | string
    updatedAt?: Date | string
  }

  export type citiesUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesUncheckedUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesUncheckedUpdateManyWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    craetedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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