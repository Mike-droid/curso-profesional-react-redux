# Curso Profesional de React.js y Redux

## Conceptos claves para empezar

### Conceptos clave de Redux

Al utilizar cualquier tecnología es importante no solo saber utilizarla, sino porqué la estamos usando y entender la teoría.

¿Qué es Redux? -> Es una librería que nos ayuda a manejar el estado de nuestra aplicación.

Necesitamos 3 cosas:

- Dónde almancenar la información
- Cómo acceder a ella
- Cómo actualizarla

Redux está basado en 3 principios:

1. Hay solo una única fuente de verdad (store) => La diferencia entre State y Store es que State es un objeto de tipo 'clave: valor' (aunque puede ser de otros tipos). El Store contiene al State y a otras cosas.
2. El estado es de solo lectura (solo se actualiza con actions). No debemos modificarlo directamente.
3. Los cabmios deben realizarse a través de funciones puras (reducers).

Funciones puras

- Valor retornado cambia si la entrada cambia.
- Misma entrada, misma salida.
- Sin efectos colaterales

Entrada: x -> Función Pura: f -> Salida: F(x)

Reducers

- Calcular el nuevo estado basado en los parámetros (state, action).
- No modificar el estado directamente.
- No tener lógica asíncrona.

### Ciclo de vida de Redux

[Gif del ciclo de vida de Redux](https://platzi.com/comentario/3801091/)

1. state define UI
2. en la UI el usuario dispara una acción
3. la acción es mandada al reducer
4. el reducer actualiza el store
5. el store contiene al state
6. volvemos al paso 1

### Diferencias entre Redux y Context

> Cuando un sistema es opaco y no determinista, es dífícil reproducir errores o agregar nuevas características

Context API

- ¿Qué hace? -> Evita hacer 'prop drilling' y podemos pasar las props de componentes padres a hijos de forma sencilla.
- ¿Cuándo usarlo? -> Cuando usemos datos que no cambien mucho en nuestra aplicación.
- Se puede usar desde la versión 16.3 de React

Redux vs Context API

- Depuración -> Redux tiene un depurador que nos permite viajar en el tiempo. Context API es un poco más difícil.
- Bundle size -> Context API ya viene integrado en React, así que es más ligero.
- Middlewares -> Redux es muy sencillo con esto.
- Curva aprendizaje -> Context API es mucho más fácil de entender. Redux es un nuevo paradigma.
- Rendering -> Redux previene renders innecesarios.

## Introducción a nuestro proyecto

### Creemos una Pokedux

### Iniciando nuestro proyecto

Usaremos [Ant Design](https://ant.design/), una librería de UI de React.

## Atraparlos ya

### Introducción a PokeAPI

## React.js + Redux

### Integrando Redux

- `mapStateToProps` es una función recibe nuestro estado y retorna un objeto cuyas propiedades van a ser enviadas a las props del componente que se está conectado a redux.
- `mapDispatchToProps` es una función que recibe el dispatcher de redux y retorna un objeto que será mapedo a las propiedades con los action creatrors

### Hooks vs. Connect

useSelector vs Connect

- Boilerplate -> Los hooks ahorran mucho código aquí.
- Separación de responsabilidades -> Connect hace un High Order Component, así que es mejor.
- Testing -> Es un poco más fácil con Connect.

> Redux ahora recomienda usar su Hooks API. - Redux Docs

[Use the React-Redux Hooks API](https://redux.js.org/style-guide/#use-the-react-redux-hooks-api)

- useSelector -> `const list = useSelector(state => state.list);`
- useDispatch -> `const dispatch = useDispatch(); dispatch(myAction());`

### Redux DevTools

[Redux DevTools](https://github.com/reduxjs/redux-devtools)

## Middlewares

### Clase: Middlewares

Un middleware es una pieza de código que se ejecuta entre que algo recibe un request y ese algo da respuesta al request.

En el caso de Redux, esa pieza de código se ejecuta entre que se dispara una acción y esa acción llega al reducer.

- store creator -> función que crea el store de redux
- enhancer -> función de order superior que toma un store creator y devuelve una versión 'potenciada' (es similar a los middlewares)
- compose -> utilidad de programación funcional que combina funciones de derecha a izquierda

[sentry for react](https://sentry.io/for/react/)

### Peticiones asíncronas

### Redux Thunk

[Understanding Asynchronous Redux Actions with Redux Thunk](https://www.digitalocean.com/community/tutorials/redux-redux-thunk)

### Middlewares alternativos: Redux Saga

[saga vs thunk](https://www.paradigmadigital.com/dev/sagas-vs-thunk/)

[Redux Thunk vs Redux Saga - The Battle of the Middlewares](https://www.eternussolutions.com/2020/12/21/redux-thunk-redux-saga/)

## Avanzando la ui

### Agreguemos un loader

Usaremos el componente de [Spin](https://ant.design/components/spin/)

### Agreguemos favoritos

[Ant Design - Card](https://ant.design/components/card/)

## Inmutabilidad

### ¿Qué es inmutabilidad?

> Algo que no puede ser cambiado después de su creación. - RAE

Redux no rendirazá la UI si no hay cambios entre el estado inicial y el estado final.

```javascript
const updateAge = (userInfo) => {
  return {
    ...userInfo,
    age: userInfo.age + 1,
  };
}

const userInfo = {
  name: 'Miguel',
  age: 23,
  email: 'miguel@platzi.com'
}

console.log('userInfo BEFORE: ', userInfo);
console.log('userInfo AFTER: ', userInfo);
console.log('updatedInfo: ', updateAge(userInfo));

```

Pero la inmutabilidad también tiene desventajas:

- Generación constante de objetos
- Propenso a errores humanos
- Menos trazabilidad

### Agregando Inmutabilidad a nuestra Pokedux

Instalamos [immutable](https://www.npmjs.com/package/immutable)

## Avanzado

### Cuándo usar reducers combinados

Combinar reducers es opcional y puede mejorar la experiencia de desarrollo. Sin embargo, eres libre de manejar todo con 1 solo reducer (aunque no es recomendable).

Usaremos [redux-immutable](https://www.npmjs.com/package/redux-immutable)
