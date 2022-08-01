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

*Funciones puras*

- Valor retornado cambia si la entrada cambia.
- Misma entrada, misma salida.
- Sin efectos colaterales

Entrada: x -> Función Pura: f -> Salida: F(x)

*Reducers*

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

*Context API*

- ¿Qué hace? -> Evita hacer 'prop drilling' y podemos pasar las props de componentes padres a hijos de forma sencilla.
- ¿Cuándo usarlo? -> Cuando usemos datos que no cambien mucho en nuestra aplicación.
- Se puede usar desde la versión 16.3 de React

*Redux vs Context API*

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
