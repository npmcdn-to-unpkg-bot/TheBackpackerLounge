/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export { HostMetadata, InjectMetadata, InjectableMetadata, OptionalMetadata, SelfMetadata, SkipSelfMetadata } from './di/metadata';
// we have to reexport * because Dart and TS export two different sets of types
export * from './di/decorators';
export { forwardRef, resolveForwardRef } from './di/forward_ref';
export { Injector } from './di/injector';
export { ReflectiveInjector } from './di/reflective_injector';
export { ResolvedReflectiveFactory } from './di/reflective_provider';
export { ReflectiveKey } from './di/reflective_key';
export { OpaqueToken } from './di/opaque_token';
//# sourceMappingURL=di.js.map