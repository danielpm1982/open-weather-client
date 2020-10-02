<template>
  <div class="centralTextVuejs">
    <div class="justifyAlign">
      TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.[4] As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.
      TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used,[5] or the Babel compiler can be invoked to convert TypeScript to JavaScript.
      TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.[6]
      The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0. TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, beside C# and other Microsoft languages.[7] An official extension allows Visual Studio 2012 to support TypeScript as well.[8] Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.[9][10][11][12] 
      TypeScript was first made public in October 2012 (at version 0.8), after two years of internal development at Microsoft.[13][14] Soon after the announcement, Miguel de Icaza praised the language itself, but criticized the lack of mature IDE support apart from Microsoft Visual Studio, which was not available on Linux and OS X at that time.[15][16] Today there is support in other IDEs, particularly in Eclipse, via a plug-in contributed by Palantir Technologies.[17][18] Various text editors, including Emacs, Vim, Webstorm, Atom[19] and Microsoft's own Visual Studio Code also support TypeScript.[20]
      TypeScript 0.9, released in 2013, added support for generics.[21] TypeScript 1.0 was released at Microsoft's Build developer conference in 2014.[22] Visual Studio 2013 Update 2 provides built-in support for TypeScript.[23]
      In July 2014, the development team announced a new TypeScript compiler, claiming 5× performance gains. Simultaneously, the source code, which was initially hosted on CodePlex, was moved to GitHub.[24]
      On 22 September 2016, TypeScript 2.0 was released; it introduced several features, including the ability for programmers to optionally prevent variables from being assigned null values,[25] sometimes referred to as the billion-dollar mistake.
      TypeScript 3.0 was released on 30 July 2018,[26] bringing many language additions like tuples in rest parameters and spread expressions, rest parameters with tuple types, generic rest parameters and so on.[27] 
      TypeScript originated from the shortcomings of JavaScript for the development of large-scale applications both at Microsoft and among their external customers.[28] Challenges with dealing with complex JavaScript code led to demand for custom tooling to ease developing of components in the language.[29]
      TypeScript developers sought a solution that would not break compatibility with the standard and its cross-platform support. Knowing that the current ECMAScript standard proposal promised future support for class-based programming, TypeScript was based on that proposal. That led to a JavaScript compiler with a set of syntactical language extensions, a superset based on the proposal, that transforms the extensions into regular JavaScript. In this sense TypeScript was a preview of what to expect of ECMAScript 2015. A unique aspect not in the proposal, but added to TypeScript, is optional static typing[30] that enables static language analysis, which facilitates tooling and IDE support.
      TypeScript adds support for features such as classes, modules, and an arrow function syntax as defined in the ECMAScript 2015 standard. 
      TypeScript is a language extension that adds features to ECMAScript 6. Additional features include:
          Type annotations and compile-time type checking
          Type inference
          Type erasure
          Interfaces
          Enumerated types
          Generics
          Namespaces
          Tuples
          Async/await
      The following features are backported from ECMAScript 2015:
          Classes
          Modules[31]
          Abbreviated "arrow" syntax for anonymous functions
          Optional parameters and default parameters
      Syntactically, TypeScript is very similar to JScript .NET, another Microsoft implementation of the ECMA-262 language standard that added support for static typing and classical object-oriented language features such as classes, inheritance, interfaces, and namespaces. 
      TypeScript is a strict superset of ECMAScript 2015, which is itself a superset of ECMAScript 5, commonly referred to as JavaScript.[32] As such, a JavaScript program is also a valid TypeScript program, and a TypeScript program can seamlessly consume JavaScript. By default the compiler targets ECMAScript 5, the current prevailing standard, but is also able to generate constructs used in ECMAScript 3 or 2015.
      With TypeScript, it is possible to use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript-generated code from other JavaScript.[33] Type declarations for these libraries are provided with the source code. 
      TypeScript provides static typing through type annotations to enable type checking at compile time. This is optional and can be ignored to use the regular dynamic typing of JavaScript.
      The annotations for the primitive types are number, boolean and string. Weakly- or dynamically-typed structures are of type any.
      Type annotations can be exported to a separate declarations file to make type information available for TypeScript scripts using types already compiled into JavaScript. Annotations can be declared for an existing JavaScript library, as has been done for Node.js and jQuery.
      The TypeScript compiler makes use of type inference to infer types when types are not given. For example, the add method in the code above would be inferred as returning a number even if no return type annotation had been provided. This is based on the static types of left and right being numbers, and the compiler's knowledge that the result of adding two numbers is always a number. However, explicitly declaring the return type allows the compiler to verify correctness.
      If no type can be inferred because of lack of declarations, then it defaults to the dynamic any type. A value of the any type supports the same operations as a value in JavaScript and minimal static type checking is performed for operations on any values.[34] 
      When a TypeScript script gets compiled there is an option to generate a declaration file (with the extension .d.ts) that functions as an interface to the components in the compiled JavaScript. In the process the compiler strips away all function and method bodies and preserves only the signatures of the types that are exported. The resulting declaration file can then be used to describe the exported virtual TypeScript types of a JavaScript library or module when a third-party developer consumes it from TypeScript. 
      TypeScript supports ECMAScript 2015 classes that integrate the optional type annotations support.
      TypeScript supports generic programming.[35] The following is an example of the identity function.[36]
      TypeScript distinguishes between modules and namespaces. Both features in TypeScript support encapsulation of classes, interfaces, functions and variables into containers. Namespaces (formerly internal modules) utilize immediately-invoked function expression of JavaScript to encapsulate code, whereas modules (formerly external modules) leverage JavaScript library patterns to do so (AMD or CommonJS).[37]
      The TypeScript compiler, named tsc, is written in TypeScript. As a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser). The compiler package comes bundled with a script host that can execute the compiler. It is also available as a Node.js package that uses Node.js as a host.
      There is also an alpha version of a client-side compiler in JavaScript, which executes TypeScript code on the fly, upon page load.[38]
      The current version of the compiler supports ECMAScript 5 by default. An option is allowed to target ECMAScript 2015 to make use of language features exclusive to that version (e.g. generators). Classes, despite being part of the ECMAScript 2015 standard, are available in both modes. 
      <br><br>
      Source:<br>
      https://en.wikipedia.org/wiki/TypeScript
    </div>
  </div>
  <!-- We are using node <script>document.write(process.versions.node)</script>,
  Chrome <script>document.write(process.versions.chrome)</script>,
  and Electron <script>document.write(process.versions.electron)</script>. -->
</template>
<style scoped>
    div.centralTextVuejs{
      width: 80%;
      margin: auto;
      text-align: left;
      font-size: 1em;
    }
    div.centralTextVuejs div.justifyAlign{
      text-align: justify;
      margin-bottom: 3em;
    }
  </style>
