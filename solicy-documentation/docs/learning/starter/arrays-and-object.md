---
sidebar_position: 3
---

# Arrays and Objects

## Array

The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

## Description

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

# Common operations

## Create an Array

```
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
Copy to Clipboard
```
## Access an Array item using the index position

```
let first = fruits[0]
/ Apple

let last = fruits[fruits.length - 1]
/ Banana
Copy to Clipboard
```
## Loop over an Array

```
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
/ Apple 0
/ Banana 1
Copy to Clipboard
```
## Add an item to the end of an Array

```
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
Copy to Clipboard
```
## Remove an item from the end of an Array

```
let last = fruits.pop() / remove Orange (from the end)
/ ["Apple", "Banana"]
Copy to Clipboard
```
## Remove an item from the beginning of an Array

```
let first = fruits.shift() / remove Apple from the front
/ ["Banana"]
```

## Object

The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

## Description

Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

The Object constructor creates an object wrapper for the given value.

If the value is null or undefined, it will create and return an empty object.
Otherwise, it will return an object of a Type that corresponds to the given value.
If the value is an object already, it will return the value.
When called in a non-constructor context, Object behaves identically to new Object().

See also the object initializer / literal syntax.

Deleting a property from an object
There isn't any method in an Object itself to delete its own properties (such as Map.prototype.delete()). To do so, one must use the delete operator.

## Constructor

`Object()`
Creates a new Object object. It is a wrapper for the given value.

## Static methods

`Object.assign()`
Copies the values of all enumerable own properties from one or more source objects to a target object.

`Object.create()`
Creates a new object with the specified prototype object and properties.

`Object.defineProperty()`
Adds the named property described by a given descriptor to an object.

`Object.defineProperties()`
Adds the named properties described by the given descriptors to an object.

`Object.entries()`
Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

`Object.freeze()`
Freezes an object. Other code cannot delete or change its properties.

`Object.fromEntries()`
Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

`Object.getOwnPropertyDescriptor()`
Returns a property descriptor for a named property on an object.

`Object.getOwnPropertyDescriptors()`
Returns an object containing all own property descriptors for an object.

`Object.getOwnPropertyNames()`
Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

`Object.getOwnPropertySymbols()`
Returns an array of all symbol properties found directly upon a given object.

`Object.getPrototypeOf()`
Returns the prototype (internal [[Prototype]] property) of the specified object.

`Object.is()`
Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).

`Object.isExtensible()`
Determines if extending of an object is allowed.

`Object.isFrozen()`
Determines if an object was frozen.

`Object.isSealed()`
Determines if an object is sealed.

`Object.keys()`
Returns an array containing the names of all of the given object's own enumerable string properties.

`Object.preventExtensions()`
Prevents any extensions of an object.

`Object.seal()`
Prevents other code from deleting properties of an object.

`Object.setPrototypeOf()`
Sets the object's prototype (its internal [[Prototype]] property).

`Object.values()`
Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

## Instance properties

`Object.prototype.constructor`
Specifies the function that creates an object's prototype.

`Object.prototype.__proto__`
Points to the object which was used as prototype when the object was instantiated.

## Instance methods

`Object.prototype.__defineGetter__()`
Associates a function with a property that, when accessed, executes that function and returns its return value.

`Object.prototype.__defineSetter__()`
Associates a function with a property that, when set, executes that function which modifies the property.

`Object.prototype.__lookupGetter__()`
Returns the function associated with the specified property by the `__defineGetter__() method.`

`Object.prototype.__lookupSetter__()`
Returns the function associated with the specified property by the `__defineSetter__() method.`

`Object.prototype.hasOwnProperty()`
Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

`Object.prototype.isPrototypeOf()`
Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

`Object.prototype.propertyIsEnumerable()`
Returns a boolean indicating if the internal `ECMAScript [[Enumerable]] attribute` is set.

`Object.prototype.toLocaleString()`
Calls `toString()`.

`Object.prototype.toString()`
Returns a string representation of the object.

`Object.prototype.valueOf()`
Returns the primitive value of the specified object.