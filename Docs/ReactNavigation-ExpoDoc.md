# 01 Fundamentals

## 01. Getting started

---
created: 2025-02-08T16:19:27 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Getting started | React Navigation

> ## Excerpt
> What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.

---
What follows within the _Fundamentals_ section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.

## Pre-requisites[](https://reactnavigation.org/docs/getting-started#pre-requisites "Direct link to Pre-requisites")

If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done.

Here are some resources to help you out:

1.  [React Native](https://reactnative.dev/docs/getting-started)
2.  [Main Concepts of React](https://react.dev/learn)
3.  [React Hooks](https://react.dev/reference/react)
4.  [React Context](https://react.dev/learn/passing-data-deeply-with-context) (Advanced)

## Minimum requirements[](https://reactnavigation.org/docs/getting-started#minimum-requirements "Direct link to Minimum requirements")

-   `react-native` >= 0.72.0
-   `expo` >= 52 (if you use [Expo Go](https://expo.dev/go))
-   `typescript` >= 5.0.0 (if you use TypeScript)

## Starter template[](https://reactnavigation.org/docs/getting-started#starter-template "Direct link to Starter template")

If you're starting a new project, you can use the [React Navigation template](https://github.com/react-navigation/template) to quickly set up a new project with [Static configuration](https://reactnavigation.org/docs/getting-started#static-configuration):

```
npx create-expo-app@latest --template react-navigation/template
```

See the project's `README.md` for more information on how to get started.

If you created a new project using the template, you can skip the installation steps below and move on to ["Hello React Navigation"](https://reactnavigation.org/docs/hello-react-navigation?config=static).

Otherwise, you can follow the instructions below to install React Navigation into your existing project.

## Installation[](https://reactnavigation.org/docs/getting-started#installation "Direct link to Installation")

Install the required packages in your React Native project:

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/native
```

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code.

The libraries we will install now are [`react-native-screens`](https://github.com/software-mansion/react-native-screens) and [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context). If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on.

### Installing dependencies into an Expo managed project[](https://reactnavigation.org/docs/getting-started#installing-dependencies-into-an-expo-managed-project "Direct link to Installing dependencies into an Expo managed project")

In your project directory, run:

```
npx expo install react-native-screens react-native-safe-area-context
```

This will install versions of these libraries that are compatible.

You can now continue to ["Hello React Navigation"](https://reactnavigation.org/docs/hello-react-navigation) to start writing some code.

### Installing dependencies into a bare React Native project[](https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project "Direct link to Installing dependencies into a bare React Native project")

In your project directory, run:

-   npm
-   Yarn
-   pnpm

```
npm install react-native-screens react-native-safe-area-context
```

note

You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.

If you're on a Mac and developing for iOS, you need to install the pods (via [Cocoapods](https://cocoapods.org/)) to complete the linking.

`react-native-screens` package requires one additional configuration step to properly work on Android devices. Edit `MainActivity.kt` or `MainActivity.java` file which is located under `android/app/src/main/java/<your package name>/`.

Add the highlighted code to the body of `MainActivity` class:

-   Kotlin
-   Java

```
class MainActivity: ReactActivity() {  // ...  override fun onCreate(savedInstanceState: Bundle?) {    super.onCreate(null)  }  // ...}
```

and make sure to add the following import statement at the top of this file below your package statement:

```
import android.os.Bundle;
```

This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.

info

When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error "Unable to resolve module", you need to install that module in your project.

## Setting up React Navigation[](https://reactnavigation.org/docs/getting-started#setting-up-react-navigation "Direct link to Setting up React Navigation")

Once you've installed and configured the dependencies, you can move on to setting up your project to use React Navigation.

When using React Navigation, you configure [**navigators**](https://reactnavigation.org/docs/glossary-of-terms#navigator) in your app. Navigators handle the transition between screens in your app and provide UI such as header, tab bar etc.

There are 2 primary ways to configure the navigators:

### Static configuration[](https://reactnavigation.org/docs/getting-started#static-configuration "Direct link to Static configuration")

The static configuration API has reduced boilerplate and simplifies things such as TypeScript types and deep linking. If you're starting a new project or are new to React Navigation, this is the **recommended way** to set up your app. If you need more flexibility in the future, you can always mix and match with the dynamic configuration.

Continue to ["Hello React Navigation"](https://reactnavigation.org/docs/hello-react-navigation?config=static) to start writing some code with the static API.

### Dynamic configuration[](https://reactnavigation.org/docs/getting-started#dynamic-configuration "Direct link to Dynamic configuration")

The dynamic configuration allows for more flexibility but requires more boilerplate and configuration (e.g. for deep links, typescript etc.).

To get started with dynamic configuration, first, we need to wrap your app in `NavigationContainer`. Usually, you'd do this in your entry file, such as `index.js` or `App.js`:

```
import * as React from 'react';import { NavigationContainer } from '@react-navigation/native';export default function App() {  return (    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>  );}
```

warning

In a typical React Native app, the `NavigationContainer` should be only used once in your app at the root. You shouldn't nest multiple `NavigationContainer`s unless you have a specific use case for them.

Continue to ["Hello React Navigation"](https://reactnavigation.org/docs/hello-react-navigation?config=dynamic) to start writing some code with the dynamic API.


## 02. Hello React Navigation

---
created: 2025-02-08T16:20:02 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Hello React Navigation | React Navigation

> ## Excerpt
> In a web browser, you can link to different pages using an anchor (``) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.

---
In a web browser, you can link to different pages using an anchor (`<a>`) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.

React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.

Let's start by demonstrating the most common navigator, `createNativeStackNavigator`.

## Installing the native stack navigator library[](https://reactnavigation.org/docs/getting-started#installing-the-native-stack-navigator-library "Direct link to Installing the native stack navigator library")

The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install [`@react-navigation/native-stack`](https://github.com/react-navigation/react-navigation/tree/main/packages/native-stack) :

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/native-stack
```

info

`@react-navigation/native-stack` depends on `react-native-screens` and the other libraries that we installed in [Getting started](https://reactnavigation.org/docs/getting-started). If you haven't installed those yet, head over to that page and follow the installation instructions.

## Installing the elements library[](https://reactnavigation.org/docs/getting-started#installing-the-elements-library "Direct link to Installing the elements library")

The [`@react-navigation/elements`](https://reactnavigation.org/docs/elements) library provides a set of components that are designed to work well with React Navigation. We'll use a few of these components in this guide. So let's install it first:

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/elements
```

## Creating a native stack navigator[](https://reactnavigation.org/docs/getting-started#creating-a-native-stack-navigator "Direct link to Creating a native stack navigator")

-   Static
-   Dynamic

`createNativeStackNavigator` is a function that returns an object containing 2 properties: `Screen` and `Navigator`. Both of them are React components used for configuring the navigator. The `Navigator` should contain `Screen` elements as its children to define the configuration for routes.

`NavigationContainer` is a component that manages our navigation tree and contains the [navigation state](https://reactnavigation.org/docs/navigation-state). This component must wrap all the navigators in the app. Usually, we'd render this component at the root of our app, which is usually the component exported from `App.js`.

```
// In App.js in a new projectimport * as React from 'react';import { View, Text } from 'react-native';import { NavigationContainer } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';function HomeScreen() {  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Home Screen</Text>    </View>  );}const Stack = createNativeStackNavigator();function RootStack() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={HomeScreen} />    </Stack.Navigator>  );}export default function App() {  return (    <NavigationContainer>      <RootStack />    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Native+Stack+Example&code=%2F%2F+In+App.js+in+a+new+project%0A%0Aimport+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

![Basic app using stack navigator](https://reactnavigation.org/assets/images/basic_stack_nav-badf922e9031eadc387b27ea382f1a42.png)

If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your `HomeScreen` component (shown above). The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later.

tip

The casing of the route name doesn't matter -- you can use lowercase `home` or capitalized `Home`, it's up to you. We prefer capitalizing our route names.

## Configuring the navigator[](https://reactnavigation.org/docs/getting-started#configuring-the-navigator "Direct link to Configuring the navigator")

All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration.

Let's add a second screen to our native stack navigator and configure the `Home` screen to render first:

-   Static
-   Dynamic

```
function RootStack() {  return (    <Stack.Navigator initialRouteName="Home">      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Details" component={DetailsScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Native+Stack+Example&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Details%22+component%3D%7BDetailsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Now our stack has two _routes_, a `Home` route and a `Details` route. A route can be specified by using the `Screen` component. The `Screen` component accepts a `name` prop which corresponds to the name of the route we will use to navigate, and a `component` prop which corresponds to the component it'll render.

warning

When using the dynamic API, the `component` prop accepts a component, not a render function. Don't pass an inline function (e.g. `component={() => <HomeScreen />}`), or your component will unmount and remount losing all state when the parent component re-renders. See [Passing additional props](https://reactnavigation.org/docs/getting-started#passing-additional-props) for alternatives.

Here, the `Home` route corresponds to the `HomeScreen` component, and the `Details` route corresponds to the `DetailsScreen` component. The initial route for the stack is the `Home` route. Try changing it to `Details` and reload the app (React Native's Fast Refresh won't update changes from `initialRouteName`, as you might expect), notice that you will now see the `Details` screen. Then change it back to `Home` and reload once more.

## Specifying options[](https://reactnavigation.org/docs/getting-started#specifying-options "Direct link to Specifying options")

Each screen in the navigator can specify some options for the navigator, such as the title to render in the header.

-   Static
-   Dynamic

Any customization options can be passed in the `options` prop for each screen component:

```
<Stack.Navigator initialRouteName="Home">  <Stack.Screen    name="Home"    component={HomeScreen}    options={{ title: 'Overview' }}  />  <Stack.Screen name="Details" component={DetailsScreen} /></Stack.Navigator>
```

[Try on **Snack**](https://snack.expo.dev/?name=Options+for+Screen&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B+title%3A+%27Overview%27+%7D%7D%0A++++++%2F%3E%0A++++++%3CStack.Screen+name%3D%22Details%22+component%3D%7BDetailsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a `screenOptions` prop to the navigator:

```
<Stack.Navigator  initialRouteName="Home"  screenOptions={{    headerStyle: { backgroundColor: 'tomato' },  }}>  <Stack.Screen    name="Home"    component={HomeScreen}    options={{ title: 'Overview' }}  />  <Stack.Screen name="Details" component={DetailsScreen} /></Stack.Navigator>
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+options+for+Screens&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%0A++++++initialRouteName%3D%22Home%22%0A++++++screenOptions%3D%7B%7B%0A++++++++headerStyle%3A+%7B+backgroundColor%3A+%27tomato%27+%7D%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B+title%3A+%27Overview%27+%7D%7D%0A++++++%2F%3E%0A++++++%3CStack.Screen+name%3D%22Details%22+component%3D%7BDetailsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## Passing additional props[](https://reactnavigation.org/docs/getting-started#passing-additional-props "Direct link to Passing additional props")

-   Static
-   Dynamic

Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:

1.  Use [React context](https://react.dev/reference/react/useContext) and wrap the navigator with a context provider to pass data to the screens (recommended).
    
2.  Use a render callback for the screen instead of specifying a `component` prop:
    
    ```
    <Stack.Screen name="Home">  {(props) => <HomeScreen {...props} extraData={someData} />}</Stack.Screen>
    ```
    

warning

By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use [`React.memo`](https://react.dev/reference/react/memo) or [`React.PureComponent`](https://react.dev/reference/react/PureComponent) for your screen components to avoid performance issues.

## What's next?[](https://reactnavigation.org/docs/getting-started#whats-next "Direct link to What's next?")

The natural question at this point is: "how do I go from the `Home` route to the `Details` route?". That is covered in the [next section](https://reactnavigation.org/docs/navigating).

Using with TypeScript

## Summary[](https://reactnavigation.org/docs/getting-started#summary "Direct link to Summary")

-   Static
-   Dynamic

-   React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens.
-   `Stack.Navigator` is a component that takes route configuration as its children with additional props for configuration and renders our content.
-   Each `Stack.Screen` component takes a `name` prop which refers to the name of the route and `component` prop which specifies the component to render for the route. These are the 2 required props.
-   To specify what the initial route in a stack is, provide an `initialRouteName` as the prop for the navigator.
-   To specify screen-specific options, we can pass an `options` prop to `Stack.Screen`, and for common options, we can pass `screenOptions` to `Stack.Navigator`.


## 03. Moving between screens

---
created: 2025-02-08T16:21:07 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Moving between screens | React Navigation

> ## Excerpt
> In the previous section, we defined a stack navigator with two routes (Home and Details), but we didn't learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).

---
In the previous section, we defined a stack navigator with two routes (`Home` and `Details`), but we didn't learn how to let a user navigate from `Home` to `Details` (although we did learn how to change the _initial_ route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).

If this was a web browser, we'd be able to write something like this:

```
<a href="details.html">Go to Details</a>
```

Another way to write this would be:

```
<a  onClick={() => {    window.location.href = 'details.html';  }}>  Go to Details</a>
```

We'll do something similar to the latter, but rather than using a `window.location` global, we'll use the `navigation` object that's accessible in our screen components.

## Navigating to a new screen[](https://reactnavigation.org/docs/getting-started#navigating-to-a-new-screen "Direct link to Navigating to a new screen")

```
import * as React from 'react';import { View, Text } from 'react-native';import {  createStaticNavigation,  useNavigation,} from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';import { Button } from '@react-navigation/elements';function HomeScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Home Screen</Text>      <Button onPress={() => navigation.navigate('Details')}>        Go to Details      </Button>    </View>  );}// ... other code from the previous section
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigating+to+a+new+screen&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0A%2F%2F+...+other+code+from+the+previous+section%0A%0Afunction+DetailsScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++initialRouteName%3A+%27Home%27%2C%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++Details%3A+DetailsScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true) 

Let's break this down:

-   `navigation` - the `navigation` object is returned from the [`useNavigation`](https://reactnavigation.org/docs/use-navigation) hook (more about this later in ["The navigation object in depth"](https://reactnavigation.org/docs/navigation-object)).
-   `navigate('Details')` - we call the `navigate` function (on the `navigation` object — naming is hard!) with the name of the route that we'd like to move the user to.

note

If we call `navigation.navigate` with a route name that we haven't defined in a navigator, it'll print an error in development builds and nothing will happen in production builds. Said another way, we can only navigate to routes that have been defined on our navigator — we cannot navigate to an arbitrary component.

So we now have a stack with two routes: 1) the `Home` route 2) the `Details` route. What would happen if we navigated to the `Details` route again, from the `Details` screen?

## Navigate to a screen multiple times[](https://reactnavigation.org/docs/getting-started#navigate-to-a-screen-multiple-times "Direct link to Navigate to a screen multiple times")

```
function DetailsScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Details Screen</Text>      <Button onPress={() => navigation.navigate('Details')}>        Go to Details... again      </Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigate+to+a+screen+multiple+times&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details...+again%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++initialRouteName%3A+%27Home%27%2C%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++Details%3A+DetailsScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you run this code, you'll notice that when you tap "Go to Details... again", it doesn't do anything! This is because we are already on the Details route. The `navigate` function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.

Let's suppose that we actually _want_ to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about `params`!). To do this, we can change `navigate` to `push`. This allows us to express the intent to add another route regardless of the existing navigation history.

```
<Button onPress={() => navigation.push('Details')}>  Go to Details... again</Button>
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigate+to+a+screen+multiple+times&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.push%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details...+again%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++initialRouteName%3A+%27Home%27%2C%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++Details%3A+DetailsScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true) 

Each time you call `push` we add a new route to the navigation stack. When you call `navigate` it only pushes a new route if you're not already on that route.

## Going back[](https://reactnavigation.org/docs/getting-started#going-back "Direct link to Going back")

The header provided by the native stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button).

Sometimes you'll want to be able to programmatically trigger this behavior, and for that, you can use `navigation.goBack()`.

```
function DetailsScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Details Screen</Text>      <Button onPress={() => navigation.push('Details')}>        Go to Details... again      </Button>      <Button onPress={() => navigation.goBack()}>Go back</Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Going+back&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.push%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details...+again%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++initialRouteName%3A+%27Home%27%2C%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++Details%3A+DetailsScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true) 

note

On Android, React Navigation hooks in to the hardware back button and fires the `goBack()` function for you when the user presses it, so it behaves as the user would expect.

Another common requirement is to be able to go back _multiple_ screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to `Home` so we can use `popTo('Home')`. Another alternative would be `navigation.popToTop()`, which goes back to the first screen in the stack.

```
function DetailsScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Details Screen</Text>      <Button onPress={() => navigation.push('Details')}>        Go to Details... again      </Button>      <Button onPress={() => navigation.goBack()}>Go back</Button>      <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>      <Button onPress={() => navigation.popToTop()}>        Go back to first screen in stack      </Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Going+back+to+specific+screen&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.push%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details...+again%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.popTo%28%27Home%27%29%7D%3EGo+to+Home%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.popToTop%28%29%7D%3E%0A++++++++Go+back+to+first+screen+in+stack%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++initialRouteName%3A+%27Home%27%2C%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++Details%3A+DetailsScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true) 

## Summary[](https://reactnavigation.org/docs/getting-started#summary "Direct link to Summary")

-   `navigation.navigate('RouteName')` pushes a new route to the native stack navigator if you're not already on that route.
-   We can call `navigation.push('RouteName')` as many times as we like and it will continue pushing routes.
-   The header bar will automatically show a back button, but you can programmatically go back by calling `navigation.goBack()`. On Android, the hardware back button just works as expected.
-   You can go back to an existing screen in the stack with `navigation.popTo('RouteName')`, and you can go back to the first screen in the stack with `navigation.popToTop()`.
-   The `navigation` object is available to all screen components with the [`useNavigation`](https://reactnavigation.org/docs/use-navigation) hook.


## 04. Passing parameters to routes

---
created: 2025-02-08T16:21:30 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Passing parameters to routes | React Navigation

> ## Excerpt
> Remember when I said "more on that later when we talk about params!"? Well, the time has come.

---
Remember when I said "more on that later when we talk about `params`!"? Well, the time has come.

Now that we know how to create a stack navigator with some routes and [navigate between those routes](https://reactnavigation.org/docs/navigating), let's look at how we can pass data to routes when we navigate to them.

There are two pieces to this:

1.  Pass params to a route by putting them in an object as a second parameter to the `navigation.navigate` function: `navigation.navigate('RouteName', { /* params go here */ })`
2.  Read the params in your screen component: `route.params`.

note

We recommend that the params you pass are JSON-serializable. That way, you'll be able to use [state persistence](https://reactnavigation.org/docs/state-persistence) and your screen components will have the right contract for implementing [deep linking](https://reactnavigation.org/docs/deep-linking).

```
function HomeScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Home Screen</Text>      <Button        onPress={() => {          /* 1. Navigate to the Details route with params */          navigation.navigate('Details', {            itemId: 86,            otherParam: 'anything you want here',          });        }}      >        Go to Details      </Button>    </View>  );}function DetailsScreen({ route }) {  const navigation = useNavigation();  /* 2. Get the param */  const { itemId, otherParam } = route.params;  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Details Screen</Text>      <Text>itemId: {JSON.stringify(itemId)}</Text>      <Text>otherParam: {JSON.stringify(otherParam)}</Text>      <Button        onPress={          () =>            navigation.push('Details', {              itemId: Math.floor(Math.random() * 100),            })        }      >        Go to Details... again      </Button>      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>      <Button onPress={() => navigation.goBack()}>Go back</Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Passing+params&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++%2F*+1.+Navigate+to+the+Details+route+with+params+*%2F%0A++++++++++navigation.navigate%28%27Details%27%2C+%7B%0A++++++++++++itemId%3A+86%2C%0A++++++++++++otherParam%3A+%27anything+you+want+here%27%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++%2F*+2.+Get+the+param+*%2F%0A++const+%7B+itemId%2C+otherParam+%7D+%3D+route.params%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++++%3CText%3EitemId%3A+%7BJSON.stringify%28itemId%29%7D%3C%2FText%3E%0A++++++%3CText%3EotherParam%3A+%7BJSON.stringify%28otherParam%29%7D%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%0A++++++++++%28%29+%3D%3E%0A++++++++++++navigation.push%28%27Details%27%2C+%7B%0A++++++++++++++itemId%3A+Math.floor%28Math.random%28%29+*+100%29%2C%0A++++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Details...+again%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Home%27%29%7D%3EGo+to+Home%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++Details%3A+DetailsScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true) 

## Initial params[](https://reactnavigation.org/docs/getting-started#initial-params "Direct link to Initial params")

You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified in `initialParams`:

-   Static
-   Dynamic

```
<Stack.Screen  name="Details"  component={DetailsScreen}  initialParams={{ itemId: 42 }}/>
```

## Updating params[](https://reactnavigation.org/docs/getting-started#updating-params "Direct link to Updating params")

Screens can also update their params, like they can update their state. The `navigation.setParams` method lets you update the params of a screen. Refer to the [API reference for `setParams`](https://reactnavigation.org/docs/navigation-object#setparams) for more details.

Basic usage:

```
navigation.setParams({  itemId: Math.floor(Math.random() * 100),})
```

[Try on **Snack**](https://snack.expo.dev/?name=Updating+params&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%7B+itemId+%7D+%3D+route.params%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CText%3EitemId%3A+%7BJSON.stringify%28itemId%29%7D%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%0A++++++++++%28%29+%3D%3E%0A++++++++++++navigation.setParams%28%7B%0A++++++++++++++itemId%3A+Math.floor%28Math.random%28%29+*+100%29%2C%0A++++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Update+param%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++initialParams%3A+%7B+itemId%3A+42+%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

note

Avoid using `setParams` to update screen options such as `title` etc. If you need to update options, use [`setOptions`](https://reactnavigation.org/docs/navigation-object#setoptions) instead.

## Passing params to a previous screen[](https://reactnavigation.org/docs/getting-started#passing-params-to-a-previous-screen "Direct link to Passing params to a previous screen")

Params aren't only useful for passing some data to a new screen, but they can also be useful to pass data to a previous screen as well. For example, let's say you have a screen with a "Create post" button, and the button opens a new screen to create a post. After creating the post, you want to pass the data for the post back to the previous screen.

To achieve this, you can use the `popTo` method to go back to the previous screen as well as pass params to it:

```
function HomeScreen({ route }) {  const navigation = useNavigation();  // Use an effect to monitor the update to params  React.useEffect(() => {    if (route.params?.post) {      // Post updated, do something with `route.params.post`      // For example, send the post to the server      alert('New post: ' + route.params?.post);    }  }, [route.params?.post]);  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Button onPress={() => navigation.navigate('CreatePost')}>        Create post      </Button>      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>    </View>  );}function CreatePostScreen({ route }) {  const navigation = useNavigation();  const [postText, setPostText] = React.useState('');  return (    <>      <TextInput        multiline        placeholder="What's on your mind?"        style={{ height: 200, padding: 10, backgroundColor: 'white' }}        value={postText}        onChangeText={setPostText}      />      <Button        onPress={() => {          // Pass params back to home screen          navigation.popTo('Home', { post: postText });        }}      >        Done      </Button>    </>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Passing+params+back&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+TextInput+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++%2F%2F+Use+an+effect+to+monitor+the+update+to+params%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++if+%28route.params%3F.post%29+%7B%0A++++++%2F%2F+Post+updated%2C+do+something+with+%60route.params.post%60%0A++++++%2F%2F+For+example%2C+send+the+post+to+the+server%0A++++++alert%28%27New+post%3A+%27+%2B+route.params%3F.post%29%3B%0A++++%7D%0A++%7D%2C+%5Broute.params%3F.post%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27CreatePost%27%29%7D%3E%0A++++++++Create+post%0A++++++%3C%2FButton%3E%0A++++++%3CText+style%3D%7B%7B+margin%3A+10+%7D%7D%3EPost%3A+%7Broute.params%3F.post%7D%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+CreatePostScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%5BpostText%2C+setPostText%5D+%3D+React.useState%28%27%27%29%3B%0A%0A++return+%28%0A++++%3C%3E%0A++++++%3CTextInput%0A++++++++multiline%0A++++++++placeholder%3D%22What%27s+on+your+mind%3F%22%0A++++++++style%3D%7B%7B+height%3A+200%2C+padding%3A+10%2C+backgroundColor%3A+%27white%27+%7D%7D%0A++++++++value%3D%7BpostText%7D%0A++++++++onChangeText%3D%7BsetPostText%7D%0A++++++%2F%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++%2F%2F+Pass+params+back+to+home+screen%0A++++++++++navigation.popTo%28%27Home%27%2C+%7B+post%3A+postText+%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Done%0A++++++%3C%2FButton%3E%0A++++%3C%2F%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++CreatePost%3A+CreatePostScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true) 

Here, after you press "Done", the home screen's `route.params` will be updated to reflect the post text that you passed in `navigate`.

## Passing params to a nested screen[](https://reactnavigation.org/docs/getting-started#passing-params-to-a-nested-screen "Direct link to Passing params to a nested screen")

If you have nested navigators, you need to pass params a bit differently. For example, say you have a navigator inside the `More` screen and want to pass params to the `Settings` screen inside that navigator. Then you can pass params as the following:

```
navigation.navigate('More', {  screen: 'Settings',  params: { user: 'jane' },})
```

[Try on **Snack**](https://snack.expo.dev/?name=Passing+params+to+nested+screen&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+TextInput+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+SettingsScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%7B+user+%7D+%3D+route.params%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3ESettings+Screen%3C%2FText%3E%0A++++++%3CText%3EuserParam%3A+%7BJSON.stringify%28user%29%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%0A++++++++++%28%29+%3D%3E%0A++++++++++++navigation.navigate%28%27More%27%2C+%7B%0A++++++++++++++screen%3A+%27Settings%27%2C%0A++++++++++++++params%3A+%7B+user%3A+%27jane%27+%7D%2C%0A++++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+MoreStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Settings%3A+SettingsScreen%2C%0A++++Profile%3A+ProfileScreen%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+RootTabs+%3D+createBottomTabNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+HomeScreen%2C%0A++++More%3A+MoreStack%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28RootTabs%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

See [Nesting navigators](https://reactnavigation.org/docs/nesting-navigators) for more details on nesting.

## What should be in params[](https://reactnavigation.org/docs/getting-started#what-should-be-in-params "Direct link to What should be in params")

Params are essentially options for a screen. They should contain the minimal data required to show a screen, nothing more. If the data is used by multiple screens, it should be in a global store or global cache. Params is not designed for state management.

You can think of the route object as a URL. If your screen had a URL, what should be in the URL? The same principles apply to params. Think of visiting a shopping website; when you see product listings, the URL usually contains category name, type of sort, any filters etc., not the actual list of products displayed on the screen.

For example, say if you have a `Profile` screen. When navigating to it, you might be tempted to pass the user object in the params:

```
// Don't do thisnavigation.navigate('Profile', {  user: {    id: 'jane',    firstName: 'Jane',    lastName: 'Done',    age: 25,  },});
```

This looks convenient and lets you access the user objects with `route.params.user` without any extra work.

However, this is an anti-pattern. There are many reasons why this is a bad idea:

-   The same data is duplicated in multiple places. This can lead to bugs such as the profile screen showing outdated data even if the user object has changed after navigation.
    
-   Each screen that navigates to the `Profile` screen now needs to know how to fetch the user object - which increases the complexity of the code.
    
-   URLs to the screen (browser URL on the web, or deep links on native) will contain the user object. This is problematic:
    
    1.  Since the user object is in the URL, it's possible to pass a random user object representing a user that doesn't exist or has incorrect data in the profile.
    2.  If the user object isn't passed or improperly formatted, this could result in crashes as the screen won't know how to handle it.
    3.  The URL can become very long and unreadable.

A better way is to pass only the ID of the user in params:

```
navigation.navigate('Profile', { userId: 'jane' });
```

Now, you can use the passed `userId` to grab the user from your global store. This eliminates a host of issues such as outdated data, or problematic URLs.

Some examples of what should be in params are:

1.  IDs like user id, item id etc., e.g. `navigation.navigate('Profile', { userId: 'Jane' })`
2.  Params for sorting, filtering data etc. when you have a list of items, e.g. `navigation.navigate('Feeds', { sortBy: 'latest' })`
3.  Timestamps, page numbers or cursors for pagination, e.g. `navigation.navigate('Chat', { beforeTime: 1603897152675 })`
4.  Data to fill inputs on a screen to compose something, e.g. `navigation.navigate('ComposeTweet', { title: 'Hello world!' })`

In essence, pass the least amount of data required to identify a screen in params, for a lot of cases, this simply means passing the ID of an object instead of passing a full object. Keep your application data separate from the navigation state.

## Summary[](https://reactnavigation.org/docs/getting-started#summary "Direct link to Summary")

-   `navigate` and `push` accept an optional second argument to let you pass parameters to the route you are navigating to. For example: `navigation.navigate('RouteName', { paramName: 'value' })`.
-   You can read the params through `route.params` inside a screen
-   You can update the screen's params with `navigation.setParams`
-   Initial params can be passed via the `initialParams` prop on `Screen`
-   Params should contain the minimal data required to show a screen, nothing more


## 05. Configuring the header bar

---
created: 2025-02-08T16:27:47 (UTC +04:00)
tags: []
source: moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html
author: 
---

# 

> ## Excerpt
> We've seen how to configure the header title already, but let's go over that again before moving on to some other options &mdash; repetition is key to learning!

---
Version: 7.x

## Configuring the header bar

We've seen how to configure the header title already, but let's go over that again before moving on to some other options — repetition is key to learning!

## Setting the header title[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#setting-the-header-title "Direct link to Setting the header title")

Each screen has `options` which is either an object or a function that returns an object, that contains various configuration options. The one we use for the header title is `title`, as shown in the following example.

-   Static
-   Dynamic

```
const MyStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      options: {        title: 'My home',      },    },  },});
```

[Try on **Snack**](https://snack.expo.dev/?name=Setting+header+title&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+createStaticNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++options%3A+%7B%0A++++++++title%3A+%27My+home%27%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

```
function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeScreen}        options={{          title: 'My home',        }}      />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Setting+header+title&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B%0A++++++++++title%3A+%27My+home%27%2C%0A++++++++%7D%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

![Header title](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/assets/images/header-title-6af2e02729e3e95e51305bc8e070486b.png)

## Using params in the title[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#using-params-in-the-title "Direct link to Using params in the title")

In order to use params in the title, we need to make `options` for the screen a function that returns a configuration object. If we make `options` a function then React Navigation will call it with an object containing `{ navigation, route }` - in this case, all we care about is `route`, which is the same object that is passed to your screen props as `route` prop. You may recall that we can get the params through `route.params`, and so we do this below to extract a param and use it as a title.

-   Static
-   Dynamic

```
const MyStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      options: {        title: 'My home',      },    },    Profile: {      screen: ProfileScreen,      options: ({ route }) => ({        title: route.params.name,      }),    },  },});
```

[Try on **Snack**](https://snack.expo.dev/?name=Using+params+in+the+title&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B%0A++++++++++++name%3A+%27Jane%27%2C%0A++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++options%3A+%7B%0A++++++++title%3A+%27My+home%27%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++++Profile%3A+%7B%0A++++++screen%3A+ProfileScreen%2C%0A++++++options%3A+%28%7B+route+%7D%29+%3D%3E+%28%7B%0A++++++++title%3A+route.params.name%2C%0A++++++%7D%29%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

```
function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeScreen}        options={{ title: 'My home' }}      />      <Stack.Screen        name="Profile"        component={ProfileScreen}        options={({ route }) => ({          title: route.params.name,        })}      />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Using+params+in+the+title&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B%0A++++++++++++name%3A+%27Jane%27%2C%0A++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B+title%3A+%27My+home%27+%7D%7D%0A++++++%2F%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Profile%22%0A++++++++component%3D%7BProfileScreen%7D%0A++++++++options%3D%7B%28%7B+route+%7D%29+%3D%3E+%28%7B%0A++++++++++title%3A+route.params.name%2C%0A++++++++%7D%29%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

The argument that is passed in to the `options` function is an object with the following properties:

-   `navigation` - The [navigation object](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/navigation-object) for the screen.
-   `route` - The [route object](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/route-object) for the screen

We only needed the `route` object in the above example but you may in some cases want to use `navigation` as well.

## Updating `options` with `setOptions`[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#updating-options-with-setoptions "Direct link to updating-options-with-setoptions")

It's often necessary to update the `options` configuration for the active screen from the mounted screen component itself. We can do this using `navigation.setOptions`

```
<Button  onPress={() =>    navigation.setOptions({ title: 'Updated!' })  }>  Update the title</Button>
```

[Try on **Snack**](https://snack.expo.dev/?name=Updating+options&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.setOptions%28%7B+title%3A+%27Updated%21%27+%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Update+the+title%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++options%3A+%7B%0A++++++++title%3A+%27My+home%27%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## Adjusting header styles[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#adjusting-header-styles "Direct link to Adjusting header styles")

There are three key properties to use when customizing the style of your header: `headerStyle`, `headerTintColor`, and `headerTitleStyle`.

-   `headerStyle`: a style object that will be applied to the view that wraps the header. If you set `backgroundColor` on it, that will be the color of your header.
-   `headerTintColor`: the back button and title both use this property as their color. In the example below, we set the tint color to white (`#fff`) so the back button and the header title would be white.
-   `headerTitleStyle`: if we want to customize the `fontFamily`, `fontWeight` and other `Text` style properties for the title, we can use this to do it.

-   Static
-   Dynamic

```
const MyStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      options: {        title: 'My home',        headerStyle: {          backgroundColor: '#f4511e',        },        headerTintColor: '#fff',        headerTitleStyle: {          fontWeight: 'bold',        },      },    },  },});
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+styles&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+createStaticNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++options%3A+%7B%0A++++++++title%3A+%27My+home%27%2C%0A++++++++headerStyle%3A+%7B%0A++++++++++backgroundColor%3A+%27%23f4511e%27%2C%0A++++++++%7D%2C%0A++++++++headerTintColor%3A+%27%23fff%27%2C%0A++++++++headerTitleStyle%3A+%7B%0A++++++++++fontWeight%3A+%27bold%27%2C%0A++++++++%7D%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

```
function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeScreen}        options={{          title: 'My home',          headerStyle: {            backgroundColor: '#f4511e',          },          headerTintColor: '#fff',          headerTitleStyle: {            fontWeight: 'bold',          },        }}      />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+styles&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B%0A++++++++++title%3A+%27My+home%27%2C%0A++++++++++headerStyle%3A+%7B%0A++++++++++++backgroundColor%3A+%27%23f4511e%27%2C%0A++++++++++%7D%2C%0A++++++++++headerTintColor%3A+%27%23fff%27%2C%0A++++++++++headerTitleStyle%3A+%7B%0A++++++++++++fontWeight%3A+%27bold%27%2C%0A++++++++++%7D%2C%0A++++++++%7D%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

![Custom header styles](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/assets/images/custom_headers-1d523751e21416528249f65d4d3e9db8.png)

There are a couple of things to notice here:

1.  On iOS, the status bar text and icons are black, and this doesn't look great over a dark-colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors [as described in the status bar guide](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/status-bar).
2.  The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share `options` between screens now.

## Sharing common `options` across screens[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#sharing-common-options-across-screens "Direct link to sharing-common-options-across-screens")

It is common to want to configure the header in a similar way across many screens. For example, your company brand color might be red and so you want the header background color to be red and the tint color to be white. Conveniently, these are the colors we're using in our running example, and you'll notice that when you navigate to the `DetailsScreen` the colors go back to the defaults. Wouldn't it be awful if we had to copy the `options` header style properties from `Home` to `Details`, and for every single screen we use in our app? Thankfully, we do not. We can instead move the configuration up to the native stack navigator under `screenOptions`:

-   Static
-   Dynamic

```
const MyStack = createNativeStackNavigator({  screenOptions: {    headerStyle: {      backgroundColor: '#f4511e',    },    headerTintColor: '#fff',    headerTitleStyle: {      fontWeight: 'bold',    },  },  screens: {    Home: {      screen: HomeScreen,    },    Details: {      screen: DetailsScreen,    },  },});
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+screen+options&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screenOptions%3A+%7B%0A++++headerStyle%3A+%7B%0A++++++backgroundColor%3A+%27%23f4511e%27%2C%0A++++%7D%2C%0A++++headerTintColor%3A+%27%23fff%27%2C%0A++++headerTitleStyle%3A+%7B%0A++++++fontWeight%3A+%27bold%27%2C%0A++++%7D%2C%0A++%7D%2C%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++%7D%2C%0A++++Details%3A+%7B%0A++++++screen%3A+DetailsScreen%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

```
function MyStack() {  return (    <Stack.Navigator      screenOptions={{        headerStyle: {          backgroundColor: '#f4511e',        },        headerTintColor: '#fff',        headerTitleStyle: {          fontWeight: 'bold',        },      }}    >      <Stack.Screen        name="Home"        component={HomeScreen}        options={{ title: 'My home' }}      />      <Stack.Screen name="Details" component={DetailsScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+screen+options&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%0A++++++screenOptions%3D%7B%7B%0A++++++++headerStyle%3A+%7B%0A++++++++++backgroundColor%3A+%27%23f4511e%27%2C%0A++++++++%7D%2C%0A++++++++headerTintColor%3A+%27%23fff%27%2C%0A++++++++headerTitleStyle%3A+%7B%0A++++++++++fontWeight%3A+%27bold%27%2C%0A++++++++%7D%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B+title%3A+%27My+home%27+%7D%7D%0A++++++%2F%3E%0A++++++%3CStack.Screen+name%3D%22Details%22+component%3D%7BDetailsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Now, any screen that belongs to this navigator will have our wonderful branded styles. Surely though, there must be a way to override these options if we need to?

## Replacing the title with a custom component[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#replacing-the-title-with-a-custom-component "Direct link to Replacing the title with a custom component")

Sometimes you need more control than just changing the text and styles of your title -- for example, you may want to render an image in place of the title, or make the title into a button. In these cases you can completely override the component used for the title and provide your own.

-   Static
-   Dynamic

```
function LogoTitle() {  return (    <Image      style={{ width: 50, height: 50 }}      source={require('@expo/snack-static/react-native-logo.png')}    />  );}const MyStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      options: {        headerTitle: (props) => <LogoTitle {...props} />,      },    },  },});
```

[Try on **Snack**](https://snack.expo.dev/?name=Custom+title&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+Image+%7D+from+%27react-native%27%3B%0Aimport+%7B+createStaticNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+LogoTitle%28%29+%7B%0A++return+%28%0A++++%3CImage%0A++++++style%3D%7B%7B+width%3A+50%2C+height%3A+50+%7D%7D%0A++++++source%3D%7Brequire%28%27%40expo%2Fsnack-static%2Freact-native-logo.png%27%29%7D%0A++++%2F%3E%0A++%29%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++options%3A+%7B%0A++++++++headerTitle%3A+%28props%29+%3D%3E+%3CLogoTitle+%7B...props%7D+%2F%3E%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

```
function LogoTitle() {  return (    <Image      style={{ width: 50, height: 50 }}      source={require('@expo/snack-static/react-native-logo.png')}    />  );}function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeScreen}        options={{          headerTitle: (props) => <LogoTitle {...props} />,        }}      />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Custom+title&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+Image+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+LogoTitle%28%29+%7B%0A++return+%28%0A++++%3CImage%0A++++++style%3D%7B%7B+width%3A+50%2C+height%3A+50+%7D%7D%0A++++++source%3D%7Brequire%28%27%40expo%2Fsnack-static%2Freact-native-logo.png%27%29%7D%0A++++%2F%3E%0A++%29%3B%0A%7D%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B%0A++++++++++headerTitle%3A+%28props%29+%3D%3E+%3CLogoTitle+%7B...props%7D+%2F%3E%2C%0A++++++++%7D%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

![Header custom title](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/assets/images/header-custom-title-79936eba64b00a4d36ae8f8fb3b88138.png)

You might be wondering, why `headerTitle` when we provide a component and not `title`, like before? The reason is that `headerTitle` is a property that is specific to stack navigators, the `headerTitle` defaults to a `Text` component that displays the `title`.

You might be wondering, why `headerTitle` when we provide a component and not `title`, like before? The reason is that `headerTitle` is a property that is specific to headers, whereas `title` will be used for tab bars, drawers etc. as well. The `headerTitle` defaults to a `Text` component that displays the `title`.

## Additional configuration[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#additional-configuration "Direct link to Additional configuration")

You can read the full list of available `options` for screens inside of a native stack navigator in the [`createNativeStackNavigator` reference](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/native-stack-navigator#options).

## Summary[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#summary "Direct link to Summary")

-   You can customize the header inside of the `options` property of your screens. Read the full list of options [in the API reference](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/native-stack-navigator#options).
-   The `options` property can be an object or a function. When it is a function, it is provided with an object with the `navigation` and `route` objects.
-   You can also specify shared `screenOptions` in the stack navigator configuration when you initialize it. This will apply to all screens in the navigator.

[

Passing parameters to routes

](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/params)[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/header-buttons)

-   [Setting the header title](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#setting-the-header-title)
-   [Using params in the title](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#using-params-in-the-title)
-   [Updating `options` with `setOptions`](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#updating-options-with-setoptions)
-   [Adjusting header styles](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#adjusting-header-styles)
-   [Sharing common `options` across screens](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#sharing-common-options-across-screens)
-   [Replacing the title with a custom component](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#replacing-the-title-with-a-custom-component)
-   [Additional configuration](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#additional-configuration)
-   [Summary](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#summary)



## 06. Header buttons

---
created: 2025-02-08T16:36:51 (UTC +04:00)
tags: []
source: moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html
author: 
---

# 

> ## Excerpt
> Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well-defined ways.

---
Version: 7.x

## Header buttons

Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well-defined ways.

## Adding a button to the header[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#adding-a-button-to-the-header "Direct link to Adding a button to the header")

The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons).

-   Static
-   Dynamic

```
const MyStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      options: {        headerRight: () => (          <Button onPress={() => alert('This is a button!')}>Info</Button>        ),      },    },  },});
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+button&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+createStaticNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++options%3A+%7B%0A++++++++headerRight%3A+%28%29+%3D%3E+%28%0A++++++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+alert%28%27This+is+a+button%21%27%29%7D%3EInfo%3C%2FButton%3E%0A++++++++%29%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

```
function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeScreen}        options={{          headerRight: () => (            <Button onPress={() => alert('This is a button!')}>Info</Button>          ),        }}      />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+button&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B%0A++++++++++headerRight%3A+%28%29+%3D%3E+%28%0A++++++++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+alert%28%27This+is+a+button%21%27%29%7D%3EInfo%3C%2FButton%3E%0A++++++++++%29%2C%0A++++++++%7D%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

![Header button](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/assets/images/header-button-9b3901a2e3d562d52d8252610df6db8c.png)

When we define our button this way, the `this` variable in `options` is _not_ the `HomeScreen` instance, so you can't call `setState` or any instance methods on it. This is pretty important because it's common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next.

## Header interaction with its screen component[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#header-interaction-with-its-screen-component "Direct link to Header interaction with its screen component")

In some cases, components in the header need to interact with the screen component. For this use case, we need to use `navigation.setOptions` to update our options. By using `navigation.setOptions` inside the screen component, we get access to screen's props, state, context etc.

-   Static
-   Dynamic

```
function HomeScreen() {  const navigation = useNavigation();  const [count, setCount] = React.useState(0);  React.useEffect(() => {    // Use `setOptions` to update the button that we previously specified    // Now the button includes an `onPress` handler to update the count    navigation.setOptions({      headerRight: () => (        <Button onPress={() => setCount((c) => c + 1)}>Update count</Button>      ),    });  }, [navigation]);  return <Text>Count: {count}</Text>;}const MyStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      options: {        // Add a placeholder button without the `onPress` to avoid flicker        headerRight: () => <Button>Update count</Button>,      },    },  },});
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+button&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%5Bcount%2C+setCount%5D+%3D+React.useState%280%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++%2F%2F+Use+%60setOptions%60+to+update+the+button+that+we+previously+specified%0A++++%2F%2F+Now+the+button+includes+an+%60onPress%60+handler+to+update+the+count%0A++++navigation.setOptions%28%7B%0A++++++headerRight%3A+%28%29+%3D%3E+%28%0A++++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+setCount%28%28c%29+%3D%3E+c+%2B+1%29%7D%3EUpdate+count%3C%2FButton%3E%0A++++++%29%2C%0A++++%7D%29%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%3CText%3ECount%3A+%7Bcount%7D%3C%2FText%3E%3B%0A%7D%0A%0Aconst+MyStack+%3D+createNativeStackNavigator%28%7B%0A++screens%3A+%7B%0A++++Home%3A+%7B%0A++++++screen%3A+HomeScreen%2C%0A++++++options%3A+%7B%0A++++++++%2F%2F+Add+a+placeholder+button+without+the+%60onPress%60+to+avoid+flicker%0A++++++++headerRight%3A+%28%29+%3D%3E+%3CButton%3EUpdate+count%3C%2FButton%3E%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D%29%3B%0A%0Aconst+Navigation+%3D+createStaticNavigation%28MyStack%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%3CNavigation+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

```
function HomeScreen() {  const navigation = useNavigation();  const [count, setCount] = React.useState(0);  React.useEffect(() => {    // Use `setOptions` to update the button that we previously specified    // Now the button includes an `onPress` handler to update the count    navigation.setOptions({      headerRight: () => (        <Button onPress={() => setCount((c) => c + 1)}>Update count</Button>      ),    });  }, [navigation]);  return <Text>Count: {count}</Text>;}function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeScreen}        options={{          // Add a placeholder button without the `onPress` to avoid flicker          headerRight: () => <Button>Update count</Button>,        }}      />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+button&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%5Bcount%2C+setCount%5D+%3D+React.useState%280%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++%2F%2F+Use+%60setOptions%60+to+update+the+button+that+we+previously+specified%0A++++%2F%2F+Now+the+button+includes+an+%60onPress%60+handler+to+update+the+count%0A++++navigation.setOptions%28%7B%0A++++++headerRight%3A+%28%29+%3D%3E+%28%0A++++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+setCount%28%28c%29+%3D%3E+c+%2B+1%29%7D%3EUpdate+count%3C%2FButton%3E%0A++++++%29%2C%0A++++%7D%29%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%3CText%3ECount%3A+%7Bcount%7D%3C%2FText%3E%3B%0A%7D%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeScreen%7D%0A++++++++options%3D%7B%7B%0A++++++++++%2F%2F+Add+a+placeholder+button+without+the+%60onPress%60+to+avoid+flicker%0A++++++++++headerRight%3A+%28%29+%3D%3E+%3CButton%3EUpdate+count%3C%2FButton%3E%2C%0A++++++++%7D%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Here we update the `headerRight` with a button with `onPress` handler that has access to the component's state and can update it.

## Customizing the back button[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#customizing-the-back-button "Direct link to Customizing the back button")

`createNativeStackNavigator` provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".

You can change the label behavior with `headerBackTitle` and style it with `headerBackTitleStyle` ([read more](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/native-stack-navigator#headerbacktitle)).

To customize the back button image, you can use `headerBackImageSource` ([read more](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/native-stack-navigator#headerbackimagesource)).

-   Static
-   Dynamic

```
const MyStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      options: {        headerBackTitle: 'Custom Back',        headerBackTitleStyle: { fontSize: 30 },      },    },  },});
```

```
<Stack.Navigator>  <Stack.Screen name="Home" component={HomeScreen} />  <Stack.Screen    name="Details"    component={DetailsScreen}    options={{      headerBackTitle: 'Custom Back',      headerBackTitleStyle: { fontSize: 30 },    }}  /></Stack.Navigator>
```

![Header custom back](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/assets/images/header-back-custom-b6e16e7836a7b6ce663b6a5867041aa8.png)

## Overriding the back button[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#overriding-the-back-button "Direct link to Overriding the back button")

The back button will be rendered automatically in a stack navigator whenever it is possible for the user to go back from their current screen — in other words, the back button will be rendered whenever there is more than one screen in the stack.

Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can set the `headerLeft` option to a React Element that will be rendered, just as we did with `headerRight`. Alternatively, the `headerLeft` option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button. Read more about this in the [api reference](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/native-stack-navigator#headerleft).

## Summary[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#summary "Direct link to Summary")

-   You can set buttons in the header through the `headerLeft` and `headerRight` properties in `options`.
-   The back button is fully customizable with `headerLeft`, but if you just want to change the title or image, there are other `options` for that — `headerBackTitle`, `headerBackTitleStyle`, and `headerBackImageSource`.
-   You can use a callback for the options prop to access `navigation` and `route` objects.

[

Configuring the header bar

](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/headers)[](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/docs/nesting-navigators)

-   [Adding a button to the header](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#adding-a-button-to-the-header)
-   [Header interaction with its screen component](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#header-interaction-with-its-screen-component)
-   [Customizing the back button](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#customizing-the-back-button)
-   [Overriding the back button](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#overriding-the-back-button)
-   [Summary](moz-extension://668a355d-8364-4302-8e65-a68b8ff04942/_generated_background_page.html#summary)



## 07. Nesting navigators

---
created: 2025-02-08T16:37:36 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Nesting navigators | React Navigation

> ## Excerpt
> Nesting navigators means rendering a navigator inside a screen of another navigator, for example:

---
Nesting navigators means rendering a navigator inside a screen of another navigator, for example:

-   Static
-   Dynamic

```
function HomeTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Feed" component={FeedScreen} />      <Tab.Screen name="Messages" component={MessagesScreen} />    </Tab.Navigator>  );}function RootStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeTabs}        options={{ headerShown: false }}      />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Nested+navigators&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EFeed+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+MessagesScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EMessages+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+HomeTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Messages%22+component%3D%7BMessagesScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeTabs%7D%0A++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

In the above example, `HomeTabs` contains a tab navigator. It is also used for the `Home` screen in your stack navigator in `RootStack`. So here, a tab navigator is nested inside a stack navigator:

-   `RootStack` (Stack navigator)
    -   `HomeTabs` (Tab navigator)
        -   `Feed` (screen)
        -   `Messages` (screen)
    -   `Profile` (screen)

Nesting navigators work very much like nesting regular components. To achieve the behavior you want, it's often necessary to nest multiple navigators.

## How nesting navigators affects the behaviour[](https://reactnavigation.org/docs/getting-started#how-nesting-navigators-affects-the-behaviour "Direct link to How nesting navigators affects the behaviour")

When nesting navigators, there are some things to keep in mind:

### Each navigator keeps its own navigation history[](https://reactnavigation.org/docs/getting-started#each-navigator-keeps-its-own-navigation-history "Direct link to Each navigator keeps its own navigation history")

For example, when you press the back button when inside a screen in a nested stack navigator, it'll go back to the previous screen inside the nested stack even if there's another navigator as the parent.

### Each navigator has its own options[](https://reactnavigation.org/docs/getting-started#each-navigator-has-its-own-options "Direct link to Each navigator has its own options")

For example, specifying a `title` option in a screen nested in a child navigator won't affect the title shown in a parent navigator.

If you want to achieve this behavior, see the guide for [screen options with nested navigators](https://reactnavigation.org/docs/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state). this could be useful if you are rendering a tab navigator inside a stack navigator and want to show the title of the active screen inside the tab navigator in the header of the stack navigator.

### Each screen in a navigator has its own params[](https://reactnavigation.org/docs/getting-started#each-screen-in-a-navigator-has-its-own-params "Direct link to Each screen in a navigator has its own params")

For example, any `params` passed to a screen in a nested navigator are in the `route` object of that screen and aren't accessible from a screen in a parent or child navigator.

If you need to access params of the parent screen from a child screen, you can use [React Context](https://react.dev/reference/react/useContext) to expose params to children.

### Navigation actions are handled by current navigator and bubble up if couldn't be handled[](https://reactnavigation.org/docs/getting-started#navigation-actions-are-handled-by-current-navigator-and-bubble-up-if-couldnt-be-handled "Direct link to Navigation actions are handled by current navigator and bubble up if couldn't be handled")

For example, if you're calling `navigation.goBack()` in a nested screen, it'll only go back in the parent navigator if you're already on the first screen of the navigator. Other actions such as `navigate` work similarly, i.e. navigation will happen in the nested navigator and if the nested navigator couldn't handle it, then the parent navigator will try to handle it. In the above example, when calling `navigate('Messages')`, inside `Feed` screen, the nested tab navigator will handle it, but if you call `navigate('Settings')`, the parent stack navigator will handle it.

### Navigator specific methods are available in the navigators nested inside[](https://reactnavigation.org/docs/getting-started#navigator-specific-methods-are-available-in-the-navigators-nested-inside "Direct link to Navigator specific methods are available in the navigators nested inside")

For example, if you have a stack inside a drawer navigator, the drawer's `openDrawer`, `closeDrawer`, `toggleDrawer` methods etc. will also be available on the `navigation` object in the screens inside the stack navigator. But say you have a stack navigator as the parent of the drawer, then the screens inside the stack navigator won't have access to these methods, because they aren't nested inside the drawer.

Similarly, if you have a tab navigator inside stack navigator, the screens in the tab navigator will get the `push` and `replace` methods for stack in their `navigation` object.

If you need to dispatch actions to the nested child navigators from a parent, you can use [`navigation.dispatch`](https://reactnavigation.org/docs/navigation-object#dispatch):

```
navigation.dispatch(DrawerActions.toggleDrawer());
```

### Nested navigators don't receive parent's events[](https://reactnavigation.org/docs/getting-started#nested-navigators-dont-receive-parents-events "Direct link to Nested navigators don't receive parent's events")

For example, if you have a stack navigator nested inside a tab navigator, the screens in the stack navigator won't receive the events emitted by the parent tab navigator such as (`tabPress`) when using `navigation.addListener`.

To receive events from the parent navigator, you can explicitly listen to parent's events with [`navigation.getParent`](https://reactnavigation.org/docs/navigation-object#getparent):

-   Static
-   Dynamic

```
const unsubscribe = navigation  .getParent('MyTabs')  .addListener('tabPress', (e) => {    // Do something    alert('Tab pressed!');  });
```

[Try on **Snack**](https://snack.expo.dev/?name=Events+from+parent&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EFeed+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Messages%27%29%7D%3E%0A++++++++Go+to+Messages%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+MessagesScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation%0A++++++.getParent%28%27MyTabs%27%29%0A++++++.addListener%28%27tabPress%27%2C+%28e%29+%3D%3E+%7B%0A++++++++%2F%2F+Do+something%0A++++++++alert%28%27Tab+pressed%21%27%29%3B%0A++++++%7D%29%3B%0A%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EMessages+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+HomeStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Messages%22+component%3D%7BMessagesScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+RootTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator+id%3D%22MyTabs%22%3E%0A++++++%3CTab.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeStack%7D%0A++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootTabs+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Here `'MyTabs'` refers to the value you pass in the `id` of the parent tab navigator whose event you want to listen to.

### Parent navigator's UI is rendered on top of child navigator[](https://reactnavigation.org/docs/getting-started#parent-navigators-ui-is-rendered-on-top-of-child-navigator "Direct link to Parent navigator's UI is rendered on top of child navigator")

For example, when you nest a stack navigator inside a drawer navigator, you'll see that the drawer appears above the stack navigator's header. However, if you nest the drawer navigator inside a stack, the drawer will appear below the header of the stack. This is an important point to consider when deciding how to nest your navigators.

In your app, you will probably use these patterns depending on the behavior you want:

-   Tab navigator nested inside the initial screen of stack navigator - New screens cover the tab bar when you push them.
-   Drawer navigator nested inside the initial screen of stack navigator with the initial screen's stack header hidden - The drawer can only be opened from the first screen of the stack.
-   Stack navigators nested inside each screen of drawer navigator - The drawer appears over the header from the stack.
-   Stack navigators nested inside each screen of tab navigator - The tab bar is always visible. Usually pressing the tab again also pops the stack to top.

## Navigating to a screen in a nested navigator[](https://reactnavigation.org/docs/getting-started#navigating-to-a-screen-in-a-nested-navigator "Direct link to Navigating to a screen in a nested navigator")

Consider the following example:

-   Static
-   Dynamic

```
function MoreTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Feed" component={FeedScreen} />      <Tab.Screen name="Messages" component={MessagesScreen} />    </Tab.Navigator>  );}function RootStack() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen        name="More"        component={MoreTabs}        options={{ headerShown: false }}      />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigating+to+nested+screen&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27More%27%29%7D%3EGo+to+More%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27More%27%2C+%7B+screen%3A+%27Messages%27+%7D%29%7D%0A++++++%3E%0A++++++++Go+to+Messages%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EFeed+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+MessagesScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EMessages+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MoreTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Messages%22+component%3D%7BMessagesScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22More%22%0A++++++++component%3D%7BMoreTabs%7D%0A++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Here, you might want to navigate to the `More` screen (which contains `MoreTabs`) from your `HomeScreen` component:

```
navigation.navigate('More');
```

It works, and the initial screen inside the `MoreTabs` component is shown, which is `Feed`. But sometimes you may want to control the screen that should be shown upon navigation. To achieve it, you can pass the name of the screen in params:

```
navigation.navigate('More', { screen: 'Messages' });
```

Now, the `Messages` screen will be rendered instead of `Feed` upon navigation.

### Passing params to a screen in a nested navigator[](https://reactnavigation.org/docs/getting-started#passing-params-to-a-screen-in-a-nested-navigator "Direct link to Passing params to a screen in a nested navigator")

You can also pass params by specifying a `params` key:

-   Static
-   Dynamic

```
navigation.navigate('More', {  screen: 'Messages',  params: { user: 'jane' },})
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigating+to+nested+screen&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%0A++++++++++%28%29+%3D%3E%0A++++++++++++navigation.navigate%28%27More%27%2C+%7B%0A++++++++++++++screen%3A+%27Messages%27%2C%0A++++++++++++++params%3A+%7B+user%3A+%27jane%27+%7D%2C%0A++++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Messages%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EFeed+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+MessagesScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EMessages+Screen%3C%2FText%3E%0A++++++%3CText%3EUser%3A+%7Broute.params.user%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MoreTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Messages%22+component%3D%7BMessagesScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22More%22%0A++++++++component%3D%7BMoreTabs%7D%0A++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If the navigator was already rendered, navigating to another screen will push a new screen in case of stack navigator.

You can follow a similar approach for deeply nested screens. Note that the second argument to `navigate` here is just `params`, so you can do something like:

```
navigation.navigate('Home', {  screen: 'Settings',  params: {    screen: 'Sound',    params: {      screen: 'Media',    },  },});
```

In the above case, you're navigating to the `Media` screen, which is in a navigator nested inside the `Sound` screen, which is in a navigator nested inside the `Settings` screen.

warning

The `screen` and related params are reserved for internal use and are managed by React Navigation. While you can access `route.params.screen` etc. in the parent screens, relying on them may lead to unexpected behavior.

### Rendering initial route defined in the navigator[](https://reactnavigation.org/docs/getting-started#rendering-initial-route-defined-in-the-navigator "Direct link to Rendering initial route defined in the navigator")

By default, when you navigate a screen in the nested navigator, the specified screen is used as the initial screen and the `initialRouteName` prop on the navigator is ignored.

If you need to render the initial route specified in the navigator, you can disable the behaviour of using the specified screen as the initial screen by setting `initial: false`:

```
navigation.navigate('Root', {  screen: 'Settings',  initial: false,});
```

This affects what happens when pressing the back button. When there's an initial screen, the back button will take the user there.

When nesting multiple stack, drawer or bottom tab navigators, headers from both child and parent navigators would be shown. However, usually it's more desirable to show the header in the child navigator and hide the header in the screen of the parent navigator.

To achieve this, you can hide the header in the screen containing the navigator using the `headerShown: false` option.

For example:

-   Static
-   Dynamic

```
function HomeTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Feed" component={FeedScreen} />      <Tab.Screen name="Messages" component={MessagesScreen} />    </Tab.Navigator>  );}function RootStack() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={HomeTabs}        options={{          headerShown: false,        }}      />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Nested+navigators&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EFeed+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+MessagesScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EMessages+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+HomeTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Messages%22+component%3D%7BMessagesScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen%0A++++++++name%3D%22Home%22%0A++++++++component%3D%7BHomeTabs%7D%0A++++++++options%3D%7B%7B%0A++++++++++headerShown%3A+false%2C%0A++++++++%7D%7D%0A++++++%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

In these examples, we have used a bottom tab navigator directly nested inside another stack navigator, but the same principle applies when there are other navigators in the middle, for example: stack navigator inside a tab navigator which is inside another stack navigator, stack navigator inside drawer navigator etc.

If you don't want headers in any of the navigators, you can specify `headerShown: false` in all of the navigators:

-   Static
-   Dynamic

```
function HomeTabs() {  return (    <Tab.Navigator      screenOptions={{        headerShown: false,      }}    >      <Tab.Screen name="Feed" component={FeedScreen} />      <Tab.Screen name="Messages" component={MessagesScreen} />    </Tab.Navigator>  );}function RootStack() {  return (    <Stack.Navigator      screenOptions={{        headerShown: false,      }}    >      <Stack.Screen name="Home" component={HomeTabs} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

## Best practices when nesting[](https://reactnavigation.org/docs/getting-started#best-practices-when-nesting "Direct link to Best practices when nesting")

We recommend to reduce nesting navigators to minimal. Try to achieve the behavior you want with as little nesting as possible. Nesting has many downsides:

-   It results in deeply nested view hierarchy which can cause memory and performance issues in lower end devices
-   Nesting same type of navigators (e.g. tabs inside tabs, drawer inside drawer etc.) might lead to a confusing UX
-   With excessive nesting, code becomes difficult to follow when navigating to nested screens, configuring deep link etc.

Think of nesting navigators as a way to achieve the UI you want rather than a way to organize your code. If you want to create separate group of screens for organization, instead of using separate navigators, you can use the [`Group`](https://reactnavigation.org/docs/group) component for dynamic configuration or [`groups` property](https://reactnavigation.org/docs/static-configuration#groups) for static configuration.

-   Static
-   Dynamic

```
<Stack.Navigator>  {isLoggedIn ? (    // Screens for logged in users    <Stack.Group>      <Stack.Screen name="Home" component={Home} />      <Stack.Screen name="Profile" component={Profile} />    </Stack.Group>  ) : (    // Auth screens    <Stack.Group screenOptions={{ headerShown: false }}>      <Stack.Screen name="SignIn" component={SignIn} />      <Stack.Screen name="SignUp" component={SignUp} />    </Stack.Group>  )}  {/* Common modal screens */}  <Stack.Group screenOptions={{ presentation: 'modal' }}>    <Stack.Screen name="Help" component={Help} />    <Stack.Screen name="Invite" component={Invite} />  </Stack.Group></Stack.Navigator>
```



## 08. Navigation lifecycle

---
created: 2025-02-08T16:38:13 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Navigation lifecycle | React Navigation

> ## Excerpt
> In a previous section, we worked with a stack navigator that has two screens (Home and Profile) and learned how to use navigation.navigate('RouteName') to navigate between the screens.

---
In a previous section, we worked with a stack navigator that has two screens (`Home` and `Profile`) and learned how to use `navigation.navigate('RouteName')` to navigate between the screens.

An important question in this context is: what happens with `Home` when we navigate away from it, or when we come back to it? How does a screen find out that a user is leaving it or coming back to it?

If you are coming to react-navigation from a web background, you may assume that when the user navigates from route `A` to route `B`, `A` will unmount (its `componentWillUnmount` is called) and `A` will mount again when the user comes back to it. While these React lifecycle methods are still valid and are used in React Navigation, their usage differs from the web. This is driven by the more complex needs of mobile navigation.

## Example scenario[](https://reactnavigation.org/docs/getting-started#example-scenario "Direct link to Example scenario")

Consider a stack navigator with 2 screens: `Home` and `Profile`. When we first render the navigator, the `Home` screen is mounted, i.e. its `useEffect` or `componentDidMount` is called. When we navigate to `Profile`, now `Profile` is mounted and its `useEffect` or `componentDidMount` is called. But nothing happens to `Home` - it remains mounted in the stack. The cleanup function returned by `useEffect` or `componentWillUnmount` is not called.

When we go back from `Profile` to `Home`, `Profile` is unmounted and its `useEffect` cleanup or `componentWillUnmount` is called. But `Home` is not mounted again - it remained mounted the whole time - and its `useEffect` or `componentDidMount` is not called.

Similar results can be observed (in combination) with other navigators as well. Consider a tab navigator with two tabs, where each tab is a stack navigator:

-   Static
-   Dynamic

```
function FirstScreen() {  return (    <SettingsStack.Navigator>      <SettingsStack.Screen name="Settings" component={SettingsScreen} />      <SettingsStack.Screen name="Profile" component={ProfileScreen} />    </SettingsStack.Navigator>  );}function SecondScreen() {  return (    <HomeStack.Navigator>      <HomeStack.Screen name="Home" component={HomeScreen} />      <HomeStack.Screen name="Details" component={DetailsScreen} />    </HomeStack.Navigator>  );}function Root() {  return (    <MyTabs.Navigator screenOptions={{ headerShown: false }}>      <MyTabs.Screen name="First" component={FirstScreen} />      <MyTabs.Screen name="Second" component={SecondScreen} />    </MyTabs.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigation+lifecycle&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+SettingsScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++console.log%28%27SettingsScreen+mounted%27%29%3B%0A%0A++++return+%28%29+%3D%3E+console.log%28%27SettingsScreen+unmounted%27%29%3B%0A++%7D%2C+%5B%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3ESettings+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++console.log%28%27ProfileScreen+mounted%27%29%3B%0A%0A++++return+%28%29+%3D%3E+console.log%28%27ProfileScreen+unmounted%27%29%3B%0A++%7D%2C+%5B%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++console.log%28%27HomeScreen+mounted%27%29%3B%0A%0A++++return+%28%29+%3D%3E+console.log%28%27HomeScreen+unmounted%27%29%3B%0A++%7D%2C+%5B%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+DetailsScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++console.log%28%27DetailsScreen+mounted%27%29%3B%0A%0A++++return+%28%29+%3D%3E+console.log%28%27DetailsScreen+unmounted%27%29%3B%0A++%7D%2C+%5B%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EDetails+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.push%28%27Details%27%29%7D%3E%0A++++++++Go+to+Details...+again%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+SettingsStack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+HomeStack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+MyTabs+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+FirstScreen%28%29+%7B%0A++return+%28%0A++++%3CSettingsStack.Navigator%3E%0A++++++%3CSettingsStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++%3CSettingsStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FSettingsStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+SecondScreen%28%29+%7B%0A++return+%28%0A++++%3CHomeStack.Navigator%3E%0A++++++%3CHomeStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CHomeStack.Screen+name%3D%22Details%22+component%3D%7BDetailsScreen%7D+%2F%3E%0A++++%3C%2FHomeStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+Root%28%29+%7B%0A++return+%28%0A++++%3CMyTabs.Navigator+screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%3E%0A++++++%3CMyTabs.Screen+name%3D%22First%22+component%3D%7BFirstScreen%7D+%2F%3E%0A++++++%3CMyTabs.Screen+name%3D%22Second%22+component%3D%7BSecondScreen%7D+%2F%3E%0A++++%3C%2FMyTabs.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRoot+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

We start on the `HomeScreen` and navigate to `DetailsScreen`. Then we use the tab bar to switch to the `SettingsScreen` and navigate to `ProfileScreen`. After this sequence of operations is done, all 4 of the screens are mounted! If you use the tab bar to switch back to the `HomeStack`, you'll notice you'll be presented with the `DetailsScreen` - the navigation state of the `HomeStack` has been preserved!

## React Navigation lifecycle events[](https://reactnavigation.org/docs/getting-started#react-navigation-lifecycle-events "Direct link to React Navigation lifecycle events")

Now that we understand how React lifecycle methods work in React Navigation, let's answer the question we asked at the beginning: "How do we find out that a user is leaving (blur) it or coming back to it (focus)?"

React Navigation emits events to screen components that subscribe to them. We can listen to `focus` and `blur` events to know when a screen comes into focus or goes out of focus respectively.

Example:

-   Static
-   Dynamic

```
function ProfileScreen() {  const navigation = useNavigation();  React.useEffect(() => {    const unsubscribe = navigation.addListener('focus', () => {      console.log('ProfileScreen focused');    });    return unsubscribe;  }, [navigation]);  React.useEffect(() => {    const unsubscribe = navigation.addListener('blur', () => {      console.log('ProfileScreen blurred');    });    return unsubscribe;  }, [navigation]);  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Profile Screen</Text>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Focus+and+blur&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27focus%27%2C+%28%29+%3D%3E+%7B%0A++++++console.log%28%27ProfileScreen+focused%27%29%3B%0A++++%7D%29%3B%0A%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27blur%27%2C+%28%29+%3D%3E+%7B%0A++++++console.log%28%27ProfileScreen+blurred%27%29%3B%0A++++%7D%29%3B%0A%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27focus%27%2C+%28%29+%3D%3E+%7B%0A++++++console.log%28%27HomeScreen+focused%27%29%3B%0A++++%7D%29%3B%0A%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27blur%27%2C+%28%29+%3D%3E+%7B%0A++++++console.log%28%27HomeScreen+blurred%27%29%3B%0A++++%7D%29%3B%0A%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

See [Navigation events](https://reactnavigation.org/docs/navigation-events) for more details on the available events and the API usage.

Instead of adding event listeners manually, we can use the [`useFocusEffect`](https://reactnavigation.org/docs/use-focus-effect) hook to perform side effects. It's like React's `useEffect` hook, but it ties into the navigation lifecycle.

Example:

-   Static
-   Dynamic

```
import { useFocusEffect } from '@react-navigation/native';function ProfileScreen() {  useFocusEffect(    React.useCallback(() => {      // Do something when the screen is focused      console.log('ProfileScreen focus effect');      return () => {        // Do something when the screen is unfocused        // Useful for cleanup functions        console.log('ProfileScreen focus effect cleanup');      };    }, [])  );  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Profile Screen</Text>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Focus+effect&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+useFocusEffect+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++useFocusEffect%28%0A++++React.useCallback%28%28%29+%3D%3E+%7B%0A++++++%2F%2F+Do+something+when+the+screen+is+focused%0A++++++console.log%28%27ProfileScreen+focus+effect%27%29%3B%0A%0A++++++return+%28%29+%3D%3E+%7B%0A++++++++%2F%2F+Do+something+when+the+screen+is+unfocused%0A++++++++%2F%2F+Useful+for+cleanup+functions%0A++++++++console.log%28%27ProfileScreen+focus+effect+cleanup%27%29%3B%0A++++++%7D%3B%0A++++%7D%2C+%5B%5D%29%0A++%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+RootStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you want to render different things based on if the screen is focused or not, you can use the [`useIsFocused`](https://reactnavigation.org/docs/use-is-focused) hook which returns a boolean indicating whether the screen is focused.

## Summary[](https://reactnavigation.org/docs/getting-started#summary "Direct link to Summary")

-   While React's lifecycle methods are still valid, React Navigation adds more events that you can subscribe to through the `navigation` object.
-   You may also use the `useFocusEffect` or `useIsFocused` hooks.



# 02 Guides

## Animating elements between screens  React Navigation

---
created: 2025-02-08T16:58:31 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Animating elements between screens | React Navigation

> ## Excerpt
> This guide covers how to animate elements between screens. This feature is known as a Shared Element Transition and it's implemented in the @react-navigation/native-stack with React Native Reanimated.

---
This guide covers how to animate elements between screens. This feature is known as a [Shared Element Transition](https://docs.swmansion.com/react-native-reanimated/docs/api/sharedElementTransitions) and it's implemented in the [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator) with [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/).

warning

As of writing this guide, Shared Element Transitions are considered an experimental feature not recommended for production use.

## Pre-requisites[](https://reactnavigation.org/docs/shared-element-transitions/#pre-requisites "Direct link to Pre-requisites")

Before continuing this guide make sure your app meets these criteria:

-   You are using [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator). The Shared Element Transitions feature isn't supported in JS-based [`@react-navigation/stack`](https://reactnavigation.org/docs/stack-navigator).
-   You have [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started) **v3.0.0 or higher** installed and configured.

## Minimal example[](https://reactnavigation.org/docs/shared-element-transitions/#minimal-example "Direct link to Minimal example")

To create a shared transition:

1.  Use `Animated` components imported from `react-native-reanimated`.
2.  Assign the same `sharedTransitionTag` to elements on different screens.
3.  Navigate between screens. The transition will start automatically.

-   Static
-   Dynamic

```
import * as React from 'react';import { View, StyleSheet } from 'react-native';import { NavigationContainer, useNavigation } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';import { Button } from '@react-navigation/elements';import Animated from 'react-native-reanimated';const Stack = createNativeStackNavigator();function HomeScreen() {  const navigation = useNavigation();  return (    <View style={styles.container}>      <Button onPress={() => navigation.navigate('Details')}>        Go to Details      </Button>      <Animated.Image        source={{ uri: 'https://picsum.photos/id/39/200' }}        style={{ width: 300, height: 300 }}        sharedTransitionTag="tag"      />    </View>  );}function DetailsScreen() {  const navigation = useNavigation();  return (    <View style={styles.container}>      <Button onPress={() => navigation.goBack()}>Go back</Button>      <Animated.Image        source={{ uri: 'https://picsum.photos/id/39/200' }}        style={{ width: 100, height: 100 }}        sharedTransitionTag="tag"      />    </View>  );}export default function App() {  return (    <NavigationContainer>      <Stack.Navigator>        <Stack.Screen name="Home" component={HomeScreen} />        <Stack.Screen name="Details" component={DetailsScreen} />      </Stack.Navigator>    </NavigationContainer>  );}const styles = StyleSheet.create({  container: {    flex: 1,    alignItems: 'center',  },});
```

`sharedTransitionTag` is a string that has to be unique in the context of a single screen, but has to match elements between screens. This prop allows Reanimated to identify and animate the elements, similarly to the [`key`](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) property, which tells React which element in the list is which.

## Customizing the transition[](https://reactnavigation.org/docs/shared-element-transitions/#customizing-the-transition "Direct link to Customizing the transition")

By default, the transition animates the `width`, `height`, `originX`, `originY` and `transform` properties using `withTiming` with a 500 ms duration. You can easily customize `width`, `height`, `originX`, and `originY` props. Customizing `transform` is also possible but it's far beyond the scope of this guide.

warning

Custom SharedTransition API is not finalized and might change in a future release.

To customize the transition you need to pass all the properties besides `transform`.

```
import { SharedTransition } from 'react-native-reanimated';const customTransition = SharedTransition.custom((values) => {  'worklet';  return {    height: withSpring(values.targetHeight),    width: withSpring(values.targetWidth),    originX: withSpring(values.targetOriginX),    originY: withSpring(values.targetOriginY),  };});function HomeScreen() {  return (    <Animated.Image      style={{ width: 300, height: 300 }}      sharedTransitionTag="tag"      sharedTransitionStyle={customTransition} // add this to both elements on both screens    />  );}
```

## Reference[](https://reactnavigation.org/docs/shared-element-transitions/#reference "Direct link to Reference")

You can find a full Shared Element Transitions reference in the [React Native Reanimated documentation](https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview/).

## Alternatives[](https://reactnavigation.org/docs/shared-element-transitions/#alternatives "Direct link to Alternatives")

Alternatively, you can use [`react-native-shared-element`](https://github.com/IjzerenHein/react-native-shared-element) library with a [React Navigation binding](https://github.com/IjzerenHein/react-navigation-shared-element) which implements Shared Element Transitions in a JS-based `@react-navigation/stack` navigator. This solution, however, isn't actively maintained.

The [`react-native-navigation`](https://github.com/wix/react-native-navigation) also comes with support for Shared Element Transitions. You can read more about it [here](https://wix.github.io/react-native-navigation/docs/style-animations#shared-element-transitions).


## Animating elements between screens

---
created: 2025-02-08T16:51:40 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Animating elements between screens | React Navigation

> ## Excerpt
> This guide covers how to animate elements between screens. This feature is known as a Shared Element Transition and it's implemented in the @react-navigation/native-stack with React Native Reanimated.

---
This guide covers how to animate elements between screens. This feature is known as a [Shared Element Transition](https://docs.swmansion.com/react-native-reanimated/docs/api/sharedElementTransitions) and it's implemented in the [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator) with [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/).

warning

As of writing this guide, Shared Element Transitions are considered an experimental feature not recommended for production use.

## Pre-requisites[](https://reactnavigation.org/docs/getting-started#pre-requisites "Direct link to Pre-requisites")

Before continuing this guide make sure your app meets these criteria:

-   You are using [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator). The Shared Element Transitions feature isn't supported in JS-based [`@react-navigation/stack`](https://reactnavigation.org/docs/stack-navigator).
-   You have [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started) **v3.0.0 or higher** installed and configured.

## Minimal example[](https://reactnavigation.org/docs/getting-started#minimal-example "Direct link to Minimal example")

To create a shared transition:

1.  Use `Animated` components imported from `react-native-reanimated`.
2.  Assign the same `sharedTransitionTag` to elements on different screens.
3.  Navigate between screens. The transition will start automatically.

-   Static
-   Dynamic

```
import * as React from 'react';import { View, StyleSheet } from 'react-native';import { NavigationContainer, useNavigation } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';import { Button } from '@react-navigation/elements';import Animated from 'react-native-reanimated';const Stack = createNativeStackNavigator();function HomeScreen() {  const navigation = useNavigation();  return (    <View style={styles.container}>      <Button onPress={() => navigation.navigate('Details')}>        Go to Details      </Button>      <Animated.Image        source={{ uri: 'https://picsum.photos/id/39/200' }}        style={{ width: 300, height: 300 }}        sharedTransitionTag="tag"      />    </View>  );}function DetailsScreen() {  const navigation = useNavigation();  return (    <View style={styles.container}>      <Button onPress={() => navigation.goBack()}>Go back</Button>      <Animated.Image        source={{ uri: 'https://picsum.photos/id/39/200' }}        style={{ width: 100, height: 100 }}        sharedTransitionTag="tag"      />    </View>  );}export default function App() {  return (    <NavigationContainer>      <Stack.Navigator>        <Stack.Screen name="Home" component={HomeScreen} />        <Stack.Screen name="Details" component={DetailsScreen} />      </Stack.Navigator>    </NavigationContainer>  );}const styles = StyleSheet.create({  container: {    flex: 1,    alignItems: 'center',  },});
```

`sharedTransitionTag` is a string that has to be unique in the context of a single screen, but has to match elements between screens. This prop allows Reanimated to identify and animate the elements, similarly to the [`key`](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) property, which tells React which element in the list is which.

## Customizing the transition[](https://reactnavigation.org/docs/getting-started#customizing-the-transition "Direct link to Customizing the transition")

By default, the transition animates the `width`, `height`, `originX`, `originY` and `transform` properties using `withTiming` with a 500 ms duration. You can easily customize `width`, `height`, `originX`, and `originY` props. Customizing `transform` is also possible but it's far beyond the scope of this guide.

warning

Custom SharedTransition API is not finalized and might change in a future release.

To customize the transition you need to pass all the properties besides `transform`.

```
import { SharedTransition } from 'react-native-reanimated';const customTransition = SharedTransition.custom((values) => {  'worklet';  return {    height: withSpring(values.targetHeight),    width: withSpring(values.targetWidth),    originX: withSpring(values.targetOriginX),    originY: withSpring(values.targetOriginY),  };});function HomeScreen() {  return (    <Animated.Image      style={{ width: 300, height: 300 }}      sharedTransitionTag="tag"      sharedTransitionStyle={customTransition} // add this to both elements on both screens    />  );}
```

## Reference[](https://reactnavigation.org/docs/getting-started#reference "Direct link to Reference")

You can find a full Shared Element Transitions reference in the [React Native Reanimated documentation](https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview/).

## Alternatives[](https://reactnavigation.org/docs/getting-started#alternatives "Direct link to Alternatives")

Alternatively, you can use [`react-native-shared-element`](https://github.com/IjzerenHein/react-native-shared-element) library with a [React Navigation binding](https://github.com/IjzerenHein/react-navigation-shared-element) which implements Shared Element Transitions in a JS-based `@react-navigation/stack` navigator. This solution, however, isn't actively maintained.

The [`react-native-navigation`](https://github.com/wix/react-native-navigation) also comes with support for Shared Element Transitions. You can read more about it [here](https://wix.github.io/react-native-navigation/docs/style-animations#shared-element-transitions).



## Authentication flows

---
created: 2025-02-08T16:47:36 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Authentication flows | React Navigation

> ## Excerpt
> Most apps require that a user authenticates in some way to have access to data associated with a user or other private content. Typically the flow will look like this:

---
Most apps require that a user authenticates in some way to have access to data associated with a user or other private content. Typically the flow will look like this:

-   The user opens the app.
-   The app loads some authentication state from encrypted persistent storage (for example, [`SecureStore`](https://docs.expo.io/versions/latest/sdk/securestore/)).
-   When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded.
-   When the user signs out, we clear the authentication state and send them back to authentication screens.

note

We say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.

## What we need[](https://reactnavigation.org/docs/getting-started#what-we-need "Direct link to What we need")

We want the following behavior from our authentication flow:

-   When the user is signed in, we want to show the main app screens and not the authentication-related screens.
-   When the user is signed out, we want to show the authentication screens and not the main app screens.
-   After the user goes through the authentication flow and signs in, we want to unmount all of the screens related to authentication, and when we press the hardware back button, we expect to not be able to go back to the authentication flow.

## How it will work[](https://reactnavigation.org/docs/getting-started#how-it-will-work "Direct link to How it will work")

We can configure different screens to be available based on some condition. For example, if the user is signed in, we can define `Home`, `Profile`, `Settings` etc. If the user is not signed in, we can define `SignIn` and `SignUp` screens.

-   Static
-   Dynamic

For example:

```
{isSignedIn ? (  <>    <Stack.Screen name="Home" component={HomeScreen} />    <Stack.Screen name="Profile" component={ProfileScreen} />    <Stack.Screen name="Settings" component={SettingsScreen} />  </>) : (  <>    <Stack.Screen name="SignIn" component={SignInScreen} />    <Stack.Screen name="SignUp" component={SignUpScreen} />  </>)}
```

[Try on **Snack**](https://snack.expo.dev/?name=Customizing+tabs+appearance&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aconst+getIsSignedIn+%3D+%28%29+%3D%3E+%7B%0A++%2F%2F+custom+logic%0A++return+true%3B%0A%7D%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++const+isSignedIn+%3D+getIsSignedIn%28%29%3B%0A%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%7BisSignedIn+%3F+%28%0A++++++++++%3C%3E%0A++++++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++++++%3C%2F%3E%0A++++++++%29+%3A+%28%0A++++++++++%3C%3E%0A++++++++++++%3CStack.Screen+name%3D%22SignIn%22+component%3D%7BSignInScreen%7D+%2F%3E%0A++++++++++++%3CStack.Screen+name%3D%22SignUp%22+component%3D%7BSignUpScreen%7D+%2F%3E%0A++++++++++%3C%2F%3E%0A++++++++%29%7D%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+SettingsScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+SignInScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+SignUpScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

When we define screens like this, when `isSignedIn` is `true`, React Navigation will only see the `Home`, `Profile` and `Settings` screens, and when it's `false`, React Navigation will see the `SignIn` and `SignUp` screens. This makes it impossible to navigate to the `Home`, `Profile` and `Settings` screens when the user is not signed in, and to `SignIn` and `SignUp` screens when the user is signed in.

This pattern has been in use by other routing libraries such as React Router for a long time, and is commonly known as "Protected routes". Here, our screens which need the user to be signed in are "protected" and cannot be navigated to by other means if the user is not signed in.

The magic happens when the value of the `isSignedIn` variable changes. Let's say, initially `isSignedIn` is `false`. This means, either `SignIn` or `SignUp` screens are shown. After the user signs in, the value of `isSignedIn` will change to `true`. React Navigation will see that the `SignIn` and `SignUp` screens are no longer defined and so it will remove them. Then it'll show the `Home` screen automatically because that's the first screen defined when `isSignedIn` is `true`.

The example shows stack navigator, but you can use the same approach with any navigator.

By conditionally defining different screens based on a variable, we can implement auth flow in a simple way that doesn't require additional logic to make sure that the correct screen is shown.

## Define our screens[](https://reactnavigation.org/docs/getting-started#define-our-screens "Direct link to Define our screens")

In our navigator, we can conditionally define appropriate screens. For our case, let's say we have 3 screens:

-   `SplashScreen` - This will show a splash or loading screen when we're restoring the token.
-   `SignIn` - This is the screen we show if the user isn't signed in already (we couldn't find a token).
-   `Home` - This is the screen we show if the user is already signed in.

So our navigator will look like:

-   Static
-   Dynamic

```
if (isLoading) {  // We haven't finished checking for the token yet  return <SplashScreen />;}return (  <NavigationContainer>    <Stack.Navigator>      {userToken == null ? (        // No token found, user isn't signed in        <Stack.Screen          name="SignIn"          component={SimpleSignInScreen}          options={{            title: 'Sign in',          }}          initialParams={{ setUserToken }}        />      ) : (        // User is signed in        <Stack.Screen name="Home" component={HomeScreen} />      )}    </Stack.Navigator>  </NavigationContainer>);
```

In the above snippet, `isLoading` means that we're still checking if we have a token. This can usually be done by checking if we have a token in `SecureStore` and validating the token. After we get the token and if it's valid, we need to set the `userToken`. We also have another state called `isSignout` to have a different animation on sign out.

The main thing to notice is that we're conditionally defining screens based on these state variables:

-   `SignIn` screen is only defined if `userToken` is `null` (user is not signed in)
-   `Home` screen is only defined if `userToken` is non-null (user is signed in)

Here, we're conditionally defining one screen for each case. But you could also define multiple screens. For example, you probably want to define password reset, signup, etc screens as well when the user isn't signed in. Similarly, for the screens accessible after signing in, you probably have more than one screen. We can use `React.Fragment` to define multiple screens:

-   Static
-   Dynamic

```
state.userToken == null ? (  <>    <Stack.Screen name="SignIn" component={SignInScreen} />    <Stack.Screen name="SignUp" component={SignUpScreen} />    <Stack.Screen name="ResetPassword" component={ResetPassword} />  </>) : (  <>    <Stack.Screen name="Home" component={HomeScreen} />    <Stack.Screen name="Profile" component={ProfileScreen} />  </>);
```

tip

If you have both your login-related screens and rest of the screens in two different Stack navigators, we recommend to use a single Stack navigator and place the conditional inside instead of using 2 different navigators. This makes it possible to have a proper transition animation during login/logout.

## Implement the logic for restoring the token[](https://reactnavigation.org/docs/getting-started#implement-the-logic-for-restoring-the-token "Direct link to Implement the logic for restoring the token")

note

The following is just an example of how you might implement the logic for authentication in your app. You don't need to follow it as is.

From the previous snippet, we can see that we need 3 state variables:

-   `isLoading` - We set this to `true` when we're trying to check if we already have a token saved in `SecureStore`
-   `isSignout` - We set this to `true` when user is signing out, otherwise set it to `false`
-   `userToken` - The token for the user. If it's non-null, we assume the user is logged in, otherwise not.

So we need to:

-   Add some logic for restoring token, signing in and signing out
-   Expose methods for signing in and signing out to other components

We'll use `React.useReducer` and `React.useContext` in this guide. But if you're using a state management library such as Redux or Mobx, you can use them for this functionality instead. In fact, in bigger apps, a global state management library is more suitable for storing authentication tokens. You can adapt the same approach to your state management library.

First we'll need to create a context for auth where we can expose the necessary methods:

```
import * as React from 'react';const AuthContext = React.createContext();
```

In our component, we will:

-   Store the token and loading state in `useReducer`
-   Persist it to `SecureStore` and read it from there on app launch
-   Expose the methods for sign in and sign out to child components using `AuthContext`

So our component will look like this:

-   Static
-   Dynamic

```
import * as React from 'react';import * as SecureStore from 'expo-secure-store';export default function App() {  const [state, dispatch] = React.useReducer(    (prevState, action) => {      switch (action.type) {        case 'RESTORE_TOKEN':          return {            ...prevState,            userToken: action.token,            isLoading: false,          };        case 'SIGN_IN':          return {            ...prevState,            isSignout: false,            userToken: action.token,          };        case 'SIGN_OUT':          return {            ...prevState,            isSignout: true,            userToken: null,          };      }    },    {      isLoading: true,      isSignout: false,      userToken: null,    }  );  React.useEffect(() => {    // Fetch the token from storage then navigate to our appropriate place    const bootstrapAsync = async () => {      let userToken;      try {        // Restore token stored in `SecureStore` or any other encrypted storage        userToken = await SecureStore.getItemAsync('userToken');      } catch (e) {        // Restoring token failed      }      // After restoring token, we may need to validate it in production apps      // This will switch to the App screen or Auth screen and this loading      // screen will be unmounted and thrown away.      dispatch({ type: 'RESTORE_TOKEN', token: userToken });    };    bootstrapAsync();  }, []);  const authContext = React.useMemo(    () => ({      signIn: async (data) => {        // In a production app, we need to send some data (usually username, password) to server and get a token        // We will also need to handle errors if sign in failed        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage        // In the example, we'll use a dummy token        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });      },      signOut: () => dispatch({ type: 'SIGN_OUT' }),      signUp: async (data) => {        // In a production app, we need to send user data to server and get a token        // We will also need to handle errors if sign up failed        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage        // In the example, we'll use a dummy token        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });      },    }),    []  );  return (    <AuthContext.Provider value={authContext}>      <NavigationContainer>        <Stack.Navigator>          {state.isLoading ? (            // We haven't finished checking for the token yet            <Stack.Screen name="Splash" component={SplashScreen} />          ) : state.userToken == null ? (            // No token found, user isn't signed in            <Stack.Screen              name="SignIn"              component={SignInScreen}              options={{                title: 'Sign in',                // When logging out, a pop animation feels intuitive                animationTypeForReplace: state.isSignout ? 'pop' : 'push',              }}            />          ) : (            // User is signed in            <Stack.Screen name="Home" component={HomeScreen} />          )}        </Stack.Navigator>      </NavigationContainer>    </AuthContext.Provider>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Signing+in+and+signing+out+with+AuthContext&code=import+*+as+React+from+%27react%27%3B%0Aimport+*+as+SecureStore+from+%27expo-secure-store%27%3B%0A%0Aimport+%7B+Text%2C+TextInput%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Aconst+AuthContext+%3D+React.createContext%28%29%3B%0A%0Afunction+SplashScreen%28%29+%7B%0A++return+%28%0A++++%3CView%3E%0A++++++%3CText%3ELoading...%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+%7B+signOut+%7D+%3D+React.useContext%28AuthContext%29%3B%0A%0A++return+%28%0A++++%3CView%3E%0A++++++%3CText%3ESigned+in%21%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7BsignOut%7D%3ESign+out%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+SignInScreen%28%29+%7B%0A++const+%5Busername%2C+setUsername%5D+%3D+React.useState%28%27%27%29%3B%0A++const+%5Bpassword%2C+setPassword%5D+%3D+React.useState%28%27%27%29%3B%0A%0A++const+%7B+signIn+%7D+%3D+React.useContext%28AuthContext%29%3B%0A%0A++return+%28%0A++++%3CView%3E%0A++++++%3CTextInput%0A++++++++placeholder%3D%22Username%22%0A++++++++value%3D%7Busername%7D%0A++++++++onChangeText%3D%7BsetUsername%7D%0A++++++%2F%3E%0A++++++%3CTextInput%0A++++++++placeholder%3D%22Password%22%0A++++++++value%3D%7Bpassword%7D%0A++++++++onChangeText%3D%7BsetPassword%7D%0A++++++++secureTextEntry%0A++++++%2F%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+signIn%28%7B+username%2C+password+%7D%29%7D%3ESign+in%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++const+%5Bstate%2C+dispatch%5D+%3D+React.useReducer%28%0A++++%28prevState%2C+action%29+%3D%3E+%7B%0A++++++switch+%28action.type%29+%7B%0A++++++++case+%27RESTORE_TOKEN%27%3A%0A++++++++++return+%7B%0A++++++++++++...prevState%2C%0A++++++++++++userToken%3A+action.token%2C%0A++++++++++++isLoading%3A+false%2C%0A++++++++++%7D%3B%0A++++++++case+%27SIGN_IN%27%3A%0A++++++++++return+%7B%0A++++++++++++...prevState%2C%0A++++++++++++isSignout%3A+false%2C%0A++++++++++++userToken%3A+action.token%2C%0A++++++++++%7D%3B%0A++++++++case+%27SIGN_OUT%27%3A%0A++++++++++return+%7B%0A++++++++++++...prevState%2C%0A++++++++++++isSignout%3A+true%2C%0A++++++++++++userToken%3A+null%2C%0A++++++++++%7D%3B%0A++++++%7D%0A++++%7D%2C%0A++++%7B%0A++++++isLoading%3A+true%2C%0A++++++isSignout%3A+false%2C%0A++++++userToken%3A+null%2C%0A++++%7D%0A++%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++%2F%2F+Fetch+the+token+from+storage+then+navigate+to+our+appropriate+place%0A++++const+bootstrapAsync+%3D+async+%28%29+%3D%3E+%7B%0A++++++let+userToken%3B%0A%0A++++++try+%7B%0A++++++++%2F%2F+Restore+token+stored+in+%60SecureStore%60+or+any+other+encrypted+storage%0A++++++++userToken+%3D+await+SecureStore.getItemAsync%28%27userToken%27%29%3B%0A++++++%7D+catch+%28e%29+%7B%0A++++++++%2F%2F+Restoring+token+failed%0A++++++%7D%0A%0A++++++%2F%2F+After+restoring+token%2C+we+may+need+to+validate+it+in+production+apps%0A%0A++++++%2F%2F+This+will+switch+to+the+App+screen+or+Auth+screen+and+this+loading%0A++++++%2F%2F+screen+will+be+unmounted+and+thrown+away.%0A++++++dispatch%28%7B+type%3A+%27RESTORE_TOKEN%27%2C+token%3A+userToken+%7D%29%3B%0A++++%7D%3B%0A%0A++++bootstrapAsync%28%29%3B%0A++%7D%2C+%5B%5D%29%3B%0A%0A++const+authContext+%3D+React.useMemo%28%0A++++%28%29+%3D%3E+%28%7B%0A++++++signIn%3A+async+%28data%29+%3D%3E+%7B%0A++++++++%2F%2F+In+a+production+app%2C+we+need+to+send+some+data+%28usually+username%2C+password%29+to+server+and+get+a+token%0A++++++++%2F%2F+We+will+also+need+to+handle+errors+if+sign+in+failed%0A++++++++%2F%2F+After+getting+token%2C+we+need+to+persist+the+token+using+%60SecureStore%60+or+any+other+encrypted+storage%0A++++++++%2F%2F+In+the+example%2C+we%27ll+use+a+dummy+token%0A%0A++++++++dispatch%28%7B+type%3A+%27SIGN_IN%27%2C+token%3A+%27dummy-auth-token%27+%7D%29%3B%0A++++++%7D%2C%0A++++++signOut%3A+%28%29+%3D%3E+dispatch%28%7B+type%3A+%27SIGN_OUT%27+%7D%29%2C%0A++++++signUp%3A+async+%28data%29+%3D%3E+%7B%0A++++++++%2F%2F+In+a+production+app%2C+we+need+to+send+user+data+to+server+and+get+a+token%0A++++++++%2F%2F+We+will+also+need+to+handle+errors+if+sign+up+failed%0A++++++++%2F%2F+After+getting+token%2C+we+need+to+persist+the+token+using+%60SecureStore%60+or+any+other+encrypted+storage%0A++++++++%2F%2F+In+the+example%2C+we%27ll+use+a+dummy+token%0A%0A++++++++dispatch%28%7B+type%3A+%27SIGN_IN%27%2C+token%3A+%27dummy-auth-token%27+%7D%29%3B%0A++++++%7D%2C%0A++++%7D%29%2C%0A++++%5B%5D%0A++%29%3B%0A%0A++return+%28%0A++++%3CAuthContext.Provider+value%3D%7BauthContext%7D%3E%0A++++++%3CNavigationContainer%3E%0A++++++++%3CStack.Navigator%3E%0A++++++++++%7Bstate.isLoading+%3F+%28%0A++++++++++++%2F%2F+We+haven%27t+finished+checking+for+the+token+yet%0A++++++++++++%3CStack.Screen+name%3D%22Splash%22+component%3D%7BSplashScreen%7D+%2F%3E%0A++++++++++%29+%3A+state.userToken+%3D%3D+null+%3F+%28%0A++++++++++++%2F%2F+No+token+found%2C+user+isn%27t+signed+in%0A++++++++++++%3CStack.Screen%0A++++++++++++++name%3D%22SignIn%22%0A++++++++++++++component%3D%7BSignInScreen%7D%0A++++++++++++++options%3D%7B%7B%0A++++++++++++++++title%3A+%27Sign+in%27%2C%0A++++++++++++++++%2F%2F+When+logging+out%2C+a+pop+animation+feels+intuitive%0A++++++++++++++++animationTypeForReplace%3A+state.isSignout+%3F+%27pop%27+%3A+%27push%27%2C%0A++++++++++++++%7D%7D%0A++++++++++++%2F%3E%0A++++++++++%29+%3A+%28%0A++++++++++++%2F%2F+User+is+signed+in%0A++++++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++++%29%7D%0A++++++++%3C%2FStack.Navigator%3E%0A++++++%3C%2FNavigationContainer%3E%0A++++%3C%2FAuthContext.Provider%3E%0A++%29%3B%0A%7D%0A&dependencies=expo-secure-store%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## Fill in other components[](https://reactnavigation.org/docs/getting-started#fill-in-other-components "Direct link to Fill in other components")

We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content.

```
function SignInScreen() {  const [username, setUsername] = React.useState('');  const [password, setPassword] = React.useState('');  const { signIn } = React.useContext(AuthContext);  return (    <View>      <TextInput        placeholder="Username"        value={username}        onChangeText={setUsername}      />      <TextInput        placeholder="Password"        value={password}        onChangeText={setPassword}        secureTextEntry      />      <Button onPress={() => signIn({ username, password })}>Sign in</Button>    </View>  );}
```

You can similarly fill in the other screens according to your requirements.

Consider the following example:

-   Static
-   Dynamic

```
isSignedIn ? (  <>    <Stack.Screen name="Home" component={HomeScreen} />    <Stack.Screen name="Profile" component={ProfileScreen} />    <Stack.Screen name="Help" component={HelpScreen} />  </>) : (  <>    <Stack.Screen name="SignIn" component={SignInScreen} />    <Stack.Screen name="SignUp" component={SignUpScreen} />    <Stack.Screen name="Help" component={HelpScreen} />  </>);
```

Here we have specific screens such as `SignIn`, `Home` etc. which are only shown depending on the sign in state. But we also have the `Help` screen which can be shown regardless of the login status. This also means that if the sign in state changes when the user is in the `Help` screen, they'll stay on the `Help` screen.

This can be a problem, we probably want the user to be taken to the `SignIn` screen or `Home` screen instead of keeping them on the `Help` screen.

-   Static
-   Dynamic

To make this work, we can use [`navigationKey`](https://reactnavigation.org/docs/screen#navigation-key). When the `navigationKey` changes, React Navigation will remove all the screen.

So our updated code will look like the following:

```
<>  {isSignedIn ? (    <>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </>  ) : (    <>      <Stack.Screen name="SignIn" component={SignInScreen} />      <Stack.Screen name="SignUp" component={SignUpScreen} />    </>  )}  <Stack.Screen    navigationKey={isSignedIn ? 'user' : 'guest'}    name="Help"    component={HelpScreen}  /></>
```

If you have a bunch of shared screens, you can also use [`navigationKey` with a `Group`](https://reactnavigation.org/docs/group#navigation-key) to remove all of the screens in the group. For example:

```
<>  {isSignedIn ? (    <>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </>  ) : (    <>      <Stack.Screen name="SignIn" component={SignInScreen} />      <Stack.Screen name="SignUp" component={SignUpScreen} />    </>  )}  <Stack.Group navigationKey={isSignedIn ? 'user' : 'guest'}>    <Stack.Screen name="Help" component={HelpScreen} />    <Stack.Screen name="About" component={AboutScreen} />  </Stack.Group></>
```

## Don't manually navigate when conditionally rendering screens[](https://reactnavigation.org/docs/getting-started#dont-manually-navigate-when-conditionally-rendering-screens "Direct link to Don't manually navigate when conditionally rendering screens")

It's important to note that when using such a setup, you **don't manually navigate** to the `Home` screen by calling `navigation.navigate('Home')` or any other method. **React Navigation will automatically navigate to the correct screen** when `isSignedIn` changes - `Home` screen when `isSignedIn` becomes `true`, and to `SignIn` screen when `isSignedIn` becomes `false`. You'll get an error if you attempt to navigate manually.



## Call a function when focused screen changes  React Navigation

---
created: 2025-02-08T17:00:23 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Call a function when focused screen changes | React Navigation

> ## Excerpt
> In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.

---
In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.

There are multiple approaches available to us:

1.  Listening to the `'focus'` event with an event listener.
2.  Using the `useFocusEffect` hook provided by react-navigation.
3.  Using the `useIsFocused` hook provided by react-navigation.

## Triggering an action with a `'focus'` event listener[](https://reactnavigation.org/docs/shared-element-transitions/#triggering-an-action-with-a-focus-event-listener "Direct link to triggering-an-action-with-a-focus-event-listener")

We can also listen to the `'focus'` event with an event listener. After setting up an event listener, we must also stop listening to the event when the screen is unmounted.

With this approach, we will only be able to call an action when the screen focuses. This is useful for performing an action such as logging the screen view for analytics.

Example:

-   Static
-   Dynamic

```
import * as React from 'react';import { View } from 'react-native';function ProfileScreen() {  const navigation = useNavigation();  React.useEffect(() => {    const unsubscribe = navigation.addListener('focus', () => {      alert('Screen is focused');      // The screen is focused      // Call any action    });    // Return the function to unsubscribe from the event so it gets removed on unmount    return unsubscribe;  }, [navigation]);  return <View />;}
```

[Try on **Snack**](https://snack.expo.dev/?name=Focus+event+listener&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0A%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27focus%27%2C+%28%29+%3D%3E+%7B%0A++++++alert%28%27Screen+is+focused%27%29%3B%0A++++++%2F%2F+The+screen+is+focused%0A++++++%2F%2F+Call+any+action%0A++++%7D%29%3B%0A%0A++++%2F%2F+Return+the+function+to+unsubscribe+from+the+event+so+it+gets+removed+on+unmount%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

See the [navigation events guide](https://reactnavigation.org/docs/navigation-events) for more details on the event listener API.

In most cases, it's recommended to use the `useFocusEffect` hook instead of adding the listener manually. See below for details.

## Triggering an action with the `useFocusEffect` hook[](https://reactnavigation.org/docs/shared-element-transitions/#triggering-an-action-with-the-usefocuseffect-hook "Direct link to triggering-an-action-with-the-usefocuseffect-hook")

React Navigation provides a [hook](https://reactnavigation.org/docs/use-focus-effect) that runs an effect when the screen comes into focus and cleans it up when it goes out of focus. This is useful for cases such as adding event listeners, for fetching data with an API call when a screen becomes focused, or any other action that needs to happen once the screen comes into view.

This is particularly handy when we are trying to stop something when the page is unfocused, like stopping a video or audio file from playing, or stopping the tracking of a user's location.

-   Static
-   Dynamic

```
function ProfileScreen() {  useFocusEffect(    React.useCallback(() => {      alert('Screen was focused');      // Do something when the screen is focused      return () => {        alert('Screen was unfocused');        // Do something when the screen is unfocused        // Useful for cleanup functions      };    }, [])  );  return <View />;}
```

[Try on **Snack**](https://snack.expo.dev/?name=useFocusEffect+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useFocusEffect+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++useFocusEffect%28%0A++++React.useCallback%28%28%29+%3D%3E+%7B%0A++++++alert%28%27Screen+was+focused%27%29%3B%0A++++++%2F%2F+Do+something+when+the+screen+is+focused%0A++++++return+%28%29+%3D%3E+%7B%0A++++++++alert%28%27Screen+was+unfocused%27%29%3B%0A++++++++%2F%2F+Do+something+when+the+screen+is+unfocused%0A++++++++%2F%2F+Useful+for+cleanup+functions%0A++++++%7D%3B%0A++++%7D%2C+%5B%5D%29%0A++%29%3B%0A%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

See the [`useFocusEffect`](https://reactnavigation.org/docs/use-focus-effect/) documentation for more details.

## Re-rendering screen with the `useIsFocused` hook[](https://reactnavigation.org/docs/shared-element-transitions/#re-rendering-screen-with-the-useisfocused-hook "Direct link to re-rendering-screen-with-the-useisfocused-hook")

React Navigation provides a [hook](https://reactnavigation.org/docs/use-is-focused) that returns a boolean indicating whether the screen is focused or not.

The hook will return `true` when the screen is focused and `false` when our component is no longer focused. This enables us to render something conditionally based on whether the user is on the screen or not.

The `useIsFocused` hook will cause our component to re-render when we focus and unfocus a screen. Using this hook component may introduce unnecessary component re-renders as a screen comes in and out of focus. This could cause issues depending on the type of action we're calling on focusing. Hence we recommend to use this hook only if you need to trigger a re-render. For side-effects such as subscribing to events or fetching data, use the methods described above.

-   Static
-   Dynamic

```
function ProfileScreen() {  const isFocused = useIsFocused();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=useIsFocused+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useIsFocused+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createMaterialTopTabNavigator+%7D+from+%27%40react-navigation%2Fmaterial-top-tabs%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++%2F%2F+This+hook+returns+%60true%60+if+the+screen+is+focused%2C+%60false%60+otherwise%0A++const+isFocused+%3D+useIsFocused%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3E%7BisFocused+%3F+%27focused%27+%3A+%27unfocused%27%7D%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createMaterialTopTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fmaterial-top-tabs%407.0.18%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-pager-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

This example is also documented in the [`useIsFocused` API documentation](https://reactnavigation.org/docs/use-is-focused).


## Combining static and dynamic APIs  React Navigation

---
created: 2025-02-08T17:01:37 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Combining static and dynamic APIs | React Navigation

> ## Excerpt
> While the static API has many advantages, it doesn't fit use cases where the navigation configuration needs to be dynamic. So React Navigation supports interop between the static and dynamic APIs.

---
While the static API has many advantages, it doesn't fit use cases where the navigation configuration needs to be dynamic. So React Navigation supports interop between the static and dynamic APIs.

Keep in mind that the features provided by the static API such as automatic linking configuration and automatic TypeScript types need the whole configuration to be static. If part of the configuration is dynamic, you'll need to handle those parts manually.

There are 2 ways you may want to combine the static and dynamic APIs:

## Static root navigator, dynamic nested navigator[](https://reactnavigation.org/docs/shared-element-transitions/#static-root-navigator-dynamic-nested-navigator "Direct link to Static root navigator, dynamic nested navigator")

This is useful if you want to keep your configuration static, but need to use a dynamic configuration for a specific navigator.

Let's consider the following example:

-   You have a root stack navigator that contains a tab navigator in a screen.
-   The tab navigator is defined using the dynamic API.

Our static configuration would look like this:

```
import { createNativeStackNavigator } from '@react-navigation/native-stack';const RootStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,    },    Feed: {      screen: FeedScreen,      linking: {        path: 'feed',      },    },  },});
```

Here, `FeedScreen` is a component that renders a tab navigator and is defined using the dynamic API:

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';const Tab = createBottomTabNavigator();function FeedScreen() {  return (    <Tab.Navigator>      <Tab.Screen name="Latest" component={LatestScreen} />      <Tab.Screen name="Popular" component={PopularScreen} />    </Tab.Navigator>  );}
```

This code will work, but we're missing 2 things:

-   Linking configuration for the screens in the top tab navigator.
-   TypeScript types for the screens in the top tab navigator.

Since the nested navigator is defined using the dynamic API, we need to handle these manually. For the linking configuration, we can define the screens in the `linking` property of the `Feed` screen:

```
import { createNativeStackNavigator } from '@react-navigation/native-stack';const RootStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,    },    Feed: {      screen: FeedScreen,      linking: {        path: 'feed',        screens: {          Latest: 'latest',          Popular: 'popular',        },      },    },  },});
```

Here the `screens` property is the same as how you'd define it with `linking` config with the dynamic API. It can contain configuration for any nested navigators as well. See [configuring links](https://reactnavigation.org/docs/configuring-links) for more details on the API.

For the TypeScript types, we can define the type of the `FeedScreen` component:

```
import {  StaticScreenProps,  NavigatorScreenParams,} from '@react-navigation/native';type FeedParamList = {  Latest: undefined;  Popular: undefined;};type Props = StaticScreenProps<NavigatorScreenParams<FeedParamList>>;function FeedScreen(_: Props) {  // ...}
```

In the above snippet:

1.  We first define the param list type for screens in the navigator that defines params for each screen
2.  Then we use the `NavigatorScreenParams` type to get the type of route's `params` which will include types for the nested screens
3.  Finally, we use the type of `params` with `StaticScreenProps` to define the type of the screen component

This is based on how we'd define the type for a screen with a nested navigator with the dynamic API. See [Type checking screens and params in nested navigator](https://reactnavigation.org/docs/typescript#type-checking-screens-and-params-in-nested-navigator).

## Dynamic root navigator, static nested navigator[](https://reactnavigation.org/docs/shared-element-transitions/#dynamic-root-navigator-static-nested-navigator "Direct link to Dynamic root navigator, static nested navigator")

This is useful if you already have a dynamic configuration, but want to migrate to the static API. This way you can migrate one navigator at a time.

Let's consider the following example:

-   You have a root stack navigator that contains a tab navigator in a screen.
-   The root stack navigator is defined using the dynamic API.

Our dynamic configuration would look like this:

```
import { createNativeStackNavigator } from '@react-navigation/native-stack';const RootStack = createNativeStackNavigator();function RootStackScreen() {  return (    <RootStack.Navigator>      <RootStack.Screen name="Home" component={HomeScreen} />      <RootStack.Screen name="Feed" component={FeedScreen} />    </RootStack.Navigator>  );}
```

Here, `FeedScreen` is a component that renders a tab navigator and is defined using the static API:

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';const FeedTabs = createBottomTabNavigator({  screens: {    Latest: {      screen: LatestScreen,    },    Popular: {      screen: PopularScreen,    },  },});
```

To use the `FeedTabs` navigator for the `Feed` screen, we need to use the `createComponentForStaticNavigation` function:

```
import { createComponentForStaticNavigation } from '@react-navigation/native';const FeedScreen = createComponentForStaticNavigation(FeedTabs, 'Feed');
```

In addition, we can generate the TypeScript types for the `FeedTabs` navigator and use it in the types of `RootStack` without needing to write them manually:

```
import {  StaticParamList,  NavigatorScreenParams,} from '@react-navigation/native';type FeedTabsParamList = StaticParamList<typeof FeedTabs>;type RootStackParamList = {  Home: undefined;  Feed: NavigatorScreenParams<FeedTabsParamList>;};
```

Similarly, we can generate the linking configuration for the `FeedTabs` navigator and use it in the linking configuration passed to `NavigationContainer`:

```
import { createPathConfigForStaticNavigation } from '@react-navigation/native';const feedScreens = createPathConfigForStaticNavigation(FeedTabs);const linking = {  prefixes: ['https://mychat.com', 'mychat://'],  config: {    screens: {      Home: '',      Feed: {        path: 'feed',        screens: feedScreens,      },    },  },};
```

This will generate the linking configuration for the `Feed` screen based on the configuration of the `FeedTabs` navigator.


## Configuring links  React Navigation

---
created: 2025-02-08T17:00:52 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Configuring links | React Navigation

> ## Excerpt
> In this guide, we will configure React Navigation to handle external links. This is necessary if you want to:

---
In this guide, we will configure React Navigation to handle external links. This is necessary if you want to:

1.  Handle deep links in React Native apps on Android and iOS
2.  Enable URL integration in browser when using on web
3.  Use [`<Link />`](https://reactnavigation.org/docs/link) or [`useLinkTo`](https://reactnavigation.org/docs/use-link-to) to navigate using paths.

Make sure that you have [configured deep links](https://reactnavigation.org/docs/deep-linking) in your app before proceeding. If you have an Android or iOS app, remember to specify the [`prefixes`](https://reactnavigation.org/docs/navigation-container#linkingprefixes) option.

-   Static
-   Dynamic

The `NavigationContainer` accepts a [`linking`](https://reactnavigation.org/docs/navigation-container#linking) prop that makes it easier to handle incoming links. The 2 of the most important properties you can specify in the `linking` prop are `prefixes` and `config`:

```
import { NavigationContainer } from '@react-navigation/native';const linking = {  prefixes: [    /* your linking prefixes */  ],  config: {    /* configuration for matching screens with paths */  },};function App() {  return (    <NavigationContainer      linking={linking}      fallback={<Text>Loading...</Text>}    >      {/* content */}    </NavigationContainer>  );}
```

When you specify the `linking` prop, React Navigation will handle incoming links automatically. On Android and iOS, it'll use React Native's [`Linking` module](https://reactnative.dev/docs/linking) to handle incoming links, both when the app was opened with the link, and when new links are received when the app is open. On the Web, it'll use the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to sync the URL with the browser.

warning

Currently there seems to be bug ([facebook/react-native#25675](https://github.com/facebook/react-native/issues/25675)) which results in it never resolving on Android. We add a timeout to avoid getting stuck forever, but it means that the link might not be handled in some cases.

You can also pass a [`fallback`](https://reactnavigation.org/docs/navigation-container#fallback) prop that controls what's displayed when React Navigation is trying to resolve the initial deep link URL.

## Prefixes[](https://reactnavigation.org/docs/shared-element-transitions/#prefixes "Direct link to Prefixes")

The `prefixes` option can be used to specify custom schemes (e.g. `mychat://`) as well as host & domain names (e.g. `https://mychat.com`) if you have configured [Universal Links](https://developer.apple.com/ios/universal-links/) or [Android App Links](https://developer.android.com/training/app-links).

For example:

```
const linking = {  prefixes: ['mychat://', 'https://mychat.com'],};
```

Note that the `prefixes` option is not supported on Web. The host & domain names will be automatically determined from the Website URL in the browser. If your app runs only on Web, then you can omit this option from the config.

### Multiple subdomains[](https://reactnavigation.org/docs/shared-element-transitions/#multiple-subdomains "Direct link to Multiple subdomains")

To match all subdomains of an associated domain, you can specify a wildcard by prefixing `*`. before the beginning of a specific domain. Note that an entry for `*.mychat.com` does not match `mychat.com` because of the period after the asterisk. To enable matching for both `*.mychat.com` and `mychat.com`, you need to provide a separate prefix entry for each.

```
const linking = {  prefixes: ['mychat://', 'https://mychat.com', 'https://*.mychat.com'],};
```

## Filtering certain paths[](https://reactnavigation.org/docs/shared-element-transitions/#filtering-certain-paths "Direct link to Filtering certain paths")

Sometimes we may not want to handle all incoming links. For example, we may want to filter out links meant for authentication (e.g. `expo-auth-session`) or other purposes instead of navigating to a specific screen.

To achieve this, you can use the `filter` option:

```
const linking = {  prefixes: ['mychat://', 'https://mychat.com'],  filter: (url) => !url.includes('+expo-auth-session'),};
```

This is not supported on Web as we always need to handle the URL of the page.

## Apps under subpaths[](https://reactnavigation.org/docs/shared-element-transitions/#apps-under-subpaths "Direct link to Apps under subpaths")

If your app is hosted under a subpath, you can specify the subpath at the top-level of the `config`. For example, if your app is hosted at `https://mychat.com/app`, you can specify the `path` as `app`:

```
const linking = {  prefixes: ['mychat://', 'https://mychat.com'],  config: {    path: 'app',    // ...  },};
```

It's not possible to specify params here since this doesn't belong to a screen, e.g. `app/:id` won't work.

## Mapping path to route names[](https://reactnavigation.org/docs/shared-element-transitions/#mapping-path-to-route-names "Direct link to Mapping path to route names")

-   Static
-   Dynamic

If you specify a `linking` option, by default React Navigation will use the path segments as the route name when parsing the URL. However, directly translating path segments to route names may not be the expected behavior.

You can specify the [`config`](https://reactnavigation.org/docs/navigation-container#linkingconfig) option in `linking` to control how the deep link is parsed to suit your needs. The config should specify the mapping between route names and path patterns:

```
const config = {  screens: {    Chat: 'feed/:sort',    Profile: 'user',  },};
```

In this example:

-   `Chat` screen that handles the URL `/feed` with the param `sort` (e.g. `/feed/latest` - the `Chat` screen will receive a param `sort` with the value `latest`).
-   `Profile` screen that handles the URL `/user`.

The config option can then be passed in the `linking` prop to the container:

```
import { NavigationContainer } from '@react-navigation/native';const config = {  screens: {    Chat: 'feed/:sort',    Profile: 'user',  },};const linking = {  prefixes: ['https://mychat.com', 'mychat://'],  config,};function App() {  return (    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>      {/* content */}    </NavigationContainer>  );}
```

The config object must match the navigation structure for your app. For example, the above configuration is if you have `Chat` and `Profile` screens in the navigator at the root:

```
function App() {  return (    <Stack.Navigator>      <Stack.Screen name="Chat" component={ChatScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

If your `Chat` screen is inside a nested navigator, we'd need to account for that. For example, consider the following structure where your `Profile` screen is at the root, but the `Chat` screen is nested inside `Home`:

```
function App() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}function HomeScreen() {  return (    <Tab.Navigator>      <Tab.Screen name="Chat" component={ChatScreen} />    </Tab.Navigator>  );}
```

For the above structure, our configuration will look like this:

```
const config = {  screens: {    Home: {      screens: {        Chat: 'feed/:sort',      },    },    Profile: 'user',  },};
```

Similarly, any nesting needs to be reflected in the configuration.

How it works

## Passing params[](https://reactnavigation.org/docs/shared-element-transitions/#passing-params "Direct link to Passing params")

A common use case is to pass params to a screen to pass some data. For example, you may want the `Profile` screen to have an `id` param to know which user's profile it is. It's possible to pass params to a screen through a URL when handling deep links.

By default, query params are parsed to get the params for a screen. For example, with the above example, the URL `/user?id=jane` will pass the `id` param to the `Profile` screen.

You can also customize how the params are parsed from the URL. Let's say you want the URL to look like `/user/jane` where the `id` param is `jane` instead of having the `id` in query params. You can do this by specifying `user/:id` for the `path`. **When the path segment starts with `:`, it'll be treated as a param**. For example, the URL `/user/jane` would resolve to `Profile` screen with the string `jane` as a value of the `id` param and will be available in `route.params.id` in `Profile` screen.

By default, all params are treated as strings. You can also customize how to parse them by specifying a function in the `parse` property to parse the param, and a function in the `stringify` property to convert it back to a string.

If you wanted to resolve `/user/@jane/settings` to result in the params `{ id: 'jane' section: 'settings' }`, you could make `Profile`'s config to look like this:

-   Static
-   Dynamic

```
const config = {  screens: {    Profile: {      path: 'user/:id/:section',      parse: {        id: (id) => id.replace(/^@/, ''),      },      stringify: {        id: (id) => `@${id}`,      },    },  },};
```

Result Navigation State

## Marking params as optional[](https://reactnavigation.org/docs/shared-element-transitions/#marking-params-as-optional "Direct link to Marking params as optional")

Sometimes a param may or may not be present in the URL depending on certain conditions. For example, in the above scenario, you may not always have the section parameter in the URL, i.e. both `/user/jane/settings` and `/user/jane` should go to the `Profile` screen, but the `section` param (with the value `settings` in this case) may or may not be present.

In this case, you would need to mark the `section` param as optional. You can do it by adding the `?` suffix after the param name:

-   Static
-   Dynamic

```
const config = {  screens: {    Profile: {      path: 'user/:id/:section?',      parse: {        id: (id) => `user-${id}`,      },      stringify: {        id: (id) => id.replace(/^user-/, ''),      },    },  },};
```

Result Navigation State

## Handling unmatched routes or 404[](https://reactnavigation.org/docs/shared-element-transitions/#handling-unmatched-routes-or-404 "Direct link to Handling unmatched routes or 404")

If your app is opened with an invalid URL, most of the times you'd want to show an error page with some information. On the web, this is commonly known as 404 - or page not found error.

To handle this, you'll need to define a catch-all route that will be rendered if no other routes match the path. You can do it by specifying `*` for the path matching pattern:

-   Static
-   Dynamic

```
const config = {  screens: {    Home: {      initialRouteName: 'Feed',      screens: {        Profile: 'users/:id',        Settings: 'settings',      },    },    NotFound: {      path: '*',    },  },};
```

Here, we have defined a route named `NotFound` and set it to match `*` aka everything. If the path didn't match `user/:id` or `settings`, it'll be matched by this route.

Result Navigation State

You can even go more specific, for example, say if you want to show a different screen for invalid paths under `/settings`, you can specify such a pattern under `Settings`:

-   Static
-   Dynamic

```
const config = {  screens: {    Home: {      initialRouteName: 'Feed',      screens: {        Profile: 'users/:id',        Settings: {          path: 'settings',          screens: {            InvalidSettings: '*',          },        },      },    },    NotFound: '*',  },};
```

Result Navigation State

The `route` passed to the `NotFound` screen will contain a `path` property which corresponds to the path that opened the page. If you need, you can use this property to customize what's shown in this screen, e.g. load the page in a `WebView`:

```
function NotFoundScreen({ route }) {  if (route.path) {    return <WebView source={{ uri: `https://mywebsite.com/${route.path}` }} />;  }  return <Text>This screen doesn't exist!</Text>;}
```

When doing server rendering, you'd also want to return correct status code for 404 errors. See [server rendering docs](https://reactnavigation.org/docs/server-rendering#handling-404-or-other-status-codes) for a guide on how to handle it.

## Rendering an initial route[](https://reactnavigation.org/docs/shared-element-transitions/#rendering-an-initial-route "Direct link to Rendering an initial route")

Sometimes you want to ensure that a certain screen will always be present as the first screen in the navigator's state. You can use the `initialRouteName` property to specify the screen to use for the initial screen.

In the above example, if you want the `Feed` screen to be the initial route in the navigator under `Home`, your config will look like this:

-   Static
-   Dynamic

```
const config = {  screens: {    Home: {      initialRouteName: 'Feed',      screens: {        Profile: 'users/:id',        Settings: 'settings',      },    },  },};
```

Result Navigation State

warning

The `initialRouteName` will add the screen to React Navigation's state only. If your app is running on the Web, the browser's history will not contain this screen as the user has never visited it. So, if the user presses the browser's back button, it'll not go back to this screen.

Another thing to keep in mind is that it's not possible to pass params to the initial screen through the URL. So make sure that your initial route doesn't need any params or specify `initialParams` in the screen configuration to pass the required params.

In this case, any params in the URL are only passed to the `Profile` screen which matches the path pattern `users/:id`, and the `Feed` screen doesn't receive any params. If you want to have the same params in the `Feed` screen, you can specify a [custom `getStateFromPath` function](https://reactnavigation.org/docs/navigation-container#linkinggetstatefrompath) and copy those params.

Similarly, if you want to access params of a parent screen from a child screen, you can use [React Context](https://react.dev/reference/react/useContext) to expose them.

## Matching exact paths[](https://reactnavigation.org/docs/shared-element-transitions/#matching-exact-paths "Direct link to Matching exact paths")

By default, paths defined for each screen are matched against the URL relative to their parent screen's path. Consider the following config:

-   Static
-   Dynamic

```
const config = {  screens: {    Home: {      path: 'feed',      screens: {        Profile: 'users/:id',      },    },  },};
```

Here, you have a `path` property defined for the `Home` screen, as well as the child `Profile` screen. The profile screen specifies the path `users/:id`, but since it's nested inside a screen with the path `feed`, it'll try to match the pattern `feed/users/:id`.

This will result in the URL `/feed` navigating to `Home` screen, and `/feed/users/cal` navigating to the `Profile` screen.

In this case, it makes more sense to navigate to the `Profile` screen using a URL like `/users/cal`, rather than `/feed/users/cal`. To achieve this, you can override the relative matching behavior to `exact` matching:

-   Static
-   Dynamic

```
const config = {  screens: {    Home: {      path: 'feed',      screens: {        Profile: {          path: 'users/:id',          exact: true,        },      },    },  },};
```

With `exact` property set to `true`, `Profile` will ignore the parent screen's `path` config and you'll be able to navigate to `Profile` using a URL like `users/cal`.

## Omitting a screen from path[](https://reactnavigation.org/docs/shared-element-transitions/#omitting-a-screen-from-path "Direct link to Omitting a screen from path")

Sometimes, you may not want to have the route name of a screen in the path. For example, let's say you have a `Home` screen and the following config. When the page is opened in the browser you'll get `/home` as the URL:

-   Static
-   Dynamic

```
const config = {  screens: {    Home: {      path: 'home',    },    Profile: 'users/:id',  },};
```

But it'll be nicer if the URL was just `/` when visiting the home screen.

You can specify an empty string as path or not specify a path at all, and React Navigation won't add the screen to the path (think of it like adding empty string to the path, which doesn't change anything):

-   Static
-   Dynamic

```
const config = {  screens: {    Home: {      path: '',    },    Profile: 'users/:id',  },};
```

## Serializing and parsing params[](https://reactnavigation.org/docs/shared-element-transitions/#serializing-and-parsing-params "Direct link to Serializing and parsing params")

Since URLs are strings, any params you have for routes are also converted to strings when constructing the path.

For example, say you have the URL `/chat/1589842744264` with the following config:

-   Static
-   Dynamic

```
const config = {  screens: {    Chat: 'chat/:date',  },};
```

When handling the URL, your params will look like this:

```
{ date: '1589842744264' }
```

Here, the `date` param was parsed as a string because React Navigation doesn't know that it's supposed to be a timestamp, and hence number. You can customize it by providing a custom function to use for parsing:

-   Static
-   Dynamic

```
const config = {  screens: {    Chat: {      path: 'chat/:date',      parse: {        date: Number,      },    },  },};
```

You can also provide a your own function to serialize the params. For example, let's say that you want to use a DD-MM-YYYY format in the path instead of a timestamp:

-   Static
-   Dynamic

```
const config = {  screens: {    Chat: {      path: 'chat/:date',      parse: {        date: (date) => new Date(date).getTime(),      },      stringify: {        date: (date) => {          const d = new Date(date);          return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();        },      },    },  },};
```

Depending on your requirements, you can use this functionality to parse and stringify more complex data.

## Matching regular expressions[](https://reactnavigation.org/docs/shared-element-transitions/#matching-regular-expressions "Direct link to Matching regular expressions")

If you need more complex matching logic, you can use regular expressions to match the path. For example, if you want to use the pattern `@username` to match a user's profile, you can use a regular expression to match the path. This allows you to have the same path pattern for multiple screens, but fine-tune the matching logic to be more specific for a particular screen.

Regular expressions can be specified between parentheses `(` and `)` in the after a param name. For example:

-   Static
-   Dynamic

```
const config = {  screens: {    Feed: ':sort(latest|popular)',    Profile: ':username(@[A-Za-z0-9_]+)',  },};
```

This will only match the path if it starts with `@` followed by alphanumeric characters or underscores. For example, the URL `/@jane` will match the `Profile` screen, but `/jane` won't.

Regular expressions are intended to only match path segments, not the entire path. So avoid using `/`, `^`, `$`, etc. in the regular expressions.

warning

Regular expressions are an advanced feature. They cannot be validated to warn you about potential issues, so it's up to you to ensure that the regular expression is correct.

## Alias for paths[](https://reactnavigation.org/docs/shared-element-transitions/#alias-for-paths "Direct link to Alias for paths")

If you want to have multiple paths for the same screen, you can use the `alias` property to specify an array of paths. This can be useful to keep backward compatibility with old URLs while transitioning to a new URL structure.

For example, if you want to match both `/users/:id` and `/:id` to the `Profile` screen, you can do this:

-   Static
-   Dynamic

```
const config = {  screens: {    Profile: {      path: ':id',      alias: ['users/:id'],    },  },};
```

In this case, when the URL is `/users/jane` or `/jane`, it'll match the `Profile` screen. The `path` is the primary pattern that will be used to generate the URL, e.g. when navigating to the `Profile` screen in the app on the Web. The patterns in `alias` will be ignored when generating URLs. The `alias` patterns are not used for matching any child screens in nested navigators.

On the web, if a screen containing an alias contains a nested navigator, the URL matching the alias will only be used to match the screen, and will be updated to the URL of the focused child screen once the app renders.

Each item in the `alias` array can be a string matching the syntax of the `path` property, or an object with the following properties:

-   `path` (required) - The path pattern to match.
-   `exact` - Whether to match the path exactly. Defaults to `false`. See [Matching exact paths](https://reactnavigation.org/docs/shared-element-transitions/#matching-exact-paths) for more details.
-   `parse` - Function to parse path segments into param values. See [Passing params](https://reactnavigation.org/docs/shared-element-transitions/#passing-params) for more details.

## Advanced cases[](https://reactnavigation.org/docs/shared-element-transitions/#advanced-cases "Direct link to Advanced cases")

For some advanced cases, specifying the mapping may not be sufficient. To handle such cases, you can specify a custom function to parse the URL into a state object ([`getStateFromPath`](https://reactnavigation.org/docs/navigation-container#linkinggetstatefrompath)), and a custom function to serialize the state object into an URL ([`getPathFromState`](https://reactnavigation.org/docs/navigation-container#linkinggetpathfromstate)).

Example:

```
const linking = {  prefixes: ['https://mychat.com', 'mychat://'],  getStateFromPath: (path, options) => {    // Return a state object here    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`  },  getPathFromState(state, config) {    // Return a path string here    // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`  },  // ...};
```

## Playground[](https://reactnavigation.org/docs/shared-element-transitions/#playground "Direct link to Playground")

-   Static
-   Dynamic

You can play around with customizing the config and path below, and see how the path is parsed.


## Custom Android back button behavior

---
created: 2025-02-08T16:50:49 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Custom Android back button behavior | React Navigation

> ## Excerpt
> By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.

---
By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.

As an example, consider a screen where user is selecting items in a list, and a "selection mode" is active. On a back button press, you would first want the "selection mode" to be deactivated, and the screen should be popped only on the second back button press. The following code snippet demonstrates the situation. We make use of [`BackHandler`](https://reactnative.dev/docs/backhandler.html) which comes with react-native, along with the `useFocusEffect` hook to add our custom `hardwareBackPress` listener.

Returning `true` from `onBackPress` denotes that we have handled the event, and react-navigation's listener will not get called, thus not popping the screen. Returning `false` will cause the event to bubble up and react-navigation's listener will pop the screen.

-   Static
-   Dynamic

```
function ScreenWithCustomBackBehavior() {  // ...  useFocusEffect(    React.useCallback(() => {      const onBackPress = () => {        if (isSelectionModeEnabled) {          setIsSelectionModeEnabled(false);          return true;        } else {          return false;        }      };      const subscription = BackHandler.addEventListener(        'hardwareBackPress',        onBackPress      );      return () => subscription.remove();    }, [isSelectionModeEnabled])  );  // ...}
```

[Try on **Snack**](https://snack.expo.dev/?name=Custom+android+back+button&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+BackHandler%2C+StyleSheet+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+useFocusEffect+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+PlatformPressable%2C+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aconst+listData+%3D+%5B%7B+key%3A+%27Apple%27+%7D%2C+%7B+key%3A+%27Orange%27+%7D%2C+%7B+key%3A+%27Carrot%27+%7D%5D%3B%0A%0Afunction+ScreenWithCustomBackBehavior%28%29+%7B%0A%0A++const+%5Bselected%2C+setSelected%5D+%3D+React.useState%28listData%5B0%5D.key%29%3B%0A++const+%5BisSelectionModeEnabled%2C+setIsSelectionModeEnabled%5D+%3D%0A++++React.useState%28false%29%3B%0A++%2F%2F+...%0A%0A++useFocusEffect%28%0A++++React.useCallback%28%28%29+%3D%3E+%7B%0A++++++const+onBackPress+%3D+%28%29+%3D%3E+%7B%0A++++++++if+%28isSelectionModeEnabled%29+%7B%0A++++++++++setIsSelectionModeEnabled%28false%29%3B%0A++++++++++return+true%3B%0A++++++++%7D+else+%7B%0A++++++++++return+false%3B%0A++++++++%7D%0A++++++%7D%3B%0A%0A++++++const+subscription+%3D+BackHandler.addEventListener%28%0A++++++++%27hardwareBackPress%27%2C%0A++++++++onBackPress%0A++++++%29%3B%0A%0A++++++return+%28%29+%3D%3E+subscription.remove%28%29%3B%0A++++%7D%2C+%5BisSelectionModeEnabled%5D%29%0A++%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7Bstyles.container%7D%3E%0A++++++%7BlistData.map%28%28item%29+%3D%3E+%28%0A++++++++%3C%3E%0A++++++++++%7BisSelectionModeEnabled+%3F+%28%0A++++++++++++%3CPlatformPressable%0A++++++++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++++++++setSelected%28item.key%29%3B%0A++++++++++++++%7D%7D%0A++++++++++++++style%3D%7B%7B%0A++++++++++++++++textDecorationLine%3A+item.key+%3D%3D%3D+selected+%3F+%27underline%27+%3A+%27%27%2C%0A++++++++++++++%7D%7D%0A++++++++++++%3E%0A++++++++++++++%3CText%0A++++++++++++++++style%3D%7B%7B%0A++++++++++++++++++textDecorationLine%3A+item.key+%3D%3D%3D+selected+%3F+%27underline%27+%3A+%27%27%2C%0A++++++++++++++++++...styles.text%2C%0A++++++++++++++++%7D%7D%0A++++++++++++++%3E%0A++++++++++++++++%7Bitem.key%7D%0A++++++++++++++%3C%2FText%3E%0A++++++++++++%3C%2FPlatformPressable%3E%0A++++++++++%29+%3A+%28%0A++++++++++++%3CText+style%3D%7Bstyles.text%7D%3E%0A++++++++++++++%7Bitem.key+%3D%3D%3D+selected+%3F+%27Selected%3A+%27+%3A+%27%27%7D%0A++++++++++++++%7Bitem.key%7D%0A++++++++++++%3C%2FText%3E%0A++++++++++%29%7D%0A++++++++%3C%2F%3E%0A++++++%29%29%7D%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+setIsSelectionModeEnabled%28%21isSelectionModeEnabled%29%7D%0A++++++%3E%0A++++++++Toggle+selection+mode%0A++++++%3C%2FButton%3E%0A++++++%3CText%3ESelection+mode%3A+%7BisSelectionModeEnabled+%3F+%27ON%27+%3A+%27OFF%27%7D%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%0A++%2F%2F+...%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen%0A++++++++++name%3D%22CustomScreen%22%0A++++++++++component%3D%7BScreenWithCustomBackBehavior%7D%0A++++++++%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aconst+styles+%3D+StyleSheet.create%28%7B%0A++container%3A+%7B%0A++++flex%3A+1%2C%0A++++alignItems%3A+%27center%27%2C%0A++++justifyContent%3A+%27center%27%2C%0A++%7D%2C%0A++text%3A+%7B%0A++++fontSize%3A+20%2C%0A++++marginBottom%3A+20%2C%0A++%7D%2C%0A%7D%29%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

The presented approach will work well for screens that are shown in a `StackNavigator`. Custom back button handling in other situations may not be supported at the moment (eg. A known case when this does not work is when you want to handle back button press in an open drawer. PRs for such use cases are welcome!).

If instead of overriding system back button, you'd like to prevent going back from the screen, see docs for [preventing going back](https://reactnavigation.org/docs/preventing-going-back).

### Why not use component lifecycle methods[](https://reactnavigation.org/docs/getting-started#why-not-use-component-lifecycle-methods "Direct link to Why not use component lifecycle methods")

At first, you may be inclined to use `componentDidMount` to subscribe for the back press event and `componentWillUnmount` to unsubscribe, or use `useEffect` to add the listener. This approach will not work - learn more about this in [navigation lifecycle](https://reactnavigation.org/docs/navigation-lifecycle).



## Deep linking  React Navigation

---
created: 2025-02-08T17:00:41 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Deep linking | React Navigation

> ## Excerpt
> This guide will describe how to configure your app to handle deep links on various platforms. To handle incoming links, you need to handle 2 scenarios:

---
This guide will describe how to configure your app to handle deep links on various platforms. To handle incoming links, you need to handle 2 scenarios:

1.  If the app wasn't previously open, the deep link needs to set the initial state
2.  If the app was already open, the deep link needs to update the state to reflect the incoming link

React Native provides a [`Linking`](https://reactnative.dev/docs/linking) to get notified of incoming links. React Navigation can integrate with the `Linking` module to automatically handle deep links. On Web, React Navigation can integrate with browser's `history` API to handle URLs on client side. See [configuring links](https://reactnavigation.org/docs/configuring-links) to see more details on how to configure links in React Navigation.

While you don't need to use the `linking` prop from React Navigation, and can handle deep links yourself by using the `Linking` API and navigating from there, it'll be significantly more complicated than using the `linking` prop which handles many edge cases for you. So we don't recommend implementing it by yourself.

Below, we'll go through required configurations so that the deep link integration works.

## Setup with Expo projects[](https://reactnavigation.org/docs/shared-element-transitions/#setup-with-expo-projects "Direct link to Setup with Expo projects")

First, you will want to specify a URL scheme for your app. This corresponds to the string before `://` in a URL, so if your scheme is `mychat` then a link to your app would be `mychat://`. You can register for a scheme in your `app.json` by adding a string under the scheme key:

```
{  "expo": {    "scheme": "mychat"  }}
```

Next, install `expo-linking` which we'd need to get the deep link prefix:

```
npx expo install expo-linking
```

Then, let's configure React Navigation to use the `scheme` for parsing incoming deep links:

-   Static
-   Dynamic

```
import * as Linking from 'expo-linking';const prefix = Linking.createURL('/');function App() {  const linking = {    prefixes: [prefix],  };  return (    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>      {/* content */}    </NavigationContainer>  );}
```

The reason that is necessary to use `Linking.createURL` is that the scheme will differ depending on whether you're in the client app or in a standalone app.

The scheme specified in `app.json` only applies to standalone apps. In the Expo client app you can deep link using `exp://ADDRESS:PORT/--/` where `ADDRESS` is often `127.0.0.1` and `PORT` is often `19000` - the URL is printed when you run `expo start`. The `Linking.createURL` function abstracts it out so that you don't need to specify them manually.

If you are using universal links, you need to add your domain to the prefixes as well:

```
const linking = {  prefixes: [Linking.createURL('/'), 'https://app.example.com'],};
```

## Set up with bare React Native projects[](https://reactnavigation.org/docs/shared-element-transitions/#set-up-with-bare-react-native-projects "Direct link to Set up with bare React Native projects")

### Setup on iOS[](https://reactnavigation.org/docs/shared-element-transitions/#setup-on-ios "Direct link to Setup on iOS")

Let's configure the native iOS app to open based on the `mychat://` URI scheme.

You'll need to link `RCTLinking` to your project by following the steps described here. To be able to listen to incoming app links, you'll need to add the following lines to `AppDelegate.m` in your project:

```
// Add the header at the top of the file:#import <React/RCTLinkingManager.h>// Add this inside `@implementation AppDelegate` above `@end`:- (BOOL)application:(UIApplication *)application   openURL:(NSURL *)url   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options{  return [RCTLinkingManager application:application openURL:url options:options];}
```

If your app is using [Universal Links](https://developer.apple.com/ios/universal-links/), you'll need to add the following code as well:

```
// Add this inside `@implementation AppDelegate` above `@end`:- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler{ return [RCTLinkingManager application:application                  continueUserActivity:userActivity                    restorationHandler:restorationHandler];}
```

Now you need to add the scheme to your project configuration.

The easiest way to do this is with the `uri-scheme` package by running the following:

```
npx uri-scheme add mychat --ios
```

If you want to do it manually, open the project (e.g. `SimpleApp/ios/SimpleApp.xcworkspace`) in Xcode. Select the project in sidebar and navigate to the info tab. Scroll down to "URL Types" and add one. In the new URL type, set the identifier and the URL scheme to your desired URL scheme.

![Xcode project info URL types with mychat added](https://reactnavigation.org/assets/images/xcode-linking-9a32c91fae982fab28dc33e7f951e8b3.png)

To make sure Universal Links work in your app, you also need to setup [Associated Domains](https://developer.apple.com/documentation/Xcode/supporting-associated-domains) on your server.

#### Hybrid React Native and native iOS Applications[](https://reactnavigation.org/docs/shared-element-transitions/#hybrid-react-native-and-native-ios-applications "Direct link to Hybrid React Native and native iOS Applications")

If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the `RCTLinkingIOS` subspec in your `Podfile`, which is installed by default in new React Native projects. To add this, ensure your `Podfile` looks like the following:

```
 pod 'React', :path => '../node_modules/react-native', :subspecs => [    . . . // other subspecs    'RCTLinkingIOS',    . . .  ]
```

### Setup on Android[](https://reactnavigation.org/docs/shared-element-transitions/#setup-on-android "Direct link to Setup on Android")

To configure the external linking in Android, you can create a new intent in the manifest.

The easiest way to do this is with the `uri-scheme` package: `npx uri-scheme add mychat --android`.

If you want to add it manually, open up `SimpleApp/android/app/src/main/AndroidManifest.xml`, and make the following adjustments:

1.  Set `launchMode` of `MainActivity` to `singleTask` in order to receive intent on existing `MainActivity` (this is the default, so you may not need to actually change anything).
2.  Add the new [`intent-filter`](http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters) inside the `MainActivity` entry with a `VIEW` type action:

```
<activity    android:name=".MainActivity"    android:launchMode="singleTask">    <intent-filter>        <action android:name="android.intent.action.MAIN" />        <category android:name="android.intent.category.LAUNCHER" />    </intent-filter>    <intent-filter>        <action android:name="android.intent.action.VIEW" />        <category android:name="android.intent.category.DEFAULT" />        <category android:name="android.intent.category.BROWSABLE" />        <data android:scheme="mychat" />    </intent-filter></activity>
```

Similar to Universal Links on iOS, you can also use a domain to associate the app with your website on Android by [verifying Android App Links](https://developer.android.com/training/app-links/verify-android-applinks). First, you need to configure your `AndroidManifest.xml`:

1.  Add `android:autoVerify="true"` to your `<intent-filter>` entry.
2.  Add your domain's `scheme` and `host` in a new `<data>` entry inside the `<intent-filter>`.

After adding them, it should look like this:

```
<activity    android:name=".MainActivity"    android:launchMode="singleTask">    <intent-filter android:autoVerify="true">        <action android:name="android.intent.action.MAIN" />        <category android:name="android.intent.category.LAUNCHER" />    </intent-filter>    <intent-filter>        <action android:name="android.intent.action.VIEW" />        <category android:name="android.intent.category.DEFAULT" />        <category android:name="android.intent.category.BROWSABLE" />        <data android:scheme="mychat" />    </intent-filter>    <intent-filter>        <action android:name="android.intent.action.VIEW" />        <category android:name="android.intent.category.DEFAULT" />        <category android:name="android.intent.category.BROWSABLE" />        <data android:scheme="http" />        <data android:scheme="https" />        <data android:host="www.example.com" />    </intent-filter></activity>
```

Then, you need to [declare the association](https://developer.android.com/training/app-links/verify-android-applinks#web-assoc) between your website and your intent filters by hosting a Digital Asset Links JSON file.

## Testing deep links[](https://reactnavigation.org/docs/shared-element-transitions/#testing-deep-links "Direct link to Testing deep links")

Before testing deep links, make sure that you rebuild and install the app in your emulator/simulator/device.

If you're testing on iOS, run:

If you're testing on Android, run:

```
npx react-native run-android
```

If you're using Expo managed workflow and testing on Expo client, you don't need to rebuild the app. However, you will need to use the correct address and port that's printed when you run `expo start` ([see above](https://reactnavigation.org/docs/shared-element-transitions/#setup-with-expo-projects)), e.g. `exp://127.0.0.1:19000/--/`.

If you want to test with your custom scheme in your Expo app, you will need rebuild your standalone app by running `expo build:ios -t simulator` or `expo build:android` and install the resulting binaries.

### Testing with `npx uri-scheme`[](https://reactnavigation.org/docs/shared-element-transitions/#testing-with-npx-uri-scheme "Direct link to testing-with-npx-uri-scheme")

The `uri-scheme` package is a command line tool that can be used to test deep links on both iOS & Android. It can be used as follows:

```
npx uri-scheme open [your deep link] --[ios|android]
```

For example:

```
npx uri-scheme open "mychat://chat/jane" --ios
```

Or if using Expo client:

```
npx uri-scheme open "exp://127.0.0.1:19000/--/chat/jane" --ios
```

### Testing with `xcrun` on iOS[](https://reactnavigation.org/docs/shared-element-transitions/#testing-with-xcrun-on-ios "Direct link to testing-with-xcrun-on-ios")

The `xcrun` command can be used as follows to test deep links with the iOS simulator:

```
xcrun simctl openurl booted [your deep link]
```

For example:

```
xcrun simctl openurl booted "mychat://chat/jane"
```

### Testing with `adb` on Android[](https://reactnavigation.org/docs/shared-element-transitions/#testing-with-adb-on-android "Direct link to testing-with-adb-on-android")

The `adb` command can be used as follows to test deep links with the Android emulator or a connected device:

```
adb shell am start -W -a android.intent.action.VIEW -d [your deep link] [your android package name]
```

For example:

```
adb shell am start -W -a android.intent.action.VIEW -d "mychat://chat/jane" com.simpleapp
```

Or if using Expo client:

```
adb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:19000/--/chat/jane" host.exp.exponent
```

## Third-party integrations[](https://reactnavigation.org/docs/shared-element-transitions/#third-party-integrations "Direct link to Third-party integrations")

React Native's `Linking` isn't the only way to handle deep linking. You might also want to integrate other services such as [Firebase Dynamic Links](https://firebase.google.com/docs/dynamic-links), [Branch](https://help.branch.io/developers-hub/docs/react-native) etc. which provide their own API for getting notified of incoming links.

To achieve this, you'd need to override how React Navigation subscribes to incoming links. To do so, you can provide your own [`getInitialURL`](https://reactnavigation.org/docs/navigation-container#linkinggetinitialurl) and [`subscribe`](https://reactnavigation.org/docs/navigation-container#linkingsubscribe) functions:

-   Static
-   Dynamic

```
const linking = {  prefixes: ['myapp://', 'https://myapp.com'],  // Custom function to get the URL which was used to open the app  async getInitialURL() {    // First, you would need to get the initial URL from your third-party integration    // The exact usage depend on the third-party SDK you use    // For example, to get the initial URL for Firebase Dynamic Links:    const { isAvailable } = utils().playServicesAvailability;    if (isAvailable) {      const initialLink = await dynamicLinks().getInitialLink();      if (initialLink) {        return initialLink.url;      }    }    // As a fallback, you may want to do the default deep link handling    const url = await Linking.getInitialURL();    return url;  },  // Custom function to subscribe to incoming links  subscribe(listener) {    // Listen to incoming links from Firebase Dynamic Links    const unsubscribeFirebase = dynamicLinks().onLink(({ url }) => {      listener(url);    });    // Listen to incoming links from deep linking    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {      listener(url);    });    return () => {      // Clean up the event listeners      unsubscribeFirebase();      linkingSubscription.remove();    };  },  config: {    // Deep link configuration  },};
```

Similar to the above example, you can integrate any API that provides a way to get the initial URL and to subscribe to new incoming URLs using the `getInitialURL` and `subscribe` options.


## Different status bar configuration based on route

---
created: 2025-02-08T16:43:53 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Different status bar configuration based on route | React Navigation

> ## Excerpt
> If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.

---
```
import * as React from 'react';import { View, Text, StatusBar, StyleSheet } from 'react-native';import { NavigationContainer, useNavigation } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';import { Button } from '@react-navigation/elements';import {  SafeAreaProvider,  useSafeAreaInsets,} from 'react-native-safe-area-context';function Screen1() {  const navigation = useNavigation();  const insets = useSafeAreaInsets();  return (    <View      style={[        styles.container,        {          backgroundColor: '#6a51ae',          paddingTop: insets.top,          paddingBottom: insets.bottom,          paddingLeft: insets.left,          paddingRight: insets.right,        },      ]}    >      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />      <Text style={{ color: '#fff' }}>Light Screen</Text>      <Button onPress={() => navigation.navigate('Screen2')}>        Next screen      </Button>    </View>  );}function Screen2() {  const navigation = useNavigation();  const insets = useSafeAreaInsets();  return (    <View      style={[        styles.container,        {          backgroundColor: '#ecf0f1',          paddingTop: insets.top,          paddingBottom: insets.bottom,          paddingLeft: insets.left,          paddingRight: insets.right,        },      ]}    >      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />      <Text>Dark Screen</Text>      <Button onPress={() => navigation.navigate('Screen1')}>        Next screen      </Button>    </View>  );}const Stack = createNativeStackNavigator();export default function App() {  return (    <SafeAreaProvider>      <NavigationContainer>        <Stack.Navigator screenOptions={{ headerShown: false }}>          <Stack.Screen name="Screen1" component={Screen1} />          <Stack.Screen name="Screen2" component={Screen2} />        </Stack.Navigator>      </NavigationContainer>    </SafeAreaProvider>  );}const styles = StyleSheet.create({  container: {    flex: 1,    justifyContent: 'center',    alignItems: 'center',  },});
```



## Hiding tab bar in specific screens

---
created: 2025-02-08T16:43:01 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Supporting safe areas | React Navigation

> ## Excerpt
> Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens

---
Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens: `Home`, `Feed`, `Notifications`, `Profile` and `Settings`, and your navigation structure looks like this:

-   Static
-   Dynamic

```
function HomeStack() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={Home} />      <Stack.Screen name="Profile" component={Profile} />      <Stack.Screen name="Settings" component={Settings} />    </Stack.Navigator>  );}function App() {  return (    <NavigationContainer>      <Tab.Navigator>        <Tab.Screen name="Home" component={HomeStack} />        <Tab.Screen name="Feed" component={Feed} />        <Tab.Screen name="Notifications" component={Notifications} />      </Tab.Navigator>    </NavigationContainer>  );}
```

With this structure, when we navigate to the `Profile` or `Settings` screen, the tab bar will still stay visible over those screens.

But if we want to show the tab bar only on the `Home`, `Feed` and `Notifications` screens, but not on the `Profile` and `Settings` screens, we'll need to change the navigation structure. The easiest way to achieve this is to nest the tab navigator inside the first screen of the stack instead of nesting stack inside tab navigator:

-   Static
-   Dynamic

```
function HomeTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Home" component={Home} />      <Tab.Screen name="Feed" component={EmptyScreen} />      <Tab.Screen name="Notifications" component={EmptyScreen} />    </Tab.Navigator>  );}function App() {  return (    <NavigationContainer>      <Stack.Navigator>        <Stack.Screen name="Home" component={HomeTabs} />        <Stack.Screen name="Profile" component={EmptyScreen} />        <Stack.Screen name="Settings" component={EmptyScreen} />      </Stack.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Hiding+tabbar&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+EmptyScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+Home%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHome%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Notifications%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeTabs%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

After re-organizing the navigation structure, now if we navigate to the `Profile` or `Settings` screens, the tab bar won't be visible over the screen anymore.



## Multiple drawers

---
created: 2025-02-08T16:49:18 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Multiple drawers | React Navigation

> ## Excerpt
> Sometimes we want to have multiple drawers on the same screen

---
Sometimes we want to have multiple drawers on the same screen: one on the left and one on the right. This can be achieved in 2 ways:

1.  By using [`react-native-drawer-layout`](https://reactnavigation.org/docs/drawer-layout) directly (Recommended).
2.  By [nesting](https://reactnavigation.org/docs/nesting-navigators) 2 [drawer navigators](https://reactnavigation.org/docs/drawer-navigator).

## Using `react-native-drawer-layout`[](https://reactnavigation.org/docs/getting-started#using-react-native-drawer-layout "Direct link to using-react-native-drawer-layout")

When we have multiple drawers, only one of them shows the list of screens. The second drawer may often be used to show some additional information such as the list of users etc.

In such cases, we can use [`react-native-drawer-layout`](https://reactnavigation.org/docs/drawer-layout) directly to render the second drawer. The drawer navigator will be used to render the first drawer and can be nested inside the second drawer:

-   Static
-   Dynamic

```
import * as React from 'react';import { View } from 'react-native';import { Drawer } from 'react-native-drawer-layout';import { useNavigation } from '@react-navigation/native';import { createDrawerNavigator } from '@react-navigation/drawer';import { Button } from '@react-navigation/elements';function HomeScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Button onPress={() => navigation.openDrawer()}>Open drawer</Button>    </View>  );}const LeftDrawer = createDrawerNavigator();const LeftDrawerScreen = () => {  return (    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>      <LeftDrawer.Screen name="Home" component={HomeScreen} />    </LeftDrawer.Navigator>  );};function RightDrawerScreen() {  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);  return (    <Drawer      open={rightDrawerOpen}      onOpen={() => setRightDrawerOpen(true)}      onClose={() => setRightDrawerOpen(false)}      drawerPosition="right"      renderDrawerContent={() => <>{/* Right drawer content */}</>}    >      <LeftDrawerScreen />    </Drawer>  );}export default function App() {  return (    <NavigationContainer>      <RightDrawerScreen />    </NavigationContainer>  );}
```

But there is one problem. When we call `navigation.openDrawer()` in our `HomeScreen`, it always opens the left drawer. We don't have access to the right drawer via the `navigation` object since it's not a navigator.

To solve this, we need to use context API to pass down a function to control the right drawer:

-   Static
-   Dynamic

```
import * as React from 'react';import { View } from 'react-native';import { Drawer } from 'react-native-drawer-layout';import { useNavigation } from '@react-navigation/native';import { createDrawerNavigator } from '@react-navigation/drawer';import { Button } from '@react-navigation/elements';const RightDrawerContext = React.createContext();function HomeScreen() {  const navigation = useNavigation();  const { openRightDrawer } = React.useContext(RightDrawerContext);  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Button onPress={() => navigation.openDrawer()}>Open left drawer</Button>      <Button onPress={() => openRightDrawer()}>Open right drawer</Button>    </View>  );}const LeftDrawer = createDrawerNavigator();const LeftDrawerScreen = () => {  return (    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>      <LeftDrawer.Screen name="Home" component={HomeScreen} />    </LeftDrawer.Navigator>  );};function RightDrawerScreen() {  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);  const value = React.useMemo(    () => ({      openRightDrawer: () => setRightDrawerOpen(true),      closeRightDrawer: () => setRightDrawerOpen(false),    }),    []  );  return (    <Drawer      open={rightDrawerOpen}      onOpen={() => setRightDrawerOpen(true)}      onClose={() => setRightDrawerOpen(false)}      drawerPosition="right"      renderDrawerContent={() => <>{/* Right drawer content */}</>}    >      <RightDrawerContext.Provider value={value}>        <LeftDrawerScreen />      </RightDrawerContext.Provider>    </Drawer>  );}export default function App() {  return (    <NavigationContainer>      <RightDrawerScreen />    </NavigationContainer>  );}
```

Here, we are using the `RightDrawerContext` to pass down the `openRightDrawer` function to the `HomeScreen`. Then we use `openRightDrawer` to open the right drawer.

## Nesting 2 drawer navigators[](https://reactnavigation.org/docs/getting-started#nesting-2-drawer-navigators "Direct link to Nesting 2 drawer navigators")

An alternative approach is to nest 2 [drawer navigators](https://reactnavigation.org/docs/drawer-navigator) inside each other. This is not recommended since it requires creating an additional screen and more nesting - which can make navigating and type checking more verbose. But this can be useful if both navigators include multiple screens.

Here we have 2 drawer navigators nested inside each other, one is positioned on left and the other on the right:

-   Static
-   Dynamic

```
import * as React from 'react';import { View } from 'react-native';import { createDrawerNavigator } from '@react-navigation/drawer';import { NavigationContainer, useNavigation } from '@react-navigation/native';import { Button } from '@react-navigation/elements';function HomeScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Button onPress={() => navigation.openDrawer()}>Open drawer</Button>    </View>  );}const LeftDrawer = createDrawerNavigator();const LeftDrawerScreen = () => {  return (    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>      <LeftDrawer.Screen name="Home" component={HomeScreen} />    </LeftDrawer.Navigator>  );};const RightDrawer = createDrawerNavigator();const RightDrawerScreen = () => {  return (    <RightDrawer.Navigator      screenOptions={{ drawerPosition: 'right', headerShown: false }}    >      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />    </RightDrawer.Navigator>  );};export default function App() {  return (    <NavigationContainer>      <RightDrawerScreen />    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Multiple+drawers&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+createDrawerNavigator+%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.openDrawer%28%29%7D%3EOpen+drawer%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+LeftDrawer+%3D+createDrawerNavigator%28%29%3B%0A%0Aconst+LeftDrawerScreen+%3D+%28%29+%3D%3E+%7B%0A++return+%28%0A++++%3CLeftDrawer.Navigator+screenOptions%3D%7B%7B+drawerPosition%3A+%27left%27+%7D%7D%3E%0A++++++%3CLeftDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++%3C%2FLeftDrawer.Navigator%3E%0A++%29%3B%0A%7D%3B%0A%0Aconst+RightDrawer+%3D+createDrawerNavigator%28%29%3B%0A%0Aconst+RightDrawerScreen+%3D+%28%29+%3D%3E+%7B%0A++return+%28%0A++++%3CRightDrawer.Navigator%0A++++++screenOptions%3D%7B%7B+drawerPosition%3A+%27right%27%2C+headerShown%3A+false+%7D%7D%0A++++%3E%0A++++++%3CRightDrawer.Screen+name%3D%22HomeDrawer%22+component%3D%7BLeftDrawerScreen%7D+%2F%3E%0A++++%3C%2FRightDrawer.Navigator%3E%0A++%29%3B%0A%7D%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRightDrawerScreen+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

But there is one problem. When we call `navigation.openDrawer()` in our `HomeScreen`, it always opens the left drawer since it's the immediate parent of the screen.

To solve this, we need to use [`navigation.getParent`](https://reactnavigation.org/docs/navigation-object#getparent) to refer to the right drawer which is the parent of the left drawer. So our code would look like:

```
<Button onPress={() => navigation.openDrawer()} >Open left drawer</Button><Button onPress={() => navigation.getParent().openDrawer()}>Open right drawer</Button>
```

However, this means that our button needs to know about the parent navigators, which isn't ideal. If our button is further nested inside other navigators, it'd need multiple `getParent()` calls. To address this, we can use the [`id` prop](https://reactnavigation.org/docs/navigator#id) to identify the parent navigator.

To customize the contents of the drawer, we can use the [`drawerContent` prop](https://reactnavigation.org/docs/drawer-navigator#drawercontent) to pass in a function that renders a custom component.

The final code would look like this:

-   Static
-   Dynamic

```
import * as React from 'react';import { Text, View } from 'react-native';import { createDrawerNavigator } from '@react-navigation/drawer';import { NavigationContainer, useNavigation } from '@react-navigation/native';import { Button } from '@react-navigation/elements';function HomeScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Button onPress={() => navigation.getParent('LeftDrawer').openDrawer()}>        Open left drawer      </Button>      <Button onPress={() => navigation.getParent('RightDrawer').openDrawer()}>        Open right drawer      </Button>    </View>  );}function RightDrawerContent() {  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>This is the right drawer</Text>    </View>  );}const LeftDrawer = createDrawerNavigator();function LeftDrawerScreen() {  return (    <LeftDrawer.Navigator      id="LeftDrawer"      screenOptions={{ drawerPosition: 'left' }}    >      <LeftDrawer.Screen name="Home" component={HomeScreen} />    </LeftDrawer.Navigator>  );}const RightDrawer = createDrawerNavigator();function RightDrawerScreen() {  return (    <RightDrawer.Navigator      id="RightDrawer"      drawerContent={(props) => <RightDrawerContent {...props} />}      screenOptions={{        drawerPosition: 'right',        headerShown: false,      }}    >      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />    </RightDrawer.Navigator>  );}export default function App() {  return (    <NavigationContainer>      <RightDrawerScreen />    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Multiple+drawers+navigators&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+createDrawerNavigator+%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.getParent%28%27LeftDrawer%27%29.openDrawer%28%29%7D%3E%0A++++++++Open+left+drawer%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.getParent%28%27RightDrawer%27%29.openDrawer%28%29%7D%3E%0A++++++++Open+right+drawer%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+RightDrawerContent%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EThis+is+the+right+drawer%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+LeftDrawer+%3D+createDrawerNavigator%28%29%3B%0A%0Afunction+LeftDrawerScreen%28%29+%7B%0A++return+%28%0A++++%3CLeftDrawer.Navigator%0A++++++id%3D%22LeftDrawer%22%0A++++++screenOptions%3D%7B%7B+drawerPosition%3A+%27left%27+%7D%7D%0A++++%3E%0A++++++%3CLeftDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++%3C%2FLeftDrawer.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aconst+RightDrawer+%3D+createDrawerNavigator%28%29%3B%0A%0Afunction+RightDrawerScreen%28%29+%7B%0A++return+%28%0A++++%3CRightDrawer.Navigator%0A++++++id%3D%22RightDrawer%22%0A++++++drawerContent%3D%7B%28props%29+%3D%3E+%3CRightDrawerContent+%7B...props%7D+%2F%3E%7D%0A++++++screenOptions%3D%7B%7B%0A++++++++drawerPosition%3A+%27right%27%2C%0A++++++++headerShown%3A+false%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CRightDrawer.Screen+name%3D%22HomeDrawer%22+component%3D%7BLeftDrawerScreen%7D+%2F%3E%0A++++%3C%2FRightDrawer.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRightDrawerScreen+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Here, we are passing `"LeftDrawer"` and `"RightDrawer"` strings (you can use any string here) in the `id` prop of the drawer navigators. Then we use `navigation.getParent('LeftDrawer').openDrawer()` to open the left drawer and `navigation.getParent('RightDrawer').openDrawer()` to open the right drawer.

## Summary[](https://reactnavigation.org/docs/getting-started#summary "Direct link to Summary")

-   To have multiple drawers, you can use [`react-native-drawer-layout`](https://reactnavigation.org/docs/drawer-layout) directly in combination with a drawer navigator.
-   The [`drawerPosition`](https://reactnavigation.org/docs/drawer-layout#drawerposition) prop can be used to position the drawer on the right.
-   The methods to control the drawer can be passed down using context API when using [`react-native-drawer-layout`](https://reactnavigation.org/docs/drawer-layout).
-   When nesting multiple navigators, you can use [`navigation.getParent`](https://reactnavigation.org/docs/navigation-object#getparent) in combination with the [`id` prop](https://reactnavigation.org/docs/navigator#id) to refer to the desired drawer.



## Navigating without the navigation prop  React Navigation

---
created: 2025-02-08T17:00:30 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Navigating without the navigation prop | React Navigation

> ## Excerpt
> Sometimes you need to trigger a navigation action from places where you do not have access to the navigation object, such as a Redux middleware. For such cases, you can dispatch navigation actions use a ref on the navigation container.

---
Sometimes you need to trigger a navigation action from places where you do not have access to the `navigation` object, such as a Redux middleware. For such cases, you can dispatch navigation actions use a [`ref` on the navigation container](https://reactnavigation.org/docs/navigation-container#ref).

**Do not** use the `ref` if:

-   You need to navigate from inside a component without needing to pass the `navigation` prop down, see [`useNavigation`](https://reactnavigation.org/docs/use-navigation) instead. The `ref` behaves differently, and many helper methods specific to screens aren't available.
-   You need to handle deep links or universal links. Doing this with the `ref` has many edge cases. See [configuring links](https://reactnavigation.org/docs/configuring-links) for more information on handling deep linking.
-   You need to integrate with third party libraries, such as push notifications, branch etc. See [third party integrations for deep linking](https://reactnavigation.org/docs/deep-linking#third-party-integrations) instead.

**Do** use the `ref` if:

-   You use a state management library such as Redux, where you need to dispatch navigation actions from a middleware.

Note that it's usually better to trigger navigation from user actions such as button presses, rather than from a Redux middleware. Navigating on user action makes the app feel more responsive and provides better UX. So consider this before using the `ref` for navigation. The `ref` is an escape hatch for scenarios that can't be handled with the existing APIs and should only be used in rare situations.

## Usage[](https://reactnavigation.org/docs/shared-element-transitions/#usage "Direct link to Usage")

You can get access to the root navigation object through a `ref` and pass it to the `RootNavigation` which we will later use to navigate.

-   Static
-   Dynamic

```
import { NavigationContainer } from '@react-navigation/native';import { navigationRef } from './RootNavigation';export default function App() {  return (    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>  );}
```

In the next step, we define `RootNavigation`, which is a simple module with functions that dispatch user-defined navigation actions.

```
// RootNavigation.jsimport { createNavigationContainerRef } from '@react-navigation/native';export const navigationRef = createNavigationContainerRef();export function navigate(name, params) {  if (navigationRef.isReady()) {    navigationRef.navigate(name, params);  }}// add other navigation functions that you need and export them
```

Then, in any of your javascript modules, import the `RootNavigation` and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works as well when used from within them.

-   Static
-   Dynamic

```
function navigate(name, params) {  if (navigationRef.isReady()) {    navigationRef.navigate(name, params);  }}// Example of usage in any of js modules//import * as RootNavigation from './path/to/RootNavigation.js';// ...// RootNavigation.navigate('ChatScreen', { userName: 'Lucy' });function Home() {  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Button onPress={() => navigate('Settings', { userName: 'Lucy' })}>        Go to Settings      </Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Using+navigate+in+any+js+module&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++createNavigationContainerRef%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Aconst+navigationRef+%3D+createNavigationContainerRef%28%29%3B%0A%0Afunction+navigate%28name%2C+params%29+%7B%0A++if+%28navigationRef.isReady%28%29%29+%7B%0A++++navigationRef.navigate%28name%2C+params%29%3B%0A++%7D%0A%7D%0A%0A%2F%2F+Example+of+usage+in+any+of+js+modules%0A%2F%2Fimport+*+as+RootNavigation+from+%27.%2Fpath%2Fto%2FRootNavigation.js%27%3B%0A%0A%2F%2F+...%0A%0A%2F%2F+RootNavigation.navigate%28%27ChatScreen%27%2C+%7B+userName%3A+%27Lucy%27+%7D%29%3B%0A%0Afunction+Home%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigate%28%27Settings%27%2C+%7B+userName%3A+%27Lucy%27+%7D%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+Settings%28%7B+route+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHello+%7Broute.params.userName%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigate%28%27Home%27%29%7D%3EGo+to+Home%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer+ref%3D%7BnavigationRef%7D%3E%0A++++++%3CRootStack.Navigator%3E%0A++++++++%3CRootStack.Screen+name%3D%22Home%22+component%3D%7BHome%7D+%2F%3E%0A++++++++%3CRootStack.Screen+name%3D%22Settings%22+component%3D%7BSettings%7D+%2F%3E%0A++++++%3C%2FRootStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Apart from `navigate`, you can add other navigation actions:

```
import { StackActions } from '@react-navigation/native';// ...export function push(...args) {  if (navigationRef.isReady()) {    navigationRef.dispatch(StackActions.push(...args));  }}
```

Note that a stack navigators needs to be rendered to handle this action. You may want to check the [docs for nesting](https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator) for more details.

When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called with the correct parameters.

## Handling initialization[](https://reactnavigation.org/docs/shared-element-transitions/#handling-initialization "Direct link to Handling initialization")

When using this pattern, you need to keep few things in mind to avoid navigation from failing in your app.

-   The `ref` is set only after the navigation container renders, this can be async when handling deep links
-   A navigator needs to be rendered to be able to handle actions, the `ref` won't be ready without a navigator

If you try to navigate without rendering a navigator or before the navigator finishes mounting, it will print an error and do nothing. So you'll need to add an additional check to decide what to do until your app mounts.

For an example, consider the following scenario, you have a screen somewhere in the app, and that screen dispatches a redux action on `useEffect`/`componentDidMount`. You are listening for this action in your middleware and try to perform navigation when you get it. This will throw an error, because by this time, the parent navigator hasn't finished mounting and isn't ready. Parent's `useEffect`/`componentDidMount` is always called **after** child's `useEffect`/`componentDidMount`.

To avoid this, you can use the `isReady()` method available on the ref as shown in the above examples.

-   Static
-   Dynamic

```
const navigationRef = createNavigationContainerRef();function navigate(name, params) {  if (navigationRef.isReady()) {    // Perform navigation if the react navigation is ready to handle actions    navigationRef.navigate(name, params);  } else {    // You can decide what to do if react navigation is not ready    // You can ignore this, or add these actions to a queue you can call later  }}
```

[Try on **Snack**](https://snack.expo.dev/?name=Handling+navigation+init&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++createNavigationContainerRef%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+navigationRef+%3D+createNavigationContainerRef%28%29%3B%0A%0Afunction+navigate%28name%2C+params%29+%7B%0A++if+%28navigationRef.isReady%28%29%29+%7B%0A++++%2F%2F+Perform+navigation+if+the+react+navigation+is+ready+to+handle+actions%0A++++navigationRef.navigate%28name%2C+params%29%3B%0A++%7D+else+%7B%0A++++%2F%2F+You+can+decide+what+to+do+if+react+navigation+is+not+ready%0A++++%2F%2F+You+can+ignore+this%2C+or+add+these+actions+to+a+queue+you+can+call+later%0A++%7D%0A%7D%0A%0Afunction+Home%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigate%28%27Profile%27%29%7D%3EGo+to+Profile%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+Profile%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer+ref%3D%7BnavigationRef%7D%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHome%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfile%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you're unsure if a navigator is rendered, you can call `navigationRef.current.getRootState()`, and it'll return a valid state object if any navigators are rendered, otherwise it will return `undefined`.


## Opening a modal

---
created: 2025-02-08T16:45:01 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Opening a modal | React Navigation

> ## Excerpt
> Modal shown on screen

---
```
function HomeScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>      <Button onPress={() => navigation.navigate('MyModal')}>Open Modal</Button>    </View>  );}function ModalScreen() {  const navigation = useNavigation();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text style={{ fontSize: 30 }}>This is a modal!</Text>      <Button onPress={() => navigation.goBack()}>Dismiss</Button>    </View>  );}function DetailsScreen() {  return (    <View>      <Text>Details</Text>    </View>  );}const RootStack = createStackNavigator();function App() {  return (    <NavigationContainer>      <RootStack.Navigator>        <RootStack.Group>          <RootStack.Screen name="Home" component={HomeScreen} />          <RootStack.Screen name="Details" component={DetailsScreen} />        </RootStack.Group>        <RootStack.Group screenOptions={{ presentation: 'modal' }}>          <RootStack.Screen name="MyModal" component={ModalScreen} />        </RootStack.Group>      </RootStack.Navigator>    </NavigationContainer>  );}
```



## Preventing going back  React Navigation

---
created: 2025-02-08T17:00:07 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Preventing going back | React Navigation

> ## Excerpt
> Sometimes you may want to prevent the user from leaving a screen to avoid losing unsaved changes. There are a couple of things you may want to do in this case:

---
Sometimes you may want to prevent the user from leaving a screen to avoid losing unsaved changes. There are a couple of things you may want to do in this case:

The `usePreventRemove` hook allows you to prevent the user from leaving a screen. See the [`usePreventRemove`](https://reactnavigation.org/docs/use-prevent-remove) docs for more details.

To be able to prompt the user before they leave the app on Android, you can use the `BackHandler` API from React Native:

```
import { Alert, BackHandler } from 'react-native';// ...React.useEffect(() => {  const onBackPress = () => {    Alert.alert(      'Exit App',      'Do you want to exit?',      [        {          text: 'Cancel',          onPress: () => {            // Do nothing          },          style: 'cancel',        },        { text: 'YES', onPress: () => BackHandler.exitApp() },      ],      { cancelable: false }    );    return true;  };  const backHandler = BackHandler.addEventListener(    'hardwareBackPress',    onBackPress  );  return () => backHandler.remove();}, []);
```

On the Web, you can use the `beforeunload` event to prompt the user before they leave the browser tab:

```
React.useEffect(() => {  const onBeforeUnload = (event) => {    // Prevent the user from leaving the page    event.preventDefault();    event.returnValue = true;  };  window.addEventListener('beforeunload', onBeforeUnload);  return () => {    window.removeEventListener('beforeunload', onBeforeUnload);  };}, []);
```

warning

The user can still close the app by swiping it away from the app switcher or closing the browser tab. Or the app can be closed by the system due to low memory or other reasons. It's also not possible to prevent leaving the app on iOS. We recommend persisting the data and restoring it when the app is opened again instead of prompting the user before they leave the app.


## React Navigation on Web  React Navigation

---
created: 2025-02-08T17:01:00 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# React Navigation on Web | React Navigation

> ## Excerpt
> React Navigation has built-in support for the Web platform. This allows you to use the same navigation logic in your React Native app as well as on the web. The navigators require using React Native for Web to work on the web.

---
React Navigation has built-in support for the Web platform. This allows you to use the same navigation logic in your React Native app as well as on the web. The navigators require using [React Native for Web](https://github.com/necolas/react-native-web) to work on the web.

## Pre-requisites[](https://reactnavigation.org/docs/shared-element-transitions/#pre-requisites "Direct link to Pre-requisites")

While Web support works out of the box, there are some things to configure to ensure a good experience on the web:

1.  [**Configure linking**](https://reactnavigation.org/docs/configuring-links)
    
    Configuring linking allows React Navigation to integrate with the browser's URL bar. This is crucial for web apps to have proper URLs for each screen.
    
2.  [**Use Button or Link components**](https://reactnavigation.org/docs/link)
    
    You may be familiar with using `navigation.navigate` to navigate between screens. But it's important to avoid using it when supporting the web. Instead, use the `Link` or [`Button`](https://reactnavigation.org/docs/elements#button) components to navigate between screens. This ensures that an anchor tag is rendered which provides the expected behavior on the web.
    
3.  [**Server rendering**](https://reactnavigation.org/docs/server-rendering)
    
    Currently, React Navigation works best with fully client-side rendered apps. However, minimal server-side rendering support is available. So you can optionally choose to server render your app.
    

note

In React Navigation 4, it was necessary to install a separate package called `@react-navigation/web` to use web integration. This package is no longer needed in recent versions of React Navigation. If you have it installed, make sure to uninstall it to avoid conflicts.

## Lazy loading screens[](https://reactnavigation.org/docs/shared-element-transitions/#lazy-loading-screens "Direct link to Lazy loading screens")

By default, screen components are bundled in the main bundle. This can lead to a large bundle size if you have many screens. It's important to keep the bundle size small on the web for faster loading times.

To reduce the bundle size, you can use [dynamic `import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) with [`React.lazy`](https://react.dev/reference/react/lazy) to lazy load screens:

-   Static
-   Dynamic

```
import { Suspense, lazy } from 'react';const HomeScreen = lazy(() => import('./HomeScreen'));const ProfileScreen = lazy(() => import('./ProfileScreen'));function MyStack() {  return (    <Stack.Navigator      screenLayout={({ children }) => (        <Suspense fallback={<Loading />}>{children}</Suspense>      )}    >      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Lazy+loading+screens&code=import+%7B+Suspense%2C+lazy+%7D+from+%27react%27%3B%0A%0Aconst+HomeScreen+%3D+lazy%28%28%29+%3D%3E+import%28%27.%2FHomeScreen%27%29%29%3B%0Aconst+ProfileScreen+%3D+lazy%28%28%29+%3D%3E+import%28%27.%2FProfileScreen%27%29%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%0A++++++screenLayout%3D%7B%28%7B+children+%7D%29+%3D%3E+%28%0A++++++++%3CSuspense+fallback%3D%7B%3CLoading+%2F%3E%7D%3E%7Bchildren%7D%3C%2FSuspense%3E%0A++++++%29%7D%0A++++%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A&dependencies=&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

warning

Make sure to use `React.lazy` **outside** the component containing the navigator configuration. Otherwise, it will return a new component on each render, causing the [screen to be unmounted and remounted](https://reactnavigation.org/docs/troubleshooting#screens-are-unmountingremounting-during-navigation) every time the component rerenders.

This will split the screen components into separate chunks (depending on your bundler) which are loaded on-demand when the screen is rendered. This can significantly reduce the initial bundle size.

In addition, you can use the [`screenLayout`](https://reactnavigation.org/docs/navigator#screen-layout) to wrap your screens in a [`<Suspense>`](https://react.dev/reference/react/Suspense) boundary. The suspense fallback can be used to show a loading indicator and will be shown while the screen component is being loaded.

## Web-specific behavior[](https://reactnavigation.org/docs/shared-element-transitions/#web-specific-behavior "Direct link to Web-specific behavior")

Some of the navigators have different behavior on the web compared to native platforms:

1.  [**Native Stack Navigator**](https://reactnavigation.org/docs/stack-navigator)
    
    Native Stack Navigator uses the platform's primitives to handle animations and gestures on native platforms. However, animations and gestures are not supported on the web.
    
2.  [**Stack Navigator**](https://reactnavigation.org/docs/stack-navigator)
    
    Stack Navigator uses [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/) to handle swipe gestures on native platforms. However, gestures are not supported on the web.
    
    In addition, screen transitions are disabled by default on the web. You can enable them by setting `animationEnabled: true` in the navigator's options.
    
3.  [**Drawer Navigator**](https://reactnavigation.org/docs/drawer-navigator)
    
    Drawer Navigator uses [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/) to handle swipe gestures and [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/) for animations on native platforms. However, gestures are not supported on the web, and animations are handled using CSS transitions.
    

In addition, navigators render hyperlinks on the web when possible, such as in the drawer sidebar, tab bar, stack navigator's back button, etc.

Since `react-native-gesture-handler` and `react-native-reanimated` are not used on the web, avoid importing them in your own code to reduce the bundle size unless you need them for your components. You can use `.native.js` or `.native.ts` extensions for code specific to native platforms.

## Configuring hosting providers[](https://reactnavigation.org/docs/shared-element-transitions/#configuring-hosting-providers "Direct link to Configuring hosting providers")

React Navigation is designed for Single Page Applications (SPAs). This usually means that the `index.html` file needs to be served for all routes.

During development, the bundler such as Webpack or Metro automatically handles this. However, when deploying the site, you may need to configure redirects to ensure that the `index.html` file is served for all routes to avoid 404 errors.

Here are instructions for some of the popular hosting providers:

### Netlify[](https://reactnavigation.org/docs/shared-element-transitions/#netlify "Direct link to Netlify")

To handle redirects on Netlify, add the following in the `netlify.toml` file at the root of your project:

```
[[redirects]]  from = "/*"  to = "/index.html"  status = 200
```

### Vercel[](https://reactnavigation.org/docs/shared-element-transitions/#vercel "Direct link to Vercel")

To handle redirects on Vercel, add the following in the `vercel.json` file at the root of your project:

```
{  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]}
```

### GitHub Pages[](https://reactnavigation.org/docs/shared-element-transitions/#github-pages "Direct link to GitHub Pages")

GitHub Pages doesn't support such redirection configuration for SPAs. There are a couple of ways to work around this:

-   Rename your `index.html` to `404.html`. This will serve the `404.html` file for all routes. However, this will cause a 404 status code to be returned for all routes. So it's not ideal for SEO.
-   Write a script that copies the `index.html` file to all routes in the build output. For example, if your app has routes `/`, `/about`, and `/contact`, you can copy the `index.html` file to `about.html` and `contact.html`.


## Screen options with nested navigators

---
created: 2025-02-08T16:49:48 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Screen options with nested navigators | React Navigation

> ## Excerpt
> In this document we'll explain how screen options work when there are multiple navigators. It's important to understand this so that you put your options in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen.

---
In this document we'll explain how [screen options](https://reactnavigation.org/docs/screen-options) work when there are multiple navigators. It's important to understand this so that you put your `options` in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen.

**You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.**

Let's take for example a tab navigator that contains a native stack in each tab. What happens if we set the `options` on a screen inside of the stack?

-   Static
-   Dynamic

```
function HomeStackScreen() {  return (    <HomeStack.Navigator>      <HomeStack.Screen        name="A"        component={A}        options={{ tabBarLabel: 'Home!' }}      />    </HomeStack.Navigator>  );}function SettingsStackScreen() {  return (    <SettingsStack.Navigator>      <SettingsStack.Screen        name="B"        component={B}        options={{ tabBarLabel: 'Settings!' }}      />    </SettingsStack.Navigator>  );}export default function App() {  return (    <NavigationContainer>      <Tab.Navigator>        <Tab.Screen name="Home" component={HomeStackScreen} />        <Tab.Screen name="Settings" component={SettingsStackScreen} />      </Tab.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Tabs+with+native+stack&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+HomeStack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+SettingsStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+A%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+B%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0Afunction+HomeStackScreen%28%29+%7B%0A++return+%28%0A++++%3CHomeStack.Navigator%3E%0A++++++%3CHomeStack.Screen%0A++++++++name%3D%22A%22%0A++++++++component%3D%7BA%7D%0A++++++++options%3D%7B%7B+tabBarLabel%3A+%27Home%21%27+%7D%7D%0A++++++%2F%3E%0A++++%3C%2FHomeStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+SettingsStackScreen%28%29+%7B%0A++return+%28%0A++++%3CSettingsStack.Navigator%3E%0A++++++%3CSettingsStack.Screen%0A++++++++name%3D%22B%22%0A++++++++component%3D%7BB%7D%0A++++++++options%3D%7B%7B+tabBarLabel%3A+%27Settings%21%27+%7D%7D%0A++++++%2F%3E%0A++++%3C%2FSettingsStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeStackScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Settings%22+component%3D%7BSettingsStackScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. `A` and `B` above are screen components in `HomeStack` and `SettingsStack` respectively, not in the tab navigator. So the result will be that the `tabBarLabel` property is not applied to the tab navigator. We can fix this though!

-   Static
-   Dynamic

```
export default function App() {  return (    <NavigationContainer>      <Tab.Navigator>        <Tab.Screen          name="Home"          component={HomeStackScreen}          options={{ tabBarLabel: 'Home!' }}        />        <Tab.Screen          name="Settings"          component={SettingsStackScreen}          options={{ tabBarLabel: 'Settings!' }}        />      </Tab.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Tabs+with+native+stack&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+HomeStack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+SettingsStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+A%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+B%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+HomeStackScreen%28%29+%7B%0A++return+%28%0A++++%3CHomeStack.Navigator%3E%0A++++++%3CHomeStack.Screen+name%3D%22A%22+component%3D%7BA%7D+%2F%3E%0A++++%3C%2FHomeStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+SettingsStackScreen%28%29+%7B%0A++return+%28%0A++++%3CSettingsStack.Navigator%3E%0A++++++%3CSettingsStack.Screen+name%3D%22B%22+component%3D%7BB%7D+%2F%3E%0A++++%3C%2FSettingsStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen%0A++++++++++name%3D%22Home%22%0A++++++++++component%3D%7BHomeStackScreen%7D%0A++++++++++options%3D%7B%7B+tabBarLabel%3A+%27Home%21%27+%7D%7D%0A++++++++%2F%3E%0A++++++++%3CTab.Screen%0A++++++++++name%3D%22Settings%22%0A++++++++++component%3D%7BSettingsStackScreen%7D%0A++++++++++options%3D%7B%7B+tabBarLabel%3A+%27Settings%21%27+%7D%7D%0A++++++++%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

When we set the `options` directly on `Screen` components containing the `HomeStack` and `SettingsStack` component, it allows us to control the options for its parent navigator when its used as a screen component. In this case, the options on our stack components configure the label in the tab navigator that renders the stacks.

## Setting parent screen options based on child navigator's state[](https://reactnavigation.org/docs/getting-started#setting-parent-screen-options-based-on-child-navigators-state "Direct link to Setting parent screen options based on child navigator's state")

Imagine the following configuration:

-   Static
-   Dynamic

```
const Tab = createBottomTabNavigator();function HomeTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Feed" component={FeedScreen} />      <Tab.Screen name="Profile" component={ProfileScreen} />      <Tab.Screen name="Account" component={AccountScreen} />    </Tab.Navigator>  );}const Stack = createNativeStackNavigator();export default function App() {  return (    <NavigationContainer>      <Stack.Navigator>        <Stack.Screen name="Home" component={HomeTabs} />        <Stack.Screen name="Settings" component={SettingsScreen} />      </Stack.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Parent+options+from+a+child&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+AccountScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+SettingsScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+HomeTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Account%22+component%3D%7BAccountScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeTabs%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If we were to set the `headerTitle` with `options` for the `FeedScreen`, this would not work. This is because `App` stack will only look at its immediate children for configuration: `HomeTabs` and `SettingsScreen`.

But we can determine the `headerTitle` option based on the [navigation state](https://reactnavigation.org/docs/navigation-state) of our tab navigator using the `getFocusedRouteNameFromRoute` helper. Let's create a function to get the title first:

```
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';function getHeaderTitle(route) {  // If the focused route is not found, we need to assume it's the initial screen  // This can happen during if there hasn't been any navigation inside the screen  // In our case, it's "Feed" as that's the first screen inside the navigator  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';  switch (routeName) {    case 'Feed':      return 'News feed';    case 'Profile':      return 'My profile';    case 'Account':      return 'My account';  }}
```

Then we can use this function with the `options` prop on `Screen`:

-   Static
-   Dynamic

```
<Stack.Screen  name="Home"  component={HomeTabs}  options={({ route }) => ({    headerTitle: getHeaderTitle(route),  })}/>
```

[Try on **Snack**](https://snack.expo.dev/?name=Parent+options+from+a+child&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++useNavigation%2C%0A++getFocusedRouteNameFromRoute%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+getHeaderTitle%28route%29+%7B%0A++%2F%2F+If+the+focused+route+is+not+found%2C+we+need+to+assume+it%27s+the+initial+screen%0A++%2F%2F+This+can+happen+during+if+there+hasn%27t+been+any+navigation+inside+the+screen%0A++%2F%2F+In+our+case%2C+it%27s+%22Feed%22+as+that%27s+the+first+screen+inside+the+navigator%0A++const+routeName+%3D+getFocusedRouteNameFromRoute%28route%29+%3F%3F+%27Feed%27%3B%0A%0A++switch+%28routeName%29+%7B%0A++++case+%27Feed%27%3A%0A++++++return+%27News+feed%27%3B%0A++++case+%27Profile%27%3A%0A++++++return+%27My+profile%27%3B%0A++++case+%27Account%27%3A%0A++++++return+%27My+account%27%3B%0A++%7D%0A%7D%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+AccountScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+SettingsScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+HomeTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator+screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Account%22+component%3D%7BAccountScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen%0A++++++++++name%3D%22Home%22%0A++++++++++component%3D%7BHomeTabs%7D%0A++++++++++options%3D%7B%28%7B+route+%7D%29+%3D%3E+%28%7B%0A++++++++++++headerTitle%3A+getHeaderTitle%28route%29%2C%0A++++++++++%7D%29%7D%0A++++++++%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

So what's happening here? With the `getFocusedRouteNameFromRoute` helper, we can get the currently active route name from this child navigator (in this case it's the tab navigator since that's what we're rendering) and setting an appropriate title for the header.

This approach can be used anytime you want to set options for a parent navigator based on a child navigator's state. Common use cases are:

1.  Show tab title in stack header: a stack contains a tab navigator and you want to set the title on the stack header (above example)
2.  Show screens without tab bar: a tab navigator contains a stack and you want to hide the tab bar on specific screens (not recommended, see [Hiding tab bar in specific screens](https://reactnavigation.org/docs/hiding-tabbar-in-screens) instead)
3.  Lock drawer on certain screens: a drawer has a stack inside of it and you want to lock the drawer on certain screens

In many cases, similar behavior can be achieved by reorganizing our navigators. We usually recommend this option if it fits your use case.

For example, for the above use case, instead of adding a tab navigator inside a stack navigator, we can add a stack navigator inside each of the tabs.

-   Static
-   Dynamic

```
function FeedStackScreen() {  return (    <FeedStack.Navigator>      <FeedStack.Screen name="Feed" component={FeedScreen} />      {/* other screens */}    </FeedStack.Navigator>  );}const ProfileStack = createNativeStackNavigator();function ProfileStackScreen() {  return (    <ProfileStack.Navigator>      <ProfileStack.Screen name="Profile" component={ProfileScreen} />      {/* other screens */}    </ProfileStack.Navigator>  );}const Tab = createBottomTabNavigator();function HomeTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Feed" component={FeedStackScreen} />      <Tab.Screen name="Profile" component={ProfileStackScreen} />    </Tab.Navigator>  );}const RootStack = createNativeStackNavigator();export default function App() {  return (    <NavigationContainer>      <RootStack.Navigator>        <RootStack.Screen name="Home" component={HomeTabs} />        <RootStack.Screen name="Settings" component={SettingsScreen} />      </RootStack.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Reorganized+navigators&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+FeedScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+SettingsScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+FeedStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+FeedStackScreen%28%29+%7B%0A++return+%28%0A++++%3CFeedStack.Navigator%3E%0A++++++%3CFeedStack.Screen+name%3D%22Feed%22+component%3D%7BFeedScreen%7D+%2F%3E%0A++++++%7B%2F*+other+screens+*%2F%7D%0A++++%3C%2FFeedStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aconst+ProfileStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+ProfileStackScreen%28%29+%7B%0A++return+%28%0A++++%3CProfileStack.Navigator%3E%0A++++++%3CProfileStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%7B%2F*+other+screens+*%2F%7D%0A++++%3C%2FProfileStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+HomeTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Feed%22+component%3D%7BFeedStackScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileStackScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aconst+RootStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootStack.Navigator%3E%0A++++++++%3CRootStack.Screen+name%3D%22Home%22+component%3D%7BHomeTabs%7D+%2F%3E%0A++++++++%3CRootStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++%3C%2FRootStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Additionally, this lets you push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks.

If you want to push screens on top of the tab bar (i.e. that don't show the tab bar), then you can add them to the `App` stack instead of adding them into the screens inside the tab navigator.



## Screen tracking for analytics  React Navigation

---
created: 2025-02-08T17:01:14 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Screen tracking for analytics | React Navigation

> ## Excerpt
> To track the currently active screen, we need to:

---
```
import {  NavigationContainer,  useNavigation,  useNavigationContainerRef,} from '@react-navigation/native';export default function App() {  const navigationRef = useNavigationContainerRef();  const routeNameRef = React.useRef();  return (    <NavigationContainer      ref={navigationRef}      onReady={() => {        routeNameRef.current = navigationRef.current.getCurrentRoute().name;      }}      onStateChange={async () => {        const previousRouteName = routeNameRef.current;        const currentRouteName = navigationRef.current.getCurrentRoute().name;        const trackScreenView = () => {          // Your implementation of analytics goes here!        };        if (previousRouteName !== currentRouteName) {          // Replace the line below to add the tracker from a mobile analytics SDK          await trackScreenView(currentRouteName);        }        // Save the current route name for later comparison        routeNameRef.current = currentRouteName;      }}    >      {/* ... */}    </NavigationContainer>  );}
```


## Server rendering  React Navigation

---
created: 2025-02-08T17:01:06 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Server rendering | React Navigation

> ## Excerpt
> This guide will cover how to server render your React Native app using React Native for Web and React Navigation. We'll cover the following cases:

---
This guide will cover how to server render your React Native app using React Native for Web and React Navigation. We'll cover the following cases:

1.  Rendering the correct layout depending on the request URL
2.  Setting appropriate page metadata based on the focused screen

::: warning

Server rendering support is currently limited. It's not possible to provide a seamless SSR experience due to a lack of APIs such as media queries. In addition, many third-party libraries often don't work well with server rendering.

:::

## Pre-requisites[](https://reactnavigation.org/docs/shared-element-transitions/#pre-requisites "Direct link to Pre-requisites")

Before you follow the guide, make sure that your app already renders fine on server. To do that, you will need to ensure the following:

-   All of the dependencies that you use are [compiled before publishing](https://github.com/react-native-community/bob) to npm, so that you don't get syntax errors on Node.
-   Node is configured to be able to `require` asset files such as images and fonts. You can try [webpack-isomorphic-tools](https://github.com/catamphetamine/webpack-isomorphic-tools) to do that.
-   `react-native` is aliased to `react-native-web`. You can do it with [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver).

## Rendering the app[](https://reactnavigation.org/docs/shared-element-transitions/#rendering-the-app "Direct link to Rendering the app")

First, let's take a look at an example of how you'd do [server rendering with React Native Web](http://necolas.github.io/react-native-web/docs/?path=/docs/guides-server-side--page) without involving React Navigation:

```
import { AppRegistry } from 'react-native-web';import ReactDOMServer from 'react-dom/server';import App from './src/App';const { element, getStyleElement } = AppRegistry.getApplication('App');const html = ReactDOMServer.renderToString(element);const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());const document = `  <!DOCTYPE html>  <html style="height: 100%">  <meta charset="utf-8">  <meta httpEquiv="X-UA-Compatible" content="IE=edge">  <meta    name="viewport"    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"  >  ${css}  <body style="min-height: 100%">  <div id="root" style="display: flex; min-height: 100vh">  ${html}  </div>`;
```

Here, `./src/App` is the file where you have `AppRegistry.registerComponent('App', () => App)`.

If you're using React Navigation in your app, this will render the screens rendered by your home page. However, if you have [configured links](https://reactnavigation.org/docs/configuring-links) in your app, you'd want to render the correct screens for the request URL on server so that it matches what'll be rendered on the client.

We can use the [`ServerContainer`](https://reactnavigation.org/docs/server-container) to do that by passing this info in the `location` prop. For example, with Koa, you can use the `path` and `search` properties from the context argument:

```
app.use(async (ctx) => {  const location = new URL(ctx.url, 'https://example.org/');  const { element, getStyleElement } = AppRegistry.getApplication('App');  const html = ReactDOMServer.renderToString(    <ServerContainer location={location}>{element}</ServerContainer>  );  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());  const document = `    <!DOCTYPE html>    <html style="height: 100%">    <meta charset="utf-8">    <meta httpEquiv="X-UA-Compatible" content="IE=edge">    <meta      name="viewport"      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"    >    ${css}    <body style="min-height: 100%">    <div id="root" style="display: flex; min-height: 100vh">    ${html}    </div>`;  ctx.body = document;});
```

You may also want to set the correct document title and descriptions for search engines, open graph etc. To do that, you can pass a `ref` to the container which will give you the current screen's options.

```
app.use(async (ctx) => {  const location = new URL(ctx.url, 'https://example.org/');  const { element, getStyleElement } = AppRegistry.getApplication('App');  const ref = React.createRef<ServerContainerRef>();  const html = ReactDOMServer.renderToString(    <ServerContainer      ref={ref}      location={location}    >      {element}    </ServerContainer>  );  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());  const options = ref.current?.getCurrentOptions();  const document = `    <!DOCTYPE html>    <html style="height: 100%">    <meta charset="utf-8">    <meta httpEquiv="X-UA-Compatible" content="IE=edge">    <meta      name="viewport"      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"    >    ${css}    <title>${options.title}</title>    <body style="min-height: 100%">    <div id="root" style="display: flex; min-height: 100vh">    ${html}    </div>`;  ctx.body = document;});
```

Make sure that you have specified a `title` option for your screens:

-   Static
-   Dynamic

```
<Stack.Navigator>  <Stack.Screen    name="Home"    component={HomeScreen}    options={{      title: 'My App',    }}  />  <Stack.Screen    name="Profile"    component={ProfileScreen}    options={({ route }) => ({      title: `${route.params.name}'s Profile`,    })}  /></Stack.Navigator>
```

## Handling 404 or other status codes[](https://reactnavigation.org/docs/shared-element-transitions/#handling-404-or-other-status-codes "Direct link to Handling 404 or other status codes")

When [rendering a screen for an invalid URL](https://reactnavigation.org/docs/configuring-links#handling-unmatched-routes-or-404), we should also return a `404` status code from the server.

First, we need to create a context where we'll attach the status code. To do this, place the following code in a separate file that we will be importing on both the server and client:

```
import * as React from 'react';const StatusCodeContext = React.createContext();export default StatusCodeContext;
```

Then, we need to use the context in our `NotFound` screen. Here, we add a `code` property with the value of `404` to signal that the screen was not found:

```
function NotFound() {  const status = React.useContext(StatusCodeContext);  if (status) {    staus.code = 404;  }  return (    <View>      <Text>Oops! This URL doesn't exist.</Text>    </View>  );}
```

You could also attach additional information in this object if you need to.

Next, we need to create a status object to pass in the context on our server. By default, we'll set the `code` to `200`. Then pass the object in `StatusCodeContext.Provider` which should wrap the element with `ServerContainer`:

```
// Create a status objectconst status = { code: 200 };const html = ReactDOMServer.renderToString(  // Pass the status object via context  <StatusCodeContext.Provider value={status}>    <ServerContainer ref={ref} location={location}>      {element}    </ServerContainer>  </StatusCodeContext.Provider>);// After rendering, get the status code and use it for server's responsectx.status = status.code;
```

After we render the app with `ReactDOMServer.renderToString`, the `code` property of the `status` object will be updated to be `404` if the `NotFound` screen was rendered.

You can follow a similar approach for other status codes too, for example, `401` for unauthorized etc.

## Summary[](https://reactnavigation.org/docs/shared-element-transitions/#summary "Direct link to Summary")

-   Use the `location` prop on `ServerContainer` to render correct screens based on the incoming request.
-   Attach a `ref` to the `ServerContainer` get options for the current screen.
-   Use context to attach more information such as status code.


## State persistence  React Navigation

---
created: 2025-02-08T17:01:30 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# State persistence | React Navigation

> ## Excerpt
> You might want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.

---
You might want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.

This is especially valuable during development because it allows the developer to stay on the same screen when they refresh the app.

## Usage[](https://reactnavigation.org/docs/shared-element-transitions/#usage "Direct link to Usage")

To be able to persist the [navigation state](https://reactnavigation.org/docs/navigation-state), we can use the `onStateChange` and `initialState` props of the container.

-   `onStateChange` - This prop notifies us of any state changes. We can persist the state in this callback.
-   `initialState` - This prop allows us to pass an initial state to use for [navigation state](https://reactnavigation.org/docs/navigation-state). We can pass the restored state in this prop.

-   Static
-   Dynamic

```
import { Platform, View, Linking } from 'react-native';import AsyncStorage from '@react-native-async-storage/async-storage';import { NavigationContainer, useNavigation } from '@react-navigation/native';const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';export default function App() {  const [isReady, setIsReady] = React.useState(Platform.OS === 'web'); // Don't persist state on web since it's based on URL  const [initialState, setInitialState] = React.useState();  React.useEffect(() => {    const restoreState = async () => {      try {        const initialUrl = await Linking.getInitialURL();        if (initialUrl == null) {          // Only restore state if there's no deep link          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);          const state = savedStateString            ? JSON.parse(savedStateString)            : undefined;          if (state !== undefined) {            setInitialState(state);          }        }      } finally {        setIsReady(true);      }    };    if (!isReady) {      restoreState();    }  }, [isReady]);  if (!isReady) {    return null;  }  return (    <NavigationContainer      initialState={initialState}      onStateChange={(state) =>        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))      }    >      <Tab.Navigator screenOptions={{ headerShown: false }}>        <Tab.Screen          name="Home"          component={HomeStackScreen}          options={{ tabBarLabel: 'Home!' }}        />        <Tab.Screen          name="Settings"          component={SettingsStackScreen}          options={{ tabBarLabel: 'Settings!' }}        />      </Tab.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Persisting+the+navigation+state&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Platform%2C+View%2C+Linking+%7D+from+%27react-native%27%3B%0Aimport+AsyncStorage+from+%27%40react-native-async-storage%2Fasync-storage%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0Aconst+HomeStack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+SettingsStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+A%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+B%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27C%27%29%7D%3EGo+to+C%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+C%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27D%27%29%7D%3EGo+to+D%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+D%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+HomeStackScreen%28%29+%7B%0A++return+%28%0A++++%3CHomeStack.Navigator%3E%0A++++++%3CHomeStack.Screen+name%3D%22A%22+component%3D%7BA%7D+%2F%3E%0A++++%3C%2FHomeStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+SettingsStackScreen%28%29+%7B%0A++return+%28%0A++++%3CSettingsStack.Navigator%3E%0A++++++%3CSettingsStack.Screen+name%3D%22B%22+component%3D%7BB%7D+%2F%3E%0A++++++%3CSettingsStack.Screen+name%3D%22C%22+component%3D%7BC%7D+%2F%3E%0A++++++%3CSettingsStack.Screen+name%3D%22D%22+component%3D%7BD%7D+%2F%3E%0A++++%3C%2FSettingsStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0A%0Aconst+PERSISTENCE_KEY+%3D+%27NAVIGATION_STATE_V1%27%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++const+%5BisReady%2C+setIsReady%5D+%3D+React.useState%28Platform.OS+%3D%3D%3D+%27web%27%29%3B+%2F%2F+Don%27t+persist+state+on+web+since+it%27s+based+on+URL%0A++const+%5BinitialState%2C+setInitialState%5D+%3D+React.useState%28%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+restoreState+%3D+async+%28%29+%3D%3E+%7B%0A++++++try+%7B%0A++++++++const+initialUrl+%3D+await+Linking.getInitialURL%28%29%3B%0A%0A++++++++if+%28initialUrl+%3D%3D+null%29+%7B%0A++++++++++%2F%2F+Only+restore+state+if+there%27s+no+deep+link%0A++++++++++const+savedStateString+%3D+await+AsyncStorage.getItem%28PERSISTENCE_KEY%29%3B%0A++++++++++const+state+%3D+savedStateString%0A++++++++++++%3F+JSON.parse%28savedStateString%29%0A++++++++++++%3A+undefined%3B%0A%0A++++++++++if+%28state+%21%3D%3D+undefined%29+%7B%0A++++++++++++setInitialState%28state%29%3B%0A++++++++++%7D%0A++++++++%7D%0A++++++%7D+finally+%7B%0A++++++++setIsReady%28true%29%3B%0A++++++%7D%0A++++%7D%3B%0A%0A++++if+%28%21isReady%29+%7B%0A++++++restoreState%28%29%3B%0A++++%7D%0A++%7D%2C+%5BisReady%5D%29%3B%0A%0A++if+%28%21isReady%29+%7B%0A++++return+null%3B%0A++%7D%0A%0A++return+%28%0A++++%3CNavigationContainer%0A++++++initialState%3D%7BinitialState%7D%0A++++++onStateChange%3D%7B%28state%29+%3D%3E%0A++++++++AsyncStorage.setItem%28PERSISTENCE_KEY%2C+JSON.stringify%28state%29%29%0A++++++%7D%0A++++%3E%0A++++++%3CTab.Navigator+screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%3E%0A++++++++%3CTab.Screen%0A++++++++++name%3D%22Home%22%0A++++++++++component%3D%7BHomeStackScreen%7D%0A++++++++++options%3D%7B%7B+tabBarLabel%3A+%27Home%21%27+%7D%7D%0A++++++++%2F%3E%0A++++++++%3CTab.Screen%0A++++++++++name%3D%22Settings%22%0A++++++++++component%3D%7BSettingsStackScreen%7D%0A++++++++++options%3D%7B%7B+tabBarLabel%3A+%27Settings%21%27+%7D%7D%0A++++++++%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-native-async-storage%2Fasync-storage%40*%2C%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

warning

It is recommended to use an [error boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) in your app and clear the persisted state if an error occurs. This will ensure that the app doesn't get stuck in an error state if a screen crashes.

### Development Mode[](https://reactnavigation.org/docs/shared-element-transitions/#development-mode "Direct link to Development Mode")

This feature is particularly useful in development mode. You can enable it selectively using the following approach:

```
const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
```

While it can be used for production as well, use it with caution as it can make the app unusable if the app is crashing on a particular screen - as the user will still be on the same screen after restarting. So if you are using it in production, make sure to clear the persisted state if an error occurs.

### Loading View[](https://reactnavigation.org/docs/shared-element-transitions/#loading-view "Direct link to Loading View")

Because the state is restored asynchronously, the app must render an empty/loading view for a moment before we have the initial state. To handle this, we can return a loading view when `isReady` is `false`:

```
if (!isReady) {  return <ActivityIndicator />;}
```

## Warning: Serializable State[](https://reactnavigation.org/docs/shared-element-transitions/#warning-serializable-state "Direct link to Warning: Serializable State")

Each param, route, and navigation state must be fully serializable for this feature to work. Typically, you would serialize the state as a JSON string. This means that your routes and params must contain no functions, class instances, or recursive data structures. React Navigation already [warns you during development](https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state) if it encounters non-serializable data, so watch out for the warning if you plan to persist navigation state.

You can modify the initial state object before passing it to container, but note that if your `initialState` isn't a [valid navigation state](https://reactnavigation.org/docs/navigation-state#partial-state-objects), React Navigation may not be able to handle the situation gracefully.


## Supporting safe areas

---
created: 2025-02-08T16:46:10 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/getting-started
author: 
---

# Supporting safe areas | React Navigation

> ## Excerpt
> By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:

---
By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:

-   Physical notches
-   Status bar overlay
-   Home activity indicator on iOS
-   Navigation bar on Android

The area not overlapped by such items is referred to as "safe area".

We try to apply proper insets on the UI elements of the navigators to avoid being overlapped by such items. The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI.

While React Navigation handles safe areas for the built-in UI elements by default, your own content may also need to handle it to ensure that content isn't hidden by these items.

It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right.

![Notch on the iPhone X](https://reactnavigation.org/assets/images/00-intro-4709ed78711b21c7bd54d2a1385262bb.png)

While React Native exports a `SafeAreaView` component, this component only supports iOS 10+ with no support for older iOS versions or Android. In addition, it also has some issues, i.e. if a screen containing safe area is animating, it causes jumpy behavior. So we recommend to use the `useSafeAreaInsets` hook from the [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) library to handle safe areas in a more reliable way.

warning

The `react-native-safe-area-context` library also exports a `SafeAreaView` component. While it works on Android, it also has the same issues related to jumpy behavior when animating. So we recommend always using the `useSafeAreaInsets` hook instead and avoid using the `SafeAreaView` component.

The rest of this guide gives more information on how to support safe areas in React Navigation.

![Default React Navigation Behavior](https://reactnavigation.org/assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png)

React Navigation handles safe area in the default header. However, if you're using a custom header, it's important to ensure your UI is within the safe area.

For example, if I render nothing for the `header` or `tabBar`, nothing renders

-   Static
-   Dynamic

```
import * as React from 'react';import { Text, View } from 'react-native';import { NavigationContainer } from '@react-navigation/native';import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import { createNativeStackNavigator } from '@react-navigation/native-stack';function Demo() {  return (    <View      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}    >      <Text>This is top text.</Text>      <Text>This is bottom text.</Text>    </View>  );}const Stack = createNativeStackNavigator();const Tab = createBottomTabNavigator();export default function App() {  return (    <NavigationContainer>      <Stack.Navigator        initialRouteName="Home"        screenOptions={{ headerShown: false }}      >        <Stack.Screen name="Home">          {() => (            <Tab.Navigator              initialRouteName="Analytics"              tabBar={() => null}              screenOptions={{ headerShown: false }}            >              <Tab.Screen name="Analytics" component={Demo} />              <Tab.Screen name="Profile" component={Demo} />            </Tab.Navigator>          )}        </Stack.Screen>        <Stack.Screen name="Settings" component={Demo} />      </Stack.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Hidden+components&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+Demo%28%29+%7B%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27space-between%27%2C+alignItems%3A+%27center%27+%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+top+text.%3C%2FText%3E%0A++++++%3CText%3EThis+is+bottom+text.%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%0A++++++++initialRouteName%3D%22Home%22%0A++++++++screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22%3E%0A++++++++++%7B%28%29+%3D%3E+%28%0A++++++++++++%3CTab.Navigator%0A++++++++++++++initialRouteName%3D%22Analytics%22%0A++++++++++++++tabBar%3D%7B%28%29+%3D%3E+null%7D%0A++++++++++++++screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++++++%3E%0A++++++++++++++%3CTab.Screen+name%3D%22Analytics%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++++++%3C%2FTab.Navigator%3E%0A++++++++++%29%7D%0A++++++++%3C%2FStack.Screen%3E%0A%0A++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BDemo%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

![Text hidden by iPhoneX UI elements](https://reactnavigation.org/assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png)

To fix this issue you can apply safe area insets on your content. This can be achieved using the `useSafeAreaInsets` hook from the `react-native-safe-area-context` library:

-   Static
-   Dynamic

```
function Demo() {  const insets = useSafeAreaInsets();  return (    <View      style={{        flex: 1,        justifyContent: 'space-between',        alignItems: 'center',        paddingTop: insets.top,        paddingBottom: insets.bottom,        paddingLeft: insets.left,        paddingRight: insets.right,      }}    >      <Text>This is top text.</Text>      <Text>This is bottom text.</Text>    </View>  );}export default function App() {  return (    <SafeAreaProvider>      <NavigationContainer>        {/*(...) */}      </NavigationContainer>    </SafeAreaProvider>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Safe+area+example&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B%0A++SafeAreaProvider%2C%0A++useSafeAreaInsets%2C%0A%7D+from+%27react-native-safe-area-context%27%3B%0A%0Afunction+Demo%28%29+%7B%0A++const+insets+%3D+useSafeAreaInsets%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++justifyContent%3A+%27space-between%27%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++paddingTop%3A+insets.top%2C%0A++++++++paddingBottom%3A+insets.bottom%2C%0A++++++++paddingLeft%3A+insets.left%2C%0A++++++++paddingRight%3A+insets.right%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+top+text.%3C%2FText%3E%0A++++++%3CText%3EThis+is+bottom+text.%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CSafeAreaProvider%3E%0A++++++%3CNavigationContainer%3E%0A++++++++%7B%2F*%28...%29+*%2F%7D%0A++++++++%3CStack.Navigator%0A++++++++++initialRouteName%3D%22Home%22%0A++++++++++screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++%3E%0A++++++++++%3CStack.Screen+name%3D%22Home%22%3E%0A++++++++++++%7B%28%29+%3D%3E+%28%0A++++++++++++++%3CTab.Navigator%0A++++++++++++++++initialRouteName%3D%22Analytics%22%0A++++++++++++++++tabBar%3D%7B%28%29+%3D%3E+null%7D%0A++++++++++++++++screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++++++++%3E%0A++++++++++++++++%3CTab.Screen+name%3D%22Analytics%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++++++++%3C%2FTab.Navigator%3E%0A++++++++++++%29%7D%0A++++++++++%3C%2FStack.Screen%3E%0A++++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++%3C%2FStack.Navigator%3E%0A++++++%3C%2FNavigationContainer%3E%0A++++%3C%2FSafeAreaProvider%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Make sure to wrap your app in `SafeAreaProvider` as per the instructions [here](https://github.com/th3rdwave/react-native-safe-area-context#usage).

![Content spaced correctly with safe area insets](https://reactnavigation.org/assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png)

This will detect if the app is running on a device with notches, if so, ensure the content isn't hidden behind any hardware elements.

## Landscape Mode[](https://reactnavigation.org/docs/getting-started#landscape-mode "Direct link to Landscape Mode")

Even if you're using the default navigation bar and tab bar - if your application works in landscape mode it's important to ensure your content isn't hidden behind the sensor cluster.

![App in landscape mode with text hidden](https://reactnavigation.org/assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png)

To fix this you can, once again, apply safe area insets to your content. This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode.

![App in landscape mode with text visible](https://reactnavigation.org/assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png)

## Use the hook for more control[](https://reactnavigation.org/docs/getting-started#use-the-hook-for-more-control "Direct link to Use the hook for more control")

In some cases you might need more control over which paddings are applied. For example, you can only apply the top and the bottom padding by changing the `style` object:

-   Static
-   Dynamic

```
import {  SafeAreaProvider,  useSafeAreaInsets,} from 'react-native-safe-area-context';function Demo() {  const insets = useSafeAreaInsets();  return (    <View      style={{        paddingTop: insets.top,        paddingBottom: insets.bottom,        flex: 1,        justifyContent: 'space-between',        alignItems: 'center',      }}    >      <Text>This is top text.</Text>      <Text>This is bottom text.</Text>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=useSafeAreaInsets+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0Aimport+%7B%0A++SafeAreaProvider%2C%0A++useSafeAreaInsets%2C%0A%7D+from+%27react-native-safe-area-context%27%3B%0A%0Afunction+Demo%28%29+%7B%0A++const+insets+%3D+useSafeAreaInsets%28%29%3B%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++paddingTop%3A+insets.top%2C%0A++++++++paddingBottom%3A+insets.bottom%2C%0A%0A++++++++flex%3A+1%2C%0A++++++++justifyContent%3A+%27space-between%27%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+top+text.%3C%2FText%3E%0A++++++%3CText%3EThis+is+bottom+text.%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CSafeAreaProvider%3E%0A++++++%3CNavigationContainer%3E%0A++++++++%3CStack.Navigator%0A++++++++++initialRouteName%3D%22Home%22%0A++++++++++screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++%3E%0A++++++++++%3CStack.Screen+name%3D%22Home%22%3E%0A++++++++++++%7B%28%29+%3D%3E+%28%0A++++++++++++++%3CTab.Navigator%0A++++++++++++++++initialRouteName%3D%22Analytics%22%0A++++++++++++++++tabBar%3D%7B%28%29+%3D%3E+null%7D%0A++++++++++++++++screenOptions%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++++++++%3E%0A++++++++++++++++%3CTab.Screen+name%3D%22Analytics%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++++++++%3C%2FTab.Navigator%3E%0A++++++++++++%29%7D%0A++++++++++%3C%2FStack.Screen%3E%0A%0A++++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BDemo%7D+%2F%3E%0A++++++++%3C%2FStack.Navigator%3E%0A++++++%3C%2FNavigationContainer%3E%0A++++%3C%2FSafeAreaProvider%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Similarly, you could apply these paddings in `contentContainerStyle` of `FlatList` to have the content avoid the safe areas, but still show them under the statusbar and navigation bar when scrolling.

## Summary[](https://reactnavigation.org/docs/getting-started#summary "Direct link to Summary")

-   Use `useSafeAreaInsets` hook from `react-native-safe-area-context` instead of `SafeAreaView` component
-   Don't wrap your whole app in `SafeAreaView`, instead apply the styles to content inside your screens
-   Apply only specific insets using the `useSafeAreaInsets` hook for more control



## Testing with Jest  React Navigation

---
created: 2025-02-08T17:01:44 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Testing with Jest | React Navigation

> ## Excerpt
> Testing code using React Navigation may require some setup since we need to mock native dependencies used in the navigators. We recommend using Jest to write unit tests.

---
Version: 7.x

Testing code using React Navigation may require some setup since we need to mock native dependencies used in the navigators. We recommend using [Jest](https://jestjs.io/) to write unit tests.

## Mocking native modules[](https://reactnavigation.org/docs/shared-element-transitions/#mocking-native-modules "Direct link to Mocking native modules")

To be able to test React Navigation components, certain dependencies will need to be mocked depending on which components are being used.

If you're using `@react-navigation/drawer`, you will need to mock:

-   `react-native-reanimated`
-   `react-native-gesture-handler`

If you're using `@react-navigation/stack`, you will only need to mock:

-   `react-native-gesture-handler`

To add the mocks, create a file `jest/setup.js` (or any other file name of your choice) and paste the following code in it:

```
// include this line for mocking react-native-gesture-handlerimport 'react-native-gesture-handler/jestSetup';// include this section and the NativeAnimatedHelper section for mocking react-native-reanimatedjest.mock('react-native-reanimated', () => {  const Reanimated = require('react-native-reanimated/mock');  // The mock for `call` immediately calls the callback which is incorrect  // So we override it with a no-op  Reanimated.default.call = () => {};  return Reanimated;});// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missingjest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
```

Then we need to use this setup file in our jest config. You can add it under `setupFiles` option in a `jest.config.js` file or the `jest` key in `package.json`:

```
{  "preset": "react-native",  "setupFiles": ["<rootDir>/jest/setup.js"]}
```

Make sure that the path to the file in `setupFiles` is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks.

If you're not using Jest, then you'll need to mock these modules according to the test framework you are using.

## Writing tests[](https://reactnavigation.org/docs/shared-element-transitions/#writing-tests "Direct link to Writing tests")

We recommend using [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) along with [`jest-native`](https://github.com/testing-library/jest-native) to write your tests.

Example:

-   Static
-   Dynamic

```
import * as React from 'react';import { screen, render, fireEvent } from '@testing-library/react-native';import { NavigationContainer } from '@react-navigation/native';import { RootNavigator } from './RootNavigator';test('shows profile screen when View Profile is pressed', () => {  render(    <NavigationContainer>      <RootNavigator />    </NavigationContainer>  );  fireEvent.press(screen.getByText('View Profile'));  expect(screen.getByText('My Profile')).toBeOnTheScreen();});
```

## Best practices[](https://reactnavigation.org/docs/shared-element-transitions/#best-practices "Direct link to Best practices")

There are a couple of things to keep in mind when writing tests for components using React Navigation:

1.  Avoid mocking React Navigation. Instead, use a real navigator in your tests.
2.  Don't check for navigation actions. Instead, check for the result of the navigation such as the screen being rendered.


## Themes  React Navigation

---
created: 2025-02-08T17:01:21 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Themes | React Navigation

> ## Excerpt
> Themes allow you to change the colors and fonts of various components provided by React Navigation. You can use themes to:

---
Themes allow you to change the colors and fonts of various components provided by React Navigation. You can use themes to:

-   Customize the colors and fonts to match your brand
-   Provide light and dark themes based on the time of the day or user preference

## Basic usage[](https://reactnavigation.org/docs/shared-element-transitions/#basic-usage "Direct link to Basic usage")

To pass a custom theme, you can pass the `theme` prop to the navigation container.

-   Static
-   Dynamic

```
import * as React from 'react';import {  NavigationContainer,  DefaultTheme,  useNavigation,} from '@react-navigation/native';const MyTheme = {  ...DefaultTheme,  colors: {    ...DefaultTheme.colors,    background: 'rgb(140, 201, 125)',    primary: 'rgb(255, 45, 85)',  },};export default function App() {  return (    <NavigationContainer theme={MyTheme}>      <Drawer.Navigator initialRouteName="Root">        <Drawer.Screen name="Home" component={HomeScreen} />        <Drawer.Screen          name="Root"          component={Root}          options={{ headerShown: false }}        />      </Drawer.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Simple+theme&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++DefaultTheme%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createDrawerNavigator+%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0A%0Aconst+MyTheme+%3D+%7B%0A++...DefaultTheme%2C%0A++colors%3A+%7B%0A++++...DefaultTheme.colors%2C%0A++++background%3A+%27rgb%28140%2C+201%2C+125%29%27%2C%0A++++primary%3A+%27rgb%28255%2C+45%2C+85%29%27%2C%0A++%7D%2C%0A%7D%3B%0A%0Afunction+SettingsScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%7B+user+%7D+%3D+route.params%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3ESettings+Screen%3C%2FText%3E%0A++++++%3CText%3EuserParam%3A+%7BJSON.stringify%28user%29%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.navigate%28%27Root%27%2C+%7B%0A++++++++++++screen%3A+%27Settings%27%2C%0A++++++++++++params%3A+%7B+user%3A+%27jane%27+%7D%2C%0A++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+Root%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer+theme%3D%7BMyTheme%7D%3E%0A++++++%3CDrawer.Navigator+initialRouteName%3D%22Root%22%3E%0A++++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CDrawer.Screen%0A++++++++++name%3D%22Root%22%0A++++++++++component%3D%7BRoot%7D%0A++++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++%2F%3E%0A++++++%3C%2FDrawer.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

You can change the theme prop dynamically and all the components will automatically update to reflect the new theme. If you haven't provided a `theme` prop, the default theme will be used.

## Properties[](https://reactnavigation.org/docs/shared-element-transitions/#properties "Direct link to Properties")

A theme is a JS object containing a list of colors to use. It contains the following properties:

-   `dark` (`boolean`): Whether this is a dark theme or a light theme
-   `colors` (`object`): Various colors used by react navigation components:
    -   `primary` (`string`): The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
    -   `background` (`string`): The color of various backgrounds, such as the background color for the screens.
    -   `card` (`string`): The background color of card-like elements, such as headers, tab bars etc.
    -   `text` (`string`): The text color of various elements.
    -   `border` (`string`): The color of borders, e.g. header border, tab bar border etc.
    -   `notification` (`string`): The color of notifications and badge (e.g. badge in bottom tabs).
-   `fonts` (`object`): Various fonts used by react navigation components:
    -   `regular` (`object`): Style object for the primary font used in the app.
    -   `medium` (`object`): Style object for the semi-bold variant of the primary font.
    -   `bold` (`object`): Style object for the bold variant of the primary font.
    -   `heavy` (`object`): Style object for the extra-bold variant of the primary font.

The style objects for fonts contain the following properties:

-   `fontFamily` (`string`): The name of the font family (or font stack on Web) to use, e.g. `Roboto` or `Helvetica Neue`. The system fonts are used by default.
-   `fontWeight` (`string`): The font weight to use. Valid values are `normal`, `bold`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`.

When creating a custom theme, you will need to provide all of these properties.

Example theme:

```
const WEB_FONT_STACK =  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';const MyTheme = {  dark: false,  colors: {    primary: 'rgb(255, 45, 85)',    background: 'rgb(242, 242, 242)',    card: 'rgb(255, 255, 255)',    text: 'rgb(28, 28, 30)',    border: 'rgb(199, 199, 204)',    notification: 'rgb(255, 69, 58)',  },  fonts: Platform.select({    web: {      regular: {        fontFamily: WEB_FONT_STACK,        fontWeight: '400',      },      medium: {        fontFamily: WEB_FONT_STACK,        fontWeight: '500',      },      bold: {        fontFamily: WEB_FONT_STACK,        fontWeight: '600',      },      heavy: {        fontFamily: WEB_FONT_STACK,        fontWeight: '700',      },    },    ios: {      regular: {        fontFamily: 'System',        fontWeight: '400',      },      medium: {        fontFamily: 'System',        fontWeight: '500',      },      bold: {        fontFamily: 'System',        fontWeight: '600',      },      heavy: {        fontFamily: 'System',        fontWeight: '700',      },    },    default: {      regular: {        fontFamily: 'sans-serif',        fontWeight: 'normal',      },      medium: {        fontFamily: 'sans-serif-medium',        fontWeight: 'normal',      },      bold: {        fontFamily: 'sans-serif',        fontWeight: '600',      },      heavy: {        fontFamily: 'sans-serif',        fontWeight: '700',      },    },  }),};
```

Providing a theme will take care of styling of all the official navigators. React Navigation also provides several tools to help you make your customizations of those navigators and the screens within the navigators can use the theme too.

## Built-in themes[](https://reactnavigation.org/docs/shared-element-transitions/#built-in-themes "Direct link to Built-in themes")

As operating systems add built-in support for light and dark modes, supporting dark mode is less about keeping hip to trends and more about conforming to the average user expectations for how apps should work. In order to provide support for light and dark mode in a way that is reasonably consistent with the OS defaults, these themes are built in to React Navigation.

You can import the default and dark themes like so:

```
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
```

## Keeping the native theme in sync[](https://reactnavigation.org/docs/shared-element-transitions/#keeping-the-native-theme-in-sync "Direct link to Keeping the native theme in sync")

If you're changing the theme in the app, native UI elements such as Alert, ActionSheet etc. won't reflect the new theme. You can do the following to keep the native theme in sync:

```
React.useEffect(() => {  const colorScheme = theme.dark ? 'dark' : 'light';  if (Platform.OS === 'web') {    document.documentElement.style.colorScheme = colorScheme;  } else {    Appearance.setColorScheme(colorScheme);  }}, [theme.dark]);
```

Alternatively, you can use the [`useColorScheme`](https://reactnavigation.org/docs/shared-element-transitions/#using-the-operating-system-preferences) hook to get the current native color scheme and update the theme accordingly.

## Using the operating system preferences[](https://reactnavigation.org/docs/shared-element-transitions/#using-the-operating-system-preferences "Direct link to Using the operating system preferences")

On iOS 13+ and Android 10+, you can get user's preferred color scheme (`'dark'` or `'light'`) with the ([`useColorScheme` hook](https://reactnative.dev/docs/usecolorscheme)).

-   Static
-   Dynamic

```
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';import {  NavigationContainer,  DefaultTheme,  DarkTheme,  useTheme,} from '@react-navigation/native';export default function App() {  const scheme = useColorScheme();  return (    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>      <Drawer.Navigator>        <Drawer.Screen name="Home" component={HomeScreen} />        <Drawer.Screen          name="Root"          component={Root}          options={{ headerShown: false }}        />      </Drawer.Navigator>    </NavigationContainer>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Operating+system+color+theme&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text%2C+TouchableOpacity%2C+useColorScheme+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++DefaultTheme%2C%0A++DarkTheme%2C%0A++useTheme%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createDrawerNavigator+%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+SettingsScreen%28%7B+route%2C+navigation+%7D%29+%7B%0A++const+%7B+user+%7D+%3D+route.params%3B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3ESettings+Screen%3C%2FText%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3E%0A++++++++userParam%3A+%7BJSON.stringify%28user%29%7D%0A++++++%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+MyButton%28%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CTouchableOpacity+style%3D%7B%7B+backgroundColor%3A+colors.card+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EButton%21%3C%2FText%3E%0A++++%3C%2FTouchableOpacity%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EHome+Screen%3C%2FText%3E%0A++++++%3CMyButton+%2F%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.navigate%28%27Root%27%2C+%7B%0A++++++++++++screen%3A+%27Settings%27%2C%0A++++++++++++params%3A+%7B+user%3A+%27jane%27+%7D%2C%0A++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+Root%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0A%0Aexport+default+function+App%28%29+%7B%0A++const+scheme+%3D+useColorScheme%28%29%3B%0A%0A++return+%28%0A++++%3CNavigationContainer+theme%3D%7Bscheme+%3D%3D%3D+%27dark%27+%3F+DarkTheme+%3A+DefaultTheme%7D%3E%0A++++++%3CDrawer.Navigator%3E%0A++++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CDrawer.Screen%0A++++++++++name%3D%22Root%22%0A++++++++++component%3D%7BRoot%7D%0A++++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++%2F%3E%0A++++++%3C%2FDrawer.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## Using the current theme in your own components[](https://reactnavigation.org/docs/shared-element-transitions/#using-the-current-theme-in-your-own-components "Direct link to Using the current theme in your own components")

To gain access to the theme in any component that is rendered inside the navigation container:, you can use the `useTheme` hook. It returns the theme object:

-   Static
-   Dynamic

```
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';import {  NavigationContainer,  DefaultTheme,  DarkTheme,  useTheme,  useNavigation,} from '@react-navigation/native';function MyButton() {  const { colors } = useTheme();  return (    <TouchableOpacity style={{ backgroundColor: colors.card }}>      <Text style={{ color: colors.text }}>Button!</Text>    </TouchableOpacity>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=System+themes&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text%2C+TouchableOpacity%2C+useColorScheme+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++DefaultTheme%2C%0A++DarkTheme%2C%0A++useTheme%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createDrawerNavigator+%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0A%0Afunction+SettingsScreen%28%7B+route%2C+navigation+%7D%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A++const+%7B+user+%7D+%3D+route.params%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3ESettings+Screen%3C%2FText%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3E%0A++++++++userParam%3A+%7BJSON.stringify%28user%29%7D%0A++++++%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0A%0Afunction+MyButton%28%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CTouchableOpacity+style%3D%7B%7B+backgroundColor%3A+colors.card+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EButton%21%3C%2FText%3E%0A++++%3C%2FTouchableOpacity%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EHome+Screen%3C%2FText%3E%0A++++++%3CMyButton+%2F%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.navigate%28%27Root%27%2C+%7B%0A++++++++++++screen%3A+%27Settings%27%2C%0A++++++++++++params%3A+%7B+user%3A+%27jane%27+%7D%2C%0A++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+Root%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++const+scheme+%3D+useColorScheme%28%29%3B%0A%0A++return+%28%0A++++%3CNavigationContainer+theme%3D%7Bscheme+%3D%3D%3D+%27dark%27+%3F+DarkTheme+%3A+DefaultTheme%7D%3E%0A++++++%3CDrawer.Navigator+initialRouteName%3D%22Root%22%3E%0A++++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CDrawer.Screen%0A++++++++++name%3D%22Root%22%0A++++++++++component%3D%7BRoot%7D%0A++++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++%2F%3E%0A++++++%3C%2FDrawer.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)


## Troubleshooting  React Navigation

---
created: 2025-02-08T17:01:57 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Troubleshooting | React Navigation

> ## Excerpt
> This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself.

---
This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself.

Before troubleshooting an issue, make sure that you have upgraded to **the latest available versions** of the packages. You can install the latest versions by installing the packages again (e.g. `npm install package-name`).

## I'm getting an error "Unable to resolve module" after updating to the latest version[](https://reactnavigation.org/docs/shared-element-transitions/#im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version "Direct link to I'm getting an error "Unable to resolve module" after updating to the latest version")

This might happen for 3 reasons:

### Stale cache of Metro bundler[](https://reactnavigation.org/docs/shared-element-transitions/#stale-cache-of-metro-bundler "Direct link to Stale cache of Metro bundler")

If the module points to a local file (i.e. the name of the module starts with `./`), then it's probably due to stale cache. To fix this, try the following solutions.

If you're using Expo, run:

If you're not using Expo, run:

```
npx react-native start --reset-cache
```

If that doesn't work, you can also try the following:

```
rm -rf $TMPDIR/metro-bundler-cache-*
```

### Missing peer dependency[](https://reactnavigation.org/docs/shared-element-transitions/#missing-peer-dependency "Direct link to Missing peer dependency")

If the module points to an npm package (i.e. the name of the module doesn't with `./`), then it's probably due to a missing dependency. To fix this, install the dependency in your project:

-   npm
-   Yarn
-   pnpm

```
npm install name-of-the-module
```

Sometimes it might even be due to a corrupt installation. If clearing cache didn't work, try deleting your `node_modules` folder and run `npm install` again.

### Missing extensions in metro configuration[](https://reactnavigation.org/docs/shared-element-transitions/#missing-extensions-in-metro-configuration "Direct link to Missing extensions in metro configuration")

Sometimes the error may look like this:

```
Error: While trying to resolve module "@react-navigation/native" from file "/path/to/src/App.js", the package "/path/to/node_modules/@react-navigation/native/package.json" was successfully found. However, this package itself specifies a "main" module field that could not be resolved ("/path/to/node_modules/@react-navigation/native/src/index.tsx"
```

This can happen if you have a custom configuration for metro and haven't specified `ts` and `tsx` as valid extensions. These extensions are present in the default configuration. To check if this is the issue, look for a `metro.config.js` file in your project and check if you have specified the [`sourceExts`](https://facebook.github.io/metro/docs/en/configuration#sourceexts) option. It should at least have the following configuration:

```
sourceExts: ['js', 'json', 'ts', 'tsx'];
```

If it's missing these extensions, add them and then clear metro cache as shown in the section above.

## I'm getting "SyntaxError in @react-navigation/xxx/xxx.tsx" or "SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token"[](https://reactnavigation.org/docs/shared-element-transitions/#im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token "Direct link to I'm getting "SyntaxError in @react-navigation/xxx/xxx.tsx" or "SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token"")

This might happen if you have an old version of the `@react-native/babel-preset` package. Try upgrading it to the latest version.

-   npm
-   Yarn
-   pnpm

```
npm install --save-dev @react-native/babel-preset
```

If you have `@babel/core` installed, also upgrade it to latest version.

-   npm
-   Yarn
-   pnpm

```
npm install --save-dev @babel/core
```

If upgrading the packages don't help, you can also try deleting your `node_modules` and then the lock the file and reinstall your dependencies.

If you use `npm`:

```
rm -rf node_modulesrm package-lock.jsonnpm install
```

If you use `yarn`:

```
rm -rf node_modulesrm yarn.lockyarn
```

warning

Deleting the lockfile is generally not recommended as it may upgrade your dependencies to versions that haven't been tested with your project. So only use this as a last resort.

After upgrading or reinstalling the packages, you should also clear Metro bundler's cache following the instructions earlier in the page.

## I'm getting "Module '\[...\]' has no exported member 'xxx' when using TypeScript[](https://reactnavigation.org/docs/shared-element-transitions/#im-getting-module--has-no-exported-member-xxx-when-using-typescript "Direct link to I'm getting "Module '[...]' has no exported member 'xxx' when using TypeScript")

This might happen if you have an old version of TypeScript in your project. You can try upgrading it:

-   npm
-   Yarn
-   pnpm

```
npm install --save-dev typescript
```

## I'm getting an error "null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')"[](https://reactnavigation.org/docs/shared-element-transitions/#im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection "Direct link to I'm getting an error "null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')"")

This and some similar errors might occur if you have a bare React Native project and the library [`react-native-gesture-handler`](https://github.com/software-mansion/react-native-gesture-handler) library isn't linked.

Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:

```
react-native unlink react-native-gesture-handler
```

If you're testing on iOS and use Mac, make sure you have run `pod install` in the `ios/` folder:

Now rebuild the app and test on your device or simulator.

## I'm getting an error "requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager"[](https://reactnavigation.org/docs/shared-element-transitions/#im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager "Direct link to I'm getting an error "requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager"")

This and some similar errors might occur if you have a bare React Native project and the library [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context) library isn't linked.

Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:

```
react-native unlink react-native-safe-area-context
```

If you're testing on iOS and use Mac, make sure you have run `pod install` in the `ios/` folder:

Now rebuild the app and test on your device or simulator.

## I'm getting an error "Tried to register two views with the same name RNCSafeAreaProvider"[](https://reactnavigation.org/docs/shared-element-transitions/#im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider "Direct link to I'm getting an error "Tried to register two views with the same name RNCSafeAreaProvider"")

This might occur if you have multiple versions of [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context) installed.

If you're using Expo managed workflow, it's likely that you have installed an incompatible version. To install the correct version, run:

```
npx expo install react-native-safe-area-context
```

If it didn't fix the error or you're not using Expo managed workflow, you'll need to check which package depends on a different version of `react-native-safe-area-context`.

If you use `yarn`, run:

```
yarn why react-native-safe-area-context
```

If you use `npm`, run:

```
npm ls react-native-safe-area-context
```

This will tell you if a package you use has a dependency on `react-native-safe-area-context`. If it's a third-party package, you should open an issue on the relevant repo's issue tracker explaining the problem. Generally for libraries, dependencies containing native code should be defined in `peerDependencies` instead of `dependencies` to avoid such issues.

If it's already in `peerDependencies` and not in `dependencies`, and you use `npm`, it might be because of incompatible version range defined for the package. The author of the library will need to relax the version range in such cases to allow a wider range of versions to be installed.

If you use `yarn`, you can also temporarily override the version being installed using `resolutions`. Add the following in your `package.json`:

```
"resolutions": {  "react-native-safe-area-context": "<version you want to use>"}
```

And then run:

If you're on iOS and not using Expo managed workflow, also run:

Now rebuild the app and test on your device or simulator.

## Nothing is visible on the screen after adding a `View`[](https://reactnavigation.org/docs/shared-element-transitions/#nothing-is-visible-on-the-screen-after-adding-a-view "Direct link to nothing-is-visible-on-the-screen-after-adding-a-view")

If you wrap the container in a `View`, make sure the `View` stretches to fill the container using `flex: 1`:

-   Static
-   Dynamic

```
import * as React from 'react';import { View } from 'react-native';import { NavigationContainer } from '@react-navigation/native';export default function App() {  return (    <View style={{ flex: 1 }}>      <NavigationContainer>{/* ... */}</NavigationContainer>    </View>  );}
```

## I get the warning "Non-serializable values were found in the navigation state"[](https://reactnavigation.org/docs/shared-element-transitions/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state "Direct link to I get the warning "Non-serializable values were found in the navigation state"")

This can happen if you are passing non-serializable values such as class instances, functions etc. in params. React Navigation warns you in this case because this can break other functionality such [state persistence](https://reactnavigation.org/docs/state-persistence), [deep linking](https://reactnavigation.org/docs/deep-linking) etc.

Example of some use cases for passing functions in params are the following:

-   To pass a callback to use in a header button. This can be achieved using `navigation.setOptions` instead. See the [guide for header buttons](https://reactnavigation.org/docs/header-buttons#header-interaction-with-its-screen-component) for examples.
-   To pass a callback to the next screen which it can call to pass some data back. You can usually achieve it using `navigate` instead. See the [guide for params](https://reactnavigation.org/docs/params) for examples.
-   To pass complex data to another screen. Instead of passing the data `params`, you can store that complex data somewhere else (like a global store), and pass an id instead. Then the screen can get the data from the global store using the id. See [what should be in params](https://reactnavigation.org/docs/params#what-should-be-in-params).
-   Pass data, callbacks etc. from a parent to child screens. You can either use React Context, or pass a children callback to pass these down instead of using params. See [passing additional props](https://reactnavigation.org/docs/hello-react-navigation#passing-additional-props).

If you don't use state persistence or deep link to the screen which accepts functions in params, then the warning doesn't affect you and you can safely ignore it. To ignore the warning, you can use `LogBox.ignoreLogs`.

Example:

```
import { LogBox } from 'react-native';LogBox.ignoreLogs([  'Non-serializable values were found in the navigation state',]);
```

## I'm getting "Invalid hook call. Hooks can only be called inside of the body of a function component"[](https://reactnavigation.org/docs/shared-element-transitions/#im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component "Direct link to I'm getting "Invalid hook call. Hooks can only be called inside of the body of a function component"")

This can happen when you pass a React component to an option that accepts a function returning a react element. For example, the [`headerTitle` option in native stack navigator](https://reactnavigation.org/docs/native-stack-navigator#headertitle) expects a function returning a react element:

-   Static
-   Dynamic

```
<Stack.Screen  name="Home"  component={Home}  option={{    headerTitle: (props) => <MyTitle {...props} />,  }}/>
```

If you directly pass a function here, you'll get this error when using hooks:

-   Static
-   Dynamic

```
<Stack.Screen  name="Home"  component={Home}  option={{    // This is not correct    headerTitle: MyTitle,  }}/>
```

The same applies to other options like `headerLeft`, `headerRight`, `tabBarIcon` etc. as well as props such as `tabBar`, `drawerContent` etc.

## Screens are unmounting/remounting during navigation[](https://reactnavigation.org/docs/shared-element-transitions/#screens-are-unmountingremounting-during-navigation "Direct link to Screens are unmounting/remounting during navigation")

Sometimes you might have noticed that your screens unmount/remount, or your local component state or the navigation state resets when you navigate. This might happen if you are creating React components during render.

The simplest example is something like following:

```
function App() {  return (    <Stack.Navigator>      <Stack.Screen        name="Home"        component={() => {          return <SomeComponent />;        }}      />    </Stack.Navigator>  );}
```

The `component` prop expects a React Component, but in the example, it's getting a function returning an React Element. While superficially a component and a function returning a React Element look the exact same, they don't behave the same way when used.

Here, every time the component re-renders, a new function will be created and passed to the `component` prop. React will see a new component and unmount the previous component before rendering the new one. This will cause any local state in the old component to be lost. React Navigation will detect and warn for this specific case but there can be other ways you might be creating components during render which it can't detect.

Another easy to identify example of this is when you create a component inside another component:

-   Static
-   Dynamic

```
function App() {  const Home = () => {    return <SomeComponent />;  };  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={Home} />    </Stack.Navigator>  );}
```

Or when you use a higher order component (such as `connect` from Redux, or `withX` functions that accept a component) inside another component:

```
function App() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={withSomeData(Home)} />    </Stack.Navigator>  );}
```

If you're unsure, it's always best to make sure that the components you are using as screens are defined outside of a React component. They could be defined in another file and imported, or defined at the top level scope in the same file:

-   Static
-   Dynamic

```
const Home = () => {  // ...  return <SomeComponent />;};function App() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={Home} />    </Stack.Navigator>  );}
```

This is not React Navigation specific, but related to React in general. You should always avoid creating components during render, whether you are using React Navigation or not.

## App is not working properly when connected to Chrome Debugger[](https://reactnavigation.org/docs/shared-element-transitions/#app-is-not-working-properly-when-connected-to-chrome-debugger "Direct link to App is not working properly when connected to Chrome Debugger")

When the app is connected to Chrome Debugger (or other tools that use Chrome Debugger such as [React Native Debugger](https://github.com/jhen0409/react-native-debugger)) you might encounter various issues related to timing.

This can result in issues such as button presses taking a long time to register or not working at all, [gestures and animations being slow and buggy](https://github.com/facebook/react-native/issues/2367) etc. There can be other functional issues such as promises not resolving, [timeouts and intervals not working correctly](https://github.com/facebook/react-native/issues/4470) etc. as well.

The issues are not related to React Navigation, but due to the nature of how the Chrome Debugger works. When connected to Chrome Debugger, your whole app runs on Chrome and communicates with the native app via sockets over the network, which can introduce latency and timing related issues.

So, unless you are trying to debug something, it's better to test the app without being connected to the Chrome Debugger. If you are using iOS, you can alternatively use [Safari to debug your app](https://reactnative.dev/docs/debugging#safari-developer-tools) which debugs the app on the device directly and does not have these issues, though it has other downsides.


## Type checking with TypeScript  React Navigation

---
created: 2025-02-08T17:01:50 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Type checking with TypeScript | React Navigation

> ## Excerpt
> React Navigation can be configured to type-check screens and their params, as well as various other APIs using TypeScript. This provides better intelliSense and type safety when working with React Navigation.

---
When using the dynamic API, it is necessary to specify the types for each screen as well as the nesting structure as it cannot be inferred from the code.

## Typechecking the navigator[](https://reactnavigation.org/docs/shared-element-transitions/#typechecking-the-navigator "Direct link to Typechecking the navigator")

To typecheck our route name and params, the first thing we need to do is to create an object type with mappings for route names to the params of the route. For example, say we have a route called `Profile` in our root navigator which should have a param `userId`:

```
type RootStackParamList = {  Profile: { userId: string };};
```

Similarly, we need to do the same for each route:

```
type RootStackParamList = {  Home: undefined;  Profile: { userId: string };  Feed: { sort: 'latest' | 'top' } | undefined;};
```

Specifying `undefined` means that the route doesn't have params. A union type with `undefined` (e.g. `SomeType | undefined`) means that params are optional.

After we have defined the mapping, we need to tell our navigator to use it. To do that, we can pass it as a generic to the [`createXNavigator`](https://reactnavigation.org/docs/static-configuration) functions:

```
import { createStackNavigator } from '@react-navigation/stack';const RootStack = createStackNavigator<RootStackParamList>();
```

And then we can use it:

```
<RootStack.Navigator initialRouteName="Home">  <RootStack.Screen name="Home" component={Home} />  <RootStack.Screen    name="Profile"    component={Profile}    initialParams={{ userId: user.id }}  />  <RootStack.Screen name="Feed" component={Feed} /></RootStack.Navigator>
```

This will provide type checking and intelliSense for props of the [`Navigator`](https://reactnavigation.org/docs/navigator) and [`Screen`](https://reactnavigation.org/docs/screen) components.

note

The type containing the mapping must be a type alias (e.g. `type RootStackParamList = { ... }`). It cannot be an interface (e.g. `interface RootStackParamList { ... }`). It also shouldn't extend `ParamListBase` (e.g. `interface RootStackParamList extends ParamListBase { ... }`). Doing so will result in incorrect type checking which allows you to pass incorrect route names.

If you have an [`id`](https://reactnavigation.org/docs/navigator#id) prop for your navigator, you will also need to pass it as a generic:

```
const RootStack = createStackNavigator<RootStackParamList, 'MyStack'>();
```

## Type checking screens[](https://reactnavigation.org/docs/shared-element-transitions/#type-checking-screens "Direct link to Type checking screens")

To typecheck our screens, we need to annotate the `navigation` and the `route` props received by a screen. The navigator packages in React Navigation export generic types to define types for both the `navigation` and `route` props from the corresponding navigator.

For example, you can use `NativeStackScreenProps` for the Native Stack Navigator.

```
import type { NativeStackScreenProps } from '@react-navigation/native-stack';type RootStackParamList = {  Home: undefined;  Profile: { userId: string };  Feed: { sort: 'latest' | 'top' } | undefined;};type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
```

The type takes 3 generics:

-   The param list object we defined earlier
-   The name of the route the screen belongs to
-   The ID of the navigator (optional)

If you have an [`id`](https://reactnavigation.org/docs/navigator#id) prop for your navigator, you can do:

```
type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;
```

This allows us to type check route names and params which you're navigating using [`navigate`](https://reactnavigation.org/docs/navigation-object#navigate), [`push`](https://reactnavigation.org/docs/stack-actions#push) etc. The name of the current route is necessary to type check the params in `route.params` and when you call [`setParams`](https://reactnavigation.org/docs/navigation-actions#setparams).

Similarly, you can import `StackScreenProps` from [`@react-navigation/stack`](https://reactnavigation.org/docs/stack-navigator), `DrawerScreenProps` from [`@react-navigation/drawer`](https://reactnavigation.org/docs/drawer-navigator), `BottomTabScreenProps` from [`@react-navigation/bottom-tabs`](https://reactnavigation.org/docs/bottom-tab-navigator) and so on.

Then you can use the `Props` type you defined above to annotate your component.

For function components:

```
function ProfileScreen({ route, navigation }: Props) {  // ...}
```

For class components:

```
class ProfileScreen extends React.Component<Props> {  render() {    // ...  }}
```

You can get the types for `navigation` and `route` from the `Props` type as follows:

```
type ProfileScreenNavigationProp = Props['navigation'];type ProfileScreenRouteProp = Props['route'];
```

Alternatively, you can also annotate the `navigation` and `route` objects separately.

To get the type for the `navigation` prop, we need to import the corresponding type from the navigator. For example, `NativeStackNavigationProp` for `@react-navigation/native-stack`:

```
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';type ProfileScreenNavigationProp = NativeStackNavigationProp<  RootStackParamList,  'Profile'>;
```

Similarly, you can import `StackNavigationProp` from [`@react-navigation/stack`](https://reactnavigation.org/docs/stack-navigator), `DrawerNavigationProp` from [`@react-navigation/drawer`](https://reactnavigation.org/docs/drawer-navigator), `BottomTabNavigationProp` from [`@react-navigation/bottom-tabs`](https://reactnavigation.org/docs/bottom-tab-navigator) etc.

To get the type for the `route` object, we need to use the `RouteProp` type from `@react-navigation/native`:

```
import type { RouteProp } from '@react-navigation/native';type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
```

We recommend creating a separate file: `types.tsx` - where you keep the types and import from there in your component files instead of repeating them in each file.

## Nesting navigators[](https://reactnavigation.org/docs/shared-element-transitions/#nesting-navigators "Direct link to Nesting navigators")

### Type checking screens and params in nested navigator[](https://reactnavigation.org/docs/shared-element-transitions/#type-checking-screens-and-params-in-nested-navigator "Direct link to Type checking screens and params in nested navigator")

You can [navigate to a screen in a nested navigator](https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator) by passing `screen` and `params` properties for the nested screen:

```
navigation.navigate('Home', {  screen: 'Feed',  params: { sort: 'latest' },});
```

To be able to type check this, we need to extract the params from the screen containing the nested navigator. This can be done using the `NavigatorScreenParams` utility:

```
import { NavigatorScreenParams } from '@react-navigation/native';type TabParamList = {  Home: NavigatorScreenParams<StackParamList>;  Profile: { userId: string };};
```

### Combining navigation props[](https://reactnavigation.org/docs/shared-element-transitions/#combining-navigation-props "Direct link to Combining navigation props")

When you nest navigators, the navigation prop of the screen is a combination of multiple navigation props. For example, if we have a tab inside a stack, the `navigation` prop will have both [`jumpTo`](https://reactnavigation.org/docs/tab-actions#jumpto) (from the tab navigator) and [`push`](https://reactnavigation.org/docs/stack-actions#push) (from the stack navigator). To make it easier to combine types from multiple navigators, you can use the `CompositeScreenProps` type:

```
import type { CompositeScreenProps } from '@react-navigation/native';import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';import type { StackScreenProps } from '@react-navigation/stack';type ProfileScreenProps = CompositeScreenProps<  BottomTabScreenProps<TabParamList, 'Profile'>,  StackScreenProps<StackParamList>>;
```

The `CompositeScreenProps` type takes 2 parameters, the first parameter is the type of props for the primary navigation (type for the navigator that owns this screen, in our case the tab navigator which contains the `Profile` screen) and the second parameter is the type of props for secondary navigation (type for a parent navigator). The primary type should always have the screen's route name as its second parameter.

For multiple parent navigators, this secondary type should be nested:

```
type ProfileScreenProps = CompositeScreenProps<  BottomTabScreenProps<TabParamList, 'Profile'>,  CompositeScreenProps<    StackScreenProps<StackParamList>,    DrawerScreenProps<DrawerParamList>  >>;
```

If annotating the `navigation` prop separately, you can use `CompositeNavigationProp` instead. The usage is similar to `CompositeScreenProps`:

```
import type { CompositeNavigationProp } from '@react-navigation/native';import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';import type { StackNavigationProp } from '@react-navigation/stack';type ProfileScreenNavigationProp = CompositeNavigationProp<  BottomTabNavigationProp<TabParamList, 'Profile'>,  StackNavigationProp<StackParamList>>;
```

## Annotating `useNavigation`[](https://reactnavigation.org/docs/shared-element-transitions/#annotating-usenavigation "Direct link to annotating-usenavigation")

danger

Annotating `useNavigation` isn't type-safe because the type parameter cannot be statically verified. Prefer [specifying a default type](https://reactnavigation.org/docs/shared-element-transitions/#specifying-default-types-for-usenavigation-link-ref-etc) instead.

To annotate the `navigation` object that we get from [`useNavigation`](https://reactnavigation.org/docs/use-navigation), we can use a type parameter:

```
const navigation = useNavigation<ProfileScreenNavigationProp>();
```

## Annotating `useRoute`[](https://reactnavigation.org/docs/shared-element-transitions/#annotating-useroute "Direct link to annotating-useroute")

danger

Annotating `useRoute` isn't type-safe because the type parameter cannot be statically verified. Prefer using the [`route` object](https://reactnavigation.org/docs/route-object) from the screen component's props instead when possible. Use `useRoute` for generic code that doesn't need specific route type.

To annotate the `route` object that we get from [`useRoute`](https://reactnavigation.org/docs/use-route), we can use a type parameter:

```
const route = useRoute<ProfileScreenRouteProp>();
```

## Annotating `options` and `screenOptions`[](https://reactnavigation.org/docs/shared-element-transitions/#annotating-options-and-screenoptions "Direct link to annotating-options-and-screenoptions")

When you pass the `options` to a `Screen` or `screenOptions` prop to a `Navigator` component, they are already type-checked and you don't need to do anything special. However, sometimes you might want to extract the options to a separate object, and you might want to annotate it.

To annotate the options, we need to import the corresponding type from the navigator. For example, `StackNavigationOptions` for `@react-navigation/stack`:

```
import type { StackNavigationOptions } from '@react-navigation/stack';const options: StackNavigationOptions = {  headerShown: false,};
```

Similarly, you can import `DrawerNavigationOptions` from `@react-navigation/drawer`, `BottomTabNavigationOptions` from `@react-navigation/bottom-tabs` etc.

When using the function form of `options` and `screenOptions`, you can annotate the arguments with a type exported from the navigator, e.g. `StackOptionsArgs` for `@react-navigation/stack`, `DrawerOptionsArgs` for `@react-navigation/drawer`, `BottomTabOptionsArgs` for `@react-navigation/bottom-tabs` etc.:

```
import type {  StackNavigationOptions,  StackOptionsArgs,} from '@react-navigation/stack';const options = ({ route }: StackOptionsArgs): StackNavigationOptions => {  return {    headerTitle: route.name,  };};
```

## Annotating `ref` on `NavigationContainer`[](https://reactnavigation.org/docs/shared-element-transitions/#annotating-ref-on-navigationcontainer "Direct link to annotating-ref-on-navigationcontainer")

If you use the `createNavigationContainerRef()` method to create the ref, you can annotate it to type-check navigation actions:

```
import { createNavigationContainerRef } from '@react-navigation/native';// ...const navigationRef = createNavigationContainerRef<RootStackParamList>();
```

Similarly, for `useNavigationContainerRef()`:

```
import { useNavigationContainerRef } from '@react-navigation/native';// ...const navigationRef = useNavigationContainerRef<RootStackParamList>();
```

If you're using a regular `ref` object, you can pass a generic to the `NavigationContainerRef` type..

Example when using `React.useRef` hook:

```
import type { NavigationContainerRef } from '@react-navigation/native';// ...const navigationRef =  React.useRef<NavigationContainerRef<RootStackParamList>>(null);
```

Example when using `React.createRef`:

```
import type { NavigationContainerRef } from '@react-navigation/native';// ...const navigationRef =  React.createRef<NavigationContainerRef<RootStackParamList>>();
```

## Specifying default types for `useNavigation`, `Link`, `ref` etc[](https://reactnavigation.org/docs/shared-element-transitions/#specifying-default-types-for-usenavigation-link-ref-etc "Direct link to specifying-default-types-for-usenavigation-link-ref-etc")

Instead of manually annotating these APIs, you can specify a global type for your root navigator which will be used as the default type.

To do this, you can add this snippet somewhere in your codebase:

```
declare global {  namespace ReactNavigation {    interface RootParamList extends RootStackParamList {}  }}
```

The `RootParamList` interface lets React Navigation know about the params accepted by your root navigator. Here we extend the type `RootStackParamList` because that's the type of params for our stack navigator at the root. The name of this type isn't important.

Specifying this type is important if you heavily use [`useNavigation`](https://reactnavigation.org/docs/use-navigation), [`Link`](https://reactnavigation.org/docs/link) etc. in your app since it'll ensure type-safety. It will also make sure that you have correct nesting on the [`linking`](https://reactnavigation.org/docs/navigation-container#linking) prop.

## Organizing types[](https://reactnavigation.org/docs/shared-element-transitions/#organizing-types "Direct link to Organizing types")

When writing types for React Navigation, there are a couple of things we recommend to keep things organized.

1.  It's good to create a separate file (e.g. `navigation/types.tsx`) that contains the types related to React Navigation.
2.  Instead of using `CompositeNavigationProp` directly in your components, it's better to create a helper type that you can reuse.
3.  Specifying a global type for your root navigator would avoid manual annotations in many places.

Considering these recommendations, the file containing the types may look something like this:

```
import type {  CompositeScreenProps,  NavigatorScreenParams,} from '@react-navigation/native';import type { StackScreenProps } from '@react-navigation/stack';import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';export type RootStackParamList = {  Home: NavigatorScreenParams<HomeTabParamList>;  PostDetails: { id: string };  NotFound: undefined;};export type RootStackScreenProps<T extends keyof RootStackParamList> =  StackScreenProps<RootStackParamList, T>;export type HomeTabParamList = {  Popular: undefined;  Latest: undefined;};export type HomeTabScreenProps<T extends keyof HomeTabParamList> =  CompositeScreenProps<    BottomTabScreenProps<HomeTabParamList, T>,    RootStackScreenProps<keyof RootStackParamList>  >;declare global {  namespace ReactNavigation {    interface RootParamList extends RootStackParamList {}  }}
```

Now, when annotating your components, you can write:

```
import type { HomeTabScreenProps } from './navigation/types';function PopularScreen({ navigation, route }: HomeTabScreenProps<'Popular'>) {  // ...}
```

If you're using hooks such as [`useRoute`](https://reactnavigation.org/docs/use-route), you can write:

```
import type { HomeTabScreenProps } from './navigation/types';function PopularScreen() {  const route = useRoute<HomeTabScreenProps<'Popular'>['route']>();  // ...}
```


# 03 Navigators

## Bottom Tabs Navigator  React Navigation

---
created: 2025-02-08T17:02:52 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Bottom Tabs Navigator | React Navigation

> ## Excerpt
> A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.

---
A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this navigator, ensure that you have [`@react-navigation/native` and its dependencies (follow this guide)](https://reactnavigation.org/docs/getting-started), then install [`@react-navigation/bottom-tabs`](https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs):

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/bottom-tabs
```

## Usage[](https://reactnavigation.org/docs/shared-element-transitions/#usage "Direct link to Usage")

To use this navigator, import it from `@react-navigation/bottom-tabs`:

-   Static
-   Dynamic

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';const Tab = createBottomTabNavigator();function MyTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Home" component={HomeScreen} />      <Tab.Screen name="Profile" component={ProfileScreen} />    </Tab.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Bottom+Tab+Navigator&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+MyTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Home%27%29%7D%3EGo+to+Home%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyTabs+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## API Definition[](https://reactnavigation.org/docs/shared-element-transitions/#api-definition "Direct link to API Definition")

### Props[](https://reactnavigation.org/docs/shared-element-transitions/#props "Direct link to Props")

In addition to the [common props](https://reactnavigation.org/docs/navigator#configuration) shared by all navigators, the bottom tab navigator accepts the following additional props:

#### `backBehavior`[](https://reactnavigation.org/docs/shared-element-transitions/#backbehavior "Direct link to backbehavior")

This controls what happens when `goBack` is called in the navigator. This includes pressing the device's back button or back gesture on Android.

It supports the following values:

-   `firstRoute` - return to the first screen defined in the navigator (default)
-   `initialRoute` - return to initial screen passed in `initialRouteName` prop, if not passed, defaults to the first screen
-   `order` - return to screen defined before the focused screen
-   `history` - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history
-   `none` - do not handle back button

#### `detachInactiveScreens`[](https://reactnavigation.org/docs/shared-element-transitions/#detachinactivescreens "Direct link to detachinactivescreens")

Boolean used to indicate whether inactive screens should be detached from the view hierarchy to save memory. This enables integration with [react-native-screens](https://github.com/software-mansion/react-native-screens). Defaults to `true`.

#### `tabBar`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbar "Direct link to tabbar")

Function that returns a React element to display as the tab bar.

The function receives an object containing the following properties as the argument:

-   `state` - The state object for the tab navigator.
-   `descriptors` - The descriptors object containing options for the tab navigator.
-   `navigation` - The navigation object for the tab navigator.

The `state.routes` array contains all the routes defined in the navigator. Each route's options can be accessed using `descriptors[route.key].options`.

Example:

-   Static
-   Dynamic

```
import { View, Platform } from 'react-native';import { useLinkBuilder, useTheme } from '@react-navigation/native';import { Text, PlatformPressable } from '@react-navigation/elements';import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';function MyTabBar({ state, descriptors, navigation }) {  const { colors } = useTheme();  const { buildHref } = useLinkBuilder();  return (    <View style={{ flexDirection: 'row' }}>      {state.routes.map((route, index) => {        const { options } = descriptors[route.key];        const label =          options.tabBarLabel !== undefined            ? options.tabBarLabel            : options.title !== undefined              ? options.title              : route.name;        const isFocused = state.index === index;        const onPress = () => {          const event = navigation.emit({            type: 'tabPress',            target: route.key,            canPreventDefault: true,          });          if (!isFocused && !event.defaultPrevented) {            navigation.navigate(route.name, route.params);          }        };        const onLongPress = () => {          navigation.emit({            type: 'tabLongPress',            target: route.key,          });        };        return (          <PlatformPressable            href={buildHref(route.name, route.params)}            accessibilityState={isFocused ? { selected: true } : {}}            accessibilityLabel={options.tabBarAccessibilityLabel}            testID={options.tabBarButtonTestID}            onPress={onPress}            onLongPress={onLongPress}            style={{ flex: 1 }}          >            <Text style={{ color: isFocused ? colors.primary : colors.text }}>              {label}            </Text>          </PlatformPressable>        );      })}    </View>  );}function MyTabs() {  return (    <Tab.Navigator      tabBar={(props) => <MyTabBar {...props} />}    >      <Tab.Screen name="Home" component={HomeScreen} />      <Tab.Screen name="Profile" component={ProfileScreen} />    </Tab.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Custom+tab+bar&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B%0A++createStaticNavigation%2C%0A++NavigationContainer%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+View%2C+Platform+%7D+from+%27react-native%27%3B%0Aimport+%7B+useLinkBuilder%2C+useTheme+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Text%2C+PlatformPressable+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Afunction+MyTabBar%28%7B+state%2C+descriptors%2C+navigation+%7D%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A++const+%7B+buildHref+%7D+%3D+useLinkBuilder%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flexDirection%3A+%27row%27+%7D%7D%3E%0A++++++%7Bstate.routes.map%28%28route%2C+index%29+%3D%3E+%7B%0A++++++++const+%7B+options+%7D+%3D+descriptors%5Broute.key%5D%3B%0A++++++++const+label+%3D%0A++++++++++options.tabBarLabel+%21%3D%3D+undefined%0A++++++++++++%3F+options.tabBarLabel%0A++++++++++++%3A+options.title+%21%3D%3D+undefined%0A++++++++++++++%3F+options.title%0A++++++++++++++%3A+route.name%3B%0A%0A++++++++const+isFocused+%3D+state.index+%3D%3D%3D+index%3B%0A%0A++++++++const+onPress+%3D+%28%29+%3D%3E+%7B%0A++++++++++const+event+%3D+navigation.emit%28%7B%0A++++++++++++type%3A+%27tabPress%27%2C%0A++++++++++++target%3A+route.key%2C%0A++++++++++++canPreventDefault%3A+true%2C%0A++++++++++%7D%29%3B%0A%0A++++++++++if+%28%21isFocused+%26%26+%21event.defaultPrevented%29+%7B%0A++++++++++++navigation.navigate%28route.name%2C+route.params%29%3B%0A++++++++++%7D%0A++++++++%7D%3B%0A%0A++++++++const+onLongPress+%3D+%28%29+%3D%3E+%7B%0A++++++++++navigation.emit%28%7B%0A++++++++++++type%3A+%27tabLongPress%27%2C%0A++++++++++++target%3A+route.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%3B%0A%0A++++++++return+%28%0A++++++++++%3CPlatformPressable%0A++++++++++++href%3D%7BbuildHref%28route.name%2C+route.params%29%7D%0A++++++++++++accessibilityState%3D%7BisFocused+%3F+%7B+selected%3A+true+%7D+%3A+%7B%7D%7D%0A++++++++++++accessibilityLabel%3D%7Boptions.tabBarAccessibilityLabel%7D%0A++++++++++++testID%3D%7Boptions.tabBarButtonTestID%7D%0A++++++++++++onPress%3D%7BonPress%7D%0A++++++++++++onLongPress%3D%7BonLongPress%7D%0A++++++++++++style%3D%7B%7B+flex%3A+1+%7D%7D%0A++++++++++%3E%0A++++++++++++%3CText+style%3D%7B%7B+color%3A+isFocused+%3F+colors.primary+%3A+colors.text+%7D%7D%3E%0A++++++++++++++%7Blabel%7D%0A++++++++++++%3C%2FText%3E%0A++++++++++%3C%2FPlatformPressable%3E%0A++++++++%29%3B%0A++++++%7D%29%7D%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+MyTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%0A++++++tabBar%3D%7B%28props%29+%3D%3E+%3CMyTabBar+%7B...props%7D+%2F%3E%7D%0A++++%3E%0A++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyTabs+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

This example will render a basic tab bar with labels.

Note that you **cannot** use the `useNavigation` hook inside the `tabBar` since `useNavigation` is only available inside screens. You get a `navigation` prop for your `tabBar` which you can use instead:

```
function MyTabBar({ navigation }) {  return (    <Button      onPress={() => {        // Navigate using the `navigation` prop that you received        navigation.navigate('SomeScreen');      }}    >      Go somewhere    </Button>  );}
```

### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

The following [options](https://reactnavigation.org/docs/screen-options) can be used to configure the screens in the navigator. These can be specified under `screenOptions` prop of `Tab.navigator` or `options` prop of `Tab.Screen`.

#### `title`[](https://reactnavigation.org/docs/shared-element-transitions/#title "Direct link to title")

Generic title that can be used as a fallback for `headerTitle` and `tabBarLabel`.

#### `tabBarLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarlabel "Direct link to tabbarlabel")

Title string of a tab displayed in the tab bar or a function that given `{ focused: boolean, color: string }` returns a React.Node, to display in tab bar. When undefined, scene `title` is used. To hide, see `tabBarShowLabel`.

#### `tabBarShowLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarshowlabel "Direct link to tabbarshowlabel")

Whether the tab label should be visible. Defaults to `true`.

#### `tabBarLabelPosition`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarlabelposition "Direct link to tabbarlabelposition")

Whether the label is shown below the icon or beside the icon.

By default, the position is chosen automatically based on device width.

-   `below-icon`: the label is shown below the icon (typical for iPhones)
    
    ![Tab bar label position - below](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarLabelPosition-below.png)
-   `beside-icon` the label is shown next to the icon (typical for iPad)
    
    ![Tab bar label position - beside](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarLabelPosition-beside.png)

#### `tabBarLabelStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarlabelstyle "Direct link to tabbarlabelstyle")

Style object for the tab label.

![Tab bar label style](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarLabelStyle.png)

Example:

```
    tabBarLabelStyle: {      fontSize: 16,      fontFamily: 'Georgia',      fontWeight: 300,    },
```

#### `tabBarIcon`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaricon "Direct link to tabbaricon")

Function that given `{ focused: boolean, color: string, size: number }` returns a React.Node, to display in the tab bar.

#### `tabBarIconStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbariconstyle "Direct link to tabbariconstyle")

Style object for the tab icon.

#### `tabBarBadge`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbadge "Direct link to tabbarbadge")

Text to show in a badge on the tab icon. Accepts a `string` or a `number`.

![Tab bar badge](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarBadge.png)

#### `tabBarBadgeStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbadgestyle "Direct link to tabbarbadgestyle")

Style for the badge on the tab icon. You can specify a background color or text color here.

![Tab bar badge style](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarBadgeStyle.png)

Example:

```
    tabBarBadgeStyle: {      color: 'black',      backgroundColor: 'yellow',    },
```

#### `tabBarAccessibilityLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaraccessibilitylabel "Direct link to tabbaraccessibilitylabel")

Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab.

#### `tabBarButton`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbutton "Direct link to tabbarbutton")

Function which returns a React element to render as the tab bar button. It wraps the icon and label. Renders `Pressable` by default.

You can specify a custom implementation here:

```
tabBarButton: (props) => <TouchableOpacity {...props} />;
```

#### `tabBarButtonTestID`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbuttontestid "Direct link to tabbarbuttontestid")

ID to locate this tab button in tests.

#### `tabBarActiveTintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaractivetintcolor "Direct link to tabbaractivetintcolor")

Color for the icon and label in the active tab.

![Tab bar active tint color](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarActiveTintColor.png)

#### `tabBarInactiveTintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarinactivetintcolor "Direct link to tabbarinactivetintcolor")

Color for the icon and label in the inactive tabs.

![Tab bar inactive tint color](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarInactiveTintColor.png)

#### `tabBarActiveBackgroundColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaractivebackgroundcolor "Direct link to tabbaractivebackgroundcolor")

Background color for the active tab.

#### `tabBarInactiveBackgroundColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarinactivebackgroundcolor "Direct link to tabbarinactivebackgroundcolor")

Background color for the inactive tabs.

#### `tabBarHideOnKeyboard`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarhideonkeyboard "Direct link to tabbarhideonkeyboard")

Whether the tab bar is hidden when the keyboard opens. Defaults to `false`.

#### `tabBarItemStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaritemstyle "Direct link to tabbaritemstyle")

Style object for the tab item container.

#### `tabBarStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarstyle "Direct link to tabbarstyle")

Style object for the tab bar. You can configure styles such as background color here.

To show your screen under the tab bar, you can set the `position` style to absolute:

```
<Tab.Navigator  screenOptions={{    tabBarStyle: { position: 'absolute' },  }}>
```

You also might need to add a bottom margin to your content if you have an absolutely positioned tab bar. React Navigation won't do it automatically. See [`useBottomTabBarHeight`](https://reactnavigation.org/docs/shared-element-transitions/#usebottomtabbarheight) for more details.

#### `tabBarBackground`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbackground "Direct link to tabbarbackground")

Function which returns a React Element to use as background for the tab bar. You could render an image, a gradient, blur view etc.:

```
import { BlurView } from 'expo-blur';// ...<Tab.Navigator  screenOptions={{    tabBarStyle: { position: 'absolute' },    tabBarBackground: () => (      <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />    ),  }}>
```

When using `BlurView`, make sure to set `position: 'absolute'` in `tabBarStyle` as well. You'd also need to use [`useBottomTabBarHeight`](https://reactnavigation.org/docs/shared-element-transitions/#usebottomtabbarheight) to add bottom padding to your content.

![Tab bar background](https://reactnavigation.org/assets/7.x/bottom-tabs/tabBarBackground.png)

#### `tabBarPosition`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarposition "Direct link to tabbarposition")

Position of the tab bar. Available values are:

-   `bottom` (Default)
-   `top`
-   `left`
-   `right`

When the tab bar is positioned on the `left` or `right`, it is styled as a sidebar. This can be useful when you want to show a sidebar on larger screens and a bottom tab bar on smaller screens:

-   Static
-   Dynamic

```
<Tab.Navigator  screenOptions={{    tabBarPosition: isLargeScreen ? 'left' ? 'bottom',  }}>
```

![Sidebar](https://reactnavigation.org/assets/7.x/bottom-tabs-side.png)

You can also render a compact sidebar by placing the label below the icon. This is only supported when the [`tabBarVariant`](https://reactnavigation.org/docs/shared-element-transitions/#tabbarvariant) is set to `material`:

-   Static
-   Dynamic

```
<Tab.Navigator  screenOptions={{    tabBarPosition: dimensions.width < 600 ? 'bottom' : 'left',    tabBarLabelPosition: 'below-icon',  }}>
```

![Compact sidebar](https://reactnavigation.org/assets/images/bottom-tabs-side-compact-00c9d793ff72f5512dd304c85c872b6a.png)

#### `tabBarVariant`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarvariant "Direct link to tabbarvariant")

Variant of the tab bar. Available values are:

-   `uikit` (Default) - The tab bar will be styled according to the iOS UIKit guidelines.
-   `material` - The tab bar will be styled according to the Material Design guidelines.

The `material` variant is currently only supported when the [`tabBarPosition`](https://reactnavigation.org/docs/shared-element-transitions/#tabbarposition) is set to `left` or `right`.

![Material sidebar](https://reactnavigation.org/assets/images/bottom-tabs-side-material-f306f4f31881fc875463a5e6ad74e415.png)

#### `lazy`[](https://reactnavigation.org/docs/shared-element-transitions/#lazy "Direct link to lazy")

Whether this screen should render only after the first time it's accessed. Defaults to `true`. Set it to `false` if you want to render the screen on the initial render of the navigator.

#### `freezeOnBlur`[](https://reactnavigation.org/docs/shared-element-transitions/#freezeonblur "Direct link to freezeonblur")

Boolean indicating whether to prevent inactive screens from re-rendering. Defaults to `false`. Defaults to `true` when `enableFreeze()` from `react-native-screens` package is run at the top of the application.

Only supported on iOS and Android.

#### `popToTopOnBlur`[](https://reactnavigation.org/docs/shared-element-transitions/#poptotoponblur "Direct link to poptotoponblur")

Boolean indicating whether any nested stack should be popped to the top of the stack when navigating away from this tab. Defaults to `false`.

It only works when there is a stack navigator (e.g. [stack navigator](https://reactnavigation.org/docs/stack-navigator) or [native stack navigator](https://reactnavigation.org/docs/native-stack-navigator)) nested under the tab navigator.

#### `sceneStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#scenestyle "Direct link to scenestyle")

Style object for the component wrapping the screen content.

You can find the list of header related options [here](https://reactnavigation.org/docs/elements#header). These [options](https://reactnavigation.org/docs/screen-options) can be specified under `screenOptions` prop of `Tab.navigator` or `options` prop of `Tab.Screen`. You don't have to be using `@react-navigation/elements` directly to use these options, they are just documented in that page.

In addition to those, the following options are also supported in bottom tabs:

Custom header to use instead of the default header.

This accepts a function that returns a React Element to display as a header. The function receives an object containing the following properties as the argument:

-   `navigation` - The navigation object for the current screen.
-   `route` - The route object for the current screen.
-   `options` - The options for the current screen
-   `layout` - Dimensions of the screen, contains `height` and `width` properties.

Example:

```
import { getHeaderTitle } from '@react-navigation/elements';// ..header: ({ navigation, route, options }) => {  const title = getHeaderTitle(options, route.name);  return <MyHeader title={title} style={options.headerStyle} />;};
```

To set a custom header for all the screens in the navigator, you can specify this option in the `screenOptions` prop of the navigator.

If your custom header's height differs from the default header height, then you might notice glitches due to measurement being async. Explicitly specifying the height will avoid such glitches.

Example:

```
headerStyle: {  height: 80, // Specify the height of your custom header};
```

Note that this style is not applied to the header by default since you control the styling of your custom header. If you also want to apply this style to your header, use `options.headerStyle` from the props.

Whether to show or hide the header for the screen. The header is shown by default. Setting this to `false` hides the header.

### Events[](https://reactnavigation.org/docs/shared-element-transitions/#events "Direct link to Events")

The navigator can [emit events](https://reactnavigation.org/docs/navigation-events) on certain actions. Supported events are:

#### `tabPress`[](https://reactnavigation.org/docs/shared-element-transitions/#tabpress "Direct link to tabpress")

This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:

-   If the tab is not focused, tab press will focus that tab
-   If the tab is already focused:
    -   If the screen for the tab renders a scroll view, you can use [`useScrollToTop`](https://reactnavigation.org/docs/use-scroll-to-top) to scroll it to top
    -   If the screen for the tab renders a stack navigator, a `popToTop` action is performed on the stack

To prevent the default behavior, you can call `event.preventDefault`:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('tabPress', (e) => {    // Prevent default behavior    e.preventDefault();    // Do something manually    // ...  });  return unsubscribe;}, [navigation]);
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Native%20Stack%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fbottom-tab-prevent-default.js)

If you have a custom tab bar, make sure to emit this event.

#### `tabLongPress`[](https://reactnavigation.org/docs/shared-element-transitions/#tablongpress "Direct link to tablongpress")

This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period. If you have a custom tab bar, make sure to emit this event.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('tabLongPress', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

### Helpers[](https://reactnavigation.org/docs/shared-element-transitions/#helpers "Direct link to Helpers")

The tab navigator adds the following methods to the navigation object:

#### `jumpTo`[](https://reactnavigation.org/docs/shared-element-transitions/#jumpto "Direct link to jumpto")

Navigates to an existing screen in the tab navigator. The method accepts following arguments:

-   `name` - _string_ - Name of the route to jump to.
-   `params` - _object_ - Screen params to use for the destination route.

```
navigation.jumpTo('Profile', { owner: 'Michaś' });
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Native%20Stack%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Ftab-jump-to.js)

### Hooks[](https://reactnavigation.org/docs/shared-element-transitions/#hooks "Direct link to Hooks")

The bottom tab navigator exports the following hooks:

#### `useBottomTabBarHeight`[](https://reactnavigation.org/docs/shared-element-transitions/#usebottomtabbarheight "Direct link to usebottomtabbarheight")

This hook returns the height of the bottom tab bar. By default, the screen content doesn't go under the tab bar. However, if you want to make the tab bar absolutely positioned and have the content go under it (e.g. to show a blur effect), it's necessary to adjust the content to take the tab bar height into account.

Example:

```
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';function MyComponent() {  const tabBarHeight = useBottomTabBarHeight();  return (    <ScrollView contentStyle={{ paddingBottom: tabBarHeight }}>      {/* Content */}    </ScrollView>  );}
```

Alternatively, you can use the `BottomTabBarHeightContext` directly if you are using a class component or need it in a reusable component that can be used outside the bottom tab navigator:

```
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';// ...<BottomTabBarHeightContext.Consumer>  {tabBarHeight => (    /* render something */  )}</BottomTabBarHeightContext.Consumer>
```

## Animations[](https://reactnavigation.org/docs/shared-element-transitions/#animations "Direct link to Animations")

By default, switching between tabs doesn't have any animation. You can specify the `animation` option to customize the transition animation.

Supported values for `animation` are:

-   `fade` - Cross-fade animation for the screen transition where the new screen fades in and the old screen fades out.
    
-   `shift` - Shifting animation for the screen transition where the screens slightly shift to left/right.
    
-   `none` - The screen transition doesn't have any animation. This is the default value.
    

-   Static
-   Dynamic

```
function RootTabs() {  return (    <Tab.Navigator      screenOptions={{        animation: 'fade',      }}    >      <Tab.Screen name="Home" component={HomeScreen} />      <Tab.Screen name="Profile" component={ProfileScreen} />    </Tab.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Bottom+Tabs+animation&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+Easing+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27center%27%2C+alignItems%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27center%27%2C+alignItems%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+RootTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%0A++++++screenOptions%3D%7B%7B%0A++++++++animation%3A+%27fade%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootTabs+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you need more control over the animation, you can customize individual parts of the animation using the various animation-related options:

Bottom Tab Navigator exposes various options to configure the transition animation when switching tabs. These transition animations can be customized on a per-screen basis by specifying the options in the `options` for each screen, or for all screens in the tab navigator by specifying them in the `screenOptions`.

-   `transitionSpec` - An object that specifies the animation type (`timing` or `spring`) and its options (such as `duration` for `timing`). It contains 2 properties:
    
    -   `animation` - The animation function to use for the animation. Supported values are `timing` and `spring`.
    -   `config` - The configuration object for the timing function. For `timing`, it can be `duration` and `easing`. For `spring`, it can be `stiffness`, `damping`, `mass`, `overshootClamping`, `restDisplacementThreshold` and `restSpeedThreshold`.
    
    A config that uses a timing animation looks like this:
    
    ```
    const config = {  animation: 'timing',  config: {    duration: 150,    easing: Easing.inOut(Easing.ease),  },};
    ```
    
    We can pass this config in the `transitionSpec` option:
    
    -   Static
    -   Dynamic
    
    ```
    <Tab.Screen  name="Profile"  component={Profile}  options={{    transitionSpec: {      animation: 'timing',      config: {        duration: 150,        easing: Easing.inOut(Easing.ease),      },    },  }}/>
    ```
    
-   `sceneStyleInterpolator` - This is a function that specifies interpolated styles for various parts of the scene. It currently supports style for the view containing the screen:
    
    -   `sceneStyle` - Style for the container view wrapping the screen content.
    
    The function receives the following properties in its argument:
    
    -   `current` - Animation values for the current screen:
        -   `progress` - Animated node representing the progress value of the current screen.
    
    A config that fades the screen looks like this:
    
    ```
    const forFade = ({ current }) => ({  sceneStyle: {    opacity: current.progress.interpolate({      inputRange: [-1, 0, 1],      outputRange: [0, 1, 0],    }),  },});
    ```
    
    The value of `current.progress` is as follows:
    
    -   \-1 if the index is lower than the active tab,
    -   0 if they're active,
    -   1 if the index is higher than the active tab
    
    We can pass this function in `sceneStyleInterpolator` option:
    
    -   Static
    -   Dynamic
    
    ```
    <Tab.Screen  name="Profile"  component={Profile}  options={{    sceneStyleInterpolator: ({ current }) => ({      sceneStyle: {        opacity: current.progress.interpolate({          inputRange: [-1, 0, 1],          outputRange: [0, 1, 0],        }),      },    }),  }}/>
    ```
    

Putting these together, you can customize the transition animation for a screen:

-   Static
-   Dynamic

```
function RootTabs() {  return (    <Tab.Navigator      screenOptions={{        transitionSpec: {          animation: 'timing',          config: {            duration: 150,            easing: Easing.inOut(Easing.ease),          },        },        sceneStyleInterpolator: ({ current }) => ({          sceneStyle: {            opacity: current.progress.interpolate({              inputRange: [-1, 0, 1],              outputRange: [0, 1, 0],            }),          },        }),      }}    >      <Tab.Screen name="Home" component={HomeScreen} />      <Tab.Screen name="Profile" component={ProfileScreen} />    </Tab.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Bottom+Tabs+custom+animation&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+Easing+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27center%27%2C+alignItems%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27center%27%2C+alignItems%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+RootTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%0A++++++screenOptions%3D%7B%7B%0A++++++++transitionSpec%3A+%7B%0A++++++++++animation%3A+%27timing%27%2C%0A++++++++++config%3A+%7B%0A++++++++++++duration%3A+150%2C%0A++++++++++++easing%3A+Easing.inOut%28Easing.ease%29%2C%0A++++++++++%7D%2C%0A++++++++%7D%2C%0A++++++++sceneStyleInterpolator%3A+%28%7B+current+%7D%29+%3D%3E+%28%7B%0A++++++++++sceneStyle%3A+%7B%0A++++++++++++opacity%3A+current.progress.interpolate%28%7B%0A++++++++++++++inputRange%3A+%5B-1%2C+0%2C+1%5D%2C%0A++++++++++++++outputRange%3A+%5B0%2C+1%2C+0%5D%2C%0A++++++++++++%7D%29%2C%0A++++++++++%7D%2C%0A++++++++%7D%29%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CRootTabs+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### Pre-made configs[](https://reactnavigation.org/docs/shared-element-transitions/#pre-made-configs "Direct link to Pre-made configs")

We also export various configs from the library with ready-made configs that you can use to customize the animations:

#### `TransitionSpecs`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionspecs "Direct link to transitionspecs")

-   `FadeSpec` - Configuration for a cross-fade animation between screens.
-   `ShiftSpec` - Configuration for a shifting animation between screens.

Example:

-   Static
-   Dynamic

```
import { TransitionSpecs } from '@react-navigation/bottom-tabs';// ...<Tab.Screen  name="Profile"  component={Profile}  options={{    transitionSpec: TransitionSpecs.FadeSpec,  }}/>;
```

#### `SceneStyleInterpolators`[](https://reactnavigation.org/docs/shared-element-transitions/#scenestyleinterpolators "Direct link to scenestyleinterpolators")

-   `forFade` - Cross-fade animation for the screen transition where the new screen fades in and the old screen fades out.
-   `forShift` - Shifting animation for the screen transition where the screens slightly shift to left/right.

Example:

-   Static
-   Dynamic

```
import { SceneStyleInterpolators } from '@react-navigation/bottom-tabs';// ...<Tab.Screen  name="Profile"  component={Profile}  options={{    sceneStyleInterpolator: SceneStyleInterpolators.forFade,  }}/>;
```

#### `TransitionPresets`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionpresets "Direct link to transitionpresets")

We export transition presets that bundle various sets of these options together. A transition preset is an object containing a few animation-related screen options exported under `TransitionPresets`. Currently the following presets are available:

-   `FadeTransition` - Cross-fade animation for the screen transition where the new screen fades in and the old screen fades out.
-   `ShiftTransition` - Shifting animation for the screen transition where the screens slightly shift to left/right.

You can spread these presets in `options` to customize the animation for a screen:

Example:

-   Static
-   Dynamic

```
import { TransitionPresets } from '@react-navigation/bottom-tabs';// ...<Tab.Screen  name="Profile"  component={Profile}  options={{    ...TransitionPresets.FadeTransition,  }}/>;
```


## Drawer Navigator  React Navigation

---
created: 2025-02-08T17:02:59 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Drawer Navigator | React Navigation

> ## Excerpt
> Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures.

---
Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures.

This wraps [`react-native-drawer-layout`](https://reactnavigation.org/docs/drawer-layout). If you want to use the drawer without React Navigation integration, use the library directly instead.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this navigator, ensure that you have [`@react-navigation/native` and its dependencies (follow this guide)](https://reactnavigation.org/docs/getting-started), then install [`@react-navigation/drawer`](https://github.com/react-navigation/react-navigation/tree/main/packages/drawer):

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/drawer
```

Then, you need to install and configure the libraries that are required by the drawer navigator:

1.  First, install [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/) and [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/) (at least version 2 or 3).
    
    If you have a Expo managed project, in your project directory, run:
    
    ```
    npx expo install react-native-gesture-handler react-native-reanimated
    ```
    
    If you have a bare React Native project, in your project directory, run:
    
    -   npm
    -   Yarn
    -   pnpm
    
    ```
    npm install react-native-gesture-handler react-native-reanimated
    ```
    
2.  Configure the Reanimated Babel Plugin in your project following the [installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started).
    
3.  To finalize the installation of `react-native-gesture-handler`, we need to conditionally import it. To do this, create 2 files:
    
    gesture-handler.native.js
    
    ```
    // Only import react-native-gesture-handler on native platformsimport 'react-native-gesture-handler';
    ```
    
    gesture-handler.js
    
    ```
    // Don't import react-native-gesture-handler on web
    ```
    
    Now, add the following at the **top** (make sure it's at the top and there's nothing else before it) of your entry file, such as `index.js` or `App.js`:
    
    ```
    import './gesture-handler';
    ```
    
    Since the drawer navigator doesn't use `react-native-gesture-handler` on Web, this avoids unnecessarily increasing the bundle size.
    
    warning
    
    If you are building for Android or iOS, do not skip this step, or your app may crash in production even if it works fine in development. This is not applicable to other platforms.
    
4.  If you're on a Mac and developing for iOS, you also need to install the pods (via [Cocoapods](https://cocoapods.org/)) to complete the linking.
    

## Usage[](https://reactnavigation.org/docs/shared-element-transitions/#usage "Direct link to Usage")

To use this navigator, import it from `@react-navigation/drawer`:

-   Static
-   Dynamic

```
import { createDrawerNavigator } from '@react-navigation/drawer';const Drawer = createDrawerNavigator();function MyDrawer() {  return (    <Drawer.Navigator>      <Drawer.Screen name="Home" component={HomeScreen} />      <Drawer.Screen name="Profile" component={ProfileScreen} />    </Drawer.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Drawer+Navigator&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createDrawerNavigator+%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0A%0Afunction+MyDrawer%28%29+%7B%0A++return+%28%0A++++%3CDrawer.Navigator%3E%0A++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CDrawer.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FDrawer.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Home%27%29%7D%3EGo+to+Home%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyDrawer+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## API Definition[](https://reactnavigation.org/docs/shared-element-transitions/#api-definition "Direct link to API Definition")

### Props[](https://reactnavigation.org/docs/shared-element-transitions/#props "Direct link to Props")

In addition to the [common props](https://reactnavigation.org/docs/navigator#configuration) shared by all navigators, the drawer navigator component accepts the following additional props:

#### `backBehavior`[](https://reactnavigation.org/docs/shared-element-transitions/#backbehavior "Direct link to backbehavior")

This controls what happens when `goBack` is called in the navigator. This includes pressing the device's back button or back gesture on Android.

It supports the following values:

-   `firstRoute` - return to the first screen defined in the navigator (default)
-   `initialRoute` - return to initial screen passed in `initialRouteName` prop, if not passed, defaults to the first screen
-   `order` - return to screen defined before the focused screen
-   `history` - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history
-   `none` - do not handle back button

#### `defaultStatus`[](https://reactnavigation.org/docs/shared-element-transitions/#defaultstatus "Direct link to defaultstatus")

The default status of the drawer - whether the drawer should stay `open` or `closed` by default.

When this is set to `open`, the drawer will be open from the initial render. It can be closed normally using gestures or programmatically. However, when going back, the drawer will re-open if it was closed. This is essentially the opposite of the default behavior of the drawer where it starts `closed`, and the back button closes an open drawer.

#### `detachInactiveScreens`[](https://reactnavigation.org/docs/shared-element-transitions/#detachinactivescreens "Direct link to detachinactivescreens")

Boolean used to indicate whether inactive screens should be detached from the view hierarchy to save memory. This enables integration with [react-native-screens](https://github.com/software-mansion/react-native-screens). Defaults to `true`.

#### `drawerContent`[](https://reactnavigation.org/docs/shared-element-transitions/#drawercontent "Direct link to drawercontent")

Function that returns React element to render as the content of the drawer, for example, navigation items

The content component receives the following props by default:

-   `state` - The [navigation state](https://reactnavigation.org/docs/navigation-state) of the navigator.
-   `navigation` - The navigation object for the navigator.
-   `descriptors` - An descriptor object containing options for the drawer screens. The options can be accessed at `descriptors[route.key].options`.

##### Providing a custom `drawerContent`[](https://reactnavigation.org/docs/shared-element-transitions/#providing-a-custom-drawercontent "Direct link to providing-a-custom-drawercontent")

The default component for the drawer is scrollable and only contains links for the routes in the RouteConfig. You can easily override the default component to add a header, footer, or other content to the drawer. The default content component is exported as `DrawerContent`. It renders a `DrawerItemList` component inside a `ScrollView`.

By default, the drawer is scrollable and supports devices with notches. If you customize the content, you can use `DrawerContentScrollView` to handle this automatically:

```
import {  DrawerContentScrollView,  DrawerItemList,} from '@react-navigation/drawer';function CustomDrawerContent(props) {  return (    <DrawerContentScrollView {...props}>      <DrawerItemList {...props} />    </DrawerContentScrollView>  );}
```

To add additional items in the drawer, you can use the `DrawerItem` component:

```
function CustomDrawerContent(props) {  return (    <DrawerContentScrollView {...props}>      <DrawerItemList {...props} />      <DrawerItem        label="Help"        onPress={() => Linking.openURL('https://mywebsite.com/help')}      />    </DrawerContentScrollView>  );}
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Bottom%20Tabs%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fcustom-drawer-content.js)

The `DrawerItem` component accepts the following props:

-   `label` (required): The label text of the item. Can be string, or a function returning a react element. e.g. `({ focused, color }) => <Text style={{ color }}>{focused ? 'Focused text' : 'Unfocused text'}</Text>`.
-   `icon`: Icon to display for the item. Accepts a function returning a react element. e.g. `({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'heart' : 'heart-outline'} />`.
-   `focused`: Boolean indicating whether to highlight the drawer item as active.
-   `onPress` (required): Function to execute on press.
-   `activeTintColor`: Color for the icon and label when the item is active.
-   `inactiveTintColor`: Color for the icon and label when the item is inactive.
-   `activeBackgroundColor`: Background color for item when it's active.
-   `inactiveBackgroundColor`: Background color for item when it's inactive.
-   `labelStyle`: Style object for the label `Text`.
-   `style`: Style object for the wrapper `View`.

Note that you **cannot** use the `useNavigation` hook inside the `drawerContent` since `useNavigation` is only available inside screens. You get a `navigation` prop for your `drawerContent` which you can use instead:

```
function CustomDrawerContent({ navigation }) {  return (    <Button      onPress={() => {        // Navigate using the `navigation` prop that you received        navigation.navigate('SomeScreen');      }}    >      Go somewhere    </Button>  );}
```

To use the custom component, we need to pass it in the `drawerContent` prop:

```
<Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>  {/* screens */}</Drawer.Navigator>
```

### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

The following [options](https://reactnavigation.org/docs/screen-options) can be used to configure the screens in the navigator. These can be specified under `screenOptions` prop of `Drawer.navigator` or `options` prop of `Drawer.Screen`.

#### `title`[](https://reactnavigation.org/docs/shared-element-transitions/#title "Direct link to title")

A generic title that can be used as a fallback for `headerTitle` and `drawerLabel`.

#### `lazy`[](https://reactnavigation.org/docs/shared-element-transitions/#lazy "Direct link to lazy")

Whether this screen should render the first time it's accessed. Defaults to `true`. Set it to `false` if you want to render the screen on initial render.

#### `drawerLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerlabel "Direct link to drawerlabel")

String or a function that given `{ focused: boolean, color: string }` returns a React.Node, to display in drawer sidebar. When undefined, scene `title` is used.

#### `drawerIcon`[](https://reactnavigation.org/docs/shared-element-transitions/#drawericon "Direct link to drawericon")

Function, that given `{ focused: boolean, color: string, size: number }` returns a React.Node to display in drawer sidebar.

#### `drawerActiveTintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#draweractivetintcolor "Direct link to draweractivetintcolor")

Color for the icon and label in the active item in the drawer.

![Drawer active tint color](https://reactnavigation.org/assets/7.x/drawer/drawerActiveTintColor.png)

```
   drawerActiveTintColor: 'green',
```

#### `drawerActiveBackgroundColor`[](https://reactnavigation.org/docs/shared-element-transitions/#draweractivebackgroundcolor "Direct link to draweractivebackgroundcolor")

Background color for the active item in the drawer.

![Drawer active background color](https://reactnavigation.org/assets/7.x/drawer/drawerActiveBackgroundColor.png)

```
    screenOptions={{      drawerActiveTintColor: 'white',      drawerActiveBackgroundColor: '#003CB3',      drawerLabelStyle: {        color: 'white',      },    }}
```

#### `drawerInactiveTintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerinactivetintcolor "Direct link to drawerinactivetintcolor")

Color for the icon and label in the inactive items in the drawer.

#### `drawerInactiveBackgroundColor`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerinactivebackgroundcolor "Direct link to drawerinactivebackgroundcolor")

Background color for the inactive items in the drawer.

#### `drawerItemStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#draweritemstyle "Direct link to draweritemstyle")

Style object for the single item, which can contain an icon and/or a label.

![Drawer item style](https://reactnavigation.org/assets/7.x/drawer/drawerItemStyle.png)

Example:

```
   drawerItemStyle: {    backgroundColor: '#9dd3c8',    borderColor: 'black',    orderWidth: 2,    opacity: 0.6,  },
```

#### `drawerLabelStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerlabelstyle "Direct link to drawerlabelstyle")

Style object to apply to the `Text` style inside content section which renders a label.

![Drawer label style](https://reactnavigation.org/assets/7.x/drawer/drawerLabelStyle.png)

Example:

```
   drawerLabelStyle: {      color: 'black',      fontSize: 20,      fontFamily: 'Georgia',    },
```

#### `drawerContentContainerStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#drawercontentcontainerstyle "Direct link to drawercontentcontainerstyle")

Style object for the content section inside the `ScrollView`.

#### `drawerContentStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#drawercontentstyle "Direct link to drawercontentstyle")

Style object for the wrapper view.

#### `drawerStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerstyle "Direct link to drawerstyle")

Style object for the drawer component. You can pass a custom background color for a drawer or a custom width here.

![Drawer style](https://reactnavigation.org/assets/7.x/drawer/drawerStyle.png)

```
<Drawer.Navigator  screenOptions={{    drawerStyle: {      backgroundColor: '#c6cbef',      width: 240,    },  }}>  {/* screens */}</Drawer.Navigator>
```

#### `drawerPosition`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerposition "Direct link to drawerposition")

Options are `left` or `right`. Defaults to `left` for LTR languages and `right` for RTL languages.

#### `drawerType`[](https://reactnavigation.org/docs/shared-element-transitions/#drawertype "Direct link to drawertype")

Type of the drawer. It determines how the drawer looks and animates.

-   `front`: Traditional drawer which covers the screen with an overlay behind it.
    
-   `back`: The drawer is revealed behind the screen on swipe.
    
-   `slide`: Both the screen and the drawer slide on swipe to reveal the drawer.
    
-   `permanent`: A permanent drawer is shown as a sidebar. Useful for having always visible drawer on larger screens.
    

Defaults to `slide` on iOS and `front` on other platforms.

You can conditionally specify the `drawerType` to show a permanent drawer on bigger screens and a traditional drawer drawer on small screens:

```
import { useWindowDimensions } from 'react-native';import { createDrawerNavigator } from '@react-navigation/drawer';const Drawer = createDrawerNavigator();function MyDrawer() {  const dimensions = useWindowDimensions();  return (    <Drawer.Navigator      screenOptions={{        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',      }}    >      {/* Screens */}    </Drawer.Navigator>  );}
```

You can also specify other props such as `drawerStyle` based on screen size to customize the behavior. For example, you can combine it with `defaultStatus="open"` to achieve a master-detail layout:

```
import { useWindowDimensions } from 'react-native';import { createDrawerNavigator } from '@react-navigation/drawer';const Drawer = createDrawerNavigator();function MyDrawer() {  const dimensions = useWindowDimensions();  const isLargeScreen = dimensions.width >= 768;  return (    <Drawer.Navigator      defaultStatus="open"      screenOptions={{        drawerType: isLargeScreen ? 'permanent' : 'back',        drawerStyle: isLargeScreen ? null : { width: '100%' },        overlayColor: 'transparent',      }}    >      {/* Screens */}    </Drawer.Navigator>  );}
```

#### `drawerHideStatusBarOnOpen`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerhidestatusbaronopen "Direct link to drawerhidestatusbaronopen")

When set to `true`, Drawer will hide the OS status bar whenever the drawer is pulled or when it's in an "open" state.

#### `drawerStatusBarAnimation`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerstatusbaranimation "Direct link to drawerstatusbaranimation")

Animation of the statusbar when hiding it. use in combination with `drawerHideStatusBarOnOpen`.

This is only supported on iOS. Defaults to `slide`.

Supported values:

-   `slide`
    
-   `fade`
    
-   `none`
    

#### `overlayColor`[](https://reactnavigation.org/docs/shared-element-transitions/#overlaycolor "Direct link to overlaycolor")

Color overlay to be displayed on top of the content view when drawer gets open. The opacity is animated from `0` to `1` when the drawer opens.

#### `sceneStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#scenestyle "Direct link to scenestyle")

Style object for the component wrapping the screen content.

#### `configureGestureHandler`[](https://reactnavigation.org/docs/shared-element-transitions/#configuregesturehandler "Direct link to configuregesturehandler")

Callback to configure the underlying [gesture from `react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/gesture). It receives the `gesture` object as an argument:

```
configureGestureHandler: ({ gesture }) => {  return gesture.enableTrackpadTwoFingerGesture(false);},
```

This is not supported on Web.

#### `swipeEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#swipeenabled "Direct link to swipeenabled")

Whether you can use swipe gestures to open or close the drawer. Defaults to `true`.

Swipe gesture is not supported on Web.

#### `swipeEdgeWidth`[](https://reactnavigation.org/docs/shared-element-transitions/#swipeedgewidth "Direct link to swipeedgewidth")

Allows for defining how far from the edge of the content view the swipe gesture should activate.

This is not supported on Web.

#### `swipeMinDistance`[](https://reactnavigation.org/docs/shared-element-transitions/#swipemindistance "Direct link to swipemindistance")

Minimum swipe distance threshold that should activate opening the drawer.

#### `keyboardDismissMode`[](https://reactnavigation.org/docs/shared-element-transitions/#keyboarddismissmode "Direct link to keyboarddismissmode")

Whether the keyboard should be dismissed when the swipe gesture begins. Defaults to `'on-drag'`. Set to `'none'` to disable keyboard handling.

#### `freezeOnBlur`[](https://reactnavigation.org/docs/shared-element-transitions/#freezeonblur "Direct link to freezeonblur")

Boolean indicating whether to prevent inactive screens from re-rendering. Defaults to `false`. Defaults to `true` when `enableFreeze()` from `react-native-screens` package is run at the top of the application.

Only supported on iOS and Android.

#### `popToTopOnBlur`[](https://reactnavigation.org/docs/shared-element-transitions/#poptotoponblur "Direct link to poptotoponblur")

Boolean indicating whether any nested stack should be popped to the top of the stack when navigating away from this drawer screen. Defaults to `false`.

It only works when there is a stack navigator (e.g. [stack navigator](https://reactnavigation.org/docs/stack-navigator) or [native stack navigator](https://reactnavigation.org/docs/native-stack-navigator)) nested under the drawer navigator.

You can find the list of header related options [here](https://reactnavigation.org/docs/elements#header). These [options](https://reactnavigation.org/docs/screen-options) can be specified under `screenOptions` prop of `Drawer.navigator` or `options` prop of `Drawer.Screen`. You don't have to be using `@react-navigation/elements` directly to use these options, they are just documented in that page.

In addition to those, the following options are also supported in drawer:

Custom header to use instead of the default header.

This accepts a function that returns a React Element to display as a header. The function receives an object containing the following properties as the argument:

-   `navigation` - The navigation object for the current screen.
-   `route` - The route object for the current screen.
-   `options` - The options for the current screen
-   `layout` - Dimensions of the screen, contains `height` and `width` properties.

Example:

```
import { getHeaderTitle } from '@react-navigation/elements';// ..header: ({ navigation, route, options }) => {  const title = getHeaderTitle(options, route.name);  return <MyHeader title={title} style={options.headerStyle} />;};
```

To set a custom header for all the screens in the navigator, you can specify this option in the `screenOptions` prop of the navigator.

If your custom header's height differs from the default header height, then you might notice glitches due to measurement being async. Explicitly specifying the height will avoid such glitches.

Example:

```
headerStyle: {  height: 80, // Specify the height of your custom header};
```

Note that this style is not applied to the header by default since you control the styling of your custom header. If you also want to apply this style to your header, use `options.headerStyle` from the props.

Whether to show or hide the header for the screen. The header is shown by default. Setting this to `false` hides the header.

### Events[](https://reactnavigation.org/docs/shared-element-transitions/#events "Direct link to Events")

The navigator can [emit events](https://reactnavigation.org/docs/navigation-events) on certain actions. Supported events are:

#### `drawerItemPress`[](https://reactnavigation.org/docs/shared-element-transitions/#draweritempress "Direct link to draweritempress")

This event is fired when the user presses the button for the screen in the drawer. By default a drawer item press does several things:

-   If the screen is not focused, drawer item press will focus that screen
-   If the screen is already focused, then it'll close the drawer

To prevent the default behavior, you can call `event.preventDefault`:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('drawerItemPress', (e) => {    // Prevent default behavior    e.preventDefault();    // Do something manually    // ...  });  return unsubscribe;}, [navigation]);
```

If you have custom drawer content, make sure to emit this event.

### Helpers[](https://reactnavigation.org/docs/shared-element-transitions/#helpers "Direct link to Helpers")

The drawer navigator adds the following methods to the navigation object:

#### `openDrawer`[](https://reactnavigation.org/docs/shared-element-transitions/#opendrawer "Direct link to opendrawer")

Opens the drawer pane.

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Bottom%20Tabs%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fdrawer-open-close-toggle.js)

#### `closeDrawer`[](https://reactnavigation.org/docs/shared-element-transitions/#closedrawer "Direct link to closedrawer")

Closes the drawer pane.

```
navigation.closeDrawer();
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Bottom%20Tabs%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fdrawer-open-close-toggle.js)

#### `toggleDrawer`[](https://reactnavigation.org/docs/shared-element-transitions/#toggledrawer "Direct link to toggledrawer")

Opens the drawer pane if closed, closes the drawer pane if opened.

```
navigation.toggleDrawer();
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Bottom%20Tabs%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fdrawer-open-close-toggle.js)

#### `jumpTo`[](https://reactnavigation.org/docs/shared-element-transitions/#jumpto "Direct link to jumpto")

Navigates to an existing screen in the drawer navigator. The method accepts the following arguments:

-   `name` - _string_ - Name of the route to jump to.
-   `params` - _object_ - Screen params to pass to the destination route.

```
navigation.jumpTo('Profile', { owner: 'Satya' });
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Bottom%20Tabs%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fdrawer-jump-to.js)

### Hooks[](https://reactnavigation.org/docs/shared-element-transitions/#hooks "Direct link to Hooks")

The drawer navigator exports the following hooks:

#### `useDrawerProgress`[](https://reactnavigation.org/docs/shared-element-transitions/#usedrawerprogress "Direct link to usedrawerprogress")

This hook returns the progress of the drawer. It is available in the screen components rendered by the drawer navigator as well as in the [custom drawer content](https://reactnavigation.org/docs/shared-element-transitions/#drawercontent).

The `progress` object is a `SharedValue` that represents the animated position of the drawer (`0` is closed; `1` is open). It can be used to animate elements based on the animation of the drawer with [Reanimated](https://docs.swmansion.com/react-native-reanimated/):

-   Static
-   Dynamic

```
import {  createDrawerNavigator,  useDrawerProgress,} from '@react-navigation/drawer';import Animated, { useAnimatedStyle } from 'react-native-reanimated';function HomeScreen() {  const progress = useDrawerProgress();  const animatedStyle = useAnimatedStyle(() => ({    transform: [{ translateX: progress.value * -100 }],  }));  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Animated.View        style={[          {            height: 100,            aspectRatio: 1,            backgroundColor: 'tomato',          },          animatedStyle,        ]}      />    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Drawer+animation+progress&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++createDrawerNavigator%2C%0A++useDrawerProgress%2C%0A%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0Aimport+Animated%2C+%7B+useAnimatedStyle+%7D+from+%27react-native-reanimated%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+progress+%3D+useDrawerProgress%28%29%3B%0A%0A++const+animatedStyle+%3D+useAnimatedStyle%28%28%29+%3D%3E+%28%7B%0A++++transform%3A+%5B%7B+translateX%3A+progress.value+*+-100+%7D%5D%2C%0A++%7D%29%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CAnimated.View%0A++++++++style%3D%7B%5B%0A++++++++++%7B%0A++++++++++++height%3A+100%2C%0A++++++++++++aspectRatio%3A+1%2C%0A++++++++++++backgroundColor%3A+%27tomato%27%2C%0A++++++++++%7D%2C%0A++++++++++animatedStyle%2C%0A++++++++%5D%7D%0A++++++%2F%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0A%0Afunction+MyDrawer%28%29+%7B%0A++return+%28%0A++++%3CDrawer.Navigator%3E%0A++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++%3C%2FDrawer.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyDrawer+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you are using class components, you can use the `DrawerProgressContext` to get the progress value.

warning

The `useDrawerProgress` hook (or `DrawerProgressContext`) will return a mock value on Web since Reanimated is not used on Web. The mock value can only represent the open state of the drawer (`0` when closed, `1` when open), and not the progress of the drawer.

#### `useDrawerStatus`[](https://reactnavigation.org/docs/shared-element-transitions/#usedrawerstatus "Direct link to usedrawerstatus")

You can check if the drawer is open by using the `useDrawerStatus` hook.

```
import { useDrawerStatus } from '@react-navigation/drawer';// ...const isDrawerOpen = useDrawerStatus() === 'open';
```

If you can't use the hook, you can also use the `getDrawerStatusFromState` helper:

```
import { getDrawerStatusFromState } from '@react-navigation/drawer';// ...const isDrawerOpen = getDrawerStatusFromState(navigation.getState()) === 'open';
```

For class components, you can listen to the `state` event to check if the drawer was opened or closed:

```
class Profile extends React.Component {  componentDidMount() {    this._unsubscribe = navigation.addListener('state', () => {      const isDrawerOpen =        getDrawerStatusFromState(navigation.getState()) === 'open';      // do something    });  }  componentWillUnmount() {    this._unsubscribe();  }  render() {    // Content of the component  }}
```

## Nesting drawer navigators inside others[](https://reactnavigation.org/docs/shared-element-transitions/#nesting-drawer-navigators-inside-others "Direct link to Nesting drawer navigators inside others")

If a drawer navigator is nested inside of another navigator that provides some UI, for example, a tab navigator or stack navigator, then the drawer will be rendered below the UI from those navigators. The drawer will appear below the tab bar and below the header of the stack. You will need to make the drawer navigator the parent of any navigator where the drawer should be rendered on top of its UI.


## Material Top Tabs Navigator  React Navigation

---
created: 2025-02-08T17:03:06 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Material Top Tabs Navigator | React Navigation

> ## Excerpt
> A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.

---
A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.

This wraps [`react-native-tab-view`](https://reactnavigation.org/docs/tab-view). If you want to use the tab view without React Navigation integration, use the library directly instead.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this navigator, ensure that you have [`@react-navigation/native` and its dependencies (follow this guide)](https://reactnavigation.org/docs/getting-started), then install [`@react-navigation/material-top-tabs`](https://github.com/react-navigation/react-navigation/tree/main/packages/material-top-tabs):

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/material-top-tabs
```

Then, you need to install [`react-native-pager-view`](https://github.com/callstack/react-native-pager-view) which is required by the navigator.

If you have a Expo managed project, in your project directory, run:

```
npx expo install react-native-pager-view
```

If you have a bare React Native project, in your project directory, run:

-   npm
-   Yarn
-   pnpm

```
npm install react-native-pager-view
```

If you're on a Mac and developing for iOS, you also need to install the pods (via [Cocoapods](https://cocoapods.org/)) to complete the linking.

## Usage[](https://reactnavigation.org/docs/shared-element-transitions/#usage "Direct link to Usage")

To use this navigator, import it from `@react-navigation/material-top-tabs`:

-   Static
-   Dynamic

```
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';const Tab = createMaterialTopTabNavigator();function MyTabs() {  return (    <Tab.Navigator>      <Tab.Screen name="Home" component={HomeScreen} />      <Tab.Screen name="Profile" component={ProfileScreen} />    </Tab.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Material+Top+Tab+Navigator&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createMaterialTopTabNavigator+%7D+from+%27%40react-navigation%2Fmaterial-top-tabs%27%3B%0A%0Aconst+Tab+%3D+createMaterialTopTabNavigator%28%29%3B%0A%0Afunction+MyTabs%28%29+%7B%0A++return+%28%0A++++%3CTab.Navigator%3E%0A++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FTab.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Home%27%29%7D%3EGo+to+Home%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyTabs+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fmaterial-top-tabs%407.0.18%2Creact-native-pager-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## API Definition[](https://reactnavigation.org/docs/shared-element-transitions/#api-definition "Direct link to API Definition")

### Props[](https://reactnavigation.org/docs/shared-element-transitions/#props "Direct link to Props")

In addition to the [common props](https://reactnavigation.org/docs/navigator#configuration) shared by all navigators, the material top tabs navigator component accepts the following additional props:

#### `backBehavior`[](https://reactnavigation.org/docs/shared-element-transitions/#backbehavior "Direct link to backbehavior")

This controls what happens when `goBack` is called in the navigator. This includes pressing the device's back button or back gesture on Android.

It supports the following values:

-   `firstRoute` - return to the first screen defined in the navigator (default)
-   `initialRoute` - return to initial screen passed in `initialRouteName` prop, if not passed, defaults to the first screen
-   `order` - return to screen defined before the focused screen
-   `history` - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history
-   `none` - do not handle back button

#### `tabBarPosition`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarposition "Direct link to tabbarposition")

Position of the tab bar in the tab view. Possible values are `'top'` and `'bottom'`. Defaults to `'top'`.

#### `keyboardDismissMode`[](https://reactnavigation.org/docs/shared-element-transitions/#keyboarddismissmode "Direct link to keyboarddismissmode")

String indicating whether the keyboard gets dismissed in response to a drag gesture. Possible values are:

-   `'auto'` (default): the keyboard is dismissed when the index changes.
-   `'on-drag'`: the keyboard is dismissed when a drag begins.
-   `'none'`: drags do not dismiss the keyboard.

#### `initialLayout`[](https://reactnavigation.org/docs/shared-element-transitions/#initiallayout "Direct link to initiallayout")

Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default:

```
{  width: Dimensions.get('window').width;}
```

#### `style`[](https://reactnavigation.org/docs/shared-element-transitions/#style "Direct link to style")

Style to apply to the tab view container.

#### `tabBar`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbar "Direct link to tabbar")

Function that returns a React element to display as the tab bar.

Example:

```
import { Animated, View, TouchableOpacity, Platform } from 'react-native';import { useLinkBuilder, useTheme } from '@react-navigation/native';function MyTabBar({ state, descriptors, navigation, position }) {  const { colors } = useTheme();  const { buildHref } = useLinkBuilder();  return (    <View style={{ flexDirection: 'row' }}>      {state.routes.map((route, index) => {        const { options } = descriptors[route.key];        const label =          options.tabBarLabel !== undefined            ? options.tabBarLabel            : options.title !== undefined              ? options.title              : route.name;        const isFocused = state.index === index;        const onPress = () => {          const event = navigation.emit({            type: 'tabPress',            target: route.key,            canPreventDefault: true,          });          if (!isFocused && !event.defaultPrevented) {            navigation.navigate(route.name, route.params);          }        };        const onLongPress = () => {          navigation.emit({            type: 'tabLongPress',            target: route.key,          });        };        const inputRange = state.routes.map((_, i) => i);        const opacity = position.interpolate({          inputRange,          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),        });        return (          <TouchableOpacity            href={buildHref(route.name, route.params)}            accessibilityRole={Platform.OS === 'web' ? 'link' : 'button'}            accessibilityState={isFocused ? { selected: true } : {}}            accessibilityLabel={options.tabBarAccessibilityLabel}            testID={options.tabBarButtonTestID}            onPress={onPress}            onLongPress={onLongPress}            style={{ flex: 1 }}          >            <Animated.Text style={{ opacity, color: colors.text }}>              {label}            </Animated.Text>          </TouchableOpacity>        );      })}    </View>  );}// ...<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>  {/* ... */}</Tab.Navigator>;
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Drawer%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fmaterial-top-tab-custom-tab-bar.js)

This example will render a basic tab bar with labels.

Note that you **cannot** use the `useNavigation` hook inside the `tabBar` since `useNavigation` is only available inside screens. You get a `navigation` prop for your `tabBar` which you can use instead:

```
function MyTabBar({ navigation }) {  return (    <Button      onPress={() => {        // Navigate using the `navigation` prop that you received        navigation.navigate('SomeScreen');      }}    >      Go somewhere    </Button>  );}
```

### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

The following [options](https://reactnavigation.org/docs/screen-options) can be used to configure the screens in the navigator:

Example:

```
<Tab.Navigator  screenOptions={{    tabBarLabelStyle: { fontSize: 12 },    tabBarItemStyle: { width: 100 },    tabBarStyle: { backgroundColor: 'powderblue' },  }}>  {/* ... */}</Tab.Navigator>
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Drawer%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fmaterial-top-tab-options.js)

#### `title`[](https://reactnavigation.org/docs/shared-element-transitions/#title "Direct link to title")

Generic title that can be used as a fallback for `headerTitle` and `tabBarLabel`.

#### `tabBarLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarlabel "Direct link to tabbarlabel")

Title string of a tab displayed in the tab bar or a function that given `{ focused: boolean, color: string }` returns a React.Node, to display in tab bar. When undefined, scene `title` is used. To hide, see [`tabBarShowLabel`](https://reactnavigation.org/docs/shared-element-transitions/#tabbarshowlabel) option.

#### `tabBarAccessibilityLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaraccessibilitylabel "Direct link to tabbaraccessibilitylabel")

Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab.

#### `tabBarAllowFontScaling`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarallowfontscaling "Direct link to tabbarallowfontscaling")

Whether label font should scale to respect Text Size accessibility settings.

#### `tabBarShowLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarshowlabel "Direct link to tabbarshowlabel")

Whether the tab label should be visible. Defaults to `true`.

#### `tabBarIcon`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaricon "Direct link to tabbaricon")

Function that given `{ focused: boolean, color: string }` returns a React.Node, to display in the tab bar.

#### `tabBarShowIcon`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarshowicon "Direct link to tabbarshowicon")

Whether the tab icon should be visible. Defaults to `false`.

#### `tabBarBadge`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbadge "Direct link to tabbarbadge")

Function that returns a React element to use as a badge for the tab.

#### `tabBarIndicator`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarindicator "Direct link to tabbarindicator")

Function that returns a React element as the tab bar indicator.

#### `tabBarIndicatorStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarindicatorstyle "Direct link to tabbarindicatorstyle")

Style object for the tab bar indicator.

#### `tabBarIndicatorContainerStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarindicatorcontainerstyle "Direct link to tabbarindicatorcontainerstyle")

Style object for the view containing the tab bar indicator.

#### `tabBarButtonTestID`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbuttontestid "Direct link to tabbarbuttontestid")

ID to locate this tab button in tests.

#### `tabBarActiveTintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaractivetintcolor "Direct link to tabbaractivetintcolor")

Color for the icon and label in the active tab.

#### `tabBarInactiveTintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarinactivetintcolor "Direct link to tabbarinactivetintcolor")

Color for the icon and label in the inactive tabs.

#### `tabBarPressColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarpresscolor "Direct link to tabbarpresscolor")

Color for material ripple (Android >= 5.0 only).

#### `tabBarPressOpacity`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarpressopacity "Direct link to tabbarpressopacity")

Opacity for pressed tab (iOS and Android < 5.0 only).

#### `tabBarBounces`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarbounces "Direct link to tabbarbounces")

Boolean indicating whether the tab bar bounces when overscrolling.

#### `tabBarScrollEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarscrollenabled "Direct link to tabbarscrollenabled")

Boolean indicating whether to make the tab bar scrollable.

If you set this to `true`, you should also specify a width in `tabBarItemStyle` to improve the performance of initial render.

#### `tabBarLabelStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarlabelstyle "Direct link to tabbarlabelstyle")

Style object for the tab label.

#### `tabBarItemStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbaritemstyle "Direct link to tabbaritemstyle")

Style object for the individual tab items.

#### `tabBarContentContainerStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarcontentcontainerstyle "Direct link to tabbarcontentcontainerstyle")

Style object for the view containing the tab items.

#### `tabBarStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarstyle "Direct link to tabbarstyle")

Style object for the tab bar.

#### `swipeEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#swipeenabled "Direct link to swipeenabled")

Boolean indicating whether to enable swipe gestures. Swipe gestures are enabled by default. Passing `false` will disable swipe gestures, but the user can still switch tabs by pressing the tab bar.

#### `lazy`[](https://reactnavigation.org/docs/shared-element-transitions/#lazy "Direct link to lazy")

Whether this screen should be lazily rendered. When this is set to `true`, the screen will be rendered as it comes into the viewport. By default all screens are rendered to provide a smoother swipe experience. But you might want to defer the rendering of screens out of the viewport until the user sees them. To enable lazy rendering for this screen, set `lazy` to `true`.

When you enable `lazy`, the lazy loaded screens will usually take some time to render when they come into the viewport. You can use the `lazyPlaceholder` prop to customize what the user sees during this short period.

#### `lazyPreloadDistance`[](https://reactnavigation.org/docs/shared-element-transitions/#lazypreloaddistance "Direct link to lazypreloaddistance")

When `lazy` is enabled, you can specify how many adjacent screens should be preloaded in advance with this prop. This value defaults to `0` which means lazy pages are loaded as they come into the viewport.

#### `lazyPlaceholder`[](https://reactnavigation.org/docs/shared-element-transitions/#lazyplaceholder "Direct link to lazyplaceholder")

Function that returns a React element to render if this screen hasn't been rendered yet. The `lazy` option also needs to be enabled for this to work.

This view is usually only shown for a split second. Keep it lightweight.

By default, this renders `null`.

#### `sceneStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#scenestyle "Direct link to scenestyle")

Style to apply to the view wrapping each screen. You can pass this to override some default styles such as overflow clipping.

### Events[](https://reactnavigation.org/docs/shared-element-transitions/#events "Direct link to Events")

The navigator can [emit events](https://reactnavigation.org/docs/navigation-events) on certain actions. Supported events are:

#### `tabPress`[](https://reactnavigation.org/docs/shared-element-transitions/#tabpress "Direct link to tabpress")

This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:

-   If the tab is not focused, tab press will focus that tab
-   If the tab is already focused:
    -   If the screen for the tab renders a scroll view, you can use [`useScrollToTop`](https://reactnavigation.org/docs/use-scroll-to-top) to scroll it to top
    -   If the screen for the tab renders a stack navigator, a `popToTop` action is performed on the stack

To prevent the default behavior, you can call `event.preventDefault`:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('tabPress', (e) => {    // Prevent default behavior    e.preventDefault();    // Do something manually    // ...  });  return unsubscribe;}, [navigation]);
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Drawer%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fmaterial-top-tab-prevent-default.js)

#### `tabLongPress`[](https://reactnavigation.org/docs/shared-element-transitions/#tablongpress "Direct link to tablongpress")

This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('tabLongPress', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

### Helpers[](https://reactnavigation.org/docs/shared-element-transitions/#helpers "Direct link to Helpers")

The tab navigator adds the following methods to the navigation object:

#### `jumpTo`[](https://reactnavigation.org/docs/shared-element-transitions/#jumpto "Direct link to jumpto")

Navigates to an existing screen in the tab navigator. The method accepts following arguments:

-   `name` - _string_ - Name of the route to jump to.
-   `params` - _object_ - Screen params to pass to the destination route.

```
navigation.jumpTo('Profile', { name: 'Michaś' });
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Drawer%20Navigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fmaterial-top-tab-jump-to.js)

### Hooks[](https://reactnavigation.org/docs/shared-element-transitions/#hooks "Direct link to Hooks")

The material top tab navigator exports the following hooks:

#### `useTabAnimation`[](https://reactnavigation.org/docs/shared-element-transitions/#usetabanimation "Direct link to usetabanimation")

This hook returns an object containing an animated value that represents the current position of the tabs. This can be used to animate elements based on the swipe position of the tabs, such as the tab indicator:

```
import { Animated } from 'react-native';import { useTabAnimation } from '@react-navigation/material-top-tabs';function MyView() {  const { position } = useTabAnimation();  return (    <Animated.View      style={{        width: '50%',        height: 2,        backgroundColor: 'tomato',        transform: [{ translateX: position }],      }}    />  );}
```


## Native Stack Navigator  React Navigation

---
created: 2025-02-08T17:02:39 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Native Stack Navigator | React Navigation

> ## Excerpt
> Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.

---
Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.

 

This navigator uses the native APIs `UINavigationController` on iOS and `Fragment` on Android so that navigation built with `createNativeStackNavigator` will behave exactly the same and have the same performance characteristics as apps built natively on top of those APIs. It also offers basic Web support using [`react-native-web`](https://github.com/necolas/react-native-web).

One thing to keep in mind is that while `@react-navigation/native-stack` offers native performance and exposes native features such as large title on iOS etc., it may not be as customizable as [`@react-navigation/stack`](https://reactnavigation.org/docs/stack-navigator) depending on your needs. So if you need more customization than what's possible in this navigator, consider using `@react-navigation/stack` instead - which is a more customizable JavaScript based implementation.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this navigator, ensure that you have [`@react-navigation/native` and its dependencies (follow this guide)](https://reactnavigation.org/docs/getting-started), then install [`@react-navigation/native-stack`](https://github.com/react-navigation/react-navigation/tree/main/packages/native-stack):

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/native-stack
```

## Usage[](https://reactnavigation.org/docs/shared-element-transitions/#usage "Direct link to Usage")

To use this navigator, import it from `@react-navigation/native-stack`:

-   Static
-   Dynamic

```
import { createNativeStackNavigator } from '@react-navigation/native-stack';const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Native+Stack+Navigator&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

info

If you encounter any bugs while using `createNativeStackNavigator`, please open issues on [`react-native-screens`](https://github.com/software-mansion/react-native-screens) rather than the `react-navigation` repository!

## API Definition[](https://reactnavigation.org/docs/shared-element-transitions/#api-definition "Direct link to API Definition")

### Props[](https://reactnavigation.org/docs/shared-element-transitions/#props "Direct link to Props")

The native stack navigator accepts the [common props](https://reactnavigation.org/docs/navigator#configuration) shared by all navigators.

### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

The following [options](https://reactnavigation.org/docs/screen-options) can be used to configure the screens in the navigator:

#### `title`[](https://reactnavigation.org/docs/shared-element-transitions/#title "Direct link to title")

String that can be used as a fallback for `headerTitle`.

Boolean indicating whether to show the menu on longPress of iOS >= 14 back button. Defaults to `true`.

Only supported on iOS.

![Header back button menu enabled](https://reactnavigation.org/assets/7.x/native-stack/headerBackButtonMenuEnabled.png)

Whether the back button is visible in the header. You can use it to show a back button alongside `headerLeft` if you have specified it.

This will have no effect on the first screen in the stack.

Title string used by the back button on iOS. Defaults to the previous scene's title, or "Back" if there's not enough space. Use `headerBackButtonDisplayMode` to customize the behavior.

Only supported on iOS.

![Header back title](https://reactnavigation.org/assets/7.x/native-stack/headerBackTitle.jpeg)

How the back button displays icon and title.

Supported values:

-   `default`: Displays one of the following depending on the available space: previous screen's title, generic title (e.g. 'Back') or no title (only icon).
-   `generic`: Displays one of the following depending on the available space: generic title (e.g. 'Back') or no title (only icon). iOS >= 14 only, falls back to "default" on older iOS versions.
-   `minimal`: Always displays only the icon without a title.

Only supported on iOS.

Style object for header back title. Supported properties:

-   `fontFamily`
-   `fontSize`

Only supported on iOS.

![Header back title style](https://reactnavigation.org/assets/7.x/native-stack/headerBackTitleStyle.png)

Example:

```
  headerBackTitleStyle: {      fontSize: 14,      fontFamily: 'Georgia',  },
```

Image to display in the header as the icon in the back button. Defaults to back icon image for the platform

-   A chevron on iOS
-   An arrow on Android

Style of the header when a large title is shown. The large title is shown if `headerLargeTitle` is `true` and the edge of any scrollable content reaches the matching edge of the header.

Supported properties:

-   backgroundColor

Only supported on iOS.

Whether to enable header with large title which collapses to regular header on scroll. Defaults to `false`.

For large title to collapse on scroll, the content of the screen should be wrapped in a scrollable view such as `ScrollView` or `FlatList`. If the scrollable area doesn't fill the screen, the large title won't collapse on scroll. You also need to specify `contentInsetAdjustmentBehavior="automatic"` in your `ScrollView`, `FlatList` etc.

Only supported on iOS.

#### `headerLargeTitleShadowVisible`[](https://reactnavigation.org/docs/shared-element-transitions/#headerlargetitleshadowvisible "Direct link to headerlargetitleshadowvisible")

Whether drop shadow of header is visible when a large title is shown.

Style object for large title in header. Supported properties:

-   `fontFamily`
-   `fontSize`
-   `fontWeight`
-   `color`

Only supported on iOS.

![Header large title style](https://reactnavigation.org/assets/7.x/native-stack/headerLargeTitleStyle.png)

Example:

```
    headerLargeTitleStyle: {      fontFamily: 'Georgia',      fontSize: 22,      fontWeight: '500',      color: 'blue',    },
```

Whether to show the header. The header is shown by default. Setting this to `false` hides the header.

Style object for header. Supported properties:

-   `backgroundColor`

#### `headerShadowVisible`[](https://reactnavigation.org/docs/shared-element-transitions/#headershadowvisible "Direct link to headershadowvisible")

Whether to hide the elevation shadow (Android) or the bottom border (iOS) on the header.

Android:

![Header shadow visible Android](https://reactnavigation.org/assets/7.x/native-stack/headerShadowVisible-Android.png)

iOS:

![Header shadow visible iOS](https://reactnavigation.org/assets/7.x/native-stack/headerShadowVisible-iOS.png)

Boolean indicating whether the navigation bar is translucent.

Defaults to `false`. Setting this to `true` makes the header absolutely positioned - so that the header floats over the screen so that it overlaps the content underneath, and changes the background color to `transparent` unless specified in `headerStyle`.

This is useful if you want to render a semi-transparent header or a blurred background.

Note that if you don't want your content to appear under the header, you need to manually add a top margin to your content. React Navigation won't do it automatically.

To get the height of the header, you can use [`HeaderHeightContext`](https://reactnavigation.org/docs/elements#headerheightcontext) with [React's Context API](https://react.dev/reference/react/useContext#contextconsumer) or [`useHeaderHeight`](https://reactnavigation.org/docs/elements#useheaderheight).

Blur effect for the translucent header. The `headerTransparent` option needs to be set to `true` for this to work.

Supported values:

-   `extraLight`
    
-   `light`
    
    ![Header blur effect light](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-light.png)
-   `dark`
    
    ![Header blur effect dark](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-dark.png)
-   `regular`
    
    ![Header blur effect regular](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-regular.png)
-   `prominent`
    
    ![Header blur effect systemUltraThinMaterial](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemUltraThinMaterial.png)
-   `systemUltraThinMaterial`
    
    ![Header blur effect systemUltraThinMaterial](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemUltraThinMaterial.png)
-   `systemThinMaterial`
    
    ![Header blur effect systemThinMaterial](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemThinMaterial.png)
-   `systemMaterial`
    
    ![Header blur effect systemMaterial](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemMaterial.png)
-   `systemThickMaterial`
    
    ![Header blur effect systemThickMaterial](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemThickMaterial.png)
-   `systemChromeMaterial`
    
    ![Header blur effect systemChromeMaterial](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemChromeMaterial.png)
-   `systemUltraThinMaterialLight`
    
    ![Header blur effect systemUltraThinMaterialLight](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemUltraThinMaterialLight.png)
-   `systemThinMaterialLight`
    
    ![Header blur effect systemThinMaterialLight](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemThinMaterialLight.png)
-   `systemMaterialLight`
    
    ![Header blur effect systemMaterialLight](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemMaterialLight.png)
-   `systemThickMaterialLight`
    
    ![Header blur effect systemThickMaterialLight](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemThickMaterialLight.png)
-   `systemChromeMaterialLight`
    
    ![Header blur effect systemChromeMaterialLight](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemChromeMaterialLight.png)
-   `systemUltraThinMaterialDark`
    
    ![Header blur effect systemUltraThinMaterialDark](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemUltraThinMaterialDark.png)
-   `systemThinMaterialDark`
    
    ![Header blur effect systemThinMaterialDark](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemThinMaterialDark.png)
-   `systemMaterialDark`
    
    ![Header blur effect systemMaterialDark](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemMaterialDark.png)
-   `systemThickMaterialDark`
    
    ![Header blur effect systemThickMaterialDark](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemThickMaterialDark.png)
-   `systemChromeMaterialDark`
    
    ![Header blur effect systemChromeMaterialDark](https://reactnavigation.org/assets/7.x/native-stack/headerBlurEffect-systemChromeMaterialDark.png)

Only supported on iOS.

Function which returns a React Element to render as the background of the header. This is useful for using backgrounds such as an image or a gradient.

![Header background](https://reactnavigation.org/assets/7.x/native-stack/headerBackground.png)

Example:

```
     headerBackground: () => (      <LinearGradient        colors={['#c17388', '#90306f']}        style={{ flex: 1 }}        start={{ x: 0, y: 0 }}        end={{ x: 1, y: 0 }}      />      ),
```

Tint color for the header. Changes the color of back button and title.

![Header tint color](https://reactnavigation.org/assets/7.x/native-stack/headerTintColor.png)

Function which returns a React Element to display on the left side of the header. This replaces the back button. See `headerBackVisible` to show the back button along side left element.

![Header right](https://reactnavigation.org/assets/7.x/native-stack/headerLeft.png)

Example:

```
    headerLeft: () => (      <MaterialCommunityIcons name="map" color="gray" size={36} />    ),    headerBackVisible: true,    headerBackTitle: 'Back',
```

Function which returns a React Element to display on the right side of the header.

![Header right](https://reactnavigation.org/assets/7.x/native-stack/headerRight.png)

Example:

```
headerRight: () => <MaterialCommunityIcons name="map" color="blue" size={36} />;
```

String or a function that returns a React Element to be used by the header. Defaults to `title` or name of the screen.

When a function is passed, it receives `tintColor` and`children` in the options object as an argument. The title string is passed in `children`.

Note that if you render a custom element by passing a function, animations for the title won't work.

How to align the header title. Possible values:

-   `left`
    
    ![Header title align left](https://reactnavigation.org/assets/7.x/native-stack/headerTitleAlign-left.png)
-   `center`
    
    ![Header title align center](https://reactnavigation.org/assets/7.x/native-stack/headerTitleAlign-center.png)

Defaults to `left` on platforms other than iOS.

Not supported on iOS. It's always `center` on iOS and cannot be changed.

Style object for header title. Supported properties:

-   `fontFamily`
    
-   `fontSize`
    
-   `fontWeight`
    
-   `color`
    
    ![Header title style](https://reactnavigation.org/assets/7.x/native-stack/headerTitleStyle.png)

Example:

```
    headerTitleStyle: {      color: 'blue',      fontSize: 22,      fontFamily: 'Georgia',      fontWeight: 300,    },
```

Options to render a native search bar on iOS. Search bars are rarely static so normally it is controlled by passing an object to `headerSearchBarOptions` navigation option in the component's body.

You also need to specify `contentInsetAdjustmentBehavior="automatic"` in your `ScrollView`, `FlatList` etc. If you don't have a `ScrollView`, specify `headerTransparent: false`.

Example:

```
React.useLayoutEffect(() => {  navigation.setOptions({    headerSearchBarOptions: {      // search bar options    },  });}, [navigation]);
```

Supported properties are:

##### `ref`[](https://reactnavigation.org/docs/shared-element-transitions/#ref "Direct link to ref")

Ref to manipulate the search input imperatively. It contains the following methods:

-   `focus` - focuses the search bar
-   `blur` - removes focus from the search bar
-   `setText` - sets the search bar's content to given value
-   `clearText` - removes any text present in the search bar input field
-   `cancelSearch` - cancel the search and close the search bar

##### `autoCapitalize`[](https://reactnavigation.org/docs/shared-element-transitions/#autocapitalize "Direct link to autocapitalize")

Controls whether the text is automatically auto-capitalized as it is entered by the user. Possible values:

-   `none`
-   `words`
-   `sentences`
-   `characters`

Defaults to `sentences`.

##### `autoFocus`[](https://reactnavigation.org/docs/shared-element-transitions/#autofocus "Direct link to autofocus")

Whether to automatically focus search bar when it's shown. Defaults to `false`.

Only supported on Android.

##### `barTintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#bartintcolor "Direct link to bartintcolor")

The search field background color. By default bar tint color is translucent.

Only supported on iOS.

![Header search bar options - Bar tint color](https://reactnavigation.org/assets/7.x/native-stack/headerSearchBarOptions-barTintColor.png)

##### `tintColor`[](https://reactnavigation.org/docs/shared-element-transitions/#tintcolor "Direct link to tintcolor")

The color for the cursor caret and cancel button text.

Only supported on iOS.

![Header search bar options - Tint color](https://reactnavigation.org/assets/7.x/native-stack/headerSearchBarOptions-tintColor.png)

##### `cancelButtonText`[](https://reactnavigation.org/docs/shared-element-transitions/#cancelbuttontext "Direct link to cancelbuttontext")

The text to be used instead of default `Cancel` button text.

Only supported on iOS.

##### `disableBackButtonOverride`[](https://reactnavigation.org/docs/shared-element-transitions/#disablebackbuttonoverride "Direct link to disablebackbuttonoverride")

Whether the back button should close search bar's text input or not. Defaults to `false`.

Only supported on Android.

##### `hideNavigationBar`[](https://reactnavigation.org/docs/shared-element-transitions/#hidenavigationbar "Direct link to hidenavigationbar")

Boolean indicating whether to hide the navigation bar during searching. Defaults to `true`.

Only supported on iOS.

##### `hideWhenScrolling`[](https://reactnavigation.org/docs/shared-element-transitions/#hidewhenscrolling "Direct link to hidewhenscrolling")

Boolean indicating whether to hide the search bar when scrolling. Defaults to `true`.

Only supported on iOS.

##### `inputType`[](https://reactnavigation.org/docs/shared-element-transitions/#inputtype "Direct link to inputtype")

The type of the input. Defaults to `"text"`.

Supported values:

-   `"text"`
-   `"phone"`
-   `"number"`
-   `"email"`

Only supported on Android.

##### `obscureBackground`[](https://reactnavigation.org/docs/shared-element-transitions/#obscurebackground "Direct link to obscurebackground")

Boolean indicating whether to obscure the underlying content with semi-transparent overlay. Defaults to `true`.

##### `placeholder`[](https://reactnavigation.org/docs/shared-element-transitions/#placeholder "Direct link to placeholder")

Text displayed when search field is empty.

##### `textColor`[](https://reactnavigation.org/docs/shared-element-transitions/#textcolor "Direct link to textcolor")

The color of the text in the search field.

![Header search bar options - Text color](https://reactnavigation.org/assets/7.x/native-stack/headerSearchBarOptions-textColor.png)

##### `hintTextColor`[](https://reactnavigation.org/docs/shared-element-transitions/#hinttextcolor "Direct link to hinttextcolor")

The color of the hint text in the search field.

Only supported on Android.

![Header search bar options - Hint text color](https://reactnavigation.org/assets/7.x/native-stack/headerSearchBarOptions-hintTextColor.png)

The color of the search and close icons shown in the header

Only supported on Android.

![Header search bar options - Header icon color](https://reactnavigation.org/assets/7.x/native-stack/headerSearchBarOptions-headerIconColor.png)

##### `shouldShowHintSearchIcon`[](https://reactnavigation.org/docs/shared-element-transitions/#shouldshowhintsearchicon "Direct link to shouldshowhintsearchicon")

Whether to show the search hint icon when search bar is focused. Defaults to `true`.

Only supported on Android.

##### `onBlur`[](https://reactnavigation.org/docs/shared-element-transitions/#onblur "Direct link to onblur")

A callback that gets called when search bar has lost focus.

##### `onCancelButtonPress`[](https://reactnavigation.org/docs/shared-element-transitions/#oncancelbuttonpress "Direct link to oncancelbuttonpress")

A callback that gets called when the cancel button is pressed.

##### `onChangeText`[](https://reactnavigation.org/docs/shared-element-transitions/#onchangetext "Direct link to onchangetext")

A callback that gets called when the text changes. It receives the current text value of the search bar.

Example:

```
const [search, setSearch] = React.useState('');React.useLayoutEffect(() => {  navigation.setOptions({    headerSearchBarOptions: {      onChangeText: (event) => setSearch(event.nativeEvent.text),    },  });}, [navigation]);
```

Custom header to use instead of the default header.

This accepts a function that returns a React Element to display as a header. The function receives an object containing the following properties as the argument:

-   `navigation` - The navigation object for the current screen.
-   `route` - The route object for the current screen.
-   `options` - The options for the current screen
-   `back` - Options for the back button, contains an object with a `title` property to use for back button label.

Example:

```
import { getHeaderTitle } from '@react-navigation/elements';// ..header: ({ navigation, route, options, back }) => {  const title = getHeaderTitle(options, route.name);  return (    <MyHeader      title={title}      leftButton={        back ? <MyBackButton onPress={navigation.goBack} /> : undefined      }      style={options.headerStyle}    />  );};
```

To set a custom header for all the screens in the navigator, you can specify this option in the `screenOptions` prop of the navigator.

Note that if you specify a custom header, the native functionality such as large title, search bar etc. won't work.

#### `statusBarAnimation`[](https://reactnavigation.org/docs/shared-element-transitions/#statusbaranimation "Direct link to statusbaranimation")

Sets the status bar animation (similar to the `StatusBar` component). Defaults to `fade` on iOS and `none` on Android.

Supported values:

-   `"fade"`
-   `"none"`
-   `"slide"`

On Android, setting either `fade` or `slide` will set the transition of status bar color. On iOS, this option applies to appereance animation of the status bar.

Requires setting `View controller-based status bar appearance -> YES` (or removing the config) in your `Info.plist` file.

Only supported on Android and iOS.

#### `statusBarHidden`[](https://reactnavigation.org/docs/shared-element-transitions/#statusbarhidden "Direct link to statusbarhidden")

Whether the status bar should be hidden on this screen.

Requires setting `View controller-based status bar appearance -> YES` (or removing the config) in your `Info.plist` file.

Only supported on Android and iOS.

#### `statusBarStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#statusbarstyle "Direct link to statusbarstyle")

Sets the status bar color (similar to the `StatusBar` component). Defaults to `auto`.

Supported values:

-   `"auto"`
-   `"inverted"` (iOS only)
-   `"dark"`
-   `"light"`

Requires setting `View controller-based status bar appearance -> YES` (or removing the config) in your `Info.plist` file.

Only supported on Android and iOS.

#### `statusBarBackgroundColor`[](https://reactnavigation.org/docs/shared-element-transitions/#statusbarbackgroundcolor "Direct link to statusbarbackgroundcolor")

Sets the background color of the status bar (similar to the `StatusBar` component).

Only supported on Android.

#### `statusBarTranslucent`[](https://reactnavigation.org/docs/shared-element-transitions/#statusbartranslucent "Direct link to statusbartranslucent")

Sets the translucency of the status bar (similar to the `StatusBar` component). Defaults to `false`.

Only supported on Android.

#### `contentStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#contentstyle "Direct link to contentstyle")

Style object for the scene content.

#### `animationMatchesGesture`[](https://reactnavigation.org/docs/shared-element-transitions/#animationmatchesgesture "Direct link to animationmatchesgesture")

Whether the gesture to dismiss should use animation provided to `animation` prop. Defaults to `false`.

Doesn't affect the behavior of screens presented modally.

Only supported on iOS.

#### `fullScreenGestureEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#fullscreengestureenabled "Direct link to fullscreengestureenabled")

Whether the gesture to dismiss should work on the whole screen. Using gesture to dismiss with this option results in the same transition animation as `simple_push`. This behavior can be changed by setting `customAnimationOnGesture` prop. Achieving the default iOS animation isn't possible due to platform limitations. Defaults to `false`.

Doesn't affect the behavior of screens presented modally.

Only supported on iOS.

#### `fullScreenGestureShadowEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#fullscreengestureshadowenabled "Direct link to fullscreengestureshadowenabled")

Whether the full screen dismiss gesture has shadow under view during transition. Defaults to `true`.

This does not affect the behavior of transitions that don't use gestures enabled by `fullScreenGestureEnabled` prop.

#### `gestureEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#gestureenabled "Direct link to gestureenabled")

Whether you can use gestures to dismiss this screen. Defaults to `true`. Only supported on iOS.

#### `animationTypeForReplace`[](https://reactnavigation.org/docs/shared-element-transitions/#animationtypeforreplace "Direct link to animationtypeforreplace")

The type of animation to use when this screen replaces another screen. Defaults to `push`.

Supported values:

-   `push`: the new screen will perform push animation.
    
-   `pop`: the new screen will perform pop animation.
    

#### `animation`[](https://reactnavigation.org/docs/shared-element-transitions/#animation "Direct link to animation")

How the screen should animate when pushed or popped.

Only supported on Android and iOS.

Supported values:

-   `default`: use the platform default animation
    
-   `fade`: fade screen in or out
    
-   `fade_from_bottom`: fade the new screen from bottom
    
-   `flip`: flip the screen, requires `presentation: "modal"` (iOS only)
    
-   `simple_push`: default animation, but without shadow and native header transition (iOS only, uses default animation on Android)
    
-   `slide_from_bottom`: slide in the new screen from bottom
    
-   `slide_from_right`: slide in the new screen from right (Android only, uses default animation on iOS)
    
-   `slide_from_left`: slide in the new screen from left (Android only, uses default animation on iOS)
    
-   `none`: don't animate the screen
    

#### `presentation`[](https://reactnavigation.org/docs/shared-element-transitions/#presentation "Direct link to presentation")

How should the screen be presented.

Only supported on Android and iOS.

Supported values:

-   `card`: the new screen will be pushed onto a stack, which means the default animation will be slide from the side on iOS, the animation on Android will vary depending on the OS version and theme.
    
-   `modal`: the new screen will be presented modally. this also allows for a nested stack to be rendered inside the screen.
    
-   `transparentModal`: the new screen will be presented modally, but in addition, the previous screen will stay so that the content below can still be seen if the screen has translucent background.
    
-   `containedModal`: will use "UIModalPresentationCurrentContext" modal style on iOS and will fallback to "modal" on Android.
    
-   `containedTransparentModal`: will use "UIModalPresentationOverCurrentContext" modal style on iOS and will fallback to "transparentModal" on Android.
    
-   `fullScreenModal`: will use "UIModalPresentationFullScreen" modal style on iOS and will fallback to "modal" on Android. A screen using this presentation style can't be dismissed by gesture.
    
-   `formSheet`: will use "UIModalPresentationFormSheet" modal style on iOS and will fallback to "modal" on Android.
    

#### `orientation`[](https://reactnavigation.org/docs/shared-element-transitions/#orientation "Direct link to orientation")

The display orientation to use for the screen.

Supported values:

-   `default` - resolves to "all" without "portrait\_down" on iOS. On Android, this lets the system decide the best orientation.
-   `all`: all orientations are permitted.
-   `portrait`: portrait orientations are permitted.
-   `portrait_up`: right-side portrait orientation is permitted.
-   `portrait_down`: upside-down portrait orientation is permitted.
-   `landscape`: landscape orientations are permitted.
-   `landscape_left`: landscape-left orientation is permitted.
-   `landscape_right`: landscape-right orientation is permitted.

Only supported on Android and iOS.

#### `autoHideHomeIndicator`[](https://reactnavigation.org/docs/shared-element-transitions/#autohidehomeindicator "Direct link to autohidehomeindicator")

Boolean indicating whether the home indicator should prefer to stay hidden. Defaults to `false`.

Only supported on iOS.

#### `gestureDirection`[](https://reactnavigation.org/docs/shared-element-transitions/#gesturedirection "Direct link to gesturedirection")

Sets the direction in which you should swipe to dismiss the screen.

Supported values:

-   `vertical` – dismiss screen vertically
-   `horizontal` – dismiss screen horizontally (default)

When using `vertical` option, options `fullScreenGestureEnabled: true`, `customAnimationOnGesture: true` and `animation: 'slide_from_bottom'` are set by default.

Only supported on iOS.

#### `animationDuration`[](https://reactnavigation.org/docs/shared-element-transitions/#animationduration "Direct link to animationduration")

Changes the duration (in milliseconds) of `slide_from_bottom`, `fade_from_bottom`, `fade` and `simple_push` transitions on iOS. Defaults to `350`.

The duration of `default` and `flip` transitions isn't customizable.

Only supported on iOS.

#### `navigationBarColor`[](https://reactnavigation.org/docs/shared-element-transitions/#navigationbarcolor "Direct link to navigationbarcolor")

Sets the navigation bar color. Defaults to initial status bar color.

Only supported on Android.

#### `navigationBarHidden`[](https://reactnavigation.org/docs/shared-element-transitions/#navigationbarhidden "Direct link to navigationbarhidden")

Boolean indicating whether the navigation bar should be hidden. Defaults to `false`.

Only supported on Android.

#### `freezeOnBlur`[](https://reactnavigation.org/docs/shared-element-transitions/#freezeonblur "Direct link to freezeonblur")

Boolean indicating whether to prevent inactive screens from re-rendering. Defaults to `false`. Defaults to `true` when `enableFreeze()` from `react-native-screens` package is run at the top of the application.

Only supported on iOS and Android.

### Events[](https://reactnavigation.org/docs/shared-element-transitions/#events "Direct link to Events")

The navigator can [emit events](https://reactnavigation.org/docs/navigation-events) on certain actions. Supported events are:

#### `transitionStart`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionstart "Direct link to transitionstart")

This event is fired when the transition animation starts for the current screen.

Event data:

-   `e.data.closing` - Boolean indicating whether the screen is being opened or closed.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('transitionStart', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

#### `transitionEnd`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionend "Direct link to transitionend")

This event is fired when the transition animation ends for the current screen.

Event data:

-   `e.data.closing` - Boolean indicating whether the screen was opened or closed.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('transitionEnd', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

### Helpers[](https://reactnavigation.org/docs/shared-element-transitions/#helpers "Direct link to Helpers")

The native stack navigator adds the following methods to the navigation object:

#### `replace`[](https://reactnavigation.org/docs/shared-element-transitions/#replace "Direct link to replace")

Replaces the current screen with a new screen in the stack. The method accepts the following arguments:

-   `name` - _string_ - Name of the route to push onto the stack.
-   `params` - _object_ - Screen params to pass to the destination route.

```
navigation.replace('Profile', { owner: 'Michaś' });
```

#### `push`[](https://reactnavigation.org/docs/shared-element-transitions/#push "Direct link to push")

Pushes a new screen to the top of the stack and navigate to it. The method accepts the following arguments:

-   `name` - _string_ - Name of the route to push onto the stack.
-   `params` - _object_ - Screen params to pass to the destination route.

```
navigation.push('Profile', { owner: 'Michaś' });
```

#### `pop`[](https://reactnavigation.org/docs/shared-element-transitions/#pop "Direct link to pop")

Pops the current screen from the stack and navigates back to the previous screen. It takes one optional argument (`count`), which allows you to specify how many screens to pop back by.

#### `popTo`[](https://reactnavigation.org/docs/shared-element-transitions/#popto "Direct link to popto")

Navigates back to a previous screen in the stack by popping screens after it. The method accepts the following arguments:

-   `name` - _string_ - Name of the route to navigate to.
-   `params` - _object_ - Screen params to pass to the destination route.
-   `merge` - _boolean_ - Whether params should be merged with the existing route params, or replace them (when navigating to an existing screen). Defaults to `false`.

If a matching screen is not found in the stack, this will pop the current screen and add a new screen with the specified name and params.

```
navigation.popTo('Profile', { owner: 'Michaś' });
```

#### `popToTop`[](https://reactnavigation.org/docs/shared-element-transitions/#poptotop "Direct link to poptotop")

Pops all of the screens in the stack except the first one and navigates to it.

### Hooks[](https://reactnavigation.org/docs/shared-element-transitions/#hooks "Direct link to Hooks")

The native stack navigator exports the following hooks:

The hook returns an animated value representing the height of the header. This is similar to [`useHeaderHeight`](https://reactnavigation.org/docs/elements#useheaderheight) but returns an animated value that changed as the header height changes, e.g. when expanding or collapsing large title or search bar on iOS.

It can be used to animated content along with header height changes.

```
import { Animated } from 'react-native';import { useAnimatedHeaderHeight } from '@react-navigation/native-stack';const MyView = () => {  const headerHeight = useAnimatedHeaderHeight();  return (    <Animated.View      style={{        height: 100,        aspectRatio: 1,        backgroundColor: 'tomato',        transform: [{ translateY: headerHeight }],      }}    />  );};
```


## Stack Navigator  React Navigation

---
created: 2025-02-08T17:02:22 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Stack Navigator | React Navigation

> ## Excerpt
> Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.

---
Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.

By default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS, use OS default animation on Android. But the [animations can be customized](https://reactnavigation.org/docs/shared-element-transitions/#animation-related-options) to match your needs.

 

One thing to keep in mind is that while `@react-navigation/stack` is extremely customizable, it's implemented in JavaScript. While it runs animations and gestures using natively, the performance may not be as fast as a native implementation. This may not be an issue for a lot of apps, but if you're experiencing performance issues during navigation, consider using [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator) instead - which uses native navigation primitives.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this navigator, ensure that you have [`@react-navigation/native` and its dependencies (follow this guide)](https://reactnavigation.org/docs/getting-started), then install [`@react-navigation/stack`](https://github.com/react-navigation/react-navigation/tree/main/packages/stack):

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/stack
```

Then, you need to install and configure the libraries that are required by the stack navigator:

1.  First, install [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/).
    
    If you have a Expo managed project, in your project directory, run:
    
    ```
    npx expo install react-native-gesture-handler
    ```
    
    If you have a bare React Native project, in your project directory, run:
    
    -   npm
    -   Yarn
    -   pnpm
    
    ```
    npm install react-native-gesture-handler
    ```
    
2.  To finalize the installation of `react-native-gesture-handler`, we need to conditionally import it. To do this, create 2 files:
    
    gesture-handler.native.js
    
    ```
    // Only import react-native-gesture-handler on native platformsimport 'react-native-gesture-handler';
    ```
    
    gesture-handler.js
    
    ```
    // Don't import react-native-gesture-handler on web
    ```
    
    Now, add the following at the **top** (make sure it's at the top and there's nothing else before it) of your entry file, such as `index.js` or `App.js`:
    
    ```
    import './gesture-handler';
    ```
    
    Since the stack navigator doesn't use `react-native-gesture-handler` on Web, this avoids unnecessarily increasing the bundle size.
    
    warning
    
    If you are building for Android or iOS, do not skip this step, or your app may crash in production even if it works fine in development. This is not applicable to other platforms.
    
3.  Optionally, you can also install [`@react-native-masked-view/masked-view`](https://github.com/react-native-masked-view/masked-view). This is needed if you want to use UIKit style animations for the header ([`HeaderStyleInterpolators.forUIKit`](https://reactnavigation.org/docs/shared-element-transitions/#headerstyleinterpolators)).
    
    If you have a Expo managed project, in your project directory, run:
    
    ```
    npx expo install @react-native-masked-view/masked-view
    ```
    
    If you have a bare React Native project, in your project directory, run:
    
    -   npm
    -   Yarn
    -   pnpm
    
    ```
    npm install @react-native-masked-view/masked-view
    ```
    
4.  If you're on a Mac and developing for iOS, you also need to install the pods (via [Cocoapods](https://cocoapods.org/)) to complete the linking.
    

## Usage[](https://reactnavigation.org/docs/shared-element-transitions/#usage "Direct link to Usage")

To use this navigator, import it from `@react-navigation/stack`:

-   Static
-   Dynamic

```
import { createStackNavigator } from '@react-navigation/stack';const Stack = createStackNavigator();function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Stack+Navigator&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## API Definition[](https://reactnavigation.org/docs/shared-element-transitions/#api-definition "Direct link to API Definition")

### Props[](https://reactnavigation.org/docs/shared-element-transitions/#props "Direct link to Props")

In addition to the [common props](https://reactnavigation.org/docs/navigator#configuration) shared by all navigators, the stack navigator accepts the following additional props:

#### `detachInactiveScreens`[](https://reactnavigation.org/docs/shared-element-transitions/#detachinactivescreens "Direct link to detachinactivescreens")

Boolean used to indicate whether inactive screens should be detached from the view hierarchy to save memory. This enables integration with [react-native-screens](https://github.com/software-mansion/react-native-screens). Defaults to `true`.

If you need to disable this optimization for specific screens (e.g. you want to screen to stay in view even when unfocused) [`detachPreviousScreen`](https://reactnavigation.org/docs/shared-element-transitions/#detachpreviousscreen) option.

### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

The following [options](https://reactnavigation.org/docs/screen-options) can be used to configure the screens in the navigator. These can be specified under `screenOptions` prop of `Stack.navigator` or `options` prop of `Stack.Screen`.

#### `title`[](https://reactnavigation.org/docs/shared-element-transitions/#title "Direct link to title")

String that can be used as a fallback for `headerTitle`.

#### `cardShadowEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#cardshadowenabled "Direct link to cardshadowenabled")

Use this prop to have visible shadows during transitions. Defaults to `true`.

#### `cardOverlayEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#cardoverlayenabled "Direct link to cardoverlayenabled")

Use this prop to have a semi-transparent dark overlay visible under the card during transitions. Defaults to `true` on Android and `false` on iOS.

#### `cardOverlay`[](https://reactnavigation.org/docs/shared-element-transitions/#cardoverlay "Direct link to cardoverlay")

Function which returns a React Element to display as the overlay for the card. Make sure to set `cardOverlayEnabled` to `true` when using this.

#### `cardStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#cardstyle "Direct link to cardstyle")

Style object for the card in stack. You can provide a custom background color to use instead of the default background here.

You can also specify `{ backgroundColor: 'transparent' }` to make the previous screen visible underneath (for transparent modals). This is useful to implement things like modal dialogs. You should also specify `presentation: 'modal'` in the options when using a transparent background so previous screens aren't detached and stay visible underneath.

On Web, the height of the screen isn't limited to the height of the viewport. This is by design to allow the browser's address bar to hide when scrolling. If this isn't desirable behavior, you can set `cardStyle` to `{ flex: 1 }` to force the screen to fill the viewport.

#### `presentation`[](https://reactnavigation.org/docs/shared-element-transitions/#presentation "Direct link to presentation")

This is shortcut option which configures several options to configure the style for rendering and transitions:

-   `card`: Use the default OS animations for iOS and Android screen transitions.
-   `modal`: Use Modal animations. This changes a few things:
    -   Sets `headerMode` to `screen` for the screen unless specified otherwise.
    -   Changes the screen animation to match the platform behavior for modals.
-   `transparentModal`: Similar to `modal`. This changes following things:
    -   Sets `headerMode` to `screen` for the screen unless specified otherwise.
    -   Sets background color of the screen to transparent, so previous screen is visible
    -   Adjusts the `detachPreviousScreen` option so that the previous screen stays rendered.
    -   Prevents the previous screen from animating from its last position.
    -   Changes the screen animation to a vertical slide animation.

See [Transparent modals](https://reactnavigation.org/docs/shared-element-transitions/#transparent-modals) for more details on how to customize `transparentModal`.

#### `animationTypeForReplace`[](https://reactnavigation.org/docs/shared-element-transitions/#animationtypeforreplace "Direct link to animationtypeforreplace")

The type of animation to use when this screen replaces another screen. It takes the following values:

-   `push` - The animation of a new screen being pushed will be used
-   `pop` - The animation of a screen being popped will be used

Defaults to `push`.

When `pop` is used, the `pop` animation is applied to the screen being replaced.

#### `gestureEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#gestureenabled "Direct link to gestureenabled")

Whether you can use gestures to dismiss this screen. Defaults to `true` on iOS, `false` on Android.

Gestures are not supported on Web.

#### `gestureResponseDistance`[](https://reactnavigation.org/docs/shared-element-transitions/#gestureresponsedistance "Direct link to gestureresponsedistance")

Number to override the distance of touch start from the edge of the screen to recognize gestures.

It'll configure either the horizontal or vertical distance based on the [`gestureDirection`](https://reactnavigation.org/docs/shared-element-transitions/#gesturedirection) value.

The default values are:

-   `50` - when `gestureDirection` is `horizontal` or `horizontal-inverted`
-   `135` - when `gestureDirection` is `vertical` or `vertical-inverted`

This is not supported on Web.

#### `gestureVelocityImpact`[](https://reactnavigation.org/docs/shared-element-transitions/#gesturevelocityimpact "Direct link to gesturevelocityimpact")

Number which determines the relevance of velocity for the gesture. Defaults to 0.3.

This is not supported on Web.

#### `gestureDirection`[](https://reactnavigation.org/docs/shared-element-transitions/#gesturedirection "Direct link to gesturedirection")

Direction of the gestures. Refer the [Animations section](https://reactnavigation.org/docs/shared-element-transitions/#animations) for details.

This is not supported on Web.

#### `transitionSpec`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionspec "Direct link to transitionspec")

Configuration object for the screen transition. Refer the [Animations section](https://reactnavigation.org/docs/shared-element-transitions/#animations) for details.

#### `cardStyleInterpolator`[](https://reactnavigation.org/docs/shared-element-transitions/#cardstyleinterpolator "Direct link to cardstyleinterpolator")

Interpolated styles for various parts of the card. Refer the [Animations section](https://reactnavigation.org/docs/shared-element-transitions/#animations) for details.

Interpolated styles for various parts of the header. Refer the [Animations section](https://reactnavigation.org/docs/shared-element-transitions/#animations) for details.

#### `keyboardHandlingEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#keyboardhandlingenabled "Direct link to keyboardhandlingenabled")

If `false`, the keyboard will NOT automatically dismiss when navigating to a new screen from this screen. Defaults to `true`.

#### `detachPreviousScreen`[](https://reactnavigation.org/docs/shared-element-transitions/#detachpreviousscreen "Direct link to detachpreviousscreen")

Boolean used to indicate whether to detach the previous screen from the view hierarchy to save memory. Set it to `false` if you need the previous screen to be seen through the active screen. Only applicable if `detachInactiveScreens` isn't set to `false`.

This is automatically adjusted when using [`presentation`](https://reactnavigation.org/docs/shared-element-transitions/#presentation) as `transparentModal` or `modal` to keep the required screens visible. Defaults to `true` in other cases.

#### `freezeOnBlur`[](https://reactnavigation.org/docs/shared-element-transitions/#freezeonblur "Direct link to freezeonblur")

Boolean indicating whether to prevent inactive screens from re-rendering. Defaults to `false`. Defaults to `true` when `enableFreeze()` from `react-native-screens` package is run at the top of the application.

Only supported on iOS and Android.

You can find the list of header related options [here](https://reactnavigation.org/docs/elements#header). These [options](https://reactnavigation.org/docs/screen-options) can be specified under `screenOptions` prop of `Stack.navigator` or `options` prop of `Stack.Screen`. You don't have to be using `@react-navigation/elements` directly to use these options, they are just documented in that page.

In addition to those, the following options are also supported in stack:

Custom header to use instead of the default header.

This accepts a function that returns a React Element to display as a header. The function receives an object containing the following properties as the argument:

-   `navigation` - The navigation object for the current screen.
-   `route` - The route object for the current screen.
-   `options` - The options for the current screen
-   `layout` - Dimensions of the screen, contains `height` and `width` properties.
-   `progress` Animated nodes representing the progress of the animation.
-   `back` - Options for the back button, contains an object with a `title` property to use for back button label.
-   `styleInterpolator` - Function which returns interpolated styles for various elements in the header.

Make sure to set `headerMode` to `screen` as well when using a custom header (see below for more details).

Example:

```
import { getHeaderTitle } from '@react-navigation/elements';// ..header: ({ navigation, route, options, back }) => {  const title = getHeaderTitle(options, route.name);  return (    <MyHeader      title={title}      leftButton={        back ? <MyBackButton onPress={navigation.goBack} /> : undefined      }      style={options.headerStyle}    />  );};
```

To set a custom header for all the screens in the navigator, you can specify this option in the `screenOptions` prop of the navigator.

When using a custom header, there are 2 things to keep in mind:

If your header's height differs from the default header height, then you might notice glitches due to measurement being async. Explicitly specifying the height will avoid such glitches.

Example:

```
headerStyle: {  height: 80, // Specify the height of your custom header};
```

Note that this style is not applied to the header by default since you control the styling of your custom header. If you also want to apply this style to your header, use `headerStyle` from the props.

By default, there is one floating header which renders headers for multiple screens on iOS for non-modals. These headers include animations to smoothly switch to one another.

If you specify a custom header, React Navigation will change it to `screen` automatically so that the header animated along with the screen instead. This means that you don't have to implement animations to animate it separately.

But you might want to keep the floating header to have a different transition animation between headers. To do that, you'll need to specify `headerMode: 'float'` in the options, and then interpolate on the `progress.current` and `progress.next` props in your custom header. For example, following will cross-fade the header:

```
const opacity = Animated.add(progress.current, progress.next || 0).interpolate({  inputRange: [0, 1, 2],  outputRange: [0, 1, 0],});return (  <Animated.View style={{ opacity }}>{/* Header content */}</Animated.View>);
```

Specifies how the header should be rendered:

-   `float` - Render a single header that stays at the top and animates as screens are changed. This is default on iOS.
-   `screen` - Each screen has a header attached to it and the header fades in and out together with the screen. This is default on other platforms.

Whether to show or hide the header for the screen. The header is shown by default. Setting this to `false` hides the header.

Whether back button title font should scale to respect Text Size accessibility settings. Defaults to false.

Accessibility label for the header back button.

Function which returns a React Element to display custom image in header's back button. When a function is used, it receives the `tintColor` in it's argument object. Defaults to Image component with back image source, which is the default back icon image for the platform (a chevron on iOS and an arrow on Android).

Title string used by the back button on iOS. Defaults to the previous scene's title. Use `headerBackButtonDisplayMode` to customize the behavior.

Title string used by the back button when `headerBackTitle` doesn't fit on the screen. `"Back"` by default.

How the back button displays icon and title.

Supported values:

-   `default`: Displays one of the following depending on the available space: previous screen's title, generic title (e.g. 'Back') or no title (only icon).
-   `generic`: Displays one of the following depending on the available space: generic title (e.g. 'Back') or no title (only icon).
-   `minimal`: Always displays only the icon without a title.

Defaults to `default` on iOS, and `minimal` on Android.

Style object for the back title.

### Events[](https://reactnavigation.org/docs/shared-element-transitions/#events "Direct link to Events")

The navigator can [emit events](https://reactnavigation.org/docs/navigation-events) on certain actions. Supported events are:

#### `transitionStart`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionstart "Direct link to transitionstart")

This event is fired when the transition animation starts for the current screen.

Event data:

-   `e.data.closing` - Boolean indicating whether the screen is being opened or closed.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('transitionStart', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

#### `transitionEnd`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionend "Direct link to transitionend")

This event is fired when the transition animation ends for the current screen.

Event data:

-   `e.data.closing` - Boolean indicating whether the screen was opened or closed.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('transitionEnd', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

#### `gestureStart`[](https://reactnavigation.org/docs/shared-element-transitions/#gesturestart "Direct link to gesturestart")

This event is fired when the swipe gesture starts for the current screen.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('gestureStart', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

#### `gestureEnd`[](https://reactnavigation.org/docs/shared-element-transitions/#gestureend "Direct link to gestureend")

This event is fired when the swipe gesture ends for the current screen. e.g. a screen was successfully dismissed.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('gestureEnd', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

#### `gestureCancel`[](https://reactnavigation.org/docs/shared-element-transitions/#gesturecancel "Direct link to gesturecancel")

This event is fired when the swipe gesture is cancelled for the current screen. e.g. a screen wasn't dismissed by the gesture.

Example:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('gestureCancel', (e) => {    // Do something  });  return unsubscribe;}, [navigation]);
```

### Helpers[](https://reactnavigation.org/docs/shared-element-transitions/#helpers "Direct link to Helpers")

The stack navigator adds the following methods to the navigation object:

#### `replace`[](https://reactnavigation.org/docs/shared-element-transitions/#replace "Direct link to replace")

Replaces the current screen with a new screen in the stack. The method accepts the following arguments:

-   `name` - _string_ - Name of the route to push onto the stack.
-   `params` - _object_ - Screen params to pass to the destination route.

```
navigation.replace('Profile', { owner: 'Michaś' });
```

#### `push`[](https://reactnavigation.org/docs/shared-element-transitions/#push "Direct link to push")

Pushes a new screen to the top of the stack and navigate to it. The method accepts the following arguments:

-   `name` - _string_ - Name of the route to push onto the stack.
-   `params` - _object_ - Screen params to pass to the destination route.

```
navigation.push('Profile', { owner: 'Michaś' });
```

#### `pop`[](https://reactnavigation.org/docs/shared-element-transitions/#pop "Direct link to pop")

Pops the current screen from the stack and navigates back to the previous screen. It takes one optional argument (`count`), which allows you to specify how many screens to pop back by.

#### `popTo`[](https://reactnavigation.org/docs/shared-element-transitions/#popto "Direct link to popto")

Navigates back to a previous screen in the stack by popping screens after it. The method accepts the following arguments:

-   `name` - _string_ - Name of the route to navigate to.
    
-   `params` - _object_ - Screen params to pass to the destination route.
    
-   `name` - _string_ - Name of the route to navigate to.
    
-   `params` - _object_ - Screen params to pass to the destination route.
    
-   `merge` - _boolean_ - Whether params should be merged with the existing route params, or replace them (when navigating to an existing screen). Defaults to `false`.
    

If a matching screen is not found in the stack, this will pop the current screen and add a new screen with the specified name and params.

```
navigation.popTo('Profile', { owner: 'Michaś' });
```

#### `popToTop`[](https://reactnavigation.org/docs/shared-element-transitions/#poptotop "Direct link to poptotop")

Pops all of the screens in the stack except the first one and navigates to it.

### Hooks[](https://reactnavigation.org/docs/shared-element-transitions/#hooks "Direct link to Hooks")

The stack navigator exports the following hooks:

#### `useCardAnimation`[](https://reactnavigation.org/docs/shared-element-transitions/#usecardanimation "Direct link to usecardanimation")

This hook returns values related to the screen's animation. It contains the following properties:

-   `current` - Values for the current screen:
    -   `progress` - Animated node representing the progress value of the current screen.
-   `next` - Values for the screen after this one in the stack. This can be `undefined` in case the screen animating is the last one.
    -   `progress` - Animated node representing the progress value of the next screen.
-   `closing` - Animated node representing whether the card is closing. `1` when closing, `0` if not.
-   `swiping` - Animated node representing whether the card is being swiped. `1` when swiping, `0` if not.
-   `inverted` - Animated node representing whether the card is inverted. `-1` when inverted, `1` if not.
-   `index` - The index of the card in the stack.
-   `layouts` - Layout measurements for various items we use for animation.
    -   `screen` - Layout of the whole screen. Contains `height` and `width` properties.
-   `insets` - Layout of the safe area insets. Contains `top`, `right`, `bottom` and `left` properties.

See [Transparent modals](https://reactnavigation.org/docs/shared-element-transitions/#transparent-modals) for an example of how to use this hook.

## Animations[](https://reactnavigation.org/docs/shared-element-transitions/#animations "Direct link to Animations")

You can specify the `animation` option to customize the transition animation for screens being pushed or popped.

Supported values for `animation` are:

-   `default` - Default animation based on the platform and OS version.
-   `fade` - Simple fade animation for dialogs.
-   `fade_from_bottom` - Standard Android-style fade-in from the bottom for Android Oreo.
-   `fade_from_right` - Standard Android-style fade-in from the right for Android 14.
-   `reveal_from_bottom` - Standard Android-style reveal from the bottom for Android Pie.
-   `scale_from_center` - Scale animation from the center.
-   `slide_from_right` - Standard iOS-style slide in from the right.
-   `slide_from_left` - Similar to `slide_from_right`, but the screen will slide in from the left.
-   `slide_from_bottom` - Slide animation from the bottom for modals and bottom sheets.
-   `none` - The screens are pushed or popped immediately without any animation.

By default, Android and iOS use the `default` animation and other platforms use `none`.

If you need more control over the animation, you can customize individual parts of the animation using the various animation-related options:

Stack Navigator exposes various options to configure the transition animation when a screen is added or removed. These transition animations can be customized on a per-screen basis by specifying the options in the `options` prop for each screen.

-   `gestureDirection` - The direction of swipe gestures:
    
    -   `horizontal` - The gesture to close the screen will start from the left, and from the right in RTL. For animations, screen will slide from the right with `SlideFromRightIOS`, and from the left in RTL.
    -   `horizontal-inverted` - The gesture to close the screen will start from the right, and from the left in RTL. For animations, screen will slide from the left with `SlideFromRightIOS`, and from the right in RTL as the direction is inverted.
    -   `vertical` - The gesture to close the screen will start from the top. For animations, screen will slide from the bottom.
    -   `vertical-inverted` - The gesture to close the screen will start from the bottom. For animations, screen will slide from the top.
    
    You may want to specify a matching horizontal/vertical animation along with `gestureDirection` as well. For the animations included in the library, if you set `gestureDirection` to one of the inverted ones, it'll also flip the animation direction.
    
-   `transitionSpec` - An object which specifies the animation type (`timing` or `spring`) and their options (such as `duration` for `timing`). It takes 2 properties:
    
    -   `open` - Configuration for the transition when adding a screen
    -   `close` - Configuration for the transition when removing a screen.
    
    Each of the object should specify 2 properties:
    
    -   `animation` - The animation function to use for the animation. Supported values are `timing` and `spring`.
    -   `config` - The configuration object for the timing function. For `timing`, it can be `duration` and `easing`. For `spring`, it can be `stiffness`, `damping`, `mass`, `overshootClamping`, `restDisplacementThreshold` and `restSpeedThreshold`.
    
    A config which uses spring animation looks like this:
    
    ```
    const config = {  animation: 'spring',  config: {    stiffness: 1000,    damping: 500,    mass: 3,    overshootClamping: true,    restDisplacementThreshold: 0.01,    restSpeedThreshold: 0.01,  },};
    ```
    
    We can pass this config in the `transitionSpec` option:
    
    ```
    <Stack.Screen  name="Profile"  component={Profile}  options={{    transitionSpec: {      open: config,      close: config,    },  }}/>
    ```
    
    [Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Troubleshooting%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fstack-animation-config.js)
-   `cardStyleInterpolator` - This is a function which specifies interpolated styles for various parts of the card. This allows you to customize the transitions when navigating from screen to screen. It is expected to return at least empty object, possibly containing interpolated styles for container, the card itself, overlay and shadow. Supported properties are:
    
    -   `containerStyle` - Style for the container view wrapping the card.
    -   `cardStyle` - Style for the view representing the card.
    -   `overlayStyle` - Style for the view representing the semi-transparent overlay below
    -   `shadowStyle` - Style for the view representing the card shadow.
    
    The function receives the following properties in its argument:
    
    -   `current` - Values for the current screen:
        -   `progress` - Animated node representing the progress value of the current screen.
    -   `next` - Values for the screen after this one in the stack. This can be `undefined` in case the screen animating is the last one.
        -   `progress` - Animated node representing the progress value of the next screen.
    -   `index` - The index of the card in the stack.
    -   `closing` - Animated node representing whether the card is closing. `1` when closing, `0` if not.
    -   `layouts` - Layout measurements for various items we use for animation.
        -   `screen` - Layout of the whole screen. Contains `height` and `width` properties.
            
    
    > **Note that when a screen is not the last, it will use the next screen's transition config.** This is because many transitions involve an animation of the previous screen, and so these two transitions need to be kept together to prevent running two different kinds of transitions on the two screens (for example a slide and a modal). You can check the `next` parameter to find out if you want to animate out the previous screen. For more information about this parameter, see [Animation](https://reactnavigation.org/docs/stack-navigator#animations) section.
    
    A config which just fades the screen looks like this:
    
    ```
    const forFade = ({ current }) => ({  cardStyle: {    opacity: current.progress,  },});
    ```
    
    We can pass this function in `cardStyleInterpolator` option:
    
    ```
    <Stack.Screen  name="Profile"  component={Profile}  options={{ cardStyleInterpolator: forFade }}/>
    ```
    
    [Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Troubleshooting%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fstack-for-fade-card.js)
    
    The interpolator will be called for each screen. For example, say you have a 2 screens in the stack, A & B. B is the new screen coming into focus and A is the previous screen. The interpolator will be called for each screen:
    
    -   The interpolator is called for `B`: Here, the `current.progress` value represents the progress of the transition, which will start at `0` and end at `1`. There won't be a `next.progress` since `B` is the last screen.
    -   The interpolator is called for `A`: Here, the `current.progress` will stay at the value of `1` and won't change, since the current transition is running for `B`, not `A`. The `next.progress` value represents the progress of `B` and will start at `0` and end at `1`.
    
    Say we want to animate both screens during the transition. The easiest way to do it would be to combine the progress value of current and next screens:
    
    ```
    const progress = Animated.add(  current.progress.interpolate({    inputRange: [0, 1],    outputRange: [0, 1],    extrapolate: 'clamp',  }),  next    ? next.progress.interpolate({        inputRange: [0, 1],        outputRange: [0, 1],        extrapolate: 'clamp',      })    : 0);
    ```
    
    Here, the screen `A` will have both `current.progress` and `next.progress`, and since `current.progress` stays at `1` and `next.progress` is changing, combined, the progress will change from `1` to `2`. The screen `B` will only have `current.progress` which will change from `0` to `1`. So, we can apply different interpolations for `0-1` and `1-2` to animate focused screen and unfocused screen respectively.
    
    A config which translates the previous screen slightly to the left, and translates the current screen from the right edge would look like this:
    
    ```
    const forSlide = ({ current, next, inverted, layouts: { screen } }) => {  const progress = Animated.add(    current.progress.interpolate({      inputRange: [0, 1],      outputRange: [0, 1],      extrapolate: 'clamp',    }),    next      ? next.progress.interpolate({          inputRange: [0, 1],          outputRange: [0, 1],          extrapolate: 'clamp',        })      : 0  );  return {    cardStyle: {      transform: [        {          translateX: Animated.multiply(            progress.interpolate({              inputRange: [0, 1, 2],              outputRange: [                screen.width, // Focused, but offscreen in the beginning                0, // Fully focused                screen.width * -0.3, // Fully unfocused              ],              extrapolate: 'clamp',            }),            inverted          ),        },      ],    },  };};
    ```
    
-   `headerStyleInterpolator` - This is a function which specifies interpolated styles for various parts of the header. It is expected to return at least empty object, possibly containing interpolated styles for left label and button, right button, title and background. Supported properties are:
    
    -   `leftLabelStyle` - Style for the label of the left button (back button label).
    -   `leftButtonStyle` - Style for the left button (usually the back button).
    -   `rightButtonStyle` - Style for the right button.
    -   `titleStyle` - Style for the header title text.
    -   `backgroundStyle` - Style for the header background.
    
    The function receives the following properties in it's argument:
    
    -   `current` - Values for the current screen (the screen which owns this header).
        -   `progress` - Animated node representing the progress value of the current screen. `0` when screen should start coming into view, `0.5` when it's mid-way, `1` when it should be fully in view.
    -   `next` - Values for the screen after this one in the stack. This can be `undefined` in case the screen animating is the last one.
        -   `progress` - Animated node representing the progress value of the next screen.
    -   `layouts` - Layout measurements for various items we use for animation. Each layout object contain `height` and `width` properties.
        -   `screen` - Layout of the whole screen.
        -   `title` - Layout of the title element. Might be `undefined` when not rendering a title.
        -   `leftLabel` - Layout of the back button label. Might be `undefined` when not rendering a back button label.
    
    A config that just fades the elements looks like this:
    
    ```
    const forFade = ({ current, next }) => {  const opacity = Animated.add(    current.progress,    next ? next.progress : 0  ).interpolate({    inputRange: [0, 1, 2],    outputRange: [0, 1, 0],  });  return {    leftButtonStyle: { opacity },    rightButtonStyle: { opacity },    titleStyle: { opacity },    backgroundStyle: { opacity },  };};
    ```
    
    We can pass this function in `headerStyleInterpolator` option:
    
    ```
    <Stack.Screen  name="Profile"  component={Profile}  options={{ headerStyleInterpolator: forFade }}/>
    ```
    
    [Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Troubleshooting%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fstack-for-fade-header.js)

### Pre-made configs[](https://reactnavigation.org/docs/shared-element-transitions/#pre-made-configs "Direct link to Pre-made configs")

With these options, it's possible to build custom transition animations for screens. We also export various configs from the library with ready-made animations which you can use:

#### `TransitionSpecs`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionspecs "Direct link to transitionspecs")

-   `TransitionIOSSpec` - Exact values from UINavigationController's animation configuration.
-   `FadeInFromBottomAndroidSpec` - Configuration for activity open animation from Android Nougat.
-   `FadeOutToBottomAndroidSpec` - Configuration for activity close animation from Android Nougat.
-   `RevealFromBottomAndroidSpec` - Approximate configuration for activity open animation from Android Pie.

Example:

```
import { TransitionSpecs } from '@react-navigation/stack';// ...<Stack.Screen  name="Profile"  component={Profile}  options={{    transitionSpec: {      open: TransitionSpecs.TransitionIOSSpec,      close: TransitionSpecs.TransitionIOSSpec,    },  }}/>;
```

#### `CardStyleInterpolators`[](https://reactnavigation.org/docs/shared-element-transitions/#cardstyleinterpolators "Direct link to cardstyleinterpolators")

-   `forHorizontalIOS` - Standard iOS-style slide in from the right.
-   `forVerticalIOS` - Standard iOS-style slide in from the bottom (used for modals).
-   `forModalPresentationIOS` - Standard iOS-style modal animation in iOS 13.
-   `forFadeFromBottomAndroid` - Standard Android-style fade in from the bottom for Android Oreo.
-   `forRevealFromBottomAndroid` - Standard Android-style reveal from the bottom for Android Pie.

Example configuration for Android Oreo style vertical screen fade animation:

```
import { CardStyleInterpolators } from '@react-navigation/stack';// ...<Stack.Screen  name="Profile"  component={Profile}  options={{    title: 'Profile',    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,  }}/>;
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Troubleshooting%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fstack-card-style-interpolator.js)

-   `forUIKit` - Standard UIKit style animation for the header where the title fades into the back button label.
-   `forFade` - Simple fade animation for the header elements.
-   `forStatic` - Simple translate animation to translate the header along with the sliding screen.

Example configuration for default iOS animation for header elements where the title fades into the back button:

```
import { HeaderStyleInterpolators } from '@react-navigation/stack';// ...<Stack.Screen  name="Profile"  component={Profile}  options={{    title: 'Profile',    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,  }}/>;
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Troubleshooting%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fstack-for-ui-kit.js)

warning

Always define your animation configuration at the top-level of the file to ensure that the references don't change across re-renders. This is important for smooth and reliable transition animations.

#### `TransitionPresets`[](https://reactnavigation.org/docs/shared-element-transitions/#transitionpresets "Direct link to transitionpresets")

We export various transition presets which bundle various set of these options together to match certain native animations. A transition preset is an object containing few animation related screen options exported under `TransitionPresets`. Currently the following presets are available:

-   `SlideFromRightIOS` - Standard iOS navigation transition.
-   `ModalSlideFromBottomIOS` - Standard iOS navigation transition for modals.
-   `ModalPresentationIOS` - Standard iOS modal presentation style (introduced in iOS 13).
-   `FadeFromBottomAndroid` - Standard Android navigation transition when opening or closing an Activity on Android < 9 (Oreo).
-   `RevealFromBottomAndroid` - Standard Android navigation transition when opening or closing an Activity on Android 9 (Pie).
-   `ScaleFromCenterAndroid` - Standard Android navigation transition when opening or closing an Activity on Android >= 10.
-   `DefaultTransition` - Default navigation transition for the current platform.
-   `ModalTransition` - Default modal transition for the current platform.

You can spread these presets in `options` to customize the animation for a screen:

```
import { TransitionPresets } from '@react-navigation/stack';// ...<Stack.Screen  name="Profile"  component={Profile}  options={{    title: 'Profile',    ...TransitionPresets.ModalSlideFromBottomIOS,  }}/>;
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Troubleshooting%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fstack-modal-slide-from-bottom.js)

If you want to customize the transition animations for all of the screens in the navigator, you can specify it in `screenOptions` prop for the navigator.

Example configuration for iOS modal presentation style:

```
import { TransitionPresets } from '@react-navigation/stack';// ...<Stack.Navigator  initialRouteName="Home"  screenOptions={({ route, navigation }) => ({    headerShown: false,    gestureEnabled: true,    ...TransitionPresets.ModalPresentationIOS,  })}>  <Stack.Screen name="Home" component={Home} />  <Stack.Screen name="Profile" component={Profile} /></Stack.Navigator>;
```

[Try this example on **Snack**](https://snack.expo.io/?platform=android&name=Troubleshooting%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fstack-modal-presentation.js)

### Transparent modals[](https://reactnavigation.org/docs/shared-element-transitions/#transparent-modals "Direct link to Transparent modals")

A transparent modal is like a modal dialog which overlays the screen. The previous screen still stays visible underneath. To get a transparent modal screen, you can specify `presentation: 'transparentModal'` in the screen's options.

Example:

```
<Stack.Navigator>  <Stack.Screen name="Home" component={HomeStack} />  <Stack.Screen    name="Modal"    component={ModalScreen}    options={{ presentation: 'transparentModal' }}  /></Stack.Navigator>
```

Now, when you navigate to the `Modal` screen, it'll have a transparent background and the `Home` screen will be visible underneath.

In addition to `presentation`, you might want to optionally specify few more things to get a modal dialog like behavior:

-   Disable the header with `headerShown: false`
-   Enable the overlay with `cardOverlayEnabled: true` (you can't tap the overlay to close the screen this way, see below for alternatives)

If you want to further customize how the dialog animates, or want to close the screen when tapping the overlay etc., you can use the `useCardAnimation` hook to customize elements inside your screen.

Example:

```
import { Animated, View, Text, Pressable, StyleSheet } from 'react-native';import { useTheme, useNavigation } from '@react-navigation/native';import { useCardAnimation } from '@react-navigation/stack';import { Button } from '@react-navigation/elements';function ModalScreen() {  const navigation = useNavigation();  const { colors } = useTheme();  const { current } = useCardAnimation();  return (    <View      style={{        flex: 1,        alignItems: 'center',        justifyContent: 'center',      }}    >      <Pressable        style={[          StyleSheet.absoluteFill,          { backgroundColor: 'rgba(0, 0, 0, 0.5)' },        ]}        onPress={navigation.goBack}      />      <Animated.View        style={{          padding: 16,          width: '90%',          maxWidth: 400,          borderRadius: 3,          backgroundColor: colors.card,          transform: [            {              scale: current.progress.interpolate({                inputRange: [0, 1],                outputRange: [0.9, 1],                extrapolate: 'clamp',              }),            },          ],        }}      >        <Text>          Mise en place is a French term that literally means “put in place.” It          also refers to a way cooks in professional kitchens and restaurants          set up their work stations—first by gathering all ingredients for a          recipes, partially preparing them (like measuring out and chopping),          and setting them all near each other. Setting up mise en place before          cooking is another top tip for home cooks, as it seriously helps with          organization. It’ll pretty much guarantee you never forget to add an          ingredient and save you time from running back and forth from the          pantry ten times.        </Text>        <Button          color={colors.primary}          style={{ alignSelf: 'flex-end' }}          onPress={navigation.goBack}        >          Okay        </Button>      </Animated.View>    </View>  );}
```

Here we animate the scale of the dialog, and also add an overlay to close the dialog.


# 04 Libraries

## Developer tools  React Navigation

---
created: 2025-02-08T17:03:43 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Developer tools | React Navigation

> ## Excerpt
> Developer tools to make debugging easier when using React Navigation.

---
Version: 7.x

Developer tools to make debugging easier when using React Navigation.

To use the developer tools, install [`@react-navigation/devtools`](https://github.com/react-navigation/react-navigation/tree/master/packages/devtools):

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/devtools
```

Hooks from this package only work during development and are disabled in production. You don't need to do anything special to remove them from the production build.

## API Definition[](https://reactnavigation.org/docs/shared-element-transitions/#api-definition "Direct link to API Definition")

The package exposes the following APIs:

### `useLogger`[](https://reactnavigation.org/docs/shared-element-transitions/#uselogger "Direct link to uselogger")

This hook provides a logger for React Navigation. It logs the navigation state and actions to the console.

**Usage:**

To use the hook, import it and pass a `ref` to the `NavigationContainer` as its argument:

-   Static
-   Dynamic

```
import * as React from 'react';import {  NavigationContainer,  useNavigationContainerRef,} from '@react-navigation/native';import { useLogger } from '@react-navigation/devtools';export default function App() {  const navigationRef = useNavigationContainerRef();  useLogger(navigationRef);  return (    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>  );}
```

### `useReduxDevToolsExtension`[](https://reactnavigation.org/docs/shared-element-transitions/#usereduxdevtoolsextension "Direct link to usereduxdevtoolsextension")

This hook provides integration with [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools). It also works with [`React Native Debugger app`](https://github.com/jhen0409/react-native-debugger) which includes this extension.

**Usage:**

To use the hook, import it and pass a `ref` to the `NavigationContainer` as its argument:

-   Static
-   Dynamic

```
import * as React from 'react';import {  NavigationContainer,  useNavigationContainerRef,} from '@react-navigation/native';import { useReduxDevToolsExtension } from '@react-navigation/devtools';export default function App() {  const navigationRef = useNavigationContainerRef();  useReduxDevToolsExtension(navigationRef);  return (    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>  );}
```

Now, you'll be able to see logs from React Navigation in Redux DevTools Extension, e.g. when you're debugging your app with React Native Debugger app.


## Elements Library  React Navigation

---
created: 2025-02-08T17:03:57 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Elements Library | React Navigation

> ## Excerpt
> A component library containing the UI elements and helpers used in React Navigation. It can be useful if you're building your own navigator, or want to reuse a default functionality in your app.

---
A component library containing the UI elements and helpers used in React Navigation. It can be useful if you're building your own navigator, or want to reuse a default functionality in your app.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this package, ensure that you have [`@react-navigation/native` and its dependencies (follow this guide)](https://reactnavigation.org/docs/getting-started), then install [`@react-navigation/elements`](https://github.com/react-navigation/react-navigation/tree/main/packages/elements):

-   npm
-   Yarn
-   pnpm

```
npm install @react-navigation/elements
```

## Components[](https://reactnavigation.org/docs/shared-element-transitions/#components "Direct link to Components")

A component that can be used as a header. This is used by all the navigators by default.

Usage:

```
import { Header } from '@react-navigation/elements';function MyHeader() {  return <Header title="My app" />;}
```

[Try on **Snack**](https://snack.expo.dev/?name=React+Navigation+Elements+Header&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+SafeAreaProviderCompat+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+Header+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+MyHeader%28%29+%7B%0A++return+%3CHeader+title%3D%22My+app%22+%2F%3E%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CSafeAreaProviderCompat%3E%0A++++++++%3CMyHeader+%2F%3E%0A++++++%3C%2FSafeAreaProviderCompat%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

To use the header in a navigator, you can use the `header` option in the screen options:

-   Static
-   Dynamic

```
import { Header, getHeaderTitle } from '@react-navigation/elements';const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator      screenOptions={{        header: ({ options, route, back }) => (          <Header            {...options}            back={back}            title={getHeaderTitle(options, route.name)}          />        ),      }}    >      <Stack.Screen name="Home" component={HomeScreen} />    </Stack.Navigator>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+with+Native+Stack&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Text%2C+View%2C+Button+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+Header%2C+getHeaderTitle+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%0A++++++screenOptions%3D%7B%7B%0A++++++++header%3A+%28%7B+options%2C+route%2C+back+%7D%29+%3D%3E+%28%0A++++++++++%3CHeader%0A++++++++++++%7B...options%7D%0A++++++++++++back%3D%7Bback%7D%0A++++++++++++title%3D%7BgetHeaderTitle%28options%2C+route.name%29%7D%0A++++++++++%2F%3E%0A++++++++%29%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

note

This doesn't replicate the behavior of the header in stack and native stack navigators as the stack navigator also includes animations, and the native stack navigator header is provided by the native platform.

It accepts the following props:

String or a function that returns a React Element to be used by the header. Defaults to scene `title`.

When a function is specified, it receives an object containing following properties:

-   `allowFontScaling`: Whether it scale to respect Text Size accessibility settings.
-   `tintColor`: Text color of the header title.
-   `style`: Style object for the `Text` component.
-   `children`: The title string (from `title` in `options`).

-   Static
-   Dynamic

```
<Stack.Screen  name="Home"  component={HomeScreen}  options={{    headerTitle: ({ allowFontScaling, tintColor, style, children }) => (      <Text        style={[style, { color: tintColor }]}        allowFontScaling={allowFontScaling}      >        {children}      </Text>    ),  }}/>
```

How to align the header title. Possible values:

-   `left`
-   `center`

Defaults to `center` on iOS and `left` on Android.

Whether header title font should scale to respect Text Size accessibility settings. Defaults to `false`.

Function which returns a React Element to display on the left side of the header.

It receives an object containing following properties:

-   `tintColor`: The color of the icon and label.
-   `pressColor`: The color of the material ripple (Android >= 5.0 only).
-   `pressOpacity`: The opacity of the button when it's pressed (Android < 5.0, and iOS).
-   `displayMode`: How the element displays icon and title. Defaults to `default` on iOS and `minimal` on Android. Possible values:
    -   `default`: Displays one of the following depending on the available space: previous screen's title, generic title (e.g. 'Back') or no title (only icon).
    -   `generic`: Displays one of the following depending on the available space: generic title (e.g. 'Back') or no title (only icon). iOS >= 14 only, falls back to "default" on older iOS versions.
    -   `minimal`: Always displays only the icon without a title.
-   `href`: The URL to open when the button is pressed on the Web.

You can use it to implement your custom left button, for example:

-   Static
-   Dynamic

```
<Stack.Screen  name="Home"  component={HomeScreen}  options={{    headerLeft: (props) => (      <MyButton        {...props}        onPress={() => {          // Do something        }}      />    ),  }}/>
```

Function which returns a React Element to display on the right side of the header.

It receives an object containing following properties:

-   `tintColor`: The color of the icon and label.
-   `pressColor`: The color of the material ripple (Android >= 5.0 only).
-   `pressOpacity`: The opacity of the button when it's pressed (Android < 5.0, and iOS).

-   Static
-   Dynamic

```
<Stack.Screen  name="Home"  component={HomeScreen}  options={{    headerLeft: (props) => (      <MyButton        {...props}        onPress={() => {          // Do something        }}      />    ),  }}/>
```

Options for the search bar in the header. When this is specified, the header will contain a button to show a search input.

It can contain the following properties:

-   `ref`: Ref to manipulate the search input imperatively. It contains the following methods:
    -   `focus` - focuses the search bar
    -   `blur` - removes focus from the search bar
    -   `setText` - sets the search bar's content to given value
    -   `clearText` - removes any text present in the search bar input field
    -   `cancelSearch` - cancel the search and close the search bar
-   `autoCapitalize`: The auto-capitalization behavior. Possible values: `none`, `words`, `sentences`, `characters`.
-   `autoFocus`: Automatically focus search input on mount.
-   `cancelButtonText`: Text to be used instead of default `Cancel` button text (iOS only).
-   `inputType`: Type of the input. Possible values: `text`, `phone`, `number`, `email`.
-   `onBlur`: Callback that gets called when search input has lost focus.
-   `onChangeText`: Callback that gets called when the text changes.
-   `onClose`: Callback that gets called when search input is closed.
-   `onFocus`: Callback that gets called when search input has received focus.
-   `placeholder`: Text displayed when search input is empty.

```
React.useLayoutEffect(() => {  navigation.setOptions({    headerSearchBarOptions: {      placeholder: 'Search',      onChangeText: (text) => {        // Do something      },    },  });}, [navigation]);
```

#### `headerShadowVisible`[](https://reactnavigation.org/docs/shared-element-transitions/#headershadowvisible "Direct link to headershadowvisible")

Whether to hide the elevation shadow (Android) or the bottom border (iOS) on the header.

This is a short-hand for the following styles:

```
{  elevation: 0,  shadowOpacity: 0,  borderBottomWidth: 0,}
```

If any of the above styles are specified in `headerStyle` along with `headerShadowVisible: false`, then the styles in `headerStyle` will take precedence.

Style object for the header. You can specify a custom background color here, for example:

```
{  backgroundColor: 'tomato',}
```

Note that `headerStyle` won't take effect if you are also using [`headerBackground`](https://reactnavigation.org/docs/shared-element-transitions/#headerbackground). In that case, you should style the element returned from `headerBackground` instead.

Style object for the title component

Customize the style for the container of the `headerLeft` component, for example to add padding.

Customize the style for the container of the `headerRight` component, for example to add padding.

Customize the style for the container of the `headerTitle` component, for example to add padding.

By default, `headerTitleContainerStyle` is with an absolute position style and offsets both `left` and `right`. This may lead to white space or overlap between `headerLeft` and `headerTitle` if a customized `headerLeft` is used. It can be solved by adjusting `left` and `right` style in `headerTitleContainerStyle` and `marginHorizontal` in `headerTitleStyle`.

Style object for the container of the `headerBackground` element.

Tint color for the header

Color for material ripple (Android >= 5.0 only)

Press opacity for the buttons in header (Android < 5.0, and iOS)

Defaults to `false`. If `true`, the header will not have a background unless you explicitly provide it with `headerBackground`. The header will also float over the screen so that it overlaps the content underneath.

This is useful if you want to render a semi-transparent header or a blurred background.

Note that if you don't want your content to appear under the header, you need to manually add a top margin to your content. React Navigation won't do it automatically.

To get the height of the header, you can use [`HeaderHeightContext`](https://reactnavigation.org/docs/shared-element-transitions/#headerheightcontext) with [React's Context API](https://react.dev/reference/react/useContext#contextconsumer) or [`useHeaderHeight`](https://reactnavigation.org/docs/shared-element-transitions/#useheaderheight).

Function which returns a React Element to render as the background of the header. This is useful for using backgrounds such as an image or a gradient.

For example, you can use this with `headerTransparent` to render a blur view to create a translucent header.

-   Static
-   Dynamic

```
import { BlurView } from 'expo-blur';        <Stack.Screen          name="Home"          component={HomeScreen}          options={{            headerTransparent: true,            headerBackground: () => (              <BlurView                tint="dark"                intensity={100}                style={StyleSheet.absoluteFill}              />            ),          }}        />
```

[Try on **Snack**](https://snack.expo.dev/?name=Header+blur&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+StyleSheet+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+BlurView+%7D+from+%27expo-blur%27%3B%0A%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen%0A++++++++++name%3D%22Home%22%0A++++++++++component%3D%7BHomeScreen%7D%0A++++++++++options%3D%7B%7B%0A++++++++++++headerTransparent%3A+true%2C%0A++++++++++++headerBackground%3A+%28%29+%3D%3E+%28%0A++++++++++++++%3CBlurView%0A++++++++++++++++tint%3D%22dark%22%0A++++++++++++++++intensity%3D%7B100%7D%0A++++++++++++++++style%3D%7BStyleSheet.absoluteFill%7D%0A++++++++++++++%2F%3E%0A++++++++++++%29%2C%0A++++++++++%7D%7D%0A++++++++%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=expo-blur%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Extra padding to add at the top of header to account for translucent status bar. By default, it uses the top value from the safe area insets of the device. Pass 0 or a custom value to disable the default behavior, and customize the height.

A component containing the styles used in the background of the header, such as the background color and shadow. It's the default for [`headerBackground`](https://reactnavigation.org/docs/shared-element-transitions/#headerbackground). It accepts the same props as a [`View`](https://reactnative.dev/docs/view).

Usage:

```
<HeaderBackground style={{ backgroundColor: 'tomato' }} />
```

A component used to show the title text in header. It's the default for [`headerTitle`](https://reactnavigation.org/docs/shared-element-transitions/#headertitle). It accepts the same props as a [`Text`](https://reactnative.dev/docs/Text).

The color of title defaults to the [theme text color](https://reactnavigation.org/docs/themes). You can override it by passing a `tintColor` prop.

Usage:

```
<HeaderTitle>Hello</HeaderTitle>
```

A component used to show a button in header. It can be used for both left and right buttons. It accepts the following props:

-   `onPress` - Callback to call when the button is pressed.
-   `href` - The `href` to use for the anchor tag on web.
-   `disabled` - Boolean which controls whether the button is disabled.
-   `accessibilityLabel` - Accessibility label for the button for screen readers.
-   `testID` - ID to locate this button in tests.
-   `tintColor` - Tint color for the header button.
-   `pressColor` - Color for material ripple (Android >= 5.0 only).
-   `pressOpacity` - Opacity when the button is pressed if material ripple isn't supported by the platform.
-   `style` - Style object for the button.
-   `children` - Content to render for the button. Usually the icon.

Usage:

```
<HeaderButton  accessibilityLabel="More options"  onPress={() => console.log('button pressed')}>  <MaterialCommunityIcons    name="dots-horizontal-circle-outline"    size={24}    color={tintColor}  /></HeaderButton>
```

A component used to show the back button header. It's the default for [`headerLeft`](https://reactnavigation.org/docs/shared-element-transitions/#headerleft) in the [stack navigator](https://reactnavigation.org/docs/stack-navigator). It accepts the following props:

-   `disabled` - Boolean which controls Whether the button is disabled.
-   `onPress` - Callback to call when the button is pressed.
-   `pressColor` - Color for material ripple (Android >= 5.0 only).
-   `backImage` - Function which returns a React Element to display custom image in header's back button.
-   `tintColor` - Tint color for the header.
-   `label` - Label text for the button. Usually the title of the previous screen. By default, this is only shown on iOS.
-   `truncatedLabel` - Label text to show when there isn't enough space for the full label.
-   `displayMode`: How the back button displays icon and title. Defaults to `default` on iOS and `minimal` on Android. Possible values:
    -   `default`: Displays one of the following depending on the available space: previous screen's title, generic title (e.g. 'Back') or no title (only icon).
    -   `generic`: Displays one of the following depending on the available space: generic title (e.g. 'Back') or no title (only icon). iOS >= 14 only, falls back to "default" on older iOS versions.
    -   `minimal`: Always displays only the icon without a title.
-   `labelStyle` - Style object for the label.
-   `allowFontScaling` - Whether label font should scale to respect Text Size accessibility settings.
-   `onLabelLayout` - Callback to trigger when the size of the label changes.
-   `screenLayout` - Layout of the screen.
-   `titleLayout` - Layout of the title element in the header.
-   `canGoBack` - Boolean to indicate whether it's possible to navigate back in stack.
-   `accessibilityLabel` - Accessibility label for the button for screen readers.
-   `testID` - ID to locate this button in tests.
-   `style` - Style object for the button.

Usage:

```
<HeaderBackButton label="Hello" onPress={() => console.log('back pressed')} />
```

### `MissingIcon`[](https://reactnavigation.org/docs/shared-element-transitions/#missingicon "Direct link to missingicon")

A component that renders a missing icon symbol. It can be used as a fallback for icons to show that there's a missing icon. It accepts the following props:

-   `color` - Color of the icon.
-   `size` - Size of the icon.
-   `style` - Additional styles for the icon.

### `PlatformPressable`[](https://reactnavigation.org/docs/shared-element-transitions/#platformpressable "Direct link to platformpressable")

A component which provides an abstraction on top of [`Pressable`](https://reactnative.dev/docs/Pressable) to handle platform differences. In addition to `Pressable`'s props, it accepts following additional props:

-   `pressColor` - Color of material ripple on Android when it's pressed
-   `pressOpacity` - Opacity when it's pressed if material ripple isn't supported by the platform

### `Button`[](https://reactnavigation.org/docs/shared-element-transitions/#button "Direct link to button")

A component that renders a button. In addition to [`PlatformPressable`](https://reactnavigation.org/docs/shared-element-transitions/#platformpressable)'s props, it accepts following additional props:

-   `variant` - Variant of the button. Possible values are:
    -   `tinted` (default)
    -   `plain`
    -   `filled`
-   `color` - Color of the button. Defaults to the [theme](https://reactnavigation.org/docs/themes)'s primary color.
-   `children` - Content to render inside the button.

In addition, the button integrates with React Navigation and accepts the same props as [`useLinkProps`](https://reactnavigation.org/docs/use-link-props#options) hook.

It can be used to navigate between screens by specifying a screen name and params:

```
<Button screen="Profile" params={{ userId: 'jane' }}>  Go to Profile</Button>
```

Or as a regular button:

```
<Button onPress={() => console.log('button pressed')}>Press me</Button>
```

### `Label`[](https://reactnavigation.org/docs/shared-element-transitions/#label "Direct link to label")

The `Label` component is used to render small text. It is used in [Bottom Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator) to render the label for each tab.

In addition to the standard [`Text`](https://reactnative.dev/docs/text) props, it accepts the following props:

-   `tintColor` - Color of the label. Defaults to the [theme](https://reactnavigation.org/docs/themes)'s text color.

Usage:

### `ResourceSavingView`[](https://reactnavigation.org/docs/shared-element-transitions/#resourcesavingview "Direct link to resourcesavingview")

A component which aids in improving performance for inactive screens by utilizing [`removeClippedSubviews`](https://reactnative.dev/docs/view#removeclippedsubviews). It accepts a `visible` prop to indicate whether a screen should be clipped.

Usage:

```
<ResourceSavingView visible={0}>{/* Content */}</ResourceSavingView>
```

## Utilities[](https://reactnavigation.org/docs/shared-element-transitions/#utilities "Direct link to Utilities")

### `SafeAreaProviderCompat`[](https://reactnavigation.org/docs/shared-element-transitions/#safeareaprovidercompat "Direct link to safeareaprovidercompat")

A wrapper over the `SafeAreaProvider` component from [\`react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) which includes initial values.

Usage:

```
<SafeAreaProviderCompat>{/* Your components */}</SafeAreaProviderCompat>
```

React context that can be used to get the back title of the parent screen.

```
import { HeaderBackContext } from '@react-navigation/elements';// ...<HeaderBackContext.Consumer>  {(headerBack) => {    if (headerBack) {      const backTitle = headerBack.title;      /* render something */    }    /* render something */  }}</HeaderBackContext.Consumer>;
```

React context that can be used to check if a header is visible in a parent screen.

```
import { HeaderShownContext } from '@react-navigation/elements';// ...<HeaderShownContext.Consumer>  {(headerShown) => {    /* render something */  }}</HeaderShownContext.Consumer>;
```

React context that can be used to get the height of the nearest visible header in a parent screen.

```
import { HeaderHeightContext } from '@react-navigation/elements';// ...<HeaderHeightContext.Consumer>  {(headerHeight) => {    /* render something */  }}</HeaderHeightContext.Consumer>;
```

Hook that returns the height of the nearest visible header in the parent screen.

```
import { useHeaderHeight } from '@react-navigation/elements';// ...const headerHeight = useHeaderHeight();
```

Helper that returns the default header height. It takes the following parameters:

-   `layout` - Layout of the screen, i.e. an object containing `height` and `width` properties.
-   `statusBarHeight` - height of the statusbar

Helper that returns the title text to use in header. It takes the following parameters:

-   `options` - The options object of the screen.
-   `fallback` - Fallback title string if no title was found in options.


## React Native Drawer Layout  React Navigation

---
created: 2025-02-08T17:04:26 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# React Native Drawer Layout | React Navigation

> ## Excerpt
> A cross-platform Drawer component for React Native implemented using react-native-gesture-handler and react-native-reanimated on native platforms and CSS transitions on Web.

---
A cross-platform Drawer component for React Native implemented using [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/) and [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/) on native platforms and CSS transitions on Web.

This package doesn't integrate with React Navigation. If you want to integrate the drawer layout with React Navigation's navigation system, e.g. want to show screens in the drawer and be able to navigate between them using `navigation.navigate` etc, use [Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator) instead.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this package, open a Terminal in the project root and run:

-   npm
-   Yarn
-   pnpm

```
npm install react-native-drawer-layout
```

Then, you need to install and configure the libraries that are required by the drawer:

1.  First, install [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/) and [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/) (at least version 2 or 3).
    
    If you have a Expo managed project, in your project directory, run:
    
    ```
    npx expo install react-native-gesture-handler react-native-reanimated
    ```
    
    If you have a bare React Native project, in your project directory, run:
    
    -   npm
    -   Yarn
    -   pnpm
    
    ```
    npm install react-native-gesture-handler react-native-reanimated
    ```
    
2.  Configure the Reanimated Babel Plugin in your project following the [installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started).
    
3.  To finalize the installation of `react-native-gesture-handler`, we need to conditionally import it. To do this, create 2 files:
    
    gesture-handler.native.js
    
    ```
    // Only import react-native-gesture-handler on native platformsimport 'react-native-gesture-handler';
    ```
    
    gesture-handler.js
    
    ```
    // Don't import react-native-gesture-handler on web
    ```
    
    Now, add the following at the **top** (make sure it's at the top and there's nothing else before it) of your entry file, such as `index.js` or `App.js`:
    
    ```
    import './gesture-handler';
    ```
    
    Since the drawer layout doesn't use `react-native-gesture-handler` on Web, this avoids unnecessarily increasing the bundle size.
    
    warning
    
    If you are building for Android or iOS, do not skip this step, or your app may crash in production even if it works fine in development. This is not applicable to other platforms.
    
4.  If you're on a Mac and developing for iOS, you also need to install the pods (via [Cocoapods](https://cocoapods.org/)) to complete the linking.
    

We're done! Now you can build and run the app on your device/simulator.

## Quick start[](https://reactnavigation.org/docs/shared-element-transitions/#quick-start "Direct link to Quick start")

```
import * as React from 'react';import { Text } from 'react-native';import { Drawer } from 'react-native-drawer-layout';import { Button } from '@react-navigation/elements';export default function DrawerExample() {  const [open, setOpen] = React.useState(false);  return (    <Drawer      open={open}      onOpen={() => setOpen(true)}      onClose={() => setOpen(false)}      renderDrawerContent={() => {        return <Text>Drawer content</Text>;      }}    >      <Button        onPress={() => setOpen((prevOpen) => !prevOpen)}        title={`${open ? 'Close' : 'Open'} drawer`}      />    </Drawer>  );}
```

## API reference[](https://reactnavigation.org/docs/shared-element-transitions/#api-reference "Direct link to API reference")

The package exports a `Drawer` component which is the one you'd use to render the drawer.

### `Drawer`[](https://reactnavigation.org/docs/shared-element-transitions/#drawer "Direct link to drawer")

Component is responsible for rendering a drawer sidebar with animations and gestures.

#### Drawer Props[](https://reactnavigation.org/docs/shared-element-transitions/#drawer-props "Direct link to Drawer Props")

##### `open`[](https://reactnavigation.org/docs/shared-element-transitions/#open "Direct link to open")

Whether the drawer is open or not.

##### `onOpen`[](https://reactnavigation.org/docs/shared-element-transitions/#onopen "Direct link to onopen")

Callback which is called when the drawer is opened.

##### `onClose`[](https://reactnavigation.org/docs/shared-element-transitions/#onclose "Direct link to onclose")

Callback which is called when the drawer is closed.

##### `renderDrawerContent`[](https://reactnavigation.org/docs/shared-element-transitions/#renderdrawercontent "Direct link to renderdrawercontent")

Callback which returns a react element to render as the content of the drawer.

##### `layout`[](https://reactnavigation.org/docs/shared-element-transitions/#layout "Direct link to layout")

Object containing the layout of the container. Defaults to the dimensions of the application's window.

##### `drawerPosition`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerposition "Direct link to drawerposition")

Position of the drawer on the screen. Defaults to `right` in RTL mode, otherwise `left`.

##### `drawerType`[](https://reactnavigation.org/docs/shared-element-transitions/#drawertype "Direct link to drawertype")

Type of the drawer. It determines how the drawer looks and animates.

-   `front`: Traditional drawer which covers the screen with a overlay behind it.
-   `back`: The drawer is revealed behind the screen on swipe.
-   `slide`: Both the screen and the drawer slide on swipe to reveal the drawer.
-   `permanent`: A permanent drawer is shown as a sidebar.

Defaults to `front`.

##### `drawerStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#drawerstyle "Direct link to drawerstyle")

Style object for the drawer. You can pass a custom background color for drawer or a custom width for the drawer.

##### `overlayStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#overlaystyle "Direct link to overlaystyle")

Style object for the overlay.

##### `hideStatusBarOnOpen`[](https://reactnavigation.org/docs/shared-element-transitions/#hidestatusbaronopen "Direct link to hidestatusbaronopen")

Whether to hide the status bar when the drawer is open. Defaults to `false`.

##### `keyboardDismissMode`[](https://reactnavigation.org/docs/shared-element-transitions/#keyboarddismissmode "Direct link to keyboarddismissmode")

Whether to dismiss the keyboard when the drawer is open. Supported values are:

-   `none`: The keyboard will not be dismissed when the drawer is open.
-   `on-drag`: The keyboard will be dismissed when the drawer is opened by a swipe gesture.

Defaults to `on-drag`.

##### `statusBarAnimation`[](https://reactnavigation.org/docs/shared-element-transitions/#statusbaranimation "Direct link to statusbaranimation")

Animation to use when the status bar is hidden. Supported values are:

-   `slide`: The status bar will slide out of view.
-   `fade`: The status bar will fade out of view.
-   `none`: The status bar will not animate.

Use it in combination with `hideStatusBarOnOpen`.

##### `swipeEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#swipeenabled "Direct link to swipeenabled")

Whether to enable swipe gestures to open the drawer. Defaults to `true`.

Swipe gestures are only supported on iOS and Android.

##### `swipeEdgeWidth`[](https://reactnavigation.org/docs/shared-element-transitions/#swipeedgewidth "Direct link to swipeedgewidth")

How far from the edge of the screen the swipe gesture should activate. Defaults to `32`.

This is only supported on iOS and Android.

##### `swipeMinDistance`[](https://reactnavigation.org/docs/shared-element-transitions/#swipemindistance "Direct link to swipemindistance")

Minimum swipe distance that should activate opening the drawer. Defaults to `60`.

This is only supported on iOS and Android.

##### `swipeMinVelocity`[](https://reactnavigation.org/docs/shared-element-transitions/#swipeminvelocity "Direct link to swipeminvelocity")

Minimum swipe velocity that should activate opening the drawer. Defaults to `500`.

This is only supported on iOS and Android.

#### `configureGestureHandler`[](https://reactnavigation.org/docs/shared-element-transitions/#configuregesturehandler "Direct link to configuregesturehandler")

Callback to configure the underlying [gesture from `react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/gesture). It receives the `gesture` object as an argument:

```
configureGestureHandler={({ gesture }) => {  return gesture.enableTrackpadTwoFingerGesture(false);}}
```

##### `children`[](https://reactnavigation.org/docs/shared-element-transitions/#children "Direct link to children")

Content that the drawer should wrap.

### `useDrawerProgress`[](https://reactnavigation.org/docs/shared-element-transitions/#usedrawerprogress "Direct link to usedrawerprogress")

The `useDrawerProgress` hook returns a Reanimated `SharedValue` which represents the progress of the drawer. It can be used to animate the content of the screen.

Example with modern implementation:

```
import { Animated } from 'react-native-reanimated';import { useDrawerProgress } from 'react-native-drawer-layout';// ...function MyComponent() {  const progress = useDrawerProgress();  const animatedStyle = useAnimatedStyle(() => {    return {      transform: [        {          translateX: interpolate(progress, [0, 1], [-100, 0]),        },      ],    };  });  return <Animated.View style={animatedStyle}>{/* ... */}</Animated.View>;}
```

If you are using class components, you can use the `DrawerProgressContext` to get the progress value.

```
import { DrawerProgressContext } from 'react-native-drawer-layout';// ...class MyComponent extends React.Component {  static contextType = DrawerProgressContext;  render() {    const progress = this.context;    // ...  }}
```

warning

The `useDrawerProgress` hook (or `DrawerProgressContext`) will return a mock value on Web since Reanimated is not used on Web. The mock value can only represent the open state of the drawer (`0` when closed, `1` when open), and not the progress of the drawer.


## React Native Tab View  React Navigation

---
created: 2025-02-08T17:04:19 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# React Native Tab View | React Navigation

> ## Excerpt
> React Native Tab View is a cross-platform Tab View component for React Native implemented using react-native-pager-view on Android & iOS, and PanResponder on Web, macOS, and Windows.

---
React Native Tab View is a cross-platform Tab View component for React Native implemented using [`react-native-pager-view`](https://github.com/callstack/react-native-viewpager) on Android & iOS, and [PanResponder](https://reactnative.dev/docs/panresponder) on Web, macOS, and Windows.

It follows material design guidelines by default, but you can also use your own custom tab bar or position the tab bar at the bottom.

This package doesn't integrate with React Navigation. If you want to integrate the tab view with React Navigation's navigation system, e.g. want to show screens in the tab bar and be able to navigate between them using `navigation.navigate` etc, use [Material Top Tab Navigator](https://reactnavigation.org/docs/material-top-tab-navigator) instead.

## Installation[](https://reactnavigation.org/docs/shared-element-transitions/#installation "Direct link to Installation")

To use this package, open a Terminal in the project root and run:

-   npm
-   Yarn
-   pnpm

```
npm install react-native-tab-view
```

Next, install [`react-native-pager-view`](https://github.com/callstack/react-native-viewpager) if you plan to support iOS and Android.

If you are using Expo, to ensure that you get the compatible versions of the libraries, run:

```
expo install react-native-pager-view
```

If you are not using Expo, run the following:

-   npm
-   Yarn
-   pnpm

```
npm install react-native-pager-view
```

We're done! Now you can build and run the app on your device/simulator.

## Quick start[](https://reactnavigation.org/docs/shared-element-transitions/#quick-start "Direct link to Quick start")

```
import * as React from 'react';import { View, useWindowDimensions } from 'react-native';import { TabView, SceneMap } from 'react-native-tab-view';const renderScene = SceneMap({  first: FirstRoute,  second: SecondRoute,});const routes = [  { key: 'first', title: 'First' },  { key: 'second', title: 'Second' },];export default function TabViewExample() {  const layout = useWindowDimensions();  const [index, setIndex] = React.useState(0);  return (    <TabView      navigationState={{ index, routes }}      renderScene={renderScene}      onIndexChange={setIndex}      initialLayout={{ width: layout.width }}    />  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=React+Native+Tab+View&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+useWindowDimensions+%7D+from+%27react-native%27%3B%0Aimport+%7B+TabView%2C+SceneMap+%7D+from+%27react-native-tab-view%27%3B%0A%0Aconst+FirstRoute+%3D+%28%29+%3D%3E+%28%0A++%3CView+style%3D%7B%7B+flex%3A+1%2C+backgroundColor%3A+%27%23ff4081%27+%7D%7D+%2F%3E%0A%29%3B%0A%0Aconst+SecondRoute+%3D+%28%29+%3D%3E+%28%0A++%3CView+style%3D%7B%7B+flex%3A+1%2C+backgroundColor%3A+%27%23673ab7%27+%7D%7D+%2F%3E%0A%29%3B%0A%0Aconst+renderScene+%3D+SceneMap%28%7B%0A++first%3A+FirstRoute%2C%0A++second%3A+SecondRoute%2C%0A%7D%29%3B%0A%0Aconst+routes+%3D+%5B%0A++%7B+key%3A+%27first%27%2C+title%3A+%27First%27+%7D%2C%0A++%7B+key%3A+%27second%27%2C+title%3A+%27Second%27+%7D%2C%0A%5D%3B%0A%0Aexport+default+function+TabViewExample%28%29+%7B%0A++const+layout+%3D+useWindowDimensions%28%29%3B%0A++const+%5Bindex%2C+setIndex%5D+%3D+React.useState%280%29%3B%0A%0A++return+%28%0A++++%3CTabView%0A++++++navigationState%3D%7B%7B+index%2C+routes+%7D%7D%0A++++++renderScene%3D%7BrenderScene%7D%0A++++++onIndexChange%3D%7BsetIndex%7D%0A++++++initialLayout%3D%7B%7B+width%3A+layout.width+%7D%7D%0A++++%2F%3E%0A++%29%3B%0A%7D%0A&dependencies=react-native-tab-view%404.0.5%2Creact%40*%2Creact-native%40*%2Creact-native-pager-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## More examples on Snack[](https://reactnavigation.org/docs/shared-element-transitions/#more-examples-on-snack "Direct link to More examples on Snack")

-   [Custom Tab Bar](https://snack.expo.io/@satya164/react-native-tab-view-custom-tabbar)
-   [Lazy Load](https://snack.expo.io/@satya164/react-native-tab-view-lazy-load)

## API reference[](https://reactnavigation.org/docs/shared-element-transitions/#api-reference "Direct link to API reference")

The package exports a `TabView` component which is the one you'd use to render the tab view, and a `TabBar` component which is the default tab bar implementation.

### `TabView`[](https://reactnavigation.org/docs/shared-element-transitions/#tabview "Direct link to tabview")

Container component responsible for rendering and managing tabs. Follows material design styles by default.

Basic usage look like this:

```
<TabView  navigationState={{ index, routes }}  onIndexChange={setIndex}  renderScene={SceneMap({    first: FirstRoute,    second: SecondRoute,  })}/>
```

#### TabView Props[](https://reactnavigation.org/docs/shared-element-transitions/#tabview-props "Direct link to TabView Props")

##### `navigationState` (`required`)[](https://reactnavigation.org/docs/shared-element-transitions/#navigationstate-required "Direct link to navigationstate-required")

State for the tab view. The state should contain the following properties:

-   `index`: a number representing the index of the active route in the `routes` array
-   `routes`: an array containing a list of route objects used for rendering the tabs

Each route object should contain the following properties:

-   `key`: a unique key to identify the route (required)
-   `title`: title for the route to display in the tab bar
-   `icon`: icon for the route to display in the tab bar
-   `accessibilityLabel`: accessibility label for the tab button
-   `testID`: test id for the tab button

Example:

```
{  index: 1,  routes: [    { key: 'music', title: 'Music' },    { key: 'albums', title: 'Albums' },    { key: 'recents', title: 'Recents' },    { key: 'purchased', title: 'Purchased' },  ]}
```

`TabView` is a controlled component, which means the `index` needs to be updated via the `onIndexChange` callback.

##### `onIndexChange` (`required`)[](https://reactnavigation.org/docs/shared-element-transitions/#onindexchange-required "Direct link to onindexchange-required")

Callback which is called on tab change, receives the index of the new tab as argument. The navigation state needs to be updated when it's called, otherwise the change is dropped.

##### `renderScene` (`required`)[](https://reactnavigation.org/docs/shared-element-transitions/#renderscene-required "Direct link to renderscene-required")

Callback which returns a react element to render as the page for the tab. Receives an object containing the route as the argument:

```
const renderScene = ({ route, jumpTo }) => {  switch (route.key) {    case 'music':      return <MusicRoute jumpTo={jumpTo} />;    case 'albums':      return <AlbumsRoute jumpTo={jumpTo} />;  }};
```

You need to make sure that your individual routes implement a `shouldComponentUpdate` to improve the performance. To make it easier to specify the components, you can use the `SceneMap` helper.

`SceneMap` takes an object with the mapping of `route.key` to React components and returns a function to use with `renderScene` prop.

```
import { SceneMap } from 'react-native-tab-view';...const renderScene = SceneMap({  music: MusicRoute,  albums: AlbumsRoute,});
```

Specifying the components this way is easier and takes care of implementing a `shouldComponentUpdate` method.

Each scene receives the following props:

-   `route`: the current route rendered by the component
-   `jumpTo`: method to jump to other tabs, takes a `route.key` as it's argument
-   `position`: animated node which represents the current position

The `jumpTo` method can be used to navigate to other tabs programmatically:

All the scenes rendered with `SceneMap` are optimized using `React.PureComponent` and don't re-render when parent's props or states change. If you need more control over how your scenes update (e.g. - triggering a re-render even if the `navigationState` didn't change), use `renderScene` directly instead of using `SceneMap`.

**IMPORTANT:** **Do not** pass inline functions to `SceneMap`, for example, don't do the following:

```
SceneMap({  first: () => <FirstRoute foo={props.foo} />,  second: SecondRoute,});
```

Always define your components elsewhere in the top level of the file. If you pass inline functions, it'll re-create the component every render, which will cause the entire route to unmount and remount every change. It's very bad for performance and will also cause any local state to be lost.

If you need to pass additional props, use a custom `renderScene` function:

```
const renderScene = ({ route }) => {  switch (route.key) {    case 'first':      return <FirstRoute foo={this.props.foo} />;    case 'second':      return <SecondRoute />;    default:      return null;  }};
```

##### `renderTabBar`[](https://reactnavigation.org/docs/shared-element-transitions/#rendertabbar "Direct link to rendertabbar")

Callback which returns a custom React Element to use as the tab bar:

```
import { TabBar } from 'react-native-tab-view';...<TabView  renderTabBar={props => <TabBar {...props} />}  .../>
```

If this is not specified, the default tab bar is rendered. You pass this props to customize the default tab bar, provide your own tab bar, or disable the tab bar completely.

```
<TabView  renderTabBar={() => null}  .../>
```

##### `tabBarPosition`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbarposition "Direct link to tabbarposition")

Position of the tab bar in the tab view. Possible values are `'top'` and `'bottom'`. Defaults to `'top'`.

##### `lazy`[](https://reactnavigation.org/docs/shared-element-transitions/#lazy "Direct link to lazy")

Function which takes an object with the current route and returns a boolean to indicate whether to lazily render the scenes.

By default all scenes are rendered to provide a smoother swipe experience. But you might want to defer the rendering of unfocused scenes until the user sees them. To enable lazy rendering for a particular scene, return `true` from `lazy` for that `route`:

```
<TabView  lazy={({ route }) => route.name === 'Albums'}  .../>
```

When you enable lazy rendering for a screen, it will usually take some time to render when it comes into focus. You can use the `renderLazyPlaceholder` prop to customize what the user sees during this short period.

You can also pass a boolean to enable lazy for all of the scenes:

##### `lazyPreloadDistance`[](https://reactnavigation.org/docs/shared-element-transitions/#lazypreloaddistance "Direct link to lazypreloaddistance")

When `lazy` is enabled, you can specify how many adjacent routes should be preloaded with this prop. This value defaults to `0` which means lazy pages are loaded as they come into the viewport.

##### `renderLazyPlaceholder`[](https://reactnavigation.org/docs/shared-element-transitions/#renderlazyplaceholder "Direct link to renderlazyplaceholder")

Callback which returns a custom React Element to render for routes that haven't been rendered yet. Receives an object containing the route as the argument. The `lazy` prop also needs to be enabled.

This view is usually only shown for a split second. Keep it lightweight.

By default, this renders `null`.

##### `keyboardDismissMode`[](https://reactnavigation.org/docs/shared-element-transitions/#keyboarddismissmode "Direct link to keyboarddismissmode")

String indicating whether the keyboard gets dismissed in response to a drag gesture. Possible values are:

-   `'auto'` (default): the keyboard is dismissed when the index changes.
-   `'on-drag'`: the keyboard is dismissed when a drag begins.
-   `'none'`: drags do not dismiss the keyboard.

##### `swipeEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#swipeenabled "Direct link to swipeenabled")

Boolean indicating whether to enable swipe gestures. Swipe gestures are enabled by default. Passing `false` will disable swipe gestures, but the user can still switch tabs by pressing the tab bar.

#### `animationEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#animationenabled "Direct link to animationenabled")

Enables animation when changing tab. By default it's true.

##### `onSwipeStart`[](https://reactnavigation.org/docs/shared-element-transitions/#onswipestart "Direct link to onswipestart")

Callback which is called when the swipe gesture starts, i.e. the user touches the screen and moves it.

##### `onSwipeEnd`[](https://reactnavigation.org/docs/shared-element-transitions/#onswipeend "Direct link to onswipeend")

Callback which is called when the swipe gesture ends, i.e. the user lifts their finger from the screen after the swipe gesture.

##### `initialLayout`[](https://reactnavigation.org/docs/shared-element-transitions/#initiallayout "Direct link to initiallayout")

Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default:

```
<TabView  initialLayout={{ width: Dimensions.get('window').width }}  .../>
```

##### `overScrollMode`[](https://reactnavigation.org/docs/shared-element-transitions/#overscrollmode "Direct link to overscrollmode")

Used to override default value of pager's overScroll mode. Can be `auto`, `always` or `never` (Android only).

Style to apply to the pager view wrapping all the scenes.

##### `style`[](https://reactnavigation.org/docs/shared-element-transitions/#style "Direct link to style")

Style to apply to the tab view container.

### `TabBar`[](https://reactnavigation.org/docs/shared-element-transitions/#tabbar "Direct link to tabbar")

Material design themed tab bar. To customize the tab bar, you'd need to use the `renderTabBar` prop of `TabView` to render the `TabBar` and pass additional props.

For example, to customize the indicator color and the tab bar background color, you can pass `indicatorStyle` and `style` props to the `TabBar` respectively:

```
const renderTabBar = props => (  <TabBar    {...props}    indicatorStyle={{ backgroundColor: 'white' }}    style={{ backgroundColor: 'pink' }}  />);//...return (  <TabView    renderTabBar={renderTabBar}    ...  />);
```

#### TabBar Props[](https://reactnavigation.org/docs/shared-element-transitions/#tabbar-props "Direct link to TabBar Props")

##### `renderTabBarItem`[](https://reactnavigation.org/docs/shared-element-transitions/#rendertabbaritem "Direct link to rendertabbaritem")

Function which takes a `TabBarItemProps` object and returns a custom React Element to be used as a tab button.

##### `renderIndicator`[](https://reactnavigation.org/docs/shared-element-transitions/#renderindicator "Direct link to renderindicator")

Function which takes an object with the current route and returns a custom React Element to be used as a tab indicator.

##### `onTabPress`[](https://reactnavigation.org/docs/shared-element-transitions/#ontabpress "Direct link to ontabpress")

Function to execute on tab press. It receives the scene for the pressed tab, useful for things like scroll to top.

By default, tab press also switches the tab. To prevent this behavior, you can call `preventDefault`:

```
<TabBar  onTabPress={({ route, preventDefault }) => {    if (route.key === 'home') {      preventDefault();      // Do something else    }  }}  .../>
```

##### `onTabLongPress`[](https://reactnavigation.org/docs/shared-element-transitions/#ontablongpress "Direct link to ontablongpress")

Function to execute on tab long press, use for things like showing a menu with more options

##### `activeColor`[](https://reactnavigation.org/docs/shared-element-transitions/#activecolor "Direct link to activecolor")

Custom color for icon and label in the active tab.

##### `inactiveColor`[](https://reactnavigation.org/docs/shared-element-transitions/#inactivecolor "Direct link to inactivecolor")

Custom color for icon and label in the inactive tab.

##### `pressColor`[](https://reactnavigation.org/docs/shared-element-transitions/#presscolor "Direct link to presscolor")

Color for material ripple (Android >= 5.0 only).

##### `pressOpacity`[](https://reactnavigation.org/docs/shared-element-transitions/#pressopacity "Direct link to pressopacity")

Opacity for pressed tab (iOS and Android < 5.0 only).

##### `scrollEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#scrollenabled "Direct link to scrollenabled")

Boolean indicating whether to make the tab bar scrollable.

If you set `scrollEnabled` to `true`, you should also specify a `width` in `tabStyle` to improve the initial render.

##### `bounces`[](https://reactnavigation.org/docs/shared-element-transitions/#bounces "Direct link to bounces")

Boolean indicating whether the tab bar bounces when scrolling.

##### `tabStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#tabstyle "Direct link to tabstyle")

Style to apply to the individual tab items in the tab bar.

By default, all tab items take up the same pre-calculated width based on the width of the container. If you want them to take their original width, you can specify `width: 'auto'` in `tabStyle`.

##### `indicatorStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#indicatorstyle "Direct link to indicatorstyle")

Style to apply to the active indicator.

##### `indicatorContainerStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#indicatorcontainerstyle "Direct link to indicatorcontainerstyle")

Style to apply to the container view for the indicator.

##### `contentContainerStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#contentcontainerstyle "Direct link to contentcontainerstyle")

Style to apply to the inner container for tabs.

##### `style` (`TabBar`)[](https://reactnavigation.org/docs/shared-element-transitions/#style-tabbar "Direct link to style-tabbar")

Style to apply to the tab bar container.

##### `gap`[](https://reactnavigation.org/docs/shared-element-transitions/#gap "Direct link to gap")

Spacing between the tab items.

##### `testID` (`TabBar`)[](https://reactnavigation.org/docs/shared-element-transitions/#testid-tabbar "Direct link to testid-tabbar")

Test ID for the tab bar. Can be used for scrolling the tab bar in tests

#### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

Options describe how each tab should be configured. There are 2 ways to specify options:

-   `commonOptions`: Options that apply to all tabs.
-   `options`: Options that apply to specific tabs. It has the route key as the key and the object with options.

Example:

```
<TabView  commonOptions={{    icon: ({ route, focused, color }) => (      <Icon name={route.icon} color={color} />    ),  }}  options={{    albums: {      labelText: 'Albums',    },    profile: {      labelText: 'Profile',    },  }}/>
```

The following options are available:

##### `accessibilityLabel`[](https://reactnavigation.org/docs/shared-element-transitions/#accessibilitylabel "Direct link to accessibilitylabel")

Accessibility label for the tab button. Uses `route.accessibilityLabel` by default if specified, otherwise uses the route title.

##### `accessible`[](https://reactnavigation.org/docs/shared-element-transitions/#accessible "Direct link to accessible")

Whether to mark the tab as `accessible`. Defaults to `true`.

##### `testID`[](https://reactnavigation.org/docs/shared-element-transitions/#testid "Direct link to testid")

Test ID for the tab button. Uses `route.testID` by default.

##### `labelText`[](https://reactnavigation.org/docs/shared-element-transitions/#labeltext "Direct link to labeltext")

Label text for the tab button. Uses `route.title` by default.

##### `labelAllowFontScaling`[](https://reactnavigation.org/docs/shared-element-transitions/#labelallowfontscaling "Direct link to labelallowfontscaling")

Whether label font should scale to respect Text Size accessibility settings. Defaults to `true`.

##### `href`[](https://reactnavigation.org/docs/shared-element-transitions/#href "Direct link to href")

URL to use for the anchor tag for the tab button on the Web.

##### `label`[](https://reactnavigation.org/docs/shared-element-transitions/#label "Direct link to label")

A function that returns a custom React Element to be used as a label. The function receives an object with the following properties:

-   `route` - The route object for the tab.
-   `labelText` - The label text for the tab specified in the `labelText` option or the `route title`.
-   `focused` - Whether the label is for the focused state.
-   `color` - The color of the label.
-   `allowFontScaling` - Whether label font should scale to respect Text Size accessibility settings.
-   `style` - The style object for the label.

```
label: ({ route, labelText, focused, color }) => (  <Text style={{ color, margin: 8 }}>{labelText ?? route.name}</Text>);
```

##### `labelStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#labelstyle "Direct link to labelstyle")

Style to apply to the tab item label.

##### `icon`[](https://reactnavigation.org/docs/shared-element-transitions/#icon "Direct link to icon")

A function that returns a custom React Element to be used as an icon. The function receives an object with the following properties:

-   `route` - The route object for the tab.
-   `focused` - Whether the icon is for the focused state.
-   `color` - The color of the icon.
-   `size` - The size of the icon.

```
icon: ({ route, focused, color }) => (  <Icon name={focused ? 'albums' : 'albums-outlined'} color={color} />);
```

##### `badge`[](https://reactnavigation.org/docs/shared-element-transitions/#badge "Direct link to badge")

A function that returns a custom React Element to be used as a badge. The function receives an object with the following properties:

-   `route` - The route object for the tab.

```
badge: ({ route }) => (  <View    style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 10 }}  />);
```

##### `sceneStyle`[](https://reactnavigation.org/docs/shared-element-transitions/#scenestyle "Direct link to scenestyle")

Style to apply to the view wrapping each screen. You can pass this to override some default styles such as overflow clipping.

## Optimization Tips[](https://reactnavigation.org/docs/shared-element-transitions/#optimization-tips "Direct link to Optimization Tips")

### Avoid unnecessary re-renders[](https://reactnavigation.org/docs/shared-element-transitions/#avoid-unnecessary-re-renders "Direct link to Avoid unnecessary re-renders")

The `renderScene` function is called every time the index changes. If your `renderScene` function is expensive, it's good idea move each route to a separate component if they don't depend on the index, and use `shouldComponentUpdate` or `React.memo` in your route components to prevent unnecessary re-renders.

For example, instead of:

```
const renderScene = ({ route }) => {  switch (route.key) {    case 'home':      return (        <View style={styles.page}>          <Avatar />          <NewsFeed />        </View>      );    default:      return null;  }};
```

Do the following:

```
const renderScene = ({ route }) => {  switch (route.key) {    case 'home':      return <HomeComponent />;    default:      return null;  }};
```

Where `<HomeComponent />` is a `PureComponent` if you're using class components:

```
export default class HomeComponent extends React.PureComponent {  render() {    return (      <View style={styles.page}>        <Avatar />        <NewsFeed />      </View>    );  }}
```

Or, wrapped in `React.memo` if you're using function components:

```
function HomeComponent() {  return (    <View style={styles.page}>      <Avatar />      <NewsFeed />    </View>  );}export default React.memo(HomeComponent);
```

### Avoid one frame delay[](https://reactnavigation.org/docs/shared-element-transitions/#avoid-one-frame-delay "Direct link to Avoid one frame delay")

We need to measure the width of the container and hence need to wait before rendering some elements on the screen. If you know the initial width upfront, you can pass it in and we won't need to wait for measuring it. Most of the time, it's just the window width.

For example, pass the following `initialLayout` to `TabView`:

```
const initialLayout = {  height: 0,  width: Dimensions.get('window').width,};
```

The tab view will still react to changes in the dimension and adjust accordingly to accommodate things like orientation change.

### Optimize large number of routes[](https://reactnavigation.org/docs/shared-element-transitions/#optimize-large-number-of-routes "Direct link to Optimize large number of routes")

If you've a large number of routes, especially images, it can slow the animation down a lot. You can instead render a limited number of routes.

For example, do the following to render only 2 routes on each side:

```
const renderScene = ({ route }) => {  if (Math.abs(index - routes.indexOf(route)) > 2) {    return <View />;  }  return <MySceneComponent route={route} />;};
```

### Avoid rendering TabView inside ScrollView[](https://reactnavigation.org/docs/shared-element-transitions/#avoid-rendering-tabview-inside-scrollview "Direct link to Avoid rendering TabView inside ScrollView")

Nesting the `TabView` inside a vertical `ScrollView` will disable the optimizations in the `FlatList` components rendered inside the `TabView`. So avoid doing it if possible.

### Use `lazy` and `renderLazyPlaceholder` props to render routes as needed[](https://reactnavigation.org/docs/shared-element-transitions/#use-lazy-and-renderlazyplaceholder-props-to-render-routes-as-needed "Direct link to use-lazy-and-renderlazyplaceholder-props-to-render-routes-as-needed")

The `lazy` option is disabled by default to provide a smoother tab switching experience, but you can enable it and provide a placeholder component for a better lazy loading experience. Enabling `lazy` can improve initial load performance by rendering routes only when they come into view. Refer the [prop reference](https://reactnavigation.org/docs/shared-element-transitions/#lazy) for more details.


# 05 API reference

## Group  React Navigation

---
created: 2025-02-08T17:06:08 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Group | React Navigation

> ## Excerpt
> A group contains several screens inside a navigator for organizational purposes. They can also be used to apply the same options such as header styles to a group of screens, or to define a common layout etc.

---
A group contains several [screens](https://reactnavigation.org/docs/screen) inside a navigator for organizational purposes. They can also be used to apply the same options such as header styles to a group of screens, or to define a common layout etc.

-   Static
-   Dynamic

A `Group` component is returned from a `createXNavigator` function. After creating the navigator, it can be used as children of the `Navigator` component:

```
<Stack.Navigator>  <Stack.Group    screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}  >    <Stack.Screen name="Home" component={HomeScreen} />    <Stack.Screen name="Profile" component={EmptyScreen} />  </Stack.Group>  <Stack.Group screenOptions={{ presentation: 'modal' }}>    <Stack.Screen name="Search" component={EmptyScreen} />    <Stack.Screen name="Share" component={EmptyScreen} />  </Stack.Group></Stack.Navigator>
```

[Try on **Snack**](https://snack.expo.dev/?name=Stack+groups&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Search%27%29%7D%3E%0A++++++++Go+to+Search%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+EmptyScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Group%0A++++++++++screenOptions%3D%7B%7B+headerStyle%3A+%7B+backgroundColor%3A+%27papayawhip%27+%7D+%7D%7D%0A++++++++%3E%0A++++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++++%3C%2FStack.Group%3E%0A++++++++%3CStack.Group+screenOptions%3D%7B%7B+presentation%3A+%27modal%27+%7D%7D%3E%0A++++++++++%3CStack.Screen+name%3D%22Search%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++++++%3CStack.Screen+name%3D%22Share%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++++%3C%2FStack.Group%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

It's also possible to nest `Group` components inside other `Group` components.

## Configuration[](https://reactnavigation.org/docs/shared-element-transitions/#configuration "Direct link to Configuration")

### Screen options[](https://reactnavigation.org/docs/shared-element-transitions/#screen-options "Direct link to Screen options")

Options to configure how the screens inside the group get presented in the navigator. It accepts either an object or a function returning an object:

-   Static
-   Dynamic

```
<Stack.Group  screenOptions={{    presentation: 'modal',  }}>  {/* screens */}</Stack.Group>
```

When you pass a function, it'll receive the [`route`](https://reactnavigation.org/docs/route-object) and [`navigation`](https://reactnavigation.org/docs/navigation-object):

-   Static
-   Dynamic

```
<Stack.Group  screenOptions={({ route, navigation }) => ({    title: route.params.title,  })}>  {/* screens */}</Stack.Group>
```

These options are merged with the `options` specified in the individual screens, and the screen's options will take precedence over the group's options.

See [Options for screens](https://reactnavigation.org/docs/screen-options) for more details and examples.

### Screen layout[](https://reactnavigation.org/docs/shared-element-transitions/#screen-layout "Direct link to Screen layout")

A screen layout is a wrapper around each screen in the group. It makes it easier to provide things such as a common error boundary and suspense fallback for all screens in a group:

-   Static
-   Dynamic

```
<Stack.Group  screenLayout={({ children }) => (    <ErrorBoundary>      <React.Suspense        fallback={          <View style={styles.fallback}>            <Text style={styles.text}>Loading…</Text>          </View>        }      >        {children}      </React.Suspense>    </ErrorBoundary>  )}>  {/* screens */}</Stack.Group>
```

### Navigation key[](https://reactnavigation.org/docs/shared-element-transitions/#navigation-key "Direct link to Navigation key")

Optional key for a group of screens. If the key changes, all existing screens in this group will be removed (if used in a stack navigator) or reset (if used in a tab or drawer navigator):

-   Static
-   Dynamic

```
<Stack.Group  navigationKey={isSignedIn ? 'user' : 'guest'}>  {/* screens */}</Stack.Group>
```

This is similar to the [`navigationKey`](https://reactnavigation.org/docs/screen#navigation-key) prop for screens, but applies to a group of screens.


## Link  React Navigation

---
created: 2025-02-08T17:07:05 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Link | React Navigation

> ## Excerpt
> The Link component renders a component that can navigate to a screen on press. This renders a ` tag when used on the Web and uses a Text component on other platforms. It preserves the default behavior of anchor tags in the browser such as Right click -> Open link in new tab", Ctrl+Click/⌘+Click` etc. to provide a native experience.

---
The `Link` component renders a component that can navigate to a screen on press. This renders a `<a>` tag when used on the Web and uses a `Text` component on other platforms. It preserves the default behavior of anchor tags in the browser such as `Right click -> Open link in new tab"`, `Ctrl+Click`/`⌘+Click` etc. to provide a native experience.

```
import { Link } from '@react-navigation/native';// ...function Home() {  return (    <Link screen="Profile" params={{ id: 'jane' }}>      Go to Jane's profile    </Link>  );}
```

If you want to use your own custom link component, you can use [`useLinkProps`](https://reactnavigation.org/docs/use-link-props) instead.


## Navigation events  React Navigation

---
created: 2025-02-08T17:06:52 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Navigation events | React Navigation

> ## Excerpt
> You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events such as focus, blur etc. (documented below) that work for every navigator, as well as navigator specific events that work only for certain navigators.

---
You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events such as `focus`, `blur` etc. (documented below) that work for every navigator, as well as navigator specific events that work only for certain navigators.

Apart from the core events, each navigator can emit their own custom events. For example, stack navigator emits `transitionStart` and `transitionEnd` events, tab navigator emits `tabPress` event etc. You can find details about the events emitted on the individual navigator's documentation.

## Core events[](https://reactnavigation.org/docs/shared-element-transitions/#core-events "Direct link to Core events")

Following are the events available in every navigator:

### `focus`[](https://reactnavigation.org/docs/shared-element-transitions/#focus "Direct link to focus")

This event is emitted when the screen comes into focus.

For most cases, the [`useFocusEffect`](https://reactnavigation.org/docs/use-focus-effect) hook might be appropriate than adding the listener manually. See [this guide](https://reactnavigation.org/docs/function-after-focusing-screen) for more details to decide which API you should use.

### `blur`[](https://reactnavigation.org/docs/shared-element-transitions/#blur "Direct link to blur")

This event is emitted when the screen goes out of focus.

### `state`[](https://reactnavigation.org/docs/shared-element-transitions/#state "Direct link to state")

This event is emitted when the navigator's state changes. This event receives the navigator's state in the event data (`event.data.state`).

### `beforeRemove`[](https://reactnavigation.org/docs/shared-element-transitions/#beforeremove "Direct link to beforeremove")

This event is emitted when the user is leaving the screen due to a navigation action. It is possible to prevent the user from leaving the screen by calling `e.preventDefault()` in the event listener.

```
React.useEffect(  () =>    navigation.addListener('beforeRemove', (e) => {      if (!hasUnsavedChanges) {        return;      }      // Prevent default behavior of leaving the screen      e.preventDefault();      // Prompt the user before leaving the screen      Alert.alert(        'Discard changes?',        'You have unsaved changes. Are you sure to discard them and leave the screen?',        [          {            text: "Don't leave",            style: 'cancel',            onPress: () => {              // Do nothing            },          },          {            text: 'Discard',            style: 'destructive',            // If the user confirmed, then we dispatch the action we blocked earlier            // This will continue the action that had triggered the removal of the screen            onPress: () => navigation.dispatch(e.data.action),          },        ]      );    }),  [navigation, hasUnsavedChanges]);
```

## Listening to events[](https://reactnavigation.org/docs/shared-element-transitions/#listening-to-events "Direct link to Listening to events")

There are multiple ways to listen to events from the navigators. Each callback registered as an event listener receives an event object as its argument. The event object contains few properties:

-   `data` - Additional data regarding the event passed by the navigator. This can be `undefined` if no data was passed.
-   `target` - The route key for the screen that should receive the event. For some events, this maybe `undefined` if the event wasn't related to a specific screen.
-   `preventDefault` - For some events, there may be a `preventDefault` method on the event object. Calling this method will prevent the default action performed by the event (such as switching tabs on `tabPress`). Support for preventing actions are only available for certain events like `tabPress` and won't work for all events.

You can listen to events with the following APIs:

### `navigation.addListener`[](https://reactnavigation.org/docs/shared-element-transitions/#navigationaddlistener "Direct link to navigationaddlistener")

Inside a screen, you can add listeners on the `navigation` object with the `addListener` method. The `addListener` method takes 2 arguments: type of the event, and a callback to be called on the event. It returns a function that can be called to unsubscribe from the event.

Example:

```
const unsubscribe = navigation.addListener('tabPress', (e) => {  // Prevent default action  e.preventDefault();});
```

Normally, you'd add an event listener in `React.useEffect` for function components. For example:

-   Static
-   Dynamic

```
function ProfileScreen({ navigation }) {  React.useEffect(() => {    const unsubscribe = navigation.addListener('focus', () => {      // Screen was focused    });    return unsubscribe;  }, [navigation]);  React.useEffect(() => {    const unsubscribe = navigation.addListener('blur', () => {      // Screen was unfocused    });    return unsubscribe;  }, [navigation]);  // Rest of the component}
```

[Try on **Snack**](https://snack.expo.dev/?name=navigation.addListener+with+focus&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+SettingsScreen%28%7B+navigation+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3ESettings+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+navigation+%7D%29+%7B%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27focus%27%2C+%28%29+%3D%3E+%7B%0A++++++%2F%2F+Screen+was+focused%0A++++%7D%29%3B%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27blur%27%2C+%28%29+%3D%3E+%7B%0A++++++%2F%2F+Screen+was+unfocused%0A++++%7D%29%3B%0A++++return+unsubscribe%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++%2F%2F+Rest+of+the+component%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+SettingsStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CSettingsStack.Navigator%3E%0A++++++++%3CSettingsStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++++%3CSettingsStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FSettingsStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

The `unsubscribe` function can be returned as the cleanup function in the effect.

For class components, you can add the event in the `componentDidMount` lifecycle method and unsubscribe in `componentWillUnmount`:

```
class Profile extends React.Component {  componentDidMount() {    this._unsubscribe = navigation.addListener('focus', () => {      // do something    });  }  componentWillUnmount() {    this._unsubscribe();  }  render() {    // Content of the component  }}
```

One thing to keep in mind is that you can only listen to events from the immediate navigator with `addListener`. For example, if you try to add a listener in a screen that's inside a stack that's nested in a tab, it won't get the `tabPress` event. If you need to listen to an event from a parent navigator, you may use [`navigation.getParent`](https://reactnavigation.org/docs/navigation-object#getparent) to get a reference to the parent screen's navigation object and add a listener.

```
const unsubscribe = navigation  .getParent('MyTabs')  .addListener('tabPress', (e) => {    // Do something  });
```

Here `'MyTabs'` refers to the value you pass in the `id` prop of the parent `Tab.Navigator` whose event you want to listen to.

### `listeners` prop on `Screen`[](https://reactnavigation.org/docs/shared-element-transitions/#listeners-prop-on-screen "Direct link to listeners-prop-on-screen")

Sometimes you might want to add a listener from the component where you defined the navigator rather than inside the screen. You can use the `listeners` prop on the `Screen` component to add listeners. The `listeners` prop takes an object with the event names as keys and the listener callbacks as values.

Example:

-   Static
-   Dynamic

```
<Tab.Screen  name="Chat"  component={Chat}  listeners={{    tabPress: (e) => {      // Prevent default action      e.preventDefault();    },  }}/>
```

You can also pass a callback which returns the object with listeners. It'll receive `navigation` and `route` as the arguments.

Example:

-   Static
-   Dynamic

```
<Tab.Screen  name="Chat"  component={Chat}  listeners={({ navigation, route }) => ({    tabPress: (e) => {      // Prevent default action      e.preventDefault();      // Do something with the `navigation` object      navigation.navigate('AnotherPlace');    },  })}/>
```

### `screenListeners` prop on the navigator[](https://reactnavigation.org/docs/shared-element-transitions/#screenlisteners-prop-on-the-navigator "Direct link to screenlisteners-prop-on-the-navigator")

You can pass a prop named `screenListeners` to the navigator component, where you can specify listeners for events from all screens for this navigator. This can be useful if you want to listen to specific events regardless of the screen, or want to listen to common events such as `state` which is emitted to all screens.

Example:

-   Static
-   Dynamic

```
<Stack.Navigator  screenListeners={{    state: (e) => {      // Do something with the state      console.log('state changed', e.data);    },  }}>  <Stack.Screen name="Home" component={HomeScreen} />  <Stack.Screen name="Profile" component={ProfileScreen} /></Stack.Navigator>
```

Similar to `listeners`, you can also pass a function to `screenListeners`. The function will receive the [`navigation` object](https://reactnavigation.org/docs/navigation-object) and the [`route` object](https://reactnavigation.org/docs/route-object) for each screen. This can be useful if you need access to the `navigation` object.

-   Static
-   Dynamic

```
<Tab.Navigator  screenListeners={({ navigation }) => ({    state: (e) => {      // Do something with the state      console.log('state changed', e.data);      // Do something with the `navigation` object      if (!navigation.canGoBack()) {        console.log("we're on the initial screen");      }    },  })}>  <Tab.Screen name="Home" component={HomeScreen} />  <Tab.Screen name="Profile" component={ProfileScreen} /></Tab.Navigator>
```


## Navigation object reference  React Navigation

---
created: 2025-02-08T17:06:38 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Navigation object reference | React Navigation

> ## Excerpt
> The navigation object contains various convenience functions that dispatch navigation actions. It looks like this:

---
The `navigation` object contains various convenience functions that dispatch navigation actions. It looks like this:

-   `navigation`
    -   `navigate` - go to the given screen, this will behave differently based on the navigator
    -   `goBack` - go back to the previous screen, this will pop the current screen when used in a stack
    -   `reset` - replace the navigation state of the navigator with the given state
    -   `preload` - preload a screen in the background before navigating to it
    -   `setParams` - merge new params onto the route's params
    -   `dispatch` - send an action object to update the [navigation state](https://reactnavigation.org/docs/navigation-state)
    -   `setOptions` - update the screen's options
    -   `isFocused` - check whether the screen is focused
    -   `canGoBack` - check whether it's possible to go back from the current screen
    -   `getState` - get the navigation state of the navigator
    -   `getParent` - get the navigation object of the parent screen, if any
    -   `addListener` - subscribe to events for the screen
    -   `removeListener` - unsubscribe from events for the screen

The `navigation` object can be accessed inside any screen component with the [`useNavigation`](https://reactnavigation.org/docs/use-navigation) hook. It's also passed as a prop only to screens components defined with the dynamic API.

warning

`setParams`/`setOptions` etc. should only be called in event listeners or `useEffect`/`useLayoutEffect`/`componentDidMount`/`componentDidUpdate` etc. Not during render or in constructor.

### Navigator-dependent functions[](https://reactnavigation.org/docs/shared-element-transitions/#navigator-dependent-functions "Direct link to Navigator-dependent functions")

There are several additional functions present on `navigation` object based on the kind of the current navigator.

If the navigator is a stack navigator, several alternatives to `navigate` and `goBack` are provided and you can use whichever you prefer. The functions are:

-   `navigation`
    -   `replace` - replace the current screen with a new one
    -   `push` - push a new screen onto the stack
    -   `pop` - go back in the stack
    -   `popTo` - go back to a specific screen in the stack
    -   `popToTop` - go to the top of the stack

See [Stack navigator helpers](https://reactnavigation.org/docs/stack-navigator#helpers) and [Native Stack navigator helpers](https://reactnavigation.org/docs/native-stack-navigator#helpers) for more details on these methods.

If the navigator is a tab navigator, the following are also available:

-   `navigation`
    -   `jumpTo` - go to a specific screen in the tab navigator

See [Bottom Tab navigator helpers](https://reactnavigation.org/docs/bottom-tab-navigator#helpers) and [Material Top Tab navigator helpers](https://reactnavigation.org/docs/material-top-tab-navigator#helpers) for more details on these methods.

If the navigator is a drawer navigator, the following are also available:

-   `navigation`
    -   `jumpTo` - go to a specific screen in the drawer navigator
    -   `openDrawer` - open the drawer
    -   `closeDrawer` - close the drawer
    -   `toggleDrawer` - toggle the state, ie. switch from closed to open and vice versa

See [Drawer navigator helpers](https://reactnavigation.org/docs/drawer-navigator#helpers) for more details on these methods.

## Common API reference[](https://reactnavigation.org/docs/shared-element-transitions/#common-api-reference "Direct link to Common API reference")

The vast majority of your interactions with the `navigation` object will involve `navigate`, `goBack`, and `setParams`.

### `navigate`[](https://reactnavigation.org/docs/shared-element-transitions/#navigate "Direct link to navigate")

The `navigate` method lets us navigate to another screen in your app. It takes the following arguments:

`navigation.navigate(name, params)`

-   `name` - _string_ - A destination name of the screen in the current or a parent navigator.
-   `params` - _object_ - Params to use for the destination route.
-   `merge` - _boolean_ - Whether params should be merged with the existing route params, or replace them (when navigating to an existing screen). Defaults to `false`.

-   Static
-   Dynamic

```
function HomeScreen() {  const navigation = useNavigation();  return (    <View      style={{        flex: 1,        gap: 8,        alignItems: 'center',        justifyContent: 'center',      }}    >      <Text>This is the home screen of the app</Text>      <Button        onPress={() => {          navigation.navigate('Profile', {            names: ['Brent', 'Satya', 'Michaś'],          });        }}      >        Go to Brent's profile      </Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigate+method&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+the+home+screen+of+the+app%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B%0A++++++++++++names%3A+%5B%27Brent%27%2C+%27Satya%27%2C+%27Micha%C5%9B%27%5D%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+to+Brent%27s+profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CText%3EFriends%3A+%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B0%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B1%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B2%5D%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back+%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

In a stack navigator ([stack](https://reactnavigation.org/docs/stack-navigator) or [native stack](https://reactnavigation.org/docs/native-stack-navigator)), calling `navigate` with a screen name will have the following behavior:

-   If you're already on a screen with the same name, it will update its params and not push a new screen.
-   If you're on a different screen, it will push the new screen onto the stack.
-   If the [`getId`](https://reactnavigation.org/docs/screen#id) prop is specified, and another screen in the stack has the same ID, it will bring that screen to focus and update its params instead.
-   If none of the above conditions match, it'll push a new screen to the stack.

By default, the screen is identified by its name. But you can also customize it to take the params into account by using the [`getId`](https://reactnavigation.org/docs/screen#id) prop.

For example, say you have specified a `getId` prop for `Profile` screen:

-   Static
-   Dynamic

```
<Tab.Screen  name={Profile}  component={ProfileScreen}  getId={({ params }) => params.userId}/>
```

Now, if you have a stack with the history `Home > Profile (userId: bob) > Settings` and you call `navigate(Profile, { userId: 'alice' })`, the resulting screens will be `Home > Profile (userId: bob) > Settings > Profile (userId: alice)` since it'll add a new `Profile` screen as no matching screen was found.

In a tab or drawer navigator, calling `navigate` will switch to the relevant screen if it's not focused already and update the params of the screen.

### `navigateDeprecated`[](https://reactnavigation.org/docs/shared-element-transitions/#navigatedeprecated "Direct link to navigatedeprecated")

warning

This method is deprecated and will be removed in a future release. It only exists for compatibility purposes. Use `navigate` instead.

The `navigateDeprecated` action implements the old behavior of `navigate` from previous versions.

It takes the following arguments:

`navigation.navigateDeprecated(name, params)`

-   `name` - _string_ - A destination name of the screen in the current or a parent navigator.
-   `params` - _object_ - Params to use for the destination route.

In a stack navigator ([stack](https://reactnavigation.org/docs/stack-navigator) or [native stack](https://reactnavigation.org/docs/native-stack-navigator)), calling `navigate` with a screen name will have the following behavior:

-   If you're already on a screen with the same name, it will update its params and not push a new screen.
-   If a screen with the same name already exists in the stack, it will pop all the screens after it to go back to the existing screen.
-   If the [`getId`](https://reactnavigation.org/docs/screen#id) prop is specified, and another screen in the stack has the same ID, it will pop any screens to navigate to that screen and update its params instead.
-   If none of the above conditions match, it'll push a new screen to the stack.

In a tab or drawer navigator, calling `navigate` will switch to the relevant screen if it's not focused already and update the params of the screen.

### `goBack`[](https://reactnavigation.org/docs/shared-element-transitions/#goback "Direct link to goback")

The `goBack` method lets us go back to the previous screen in the navigator.

By default, `goBack` will go back from the screen that it is called from:

-   Static
-   Dynamic

```
function ProfileScreen({ route }) {  const navigation = useNavigation();  return (    <View      style={{        flex: 1,        gap: 8,        alignItems: 'center',        justifyContent: 'center',      }}    >      <Text>Profile Screen</Text>      <Text>Friends: </Text>      <Text>{route.params.names[0]}</Text>      <Text>{route.params.names[1]}</Text>      <Text>{route.params.names[2]}</Text>      <Button onPress={() => navigation.goBack()}>Go back</Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigate+method&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+the+home+screen+of+the+app%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B%0A++++++++++++names%3A+%5B%27Brent%27%2C+%27Satya%27%2C+%27Micha%C5%9B%27%5D%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+to+Brent%27s+profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CText%3EFriends%3A+%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B0%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B1%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B2%5D%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### `reset`[](https://reactnavigation.org/docs/shared-element-transitions/#reset "Direct link to reset")

The `reset` method lets us replace the navigator state with a new state:

-   Static
-   Dynamic

```
navigation.reset({  index: 0,  routes: [    {      name: 'Settings',      params: { someParam: 'Param1' },    },  ],});
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigate+-+replace+and+reset&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+the+home+screen+of+the+app%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B%0A++++++++++++names%3A+%5B%27Brent%27%2C+%27Satya%27%2C+%27Micha%C5%9B%27%5D%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+to+Brents+profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CText%3EFriends%3A+%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B0%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B1%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.names%5B2%5D%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.replace%28%27Settings%27%2C+%7B%0A++++++++++++someParam%3A+%27Param%27%2C%0A++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Replace+this+screen+with+Settings%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.reset%28%7B%0A++++++++++++index%3A+0%2C%0A++++++++++++routes%3A+%5B%0A++++++++++++++%7B%0A++++++++++++++++name%3A+%27Settings%27%2C%0A++++++++++++++++params%3A+%7B+someParam%3A+%27Param1%27+%7D%2C%0A++++++++++++++%7D%2C%0A++++++++++++%5D%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Reset+navigator+state+to+Settings%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Home%27%29%7D%3E+Go+to+Home+%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%2C+%7B+someParam%3A+%27Param1%27+%7D%29%7D%0A++++++%3E%0A++++++++%7B%27+%27%7D%0A++++++++Go+to+Settings%7B%27+%27%7D%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+SettingsScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3ESettings+screen%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.someParam%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B%0A++++++++++++names%3A+%5B%27Brent%27%2C+%27Satya%27%2C+%27Micha%C5%9B%27%5D%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+to+Brents+profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

The state object specified in `reset` replaces the existing [navigation state](https://reactnavigation.org/docs/navigation-state) with the new one, i.e. removes existing screens and add new ones. If you want to preserve the existing screens when changing the state, you can use [`CommonActions.reset`](https://reactnavigation.org/docs/navigation-actions#reset) with [`dispatch`](https://reactnavigation.org/docs/shared-element-transitions/#dispatch) instead.

warning

Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the [navigation state](https://reactnavigation.org/docs/navigation-state) state object except `index` and `routes`, unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.

### `preload`[](https://reactnavigation.org/docs/shared-element-transitions/#preload "Direct link to preload")

The `preload` method allows preloading a screen in the background before navigating to it. It takes the following arguments:

-   `name` - _string_ - A destination name of the screen in the current or a parent navigator.
-   `params` - _object_ - Params to use for the destination route.

-   Static
-   Dynamic

```
function HomeScreen() {  const navigation = useNavigation();  return (    <View      style={{        flex: 1,        gap: 8,        alignItems: 'center',        justifyContent: 'center',      }}    >      <Text>Home!</Text>      <Button        onPress={() => {          navigation.preload('Profile', { user: 'jane' });        }}      >        Preload Profile      </Button>      <Button        onPress={() => {          navigation.navigate('Profile', { user: 'jane' });        }}      >        Navigate to Profile      </Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+actions+preload&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++CommonActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.preload%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Preload+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%5BstartTime%5D+%3D+React.useState%28Date.now%28%29%29%3B%0A++const+%5BendTime%2C+setEndTime%5D+%3D+React.useState%28null%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27focus%27%2C+%28%29+%3D%3E+%7B%0A++++++setEndTime%28Date.now%28%29%29%3B%0A++++%7D%29%3B%0A%0A++++return+%28%29+%3D%3E+%7B%0A++++++unsubscribe%28%29%3B%0A++++%7D%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CText%3EPreloaded+for%3A+%7BendTime+%3F+endTime+-+startTime+%3A+%27N%2FA%27%7Dms%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Preloading a screen means that the screen will be rendered in the background. All the components in the screen will be mounted and the `useEffect` hooks will be called. This can be useful when you want to improve the perceived performance by hiding the delay in mounting heavy components or loading data.

Depending on the navigator, `preload` may work slightly differently:

-   In a stack navigator ([stack](https://reactnavigation.org/docs/stack-navigator), [native stack](https://reactnavigation.org/docs/native-stack-navigator)), the screen will be rendered off-screen and animated in when you navigate to it. If [`getId`](https://reactnavigation.org/docs/screen#id) is specified, it'll be used for the navigation to identify the preloaded screen.
-   In a tab or drawer navigator ([bottom tabs](https://reactnavigation.org/docs/bottom-tab-navigator), [material top tabs](https://reactnavigation.org/docs/material-top-tab-navigator), [drawer](https://reactnavigation.org/docs/drawer-navigator), etc.), the existing screen will be rendered as if `lazy` was set to `false`. Calling `preload` on a screen that is already rendered will not have any effect.

When a screen is preloaded in a stack navigator, it will have a few limitations:

-   It can't dispatch navigation actions (e.g. `navigate`, `goBack`, etc.).
-   It can't update options with `navigation.setOptions`.
-   It can't listen to events from the navigator (e.g. `focus`, `tabPress`, etc.).

The `navigation` object will be updated once you navigate to the screen. So if you have an event listener in a `useEffect` hook, and have a dependency on `navigation`, it will add any listeners when the screen is navigated to:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('tabPress', () => {    // do something  });  return () => {    unsubscribe();  };}, [navigation]);
```

Similarly, for dispatching actions or updating options, you can check if the screen is focused before doing so:

```
if (navigation.isFocused()) {  navigation.setOptions({ title: 'Updated title' });}
```

### `setParams`[](https://reactnavigation.org/docs/shared-element-transitions/#setparams "Direct link to setparams")

The `setParams` method lets us update the params (`route.params`) of the current screen. `setParams` works like React's `setState` - it shallow merges the provided params object with the current params.

-   Static
-   Dynamic

```
function ProfileScreen({ route }) {  const navigation = useNavigation();  return (    <View      style={{        flex: 1,        gap: 8,        alignItems: 'center',        justifyContent: 'center',      }}    >      <Text>Profile Screen</Text>      <Text>Friends: </Text>      <Text>{route.params.friends[0]}</Text>      <Text>{route.params.friends[1]}</Text>      <Text>{route.params.friends[2]}</Text>      <Button        onPress={() => {          navigation.setParams({            friends:              route.params.friends[0] === 'Brent'                ? ['Wojciech', 'Szymon', 'Jakub']                : ['Brent', 'Satya', 'Michaś'],            title:              route.params.title === "Brent's Profile"                ? "Lucy's Profile"                : "Brent's Profile",          });        }}      >        Swap title and friends      </Button>      <Button onPress={() => navigation.goBack()}>Go back</Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigate+-+setParams&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+the+home+screen+of+the+app%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B%0A++++++++++++friends%3A+%5B%27Brent%27%2C+%27Satya%27%2C+%27Micha%C5%9B%27%5D%2C%0A++++++++++++title%3A+%22Brent%27s+Profile%22%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+to+Brents+profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CText%3EFriends%3A+%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.friends%5B0%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.friends%5B1%5D%7D%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.friends%5B2%5D%7D%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.setParams%28%7B%0A++++++++++++friends%3A%0A++++++++++++++route.params.friends%5B0%5D+%3D%3D%3D+%27Brent%27%0A++++++++++++++++%3F+%5B%27Wojciech%27%2C+%27Szymon%27%2C+%27Jakub%27%5D%0A++++++++++++++++%3A+%5B%27Brent%27%2C+%27Satya%27%2C+%27Micha%C5%9B%27%5D%2C%0A++++++++++++title%3A%0A++++++++++++++route.params.title+%3D%3D%3D+%22Brent%27s+Profile%22%0A++++++++++++++++%3F+%22Lucy%27s+Profile%22%0A++++++++++++++++%3A+%22Brent%27s+Profile%22%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Swap+title+and+friends%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen%0A++++++++++name%3D%22Profile%22%0A++++++++++component%3D%7BProfileScreen%7D%0A++++++++++options%3D%7B%28%7B+route+%7D%29+%3D%3E+%28%7B+title%3A+route.params.title+%7D%29%7D%0A++++++++%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### `setOptions`[](https://reactnavigation.org/docs/shared-element-transitions/#setoptions "Direct link to setoptions")

The `setOptions` method lets us set screen options from within the component. This is useful if we need to use the component's props, state or context to configure our screen.

-   Static
-   Dynamic

```
function ProfileScreen({ route }) {  const navigation = useNavigation();  const [value, onChangeText] = React.useState(route.params.title);  React.useEffect(() => {    navigation.setOptions({      title: value === '' ? 'No title' : value,    });  }, [navigation, value]);  return (    <View      style={{        flex: 1,        gap: 8,        alignItems: 'center',        justifyContent: 'center',      }}    >      <TextInput        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}        onChangeText={onChangeText}        value={value}      />      <Button onPress={() => navigation.goBack()}>Go back</Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigate+-+setOptions&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text%2C+TextInput+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EThis+is+the+home+screen+of+the+app%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigate%28%27Profile%27%2C+%7B+title%3A+%22Brent%27s+profile%22+%7D%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%5Bvalue%2C+onChangeText%5D+%3D+React.useState%28route.params.title%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++navigation.setOptions%28%7B%0A++++++title%3A+value+%3D%3D%3D+%27%27+%3F+%27No+title%27+%3A+value%2C%0A++++%7D%29%3B%0A++%7D%2C+%5Bnavigation%2C+value%5D%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CTextInput%0A++++++++style%3D%7B%7B+height%3A+40%2C+borderColor%3A+%27gray%27%2C+borderWidth%3A+1+%7D%7D%0A++++++++onChangeText%3D%7BonChangeText%7D%0A++++++++value%3D%7Bvalue%7D%0A++++++%2F%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen%0A++++++++++name%3D%22Profile%22%0A++++++++++component%3D%7BProfileScreen%7D%0A++++++++++options%3D%7B%28%7B+route+%7D%29+%3D%3E+%28%7B+title%3A+route.params.title+%7D%29%7D%0A++++++++%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Any options specified here are shallow merged with the options specified when defining the screen.

When using `navigation.setOptions`, we recommend specifying a placeholder in the screen's `options` prop and update it using `navigation.setOptions`. This makes sure that the delay for updating the options isn't noticeable to the user. It also makes it work with lazy-loaded screens.

You can also use `React.useLayoutEffect` to reduce the delay in updating the options. But we recommend against doing it if you support web and do server side rendering.

note

`navigation.setOptions` is intended to provide the ability to update existing options when necessary. It's not a replacement for the `options` prop on the screen. Make sure to use `navigation.setOptions` sparingly only when absolutely necessary.

## Navigation events[](https://reactnavigation.org/docs/shared-element-transitions/#navigation-events "Direct link to Navigation events")

Screens can add listeners on the `navigation` object with the `addListener` method. For example, to listen to the `focus` event:

-   Static
-   Dynamic

```
function ProfileScreen() {  const navigation = useNavigation();  React.useEffect(    () => navigation.addListener('focus', () => alert('Screen was focused')),    [navigation]  );  React.useEffect(    () => navigation.addListener('blur', () => alert('Screen was unfocused')),    [navigation]  );  return (    <View      style={{        flex: 1,        gap: 8,        alignItems: 'center',        justifyContent: 'center',      }}    >      <Text>Profile Screen</Text>      <Button onPress={() => navigation.navigate('Settings')}>        Go to Settings      </Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigation+events&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+SettingsScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3ESettings+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++React.useEffect%28%0A++++%28%29+%3D%3E+navigation.addListener%28%27focus%27%2C+%28%29+%3D%3E+alert%28%27Screen+was+focused%27%29%29%2C%0A++++%5Bnavigation%5D%0A++%29%3B%0A%0A++React.useEffect%28%0A++++%28%29+%3D%3E+navigation.addListener%28%27blur%27%2C+%28%29+%3D%3E+alert%28%27Screen+was+unfocused%27%29%29%2C%0A++++%5Bnavigation%5D%0A++%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+SettingsStack+%3D+createNativeStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CSettingsStack.Navigator%3E%0A++++++++%3CSettingsStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++++%3CSettingsStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FSettingsStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

See [Navigation events](https://reactnavigation.org/docs/navigation-events) for more details on the available events and the API usage.

### `isFocused`[](https://reactnavigation.org/docs/shared-element-transitions/#isfocused "Direct link to isfocused")

This method lets us check whether the screen is currently focused. Returns `true` if the screen is focused and `false` otherwise.

```
const isFocused = navigation.isFocused();
```

This method doesn't re-render the screen when the value changes and mainly useful in callbacks. You probably want to use [useIsFocused](https://reactnavigation.org/docs/use-is-focused) instead of using this directly, it will return a boolean a prop to indicating if the screen is focused.

## Advanced API Reference[](https://reactnavigation.org/docs/shared-element-transitions/#advanced-api-reference "Direct link to Advanced API Reference")

The `dispatch` function is much less commonly used, but a good escape hatch if you can't do what you need with the available methods such as `navigate`, `goBack` etc. We recommend to avoid using the `dispatch` method often unless absolutely necessary.

### `dispatch`[](https://reactnavigation.org/docs/shared-element-transitions/#dispatch "Direct link to dispatch")

The `dispatch` method lets us send a navigation action object which determines how the [navigation state](https://reactnavigation.org/docs/navigation-state) will be updated. All of the navigation functions like `navigate` use `dispatch` behind the scenes.

Note that if you want to dispatch actions you should use the action creators provided in this library instead of writing the action object directly.

See [Navigation Actions Docs](https://reactnavigation.org/docs/navigation-actions) for a full list of available actions.

```
import { CommonActions } from '@react-navigation/native';navigation.dispatch(  CommonActions.navigate({    name: 'Profile',    params: {},  }));
```

When dispatching action objects, you can also specify few additional properties:

-   `source` - The key of the route which should be considered as the source of the action. For example, the `replace` action will replace the route with the given key. By default, it'll use the key of the route that dispatched the action. You can explicitly pass `undefined` to override this behavior.
-   `target` - The key of the [navigation state](https://reactnavigation.org/docs/navigation-state) the action should be applied on. By default, actions bubble to other navigators if not handled by a navigator. If `target` is specified, the action won't bubble if the navigator with the same key didn't handle it.

Example:

```
import { CommonActions } from '@react-navigation/native';navigation.dispatch({  ...CommonActions.navigate('Profile'),  source: 'someRoutekey',  target: 'someStatekey',});
```

#### Custom action creators[](https://reactnavigation.org/docs/shared-element-transitions/#custom-action-creators "Direct link to Custom action creators")

It's also possible to pass a action creator function to `dispatch`. The function will receive the current state and needs to return a navigation action object to use:

```
import { CommonActions } from '@react-navigation/native';navigation.dispatch((state) => {  // Add the home route to the start of the stack  const routes = [{ name: 'Home' }, ...state.routes];  return CommonActions.reset({    ...state,    routes,    index: routes.length - 1,  });});
```

You can use this functionality to build your own helpers that you can utilize in your app. Here is an example which implements inserting a screen just before the last one:

```
import { CommonActions } from '@react-navigation/native';const insertBeforeLast = (routeName, params) => (state) => {  const routes = [    ...state.routes.slice(0, -1),    { name: routeName, params },    state.routes[state.routes.length - 1],  ];  return CommonActions.reset({    ...state,    routes,    index: routes.length - 1,  });};
```

Then use it like:

```
navigation.dispatch(insertBeforeLast('Home'));
```

### `canGoBack`[](https://reactnavigation.org/docs/shared-element-transitions/#cangoback "Direct link to cangoback")

This method returns a boolean indicating whether there's any navigation history available in the current navigator, or in any parent navigators. You can use this to check if you can call `navigation.goBack()`:

```
if (navigation.canGoBack()) {  navigation.goBack();}
```

Don't use this method for rendering content as this will not trigger a re-render. This is only intended for use inside callbacks, event listeners etc.

### `getParent`[](https://reactnavigation.org/docs/shared-element-transitions/#getparent "Direct link to getparent")

This method returns the navigation object from the parent navigator that the current navigator is nested in. For example, if you have a stack navigator and a tab navigator nested inside the stack, then you can use `getParent` inside a screen of the tab navigator to get the navigation object passed from the stack navigator.

It accepts an optional ID parameter to refer to a specific parent navigator. For example, if your screen is nested with multiple levels of nesting somewhere under a drawer navigator with the `id` prop as `"LeftDrawer"`, you can directly refer to it without calling `getParent` multiple times.

To use an ID for a navigator, first pass a unique `id` prop:

-   Static
-   Dynamic

```
<Drawer.Navigator id="LeftDrawer">{/* .. */}</Drawer.Navigator>
```

Then when using `getParent`, instead of:

```
// Avoid thisconst drawerNavigation = navigation.getParent().getParent();// ...drawerNavigation?.openDrawer();
```

You can do:

```
// Do thisconst drawerNavigation = navigation.getParent('LeftDrawer');// ...drawerNavigation?.openDrawer();
```

This approach allows components to not have to know the nesting structure of the navigators. So it's highly recommended that use an `id` when using `getParent`.

This method will return `undefined` if there is no matching parent navigator. Be sure to always check for `undefined` when using this method.

### `getState`[](https://reactnavigation.org/docs/shared-element-transitions/#getstate "Direct link to getstate")

warning

Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the [navigation state](https://reactnavigation.org/docs/navigation-state) state object except `index` and `routes`, unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.

This method returns the state object of the navigator which contains the screen. Getting the navigator state could be useful in very rare situations. You most likely don't need to use this method. If you do, make sure you have a good reason.

If you need the state for rendering content, you should use [`useNavigationState`](https://reactnavigation.org/docs/use-navigation-state) instead of this method.


## Navigation state reference  React Navigation

---
created: 2025-02-08T17:06:57 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Navigation state reference | React Navigation

> ## Excerpt
> The navigation state is the state where React Navigation stores the navigation structure and history of the app. It's useful to know about the structure of the navigation state if you need to do advanced operations such as resetting the state, providing a custom initial state etc.

---
The navigation state is the state where React Navigation stores the navigation structure and history of the app. It's useful to know about the structure of the navigation state if you need to do advanced operations such as [resetting the state](https://reactnavigation.org/docs/navigation-actions#reset), [providing a custom initial state](https://reactnavigation.org/docs/navigation-container#initialstate) etc.

It's a JavaScript object which looks like this:

```
const state = {  type: 'stack',  key: 'stack-1',  routeNames: ['Home', 'Profile', 'Settings'],  routes: [    { key: 'home-1', name: 'Home', params: { sortBy: 'latest' } },    { key: 'settings-1', name: 'Settings' },  ],  index: 1,  stale: false,};
```

There are few properties present in every navigation state object:

-   `type` - Type of the navigator that the state belongs to, e.g. `stack`, `tab`, `drawer`.
-   `key` - Unique key to identify the navigator.
-   `routeNames` - Name of the screens defined in the navigator. This is an unique array containing strings for each screen.
-   `routes` - List of route objects (screens) which are rendered in the navigator. It also represents the history in a stack navigator. There should be at least one item present in this array.
-   `index` - Index of the focused route object in the `routes` array.
-   `history` - A list of visited items. This is an optional property and not present in all navigators. For example, it's only present in tab and drawer navigators in the core. The shape of the items in the `history` array can vary depending on the navigator. There should be at least one item present in this array.
-   `stale` - A navigation state is assumed to be stale unless the `stale` property is explicitly set to `false`. This means that the state object needs to be ["rehydrated"](https://reactnavigation.org/docs/shared-element-transitions/#partial-state-objects).

Each route object in a `routes` array may contain the following properties:

-   `key` - Unique key of the screen. Created automatically or added while navigating to this screen.
-   `name` - Name of the screen. Defined in navigator component hierarchy.
-   `params` - An optional object containing params which is defined while navigating e.g. `navigate('Home', { sortBy: 'latest' })`.
-   `state` - An optional object containing the navigation state of a child navigator nested inside this screen.

For example, a stack navigator containing a tab navigator nested inside it's home screen may have a navigation state object like this:

```
const state = {  type: 'stack',  key: 'stack-1',  routeNames: ['Home', 'Profile', 'Settings'],  routes: [    {      key: 'home-1',      name: 'Home',      state: {        key: 'tab-1',        routeNames: ['Feed', 'Library', 'Favorites'],        routes: [          { key: 'feed-1', name: 'Feed', params: { sortBy: 'latest' } },          { key: 'library-1', name: 'Library' },          { key: 'favorites-1', name: 'Favorites' },        ],        index: 0,      },    },    { key: 'settings-1', name: 'Settings' },  ],  index: 1,};
```

It's important to note that even if there's a nested navigator, the `state` property on the `route` object is not added until a navigation happens, hence it's not guaranteed to exist.

## Partial state objects[](https://reactnavigation.org/docs/shared-element-transitions/#partial-state-objects "Direct link to Partial state objects")

Earlier there was a mention of `stale` property in the navigation state. A stale navigation state means that the state object needs to be rehydrated or fixed or fixed up, such as adding missing keys, removing invalid screens etc. before being used. As a user, you don't need to worry about it, React Navigation will fix up any issues in a state object automatically unless `stale` is set to `false`. If you're writing a [custom router](https://reactnavigation.org/docs/custom-routers), the `getRehydratedState` method let's you write custom rehydration logic to fix up state objects.

This also applies to the `index` property: `index` should be the last route in a stack, and if a different value was specified, React Navigation fixes it. For example, if you wanted to reset your app's navigation state to have it display the `Profile` route, and have the `Home` route displayed upon going back, and did the below,

```
navigation.reset({  index: 0,  routes: [{ name: 'Home' }, { name: 'Profile' }],});
```

React Navigation would correct `index` to 1, and display the route and perform navigation as intended.

This feature comes handy when doing operations such as [reset](https://reactnavigation.org/docs/navigation-actions#reset), [providing a initial state](https://reactnavigation.org/docs/navigation-container#initialstate) etc., as you can safely omit many properties from the navigation state object and relying on React Navigation to add those properties for you, making your code simpler. For example, you can only provide a `routes` array without any keys and React Navigation will automatically add everything that's needed to make it work:

```
const state = {  routes: [{ name: 'Home' }, { name: 'Profile' }],};
```

After rehydration, it'll look something like this:

```
const state = {  type: 'stack',  key: 'stack-1',  routeNames: ['Home', 'Profile', 'Settings'],  routes: [    { key: 'home-1', name: 'Home' },    { key: 'settings-1', name: 'Settings' },  ],  index: 1,  stale: false,};
```

Here, React Navigation filled in the missing bits such as keys, route names, index etc.

It's also possible to provide invalid data such as non-existent screens and it'll be fixed automatically. While it's not recommended to write code with invalid state objects, it can be super useful if you do things like [state persistence](https://reactnavigation.org/docs/state-persistence), where the configured screens might have changed after an update, which could cause problems if React Navigation didn't fix the state object automatically.

tip

If you want React Navigation to fix invalid state, you need to make sure that you don't have `stale: false` in the state object. State objects with `stale: false` are assumed to be valid state objects and React Navigation won't attempt to fix them.

When you're providing a state object in [`initialState`](https://reactnavigation.org/docs/navigation-container#initialstate), React Navigation will always assume that it's a stale state object, which makes sure that things like state persistence work smoothly without extra manipulation of the state object.


## NavigationContainer  React Navigation

---
created: 2025-02-08T17:05:47 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# NavigationContainer | React Navigation

> ## Excerpt
> The NavigationContainer is responsible for managing your app's navigation state and linking your top-level navigator to the app environment.

---
The `NavigationContainer` is responsible for managing your app's navigation state and linking your top-level navigator to the app environment.

The container takes care of platform specific integration and provides various useful functionality:

1.  Deep link integration with the [`linking`](https://reactnavigation.org/docs/shared-element-transitions/#linking) prop.
2.  Notify state changes for [screen tracking](https://reactnavigation.org/docs/screen-tracking), [state persistence](https://reactnavigation.org/docs/state-persistence) etc.
3.  Handle system back button on Android by using the [`BackHandler`](https://reactnative.dev/docs/backhandler) API from React Native.

Usage:

-   Static
-   Dynamic

```
import { NavigationContainer } from '@react-navigation/native';import { createNativeStackNavigator } from '@react-navigation/native-stack';const Stack = createNativeStackNavigator();export default function App() {  return (    <NavigationContainer>      <Stack.Navigator>{/* ... */}</Stack.Navigator>    </NavigationContainer>  );}
```

## Ref[](https://reactnavigation.org/docs/shared-element-transitions/#ref "Direct link to Ref")

It's possible to pass a [`ref`](https://react.dev/learn/referencing-values-with-refs) to the container to get access to various helper methods, for example, dispatch navigation actions. This should be used in rare cases when you don't have access to the [`navigation` object](https://reactnavigation.org/docs/navigation-object), such as a Redux middleware.

Example:

-   Static
-   Dynamic

```
import {  NavigationContainer,  useNavigationContainerRef,} from '@react-navigation/native';export default function App() {  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`  return (    <View style={{ flex: 1 }}>      <Button onPress={() => navigationRef.navigate('Home')}>Go home</Button>      <NavigationContainer ref={navigationRef}>        <Stack.Navigator initialRouteName="Empty">          <Stack.Screen name="Empty" component={() => <View></View>} />          <Stack.Screen name="Home" component={HomeScreen} />        </Stack.Navigator>      </NavigationContainer>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Using+refs&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++useNavigationContainerRef%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0A%0Aexport+default+function+App%28%29+%7B%0A++const+navigationRef+%3D+useNavigationContainerRef%28%29%3B+%2F%2F+You+can+also+use+a+regular+ref+with+%60React.useRef%28%29%60%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigationRef.navigate%28%27Home%27%29%7D%3EGo+home%3C%2FButton%3E%0A++++++%3CNavigationContainer+ref%3D%7BnavigationRef%7D%3E%0A++++++++%3CStack.Navigator+initialRouteName%3D%22Empty%22%3E%0A++++++++++%3CStack.Screen+name%3D%22Empty%22+component%3D%7B%28%29+%3D%3E+%3CView%3E%3C%2FView%3E%7D+%2F%3E%0A++++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3C%2FStack.Navigator%3E%0A++++++%3C%2FNavigationContainer%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you're using a regular ref object, keep in mind that the ref may be initially `null` in some situations (such as when linking is enabled). To make sure that the ref is initialized, you can use the [`onReady`](https://reactnavigation.org/docs/shared-element-transitions/#onready) callback to get notified when the navigation container finishes mounting.

Check how to setup `ref` with TypeScript [here](https://reactnavigation.org/docs/typescript#annotating-ref-on-navigationcontainer).

See the [Navigating without the navigation prop](https://reactnavigation.org/docs/navigating-without-navigation-prop) guide for more details.

### Methods on the ref[](https://reactnavigation.org/docs/shared-element-transitions/#methods-on-the-ref "Direct link to Methods on the ref")

The ref object includes all of the common navigation methods such as `navigate`, `goBack` etc. See [docs for `CommonActions`](https://reactnavigation.org/docs/navigation-actions) for more details.

Example:

```
navigationRef.navigate(name, params);
```

All of these methods will act as if they were called inside the currently focused screen. It's important note that there must be a navigator rendered to handle these actions.

In addition to these methods, the ref object also includes the following special methods:

#### `isReady`[](https://reactnavigation.org/docs/shared-element-transitions/#isready "Direct link to isready")

The `isReady` method returns a `boolean` indicating whether the navigation tree is ready. The navigation tree is ready when the `NavigationContainer` contains at least one navigator and all of the navigators have finished mounting.

This can be used to determine whether it's safe to dispatch navigation actions without getting an error. See [handling initialization](https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization) for more details.

#### `resetRoot`[](https://reactnavigation.org/docs/shared-element-transitions/#resetroot "Direct link to resetroot")

The `resetRoot` method lets you reset the state of the navigation tree to the specified state object:

```
navigationRef.resetRoot({  index: 0,  routes: [{ name: 'Profile' }],});
```

Unlike the `reset` method, this acts on the root navigator instead of navigator of the currently focused screen.

#### `getRootState`[](https://reactnavigation.org/docs/shared-element-transitions/#getrootstate "Direct link to getrootstate")

The `getRootState` method returns a [navigation state](https://reactnavigation.org/docs/navigation-state) object containing the navigation states for all navigators in the navigation tree:

```
const state = navigationRef.getRootState();
```

Note that the returned `state` object will be `undefined` if there are no navigators currently rendered.

#### `getCurrentRoute`[](https://reactnavigation.org/docs/shared-element-transitions/#getcurrentroute "Direct link to getcurrentroute")

The `getCurrentRoute` method returns the route object for the currently focused screen in the whole navigation tree:

```
const route = navigationRef.getCurrentRoute();
```

Note that the returned `route` object will be `undefined` if there are no navigators currently rendered.

#### `getCurrentOptions`[](https://reactnavigation.org/docs/shared-element-transitions/#getcurrentoptions "Direct link to getcurrentoptions")

The `getCurrentOptions` method returns the options for the currently focused screen in the whole navigation tree:

```
const options = navigationRef.getCurrentOptions();
```

Note that the returned `options` object will be `undefined` if there are no navigators currently rendered.

#### `addListener`[](https://reactnavigation.org/docs/shared-element-transitions/#addlistener "Direct link to addlistener")

The `addListener` method lets you listen to the following events:

##### `state`[](https://reactnavigation.org/docs/shared-element-transitions/#state "Direct link to state")

The event is triggered whenever the [navigation state](https://reactnavigation.org/docs/navigation-state) changes in any navigator in the navigation tree:

```
const unsubscribe = navigationRef.addListener('state', (e) => {  // You can get the raw navigation state (partial state object of the root navigator)  console.log(e.data.state);  // Or get the full state object with `getRootState()`  console.log(navigationRef.getRootState());});
```

This is analogous to the [`onStateChange`](https://reactnavigation.org/docs/shared-element-transitions/#onstatechange) method. The only difference is that the `e.data.state` object might contain partial state object unlike the `state` argument in `onStateChange` which will always contain the full state object.

##### `options`[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to options")

The event is triggered whenever the options change for the currently focused screen in the navigation tree:

```
const unsubscribe = navigationRef.addListener('options', (e) => {  // You can get the new options for the currently focused screen  console.log(e.data.options);});
```

## Props[](https://reactnavigation.org/docs/shared-element-transitions/#props "Direct link to Props")

### `initialState`[](https://reactnavigation.org/docs/shared-element-transitions/#initialstate "Direct link to initialstate")

Prop that accepts initial state for the navigator. This can be useful for cases such as deep linking, state persistence etc.

Example:

-   Static
-   Dynamic

```
<NavigationContainer  initialState={initialState}>  {/* ... */}</NavigationContainer>
```

See [Navigation state reference](https://reactnavigation.org/docs/navigation-state) for more details on the structure of the state object.

Providing a custom initial state object will override the initial state object obtained via linking configuration or from browser's URL. If you're providing an initial state object, make sure that you don't pass it on web and that there's no deep link to handle.

Example:

```
const initialUrl = await Linking.getInitialURL();if (Platform.OS !== 'web' && initialUrl == null) {  // Only restore state if there's no deep link and we're not on web}
```

See [state persistence guide](https://reactnavigation.org/docs/state-persistence) for more details on how to persist and restore state.

### `onStateChange`[](https://reactnavigation.org/docs/shared-element-transitions/#onstatechange "Direct link to onstatechange")

warning

Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the [navigation state](https://reactnavigation.org/docs/navigation-state) state object except `index` and `routes`, unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.

Function that gets called every time [navigation state](https://reactnavigation.org/docs/navigation-state) changes. It receives the new navigation state as the argument.

You can use it to track the focused screen, persist the navigation state etc.

Example:

-   Static
-   Dynamic

```
<NavigationContainer  onStateChange={(state) => console.log('New state is', state)}>  {/* ... */}</NavigationContainer>
```

### `onReady`[](https://reactnavigation.org/docs/shared-element-transitions/#onready "Direct link to onready")

Function which is called after the navigation container and all its children finish mounting for the first time. You can use it for:

-   Making sure that the `ref` is usable. See [docs regarding initialization of the ref](https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization) for more details.
-   Hiding your native splash screen

Example:

-   Static
-   Dynamic

```
<NavigationContainer  onReady={() => console.log('Navigation container is ready')}>  {/* ... */}</NavigationContainer>
```

This callback won't fire if there are no navigators rendered inside the container.

The current status can be obtained with the [`isReady`](https://reactnavigation.org/docs/shared-element-transitions/#isready) method on the ref.

### `onUnhandledAction`[](https://reactnavigation.org/docs/shared-element-transitions/#onunhandledaction "Direct link to onunhandledaction")

Function which is called when a navigation action is not handled by any of the navigators.

By default, React Navigation will show a development-only error message when an action is not handled. You can override the default behavior by providing a custom function.

Example:

-   Static
-   Dynamic

```
<NavigationContainer  onUnhandledAction={(action) => console.error('Unhandled action', action)}>  {/* ... */}</NavigationContainer>
```

### `linking`[](https://reactnavigation.org/docs/shared-element-transitions/#linking "Direct link to linking")

Configuration for linking integration used for deep linking, URL support in browsers etc.

Example:

-   Static
-   Dynamic

```
import { NavigationContainer } from '@react-navigation/native';function App() {  const linking = {    prefixes: ['https://mychat.com', 'mychat://'],    config: {      screens: {        Home: 'feed/:sort',      },    },  };  return (    <NavigationContainer      linking={linking}      fallback={<Text>Loading...</Text>}    >      {/* content */}    </NavigationContainer>  );}
```

See [configuring links guide](https://reactnavigation.org/docs/configuring-links) for more details on how to configure deep links and URL integration.

#### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options-1 "Direct link to Options")

##### `linking.prefixes`[](https://reactnavigation.org/docs/shared-element-transitions/#linkingprefixes "Direct link to linkingprefixes")

URL prefixes to handle. You can provide multiple prefixes to support custom schemes as well as [universal links](https://developer.apple.com/ios/universal-links/).

Only URLs matching these prefixes will be handled. The prefix will be stripped from the URL before parsing.

Example:

-   Static
-   Dynamic

```
<NavigationContainer  linking={{    // highlight-next-lineP    prefixes: ['https://mychat.com', 'mychat://'],    config: {      // ...    },  }}>  {/* content */}</NavigationContainer>
```

This is only supported on iOS and Android.

##### `linking.config`[](https://reactnavigation.org/docs/shared-element-transitions/#linkingconfig "Direct link to linkingconfig")

Config to fine-tune how to parse the path.

When using dynamic API, the config object should represent the structure of the navigators in the app.

See the [configuring links guide](https://reactnavigation.org/docs/configuring-links) for more details on how to configure deep links and URL integration.

##### `linking.enabled`[](https://reactnavigation.org/docs/shared-element-transitions/#linkingenabled "Direct link to linkingenabled")

Optional boolean to enable or disable the linking integration. Defaults to `true` if the `linking` prop is specified.

When using the static API, it's possible to pass `'auto'` to automatically generate the config based on the navigator's structure. See the [configuring links guide](https://reactnavigation.org/docs/configuring-links) for more details.

##### `linking.getInitialURL`[](https://reactnavigation.org/docs/shared-element-transitions/#linkinggetinitialurl "Direct link to linkinggetinitialurl")

By default, linking integrates with React Native's `Linking` API and uses `Linking.getInitialURL()` to provide built-in support for deep linking. However, you might also want to handle links from other sources, such as [Branch](https://help.branch.io/developers-hub/docs/react-native), or push notifications using [Firebase](https://rnfirebase.io/messaging/notifications) etc.

You can provide a custom `getInitialURL` function where you can return the link which we should use as the initial URL. The `getInitialURL` function should return a `string` if there's a URL to handle, otherwise `undefined`.

For example, you could do something like following to handle both deep linking and [Firebase notifications](https://rnfirebase.io/messaging/notifications):

-   Static
-   Dynamic

```
import messaging from '@react-native-firebase/messaging';<NavigationContainer  linking={{    prefixes: ['https://mychat.com', 'mychat://'],    config: {      // ...    },    async getInitialURL() {      // Check if app was opened from a deep link      const url = await Linking.getInitialURL();      if (url != null) {        return url;      }      // Check if there is an initial firebase notification      const message = await messaging().getInitialNotification();      // Get the `url` property from the notification which corresponds to a screen      // This property needs to be set on the notification payload when sending it      return message?.data?.url;    },  }}>  {/* content */}</NavigationContainer>;
```

This option is not available on Web.

##### `linking.subscribe`[](https://reactnavigation.org/docs/shared-element-transitions/#linkingsubscribe "Direct link to linkingsubscribe")

Similar to [`getInitialURL`](https://reactnavigation.org/docs/shared-element-transitions/#linkinggetinitialurl), you can provide a custom `subscribe` function to handle any incoming links instead of the default deep link handling. The `subscribe` function will receive a listener as the argument and you can call it with a URL string whenever there's a new URL to handle. It should return a cleanup function where you can unsubscribe from any event listeners that you have setup.

For example, you could do something like following to handle both deep linking and [Firebase notifications](https://rnfirebase.io/messaging/notifications):

-   Static
-   Dynamic

```
import messaging from '@react-native-firebase/messaging';<NavigationContainer  linking={{    prefixes: ['https://mychat.com', 'mychat://'],    config: {      // ...    },    subscribe(listener) {      const onReceiveURL = ({ url }: { url: string }) => listener(url);      // Listen to incoming links from deep linking      const subscription = Linking.addEventListener('url', onReceiveURL);      // Listen to firebase push notifications      const unsubscribeNotification = messaging().onNotificationOpenedApp(        (message) => {          const url = message.data?.url;          if (url) {            // Any custom logic to check whether the URL needs to be handled            //...            // Call the listener to let React Navigation handle the URL            listener(url);          }        }      );      return () => {        // Clean up the event listeners        subscription.remove();        unsubscribeNotification();      };    },  }}>  {/* content */}</NavigationContainer>;
```

This option is not available on Web.

##### `linking.getStateFromPath`[](https://reactnavigation.org/docs/shared-element-transitions/#linkinggetstatefrompath "Direct link to linkinggetstatefrompath")

You can optionally override the way React Navigation parses links to a state object by providing your own implementation.

Example:

-   Static
-   Dynamic

```
<NavigationContainer  linking={{    prefixes: ['https://mychat.com', 'mychat://'],    config: {      // ...    },    getStateFromPath(path, config) {      // Return a state object here      // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`    },  }}>  {/* content */}</NavigationContainer>
```

##### `linking.getPathFromState`[](https://reactnavigation.org/docs/shared-element-transitions/#linkinggetpathfromstate "Direct link to linkinggetpathfromstate")

You can optionally override the way React Navigation serializes state objects to link by providing your own implementation. This is necessary for proper web support if you have specified `getStateFromPath`.

Example:

-   Static
-   Dynamic

```
<NavigationContainer  linking={{    prefixes: ['https://mychat.com', 'mychat://'],    config: {      // ...    },    getPathFromState(state, config) {      // Return a path string here      // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`    },  }}>  {/* content */}</NavigationContainer>
```

### `fallback`[](https://reactnavigation.org/docs/shared-element-transitions/#fallback "Direct link to fallback")

React Element to use as a fallback while we resolve deep links. Defaults to `null`.

-   Static
-   Dynamic

```
<NavigationContainer  fallback={<Text>Loading...</Text>}>  {/* content */}</NavigationContainer>
```

If you have a native splash screen, please use [`onReady`](https://reactnavigation.org/docs/shared-element-transitions/#onready) instead of `fallback` prop.

### `documentTitle`[](https://reactnavigation.org/docs/shared-element-transitions/#documenttitle "Direct link to documenttitle")

By default, React Navigation automatically updates the document title on Web to match the `title` option of the focused screen. You can disable it or customize it using this prop. It accepts a configuration object with the following options:

#### `documentTitle.enabled`[](https://reactnavigation.org/docs/shared-element-transitions/#documenttitleenabled "Direct link to documenttitleenabled")

Whether document title handling should be enabled. Defaults to `true`.

#### `documentTitle.formatter`[](https://reactnavigation.org/docs/shared-element-transitions/#documenttitleformatter "Direct link to documenttitleformatter")

Custom formatter to use if you want to customize the title text. Defaults to:

```
(options, route) => options?.title ?? route?.name;
```

Example:

-   Static
-   Dynamic

```
<NavigationContainer  documentTitle={{    formatter: (options, route) =>      `${options?.title ?? route?.name} - My Cool App`,  }}>  {/* content */}</NavigationContainer>
```

### `theme`[](https://reactnavigation.org/docs/shared-element-transitions/#theme "Direct link to theme")

Custom theme to use for the navigation components such as the header, tab bar etc. See [theming guide](https://reactnavigation.org/docs/themes) for more details and usage guide.

### `direction`[](https://reactnavigation.org/docs/shared-element-transitions/#direction "Direct link to direction")

The direction of the text configured in the app. Defaults to `'rtl'` when `I18nManager.getConstants().isRTL` returns `true`, otherwise `'ltr'`.

Supported values:

-   `'ltr'`: Left-to-right text direction for languages like English, French etc.
-   `'rtl'`: Right-to-left text direction for languages like Arabic, Hebrew etc.

Example:

-   Static
-   Dynamic

```
<NavigationContainer  direction="rtl">  {/* content */}</NavigationContainer>
```

This is used in various navigators to adjust the content according to the text direction, for example, the drawer in the [drawer navigator](https://reactnavigation.org/docs/drawer-navigator) is positioned on the right side in RTL languages.

This prop informs React Navigation about the text direction in the app, it doesn't change the text direction by itself. If you intend to support RTL languages, it's important to set this prop to the correct value that's configured in the app. If it doesn't match the actual text direction, the layout might be incorrect.

On the Web, it may also be necessary to set the `dir` attribute on the root element of the app to ensure that the text direction is correct:

```
<html dir="rtl">  <!-- App content --></html>
```

The `direction` will be available to use in your own components via the `useLocale` hook:

```
import { useLocale } from '@react-navigation/native';function MyComponent() {  const { direction } = useLocale();  // Use the direction}
```

### `navigationInChildEnabled`[](https://reactnavigation.org/docs/shared-element-transitions/#navigationinchildenabled "Direct link to navigationinchildenabled")

warning

This prop exists for backward compatibility reasons. It's not recommended to use it in new projects. It will be removed in a future release.

In previous versions of React Navigation, it was possible to navigate to a screen in a nested navigator without specifying the name of the parent screen, i.e. `navigation.navigate(ScreenName)` instead of `navigation.navigate(ParentScreenName, { screen: ScreenName })`.

However, it has a few issues:

-   It only works if the navigator is already mounted - making navigation coupled to other logic.
-   It doesn't work with the TypeScript types.

The `navigationInChildEnabled` prop allows you to opt-in to this behavior to make it easier to migrate legacy code. It's disabled by default.

For new code, see [navigating to a screen in a nested navigator](https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator) instead.

## Independent navigation containers[](https://reactnavigation.org/docs/shared-element-transitions/#independent-navigation-containers "Direct link to Independent navigation containers")

warning

This is an advanced use case. Don't use this unless you are 100% sure that you need it.

In most apps, there will be only a single `NavigationContainer`. Nesting multiple `NavigationContainer`s will throw an error. However, in rare cases, it may be useful to have multiple independent navigation trees, e.g. including a mini-app inside a larger app.

You can wrap the nested `NavigationContainer` with the `NavigationIndependentTree` component to make it independent from the parent navigation tree:

-   Static
-   Dynamic

```
import {  NavigationContainer,  NavigationIndependentTree,} from '@react-navigation/native';function NestedApp() {  return (    <NavigationIndependentTree>      <NavigationContainer>{/* content */}</NavigationContainer>    </NavigationIndependentTree>  );}
```

Doing this disconnects any children navigators from the parent container and doesn't allow navigation between them.

Avoid using this if you need to integrate with third-party components such as modals or bottom sheets. Consider using a [custom navigator](https://reactnavigation.org/docs/custom-navigators) instead.


## NavigationContext  React Navigation

---
created: 2025-02-08T17:06:45 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# NavigationContext | React Navigation

> ## Excerpt
> NavigationContext provides the navigation object (same object as the navigation prop). In fact, useNavigation uses this context to get the navigation prop.

---
Version: 7.x

`NavigationContext` provides the `navigation` object (same object as the [navigation](https://reactnavigation.org/docs/navigation-object) prop). In fact, [useNavigation](https://reactnavigation.org/docs/use-navigation) uses this context to get the `navigation` prop.

Most of the time, you won't use `NavigationContext` directly, as the provided `useNavigation` covers most use cases. But just in case you have something else in mind, `NavigationContext` is available for you to use.

Example:

-   Static
-   Dynamic

```
import { NavigationContext } from '@react-navigation/native';function SomeComponent() {  // We can access navigation object via context  const navigation = React.useContext(NavigationContext);
```

[Try on **Snack**](https://snack.expo.dev/?name=Navigation+context&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContext+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CSomeComponent+%2F%3E%3B%0A%7D%0A%0A%0Afunction+SomeComponent%28%29+%7B%0A++%2F%2F+We+can+access+navigation+object+via+context%0A++const+navigation+%3D+React.useContext%28NavigationContext%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3ESome+component+inside+HomeScreen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+React.useContext%28NavigationContext%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

[

Previous

Navigation object

](https://reactnavigation.org/docs/navigation-object)[

Next

Navigation events

](https://reactnavigation.org/docs/navigation-events)


## Navigator  React Navigation

---
created: 2025-02-08T17:05:59 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Navigator | React Navigation

> ## Excerpt
> A navigator is responsible for managing and rendering a set of screens. It can be created using the createXNavigator functions, e.g. createStackNavigator, createNativeStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator etc.:

---
Version: 7.x

A navigator is responsible for managing and rendering a set of screens. It can be created using the `createXNavigator` functions, e.g. [`createStackNavigator`](https://reactnavigation.org/docs/stack-navigator), [`createNativeStackNavigator`](https://reactnavigation.org/docs/native-stack-navigator), [`createBottomTabNavigator`](https://reactnavigation.org/docs/bottom-tab-navigator), [`createMaterialTopTabNavigator`](https://reactnavigation.org/docs/material-top-tab-navigator), [`createDrawerNavigator`](https://reactnavigation.org/docs/drawer-navigator) etc.:

-   Static
-   Dynamic

```
const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

In addition to the built-in navigators, it's also possible to build your custom navigators or use third-party navigators. See [custom navigators](https://reactnavigation.org/docs/custom-navigators) for more details.

## Configuration[](https://reactnavigation.org/docs/shared-element-transitions/#configuration "Direct link to Configuration")

Different navigators accept different configuration options. You can find the list of options for each navigator in their respective documentation.

There is a set of common configurations that are shared across all navigators:

### ID[](https://reactnavigation.org/docs/shared-element-transitions/#id "Direct link to ID")

Optional unique ID for the navigator. This can be used with [`navigation.getParent`](https://reactnavigation.org/docs/navigation-object#getparent) to refer to this navigator in a child navigator.

-   Static
-   Dynamic

```
const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator      id="RootStack"    >      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

### Initial route name[](https://reactnavigation.org/docs/shared-element-transitions/#initial-route-name "Direct link to Initial route name")

The name of the route to render on the first load of the navigator.

-   Static
-   Dynamic

```
const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator      initialRouteName="Home"    >      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

### Layout[](https://reactnavigation.org/docs/shared-element-transitions/#layout "Direct link to Layout")

A layout is a wrapper around the navigator. It can be useful for augmenting the navigators with additional UI with a wrapper.

The difference from adding a wrapper around the navigator manually is that the code in a layout callback has access to the navigator's state, options etc.:

-   Static
-   Dynamic

```
const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator      layout={({ children, state, descriptors, navigation }) => (        <View style={styles.container}>          <Breadcrumbs            state={state}            descriptors={descriptors}            navigation={navigation}          />          {children}        </View>      )}    >      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

### Screen options[](https://reactnavigation.org/docs/shared-element-transitions/#screen-options "Direct link to Screen options")

Default options to use for all the screens in the navigator. It accepts either an object or a function returning an object:

-   Static
-   Dynamic

```
const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator      screenOptions={{ headerShown: false }}    >      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

See [Options for screens](https://reactnavigation.org/docs/screen-options) for more details and examples.

### Screen listeners[](https://reactnavigation.org/docs/shared-element-transitions/#screen-listeners "Direct link to Screen listeners")

Event listeners can be used to subscribe to various events emitted for the screen. See [`screenListeners` prop on the navigator](https://reactnavigation.org/docs/navigation-events#screenlisteners-prop-on-the-navigator) for more details.

### Screen layout[](https://reactnavigation.org/docs/shared-element-transitions/#screen-layout "Direct link to Screen layout")

A screen layout is a wrapper around each screen in the navigator. It makes it easier to provide things such as a common error boundary and suspense fallback for all screens in the navigator:

-   Static
-   Dynamic

```
const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator      screenLayout={({ children }) => (        <ErrorBoundary>          <React.Suspense            fallback={              <View style={styles.fallback}>                <Text style={styles.text}>Loading…</Text>              </View>            }          >            {children}          </React.Suspense>        </ErrorBoundary>      )}    >      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```


## Options for screens  React Navigation

---
created: 2025-02-08T17:06:24 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Options for screens | React Navigation

> ## Excerpt
> Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options.

---
Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options.

In the [configuring the header bar](https://reactnavigation.org/docs/headers) section of the fundamentals documentation we explain the basics of how this works. Also see the [screen options resolution guide](https://reactnavigation.org/docs/screen-options-resolution) to get an idea of how they work when there are multiple navigators.

See [our docs](https://reactnavigation.org/docs/typescript#annotating-options-and-screenoptions) to learn more about how to use TypeScript with `screenOptions` and `options`.

There are 3 ways of specifying options for screens:

### `options` prop on `Screen`[](https://reactnavigation.org/docs/shared-element-transitions/#options-prop-on-screen "Direct link to options-prop-on-screen")

You can pass a prop named `options` to the `Screen` component to configure a screen, where you can specify an object with different options for that screen:

-   Static
-   Dynamic

```
<Stack.Navigator>  <Stack.Screen    name="Home"    component={HomeScreen}    options={{ title: 'Awesome app' }}  />  <Stack.Screen    name="Profile"    component={ProfileScreen}    options={{ title: 'My profile' }}  /></Stack.Navigator>
```

[Try on **Snack**](https://snack.expo.dev/?name=Screen+title+option&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+Button+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27center%27%2C+alignItems%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27center%27%2C+alignItems%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Home%27%29%7D%3EGo+to+Home%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen%0A++++++++++name%3D%22Home%22%0A++++++++++component%3D%7BHomeScreen%7D%0A++++++++++options%3D%7B%7B+title%3A+%27Awesome+app%27+%7D%7D%0A++++++++%2F%3E%0A++++++++%3CStack.Screen%0A++++++++++name%3D%22Profile%22%0A++++++++++component%3D%7BProfileScreen%7D%0A++++++++++options%3D%7B%7B+title%3A+%27My+profile%27+%7D%7D%0A++++++++%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

You can also pass a function to `options`. The function will receive the [`navigation` object](https://reactnavigation.org/docs/navigation-object) and the [`route` object](https://reactnavigation.org/docs/route-object) for that screen, as well as the [`theme` object](https://reactnavigation.org/docs/themes). This can be useful if you want to perform navigation in your options:

-   Static
-   Dynamic

```
<Stack.Screen  name="Home"  component={HomeScreen}  options={({ navigation }) => ({    title: 'Awesome app',    headerLeft: () => (      <DrawerButton onPress={() => navigation.toggleDrawer()} />    ),  })}/>
```

### `screenOptions` prop on `Group`[](https://reactnavigation.org/docs/shared-element-transitions/#screenoptions-prop-on-group "Direct link to screenoptions-prop-on-group")

You can pass a prop named `screenOptions` to the `Group` component to configure screens inside the group, where you can specify an object with different options. The options specified in `screenOptions` apply to all of the screens in the group.

Example:

-   Static
-   Dynamic

```
<Stack.Navigator>  <Stack.Group    screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}  >    <Stack.Screen name="Home" component={HomeScreen} />    <Stack.Screen name="Profile" component={ProfileScreen} />  </Stack.Group>  <Stack.Group screenOptions={{ presentation: 'modal' }}>    <Stack.Screen name="Settings" component={SettingsScreen} />    <Stack.Screen name="Share" component={ShareScreen} />  </Stack.Group></Stack.Navigator>
```

[Try on **Snack**](https://snack.expo.dev/?name=Screen+options+for+group&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+ScreenWithButton%28screenName%2C+navigateTo%29+%7B%0A++return+function+%28%29+%7B%0A++++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++++return+%28%0A++++++%3CView+style%3D%7B%7B+flex%3A+1%2C+justifyContent%3A+%27center%27%2C+alignItems%3A+%27center%27+%7D%7D%3E%0A++++++++%3CText%3E%7BscreenName%7D+Screen%3C%2FText%3E%0A++++++++%7BnavigateTo+%26%26+%28%0A++++++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28navigateTo%29%7D%3E%0A++++++++++++Go+to+%7BnavigateTo%7D%0A++++++++++%3C%2FButton%3E%0A++++++++%29%7D%0A++++++%3C%2FView%3E%0A++++%29%3B%0A++%7D%3B%0A%7D%0A%0Aconst+HomeScreen+%3D+ScreenWithButton%28%27Home%27%2C+%27Profile%27%29%3B%0Aconst+ProfileScreen+%3D+ScreenWithButton%28%27Profile%27%2C+%27Settings%27%29%3B%0Aconst+SettingsScreen+%3D+ScreenWithButton%28%27Settings%27%2C+%27Share%27%29%3B%0Aconst+ShareScreen+%3D+ScreenWithButton%28%27Share%27%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Group%0A++++++++++screenOptions%3D%7B%7B+headerStyle%3A+%7B+backgroundColor%3A+%27papayawhip%27+%7D+%7D%7D%0A++++++++%3E%0A++++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++++%3C%2FStack.Group%3E%0A++++++++%3CStack.Group+screenOptions%3D%7B%7B+presentation%3A+%27modal%27+%7D%7D%3E%0A++++++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++++++++%3CStack.Screen+name%3D%22Share%22+component%3D%7BShareScreen%7D+%2F%3E%0A++++++++%3C%2FStack.Group%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Similar to `options`, you can also pass a function to `screenOptions`. The function will receive the [`navigation` object](https://reactnavigation.org/docs/navigation-object) and the [`route` object](https://reactnavigation.org/docs/route-object) for each screen. This can be useful if you want to configure options for all the screens in one place based on the route:

-   Static
-   Dynamic

```
<Stack.Navigator>  <Stack.Screen name="Home" component={HomeScreen} />  <Stack.Screen name="Profile" component={ProfileScreen} />  <Stack.Group    screenOptions={({ navigation }) => ({      presentation: 'modal',      headerLeft: () => <CancelButton onPress={navigation.goBack} />,    })}  >    <Stack.Screen name="Settings" component={Settings} />    <Stack.Screen name="Share" component={Share} />  </Stack.Group></Stack.Navigator>
```

### `screenOptions` prop on the navigator[](https://reactnavigation.org/docs/shared-element-transitions/#screenoptions-prop-on-the-navigator "Direct link to screenoptions-prop-on-the-navigator")

You can pass a prop named `screenOptions` to the navigator component, where you can specify an object with different options. The options specified in `screenOptions` apply to all of the screens in the navigator. So this is a good place to specify options that you want to configure for the whole navigator.

Example:

-   Static
-   Dynamic

```
<Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}>  <Stack.Screen name="Home" component={HomeScreen} />  <Stack.Screen name="Profile" component={ProfileScreen} /></Stack.Navigator>
```

Similar to `options`, you can also pass a function to `screenOptions`. The function will receive the [`navigation` object](https://reactnavigation.org/docs/navigation-object) and the [`route` object](https://reactnavigation.org/docs/route-object) for each screen. This can be useful if you want to configure options for all the screens in one place based on the route:

-   Static
-   Dynamic

```
<Tab.Navigator  screenOptions={({ route }) => ({    tabBarIcon: ({ color, size }) => {      const icons = {        Home: 'home',        Profile: 'account',      };      return (        <MaterialCommunityIcons          name={icons[route.name]}          color={color}          size={size}        />      );    },  })}>  <Tab.Screen name="Home" component={EmptyScreen} />  <Tab.Screen name="Profile" component={EmptyScreen} /></Tab.Navigator>
```

[Try on **Snack**](https://snack.expo.dev/?name=Screen+options+for+tab+navigator&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+MaterialCommunityIcons+%7D+from+%27%40expo%2Fvector-icons%27%3B%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Afunction+EmptyScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%0A++++++++screenOptions%3D%7B%28%7B+route+%7D%29+%3D%3E+%28%7B%0A++++++++++tabBarIcon%3A+%28%7B+color%2C+size+%7D%29+%3D%3E+%7B%0A++++++++++++const+icons+%3D+%7B%0A++++++++++++++Home%3A+%27home%27%2C%0A++++++++++++++Profile%3A+%27account%27%2C%0A++++++++++++%7D%3B%0A%0A++++++++++++return+%28%0A++++++++++++++%3CMaterialCommunityIcons%0A++++++++++++++++name%3D%7Bicons%5Broute.name%5D%7D%0A++++++++++++++++color%3D%7Bcolor%7D%0A++++++++++++++++size%3D%7Bsize%7D%0A++++++++++++++%2F%3E%0A++++++++++++%29%3B%0A++++++++++%7D%2C%0A++++++++%7D%29%7D%0A++++++%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BEmptyScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40expo%2Fvector-icons%40*%2C%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### `navigation.setOptions` method[](https://reactnavigation.org/docs/shared-element-transitions/#navigationsetoptions-method "Direct link to navigationsetoptions-method")

The `navigation` object has a `setOptions` method that lets you update the options for a screen from within a component. See [navigation object's docs](https://reactnavigation.org/docs/navigation-object#setoptions) for more details.

```
<Button onPress={() => navigation.setOptions({ title: 'Updated!' })}>  Update options</Button>
```


## Route object reference  React Navigation

---
created: 2025-02-08T17:06:30 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Route object reference | React Navigation

> ## Excerpt
> Each screen component in your app is provided with the route object as a prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives).

---
Each `screen` component in your app is provided with the `route` object as a prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives).

-   `route`
    -   `key` - Unique key of the screen. Created automatically or added while navigating to this screen.
    -   `name` - Name of the screen. Defined in navigator component hierarchy.
    -   `path` - An optional string containing the path that opened the screen, exists when the screen was opened via a deep link.
    -   `params` - An optional object containing params which is defined while navigating e.g. `navigate('Twitter', { user: 'Dan Abramov' })`.

-   Static
-   Dynamic

```
function ProfileScreen({ route }) {  return (    <View>      <Text>This is the profile screen of the app</Text>      <Text>{route.name}</Text>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Route+prop&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++return+%28%0A++++%3CView%3E%0A++++++%3CText%3EThis+is+the+profile+screen+of+the+app%3C%2FText%3E%0A++++++%3CText%3E%7Broute.name%7D%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fnative-stack%407.1.14%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)


## Screen  React Navigation

---
created: 2025-02-08T17:06:16 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Screen | React Navigation

> ## Excerpt
> A screen represents routes in a navigator. A screen's configuration contains the component for the route, options, event listeners, etc.

---
A screen represents routes in a navigator. A screen's configuration contains the component for the route, options, event listeners, etc.

-   Static
-   Dynamic

A `Screen` component is returned from a `createXNavigator` function. After creating the navigator, it can be used as children of the `Navigator` component:

```
const Stack = createNativeStackNavigator();function MyStack() {  return (    <Stack.Navigator>      <Stack.Screen name="Home" component={HomeScreen} />      <Stack.Screen name="Profile" component={ProfileScreen} />    </Stack.Navigator>  );}
```

You need to provide at least a name and a component to render for each screen.

## Configuration[](https://reactnavigation.org/docs/shared-element-transitions/#configuration "Direct link to Configuration")

### Name[](https://reactnavigation.org/docs/shared-element-transitions/#name "Direct link to Name")

The name to use for the screen.

-   Static
-   Dynamic

It can be passed in the `name` prop to the `Screen` component:

```
<Stack.Screen  name="Profile"  component={ProfileScreen}/>
```

This name is used to navigate to the screen:

```
navigation.navigate('Profile');
```

It is also used for the `name` property in the [`route`](https://reactnavigation.org/docs/route-object).

While it is supported, we recommend avoiding spaces or special characters in screen names and keeping them simple.

### Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

Options are used to configure how the screen gets presented in the navigator. It accepts either an object or a function returning an object:

-   Static
-   Dynamic

```
<Stack.Screen  name="Profile"  component={ProfileScreen}  options={{    title: 'Awesome app',  }}/>
```

When you pass a function, it'll receive the [`route`](https://reactnavigation.org/docs/route-object), [`navigation`](https://reactnavigation.org/docs/navigation-object) and [`theme`](https://reactnavigation.org/docs/themes) as arguments:

-   Static
-   Dynamic

```
<Stack.Screen  name="Profile"  component={ProfileScreen}  options={({ route, navigation }) => ({    title: route.params.userId,  })}/>
```

See [Options for screens](https://reactnavigation.org/docs/screen-options) for more details and examples.

### Initial params[](https://reactnavigation.org/docs/shared-element-transitions/#initial-params "Direct link to Initial params")

Initial params are used as the default params for the screen. If a screen is used as `initialRouteName`, it'll contain the params from `initialParams`. If you navigate to a new screen, the params passed are shallow merged with the initial params.

-   Static
-   Dynamic

```
<Stack.Screen  name="Details"  component={DetailsScreen}  initialParams={{ itemId: 42 }}/>
```

### ID[](https://reactnavigation.org/docs/shared-element-transitions/#id "Direct link to ID")

A screen can have an ID to identify it uniquely. This is useful when you want to ensure that the screen with the same ID doesn't appear multiple times in the stack.

This can be done by specifying the `getId` callback. It receives an object with the route params:

-   Static
-   Dynamic

```
<Stack.Screen  name="Profile"  component={ProfileScreen}  getId={({ params }) => params.userId}/>
```

By default, `navigate('ScreenName', params)` updates the current screen if the screen name matches, otherwise adds a new screen in a stack navigator. So if you're on `ScreenName` and navigate to `ScreenName` again, it won't add a new screen even if the params are different - it'll update the current screen with the new params instead:

```
// Let's say you're on `Home` screen// Then you navigate to `Profile` screen with `userId: 1`navigation.navigate('Profile', { userId: 1 });// Now the stack will have: `Home` -> `Profile` with `userId: 1`// Then you navigate to `Profile` screen again with `userId: 2`navigation.navigate('Profile', { userId: 2 });// The stack will now have: `Home` -> `Profile` with `userId: 2`
```

If you specify `getId` and it doesn't return `undefined`, the screen is identified by both the screen name and the returned ID. That means that if you're on `ScreenName` and navigate to `ScreenName` again with different params - and return a different ID from the `getId` callback, it'll add a new screen to the stack:

```
// Let's say you're on `Home` screen// Then you navigate to `Profile` screen with `userId: 1`navigation.navigate('Profile', { userId: 1 });// Now the stack will have: `Home` -> `Profile` with `userId: 1`// Then you navigate to `Profile` screen again with `userId: 2`navigation.navigate('Profile', { userId: 2 });// The stack will now have: `Home` -> `Profile` with `userId: 1` -> `Profile` with `userId: 2`
```

The `getId` callback can also be used to ensure that the screen with the same ID doesn't appear multiple times in the stack:

```
// Let's say you have a stack with the screens: `Home` -> `Profile` with `userId: 1` -> `Settings`// Then you navigate to `Profile` screen with `userId: 1` againnavigation.navigate('Profile', { userId: 1 });// Now the stack will have: `Home` -> `Profile` with `userId: 1`
```

In the above examples, `params.userId` is used as an ID, subsequent navigation to the screen with the same `userId` will navigate to the existing screen instead of adding a new one to the stack. If the navigation was with a different `userId`, then it'll add a new screen.

If `getId` is specified in a tab or drawer navigator, the screen will remount if the ID changes.

### Component[](https://reactnavigation.org/docs/shared-element-transitions/#component "Direct link to Component")

Each screen must specify a component to render for that route.

-   Static
-   Dynamic

#### `component`[](https://reactnavigation.org/docs/shared-element-transitions/#component-1 "Direct link to component-1")

It can be passed in the `component` prop to the `Screen` component:

```
<Stack.Screen  name="Profile"  component={ProfileScreen}/>
```

#### `getComponent`[](https://reactnavigation.org/docs/shared-element-transitions/#getcomponent "Direct link to getcomponent")

It's also possible to pass a function in the `getComponent` prop to lazily evaluate the component:

```
<Stack.Screen  name="Profile"  getComponent={() => require('./ProfileScreen').default}/>
```

You can use this approach instead of the `component` prop if you want the `ProfileScreen` module to be lazily evaluated when needed. This is especially useful when using [ram bundles](https://reactnative.dev/docs/ram-bundles-inline-requires) to improve initial load.

#### `children`[](https://reactnavigation.org/docs/shared-element-transitions/#children "Direct link to children")

Another way is to pass a render callback to return React Element to use for the screen:

```
<Stack.Screen name="Profile">  {(props) => <ProfileScreen {...props} />}</Stack.Screen>
```

You can use this approach instead of the `component` prop if you need to pass additional props. Though we recommend using [React context](https://react.dev/reference/react/useContext) for passing data instead.

warning

By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use [`React.memo`](https://react.dev/reference/react/memo) or [`React.PureComponent`](https://react.dev/reference/react/PureComponent) for your screen components to avoid performance issues.

### Layout[](https://reactnavigation.org/docs/shared-element-transitions/#layout "Direct link to Layout")

A layout is a wrapper around the screen. It makes it easier to provide things such as an error boundary and suspense fallback for a screen:

-   Static
-   Dynamic

```
<Stack.Screen  name="MyScreen"  component={MyScreenComponent}  layout={({ children }) => (    <ErrorBoundary>      <React.Suspense        fallback={          <View style={styles.fallback}>            <Text style={styles.text}>Loading…</Text>          </View>        }      >        {children}      </React.Suspense>    </ErrorBoundary>  )}/>
```

To specify a layout for all multiple screens, you can use `screenLayout` in a [group](https://reactnavigation.org/docs/group#screen-layout) or [navigator](https://reactnavigation.org/docs/navigator#screen-layout).

### Navigation key[](https://reactnavigation.org/docs/shared-element-transitions/#navigation-key "Direct link to Navigation key")

A navigation key is an optional key for this screen. This doesn't need to be unique. If the key changes, existing screens with this name will be removed (if used in a stack navigator) or reset (if used in a tab or drawer navigator).

This can be useful when we have some screens that we want to be removed or reset when the condition changes:

-   Static
-   Dynamic

```
<Stack.Screen  navigationKey={isSignedIn ? 'user' : 'guest'}  name="Profile"  component={ProfileScreen}/>
```

### Event listeners[](https://reactnavigation.org/docs/shared-element-transitions/#event-listeners "Direct link to Event listeners")

Event listeners can be used to subscribe to various events emitted for the screen. See [`listeners` prop on `Screen`](https://reactnavigation.org/docs/navigation-events#listeners-prop-on-screen) for more details.


## ServerContainer  React Navigation

---
created: 2025-02-08T17:05:53 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# ServerContainer | React Navigation

> ## Excerpt
> The ServerContainer component provides utilities to render your app on server with the correct navigation state.

---
The `ServerContainer` component provides utilities to render your app on server with the correct [navigation state](https://reactnavigation.org/docs/navigation-state).

Example:

```
// Ref which will be populated with the screen optionsconst ref = React.createRef();// Location object containing the `pathname` and `search` fields of the current URLconst location = { pathname: '/profile', search: '?user=jane' };// Get rendered HTMLconst html = ReactDOMServer.renderToString(  <ServerContainer ref={ref} location={location}>    <App />  </ServerContainer>);// Then you can access the options for the current screen in the refconst options = ref.current.getCurrentOptions(); // { title: 'My Profile' }
```

The `ServerContainer` component should wrap your entire app during server rendering. Note that you still need a `NavigationContainer` in your app, `ServerContainer` doesn't replace it.'

See the [`server rendering guide`](https://reactnavigation.org/docs/server-rendering) for a detailed guide and examples.

## Ref[](https://reactnavigation.org/docs/shared-element-transitions/#ref "Direct link to Ref")

If you attach a `ref` to the container, you can get the options for the current screen after rendering the app. The `ref` will contain a method called `getCurrentOptions` which will return an object with options for the focused screen in the navigation tree:

```
const options = ref.current.getCurrentOptions();
```

Then you can access the options for the screen from this object and put it in the HTML:

```
<title>{options.title}</title><meta name="description" content={options.description} />
```

Note that the `options` object can be undefined if you are not rendering a navigator on the initial render.

## Props[](https://reactnavigation.org/docs/shared-element-transitions/#props "Direct link to Props")

### `location`[](https://reactnavigation.org/docs/shared-element-transitions/#location "Direct link to location")

Location object containing the location to use for server rendered output. You can pass the `pathname` and `search` properties matching the `location` object in the browsers:

```
<ServerContainer location={{ pathname: '/profile', search: '' }}>  <App /></ServerContainer>
```

Normally, you'd construct this object based on the incoming request.

Basic example with Koa (don't use as is in production):

```
app.use(async (ctx) => {  const html = ReactDOMServer.renderToString(    <ServerContainer location={{ pathname: ctx.path, search: ctx.search }}>      <App />    </ServerContainer>  );  ctx.body = html;});
```


## Static configuration  React Navigation

---
created: 2025-02-08T17:05:20 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Static configuration | React Navigation

> ## Excerpt
> The bulk of the static configuration is done using the createXNavigator functions, e.g. createNativeStackNavigator, createBottomTabNavigator, createDrawerNavigator etc. We'll refer to these functions as createXNavigator in the rest of this guide.

---
The bulk of the static configuration is done using the `createXNavigator` functions, e.g. [`createNativeStackNavigator`](https://reactnavigation.org/docs/native-stack-navigator), [`createBottomTabNavigator`](https://reactnavigation.org/docs/bottom-tab-navigator), [`createDrawerNavigator`](https://reactnavigation.org/docs/drawer-navigator) etc. We'll refer to these functions as `createXNavigator` in the rest of this guide.

## `createXNavigator`[](https://reactnavigation.org/docs/shared-element-transitions/#createxnavigator "Direct link to createxnavigator")

The `createXNavigator` functions take one argument, which is an object with the following properties:

-   Same props as the navigator component, e.g. `id`, `initialRouteName`, `screenOptions` etc. See [Navigator](https://reactnavigation.org/docs/navigator) as well as the docs for each navigator for more details on the props they accept.
-   `screens` - an object containing configuration for each screen in the navigator.
-   `groups` - an optional object containing groups of screens (equivalent to [`Group`](https://reactnavigation.org/docs/group) in the dynamic API).

For example:

```
const RootStack = createNativeStackNavigator({  initialRouteName: 'Home',  screenOptions: {    headerTintColor: 'white',    headerStyle: {      backgroundColor: 'tomato',    },  },  screens: {    Home: HomeScreen,    Profile: ProfileScreen,  },});
```

### `screens`[](https://reactnavigation.org/docs/shared-element-transitions/#screens "Direct link to screens")

The `screens` object can contain key value pairs where the key is the name of the screen and the value can be several things:

-   A component to render:
    
    ```
    const RootStack = createNativeStackNavigator({  screens: {    Home: HomeScreen,  },});
    ```
    
-   A navigator configured using `createXNavigator` for nested navigators:
    
    ```
    const HomeTabs = createBottomTabNavigator({  screens: {    Groups: GroupsScreen,    Chats: ChatsScreen,  },});const RootStack = createNativeStackNavigator({  screens: {    Home: HomeTabs,  },});
    ```
    
-   An object containing configuration for the screen. This configuration contains the various properties:
    
    ```
    const RootStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      linking: {        path: 'home',      },    },  },});
    ```
    
    See [Screen configuration](https://reactnavigation.org/docs/shared-element-transitions/#screen-configuration) for more details.
    

### `groups`[](https://reactnavigation.org/docs/shared-element-transitions/#groups "Direct link to groups")

The `groups` object can contain key-value pairs where the key is the name of the group and the value is the group configuration.

The configuration object for a screen accepts the [properties described in the Group page](https://reactnavigation.org/docs/group). In addition, the following properties are available when using static configuration:

-   `if` - this can be used to conditionally render the group and works the same as the [`if` property in the screen configuration](https://reactnavigation.org/docs/shared-element-transitions/#if).
-   `screens` - an object containing configuration for each screen in the group. The configuration is the same as the [`screens` object in the navigator configuration](https://reactnavigation.org/docs/shared-element-transitions/#screens).

Example:

```
const RootStack = createNativeStackNavigator({  screens: {    Home: HomeScreen,    Profile: ProfileScreen,  },  groups: {    Guest: {      if: useIsGuest,      screenOptions: {        headerShown: false,      },      screens: {        // ...      },    },    User: {      if: useIsUser,      screens: {        // ...      },    },  },});
```

### Screen configuration[](https://reactnavigation.org/docs/shared-element-transitions/#screen-configuration "Direct link to Screen configuration")

The configuration object for a screen accepts the [properties described in the Screen page](https://reactnavigation.org/docs/screen). In addition, the following properties are available when using static configuration:

#### `linking`[](https://reactnavigation.org/docs/shared-element-transitions/#linking "Direct link to linking")

[Linking configuration](https://reactnavigation.org/docs/configuring-links) for the screen. It can be either a string for a path or an object with the linking configuration:

```
const RootStack = createNativeStackNavigator({  screens: {    Profile: {      screen: ProfileScreen,      linking: {        path: 'u/:userId',        parse: {          userId: (id) => id.replace(/^@/, ''),        },        stringify: {          userId: (id) => `@${id}`,        },      },    },    Chat: {      screen: ChatScreen,      linking: 'chat/:chatId',    },  },});
```

The `linking` object supports the same configuration options described in [Configuring links](https://reactnavigation.org/docs/configuring-links) such as `parse`, `stringify` and `exact`.

To make deep links work on native apps, you also need to [configure your app](https://reactnavigation.org/docs/deep-linking) and pass `prefixes` to the navigation component returned by [`createStaticNavigation`](https://reactnavigation.org/docs/static-configuration#createstaticnavigation):

```
const Navigation = createStaticNavigation(RootStack);const linking = {  prefixes: ['https://example.com', 'example://'],};function App() {  return <Navigation linking={linking} />;}
```

#### `if`[](https://reactnavigation.org/docs/shared-element-transitions/#if "Direct link to if")

Callback to determine whether the screen should be rendered or not. It doesn't receive any arguments. This can be useful for conditional rendering of screens, e.g. - if you want to render a different screen for logged in users.

You can use a custom hook to use custom logic to determine the return value:

```
const useIsLoggedIn = () => {  const { isLoggedIn } = React.useContext(AuthContext);  return isLoggedIn;};const RootStack = createNativeStackNavigator({  screens: {    Home: {      screen: HomeScreen,      if: useIsLoggedIn,    },  },});
```

The above example will only render the `HomeScreen` if the user is logged in.

For more details, see [Authentication flow](https://reactnavigation.org/docs/auth-flow?config=static).

## `createStaticNavigation`[](https://reactnavigation.org/docs/shared-element-transitions/#createstaticnavigation "Direct link to createstaticnavigation")

The `createStaticNavigation` function takes the static config returned by `createXNavigator` functions and returns a React component to render:

```
const Navigation = createStaticNavigation(RootStack);function App() {  return <Navigation />;}
```

This component is a wrapper around the `NavigationContainer` component and accepts the [same props and ref as the `NavigationContainer`](https://reactnavigation.org/docs/navigation-container) component. It is intended to be rendered once at the root of your app similar to how you'd use `NavigationContainer` component.

### Differences in the `linking` prop[](https://reactnavigation.org/docs/shared-element-transitions/#differences-in-the-linking-prop "Direct link to differences-in-the-linking-prop")

Similar to `NavigationContainer`, the component returned by `createStaticNavigation` also accepts a [`linking`](https://reactnavigation.org/docs/navigation-container#linking) prop. However, there are some key differences:

1.  It's not possible to pass a full `config` object to the `linking` prop. It can only accept [`path`](https://reactnavigation.org/docs/configuring-links#apps-under-subpaths) and an [`initialRouteName` for the root navigator](https://reactnavigation.org/docs/configuring-links#rendering-an-initial-route).
    
2.  The linking config is collected from the [`linking`](https://reactnavigation.org/docs/shared-element-transitions/#linking) properties specified in the screen configuration.
    
3.  It's possible to pass `enabled: 'auto'` to automatically generate paths for all leaf screens:
    
    ```
    const Navigation = createStaticNavigation(RootStack);const linking = {  enabled: 'auto',  prefixes: ['https://example.com', 'example://'],};function App() {  return <Navigation linking={linking} />;}
    ```
    
    See [How does automatic path generation work](https://reactnavigation.org/docs/configuring-links#how-does-automatic-path-generation-work) for more details.
    

## `createComponentForStaticNavigation`[](https://reactnavigation.org/docs/shared-element-transitions/#createcomponentforstaticnavigation "Direct link to createcomponentforstaticnavigation")

The `createComponentForStaticNavigation` function takes the static config returned by `createXNavigator` functions and returns a React component to render. The second argument is a name for the component that'd be used in React DevTools:

```
const RootStackNavigator = createComponentForStaticNavigation(  RootStack,  'RootNavigator');
```

The returned component doesn't take any props. All of the configuration is inferred from the static config. It's essentially the same as defining a component using the dynamic API.

This looks similar to `createStaticNavigation` however they are very different. When using static configuration, you'd never use this function directly. The only time you'd use this is if you're migrating away from static configuration and want to reuse existing code you wrote instead of rewriting it to the dynamic API. See [Combining static and dynamic APIs](https://reactnavigation.org/docs/combine-static-with-dynamic) for more details.

## `createPathConfigForStaticNavigation`[](https://reactnavigation.org/docs/shared-element-transitions/#createpathconfigforstaticnavigation "Direct link to createpathconfigforstaticnavigation")

The `createPathConfigForStaticNavigation` function takes the static config returned by `createXNavigator` functions and returns a path config object that can be used within the linking config.

```
const config = {  screens: {    Home: {      screens: createPathConfigForStaticNavigation(HomeTabs),    },  },};
```

Similar to `createComponentForStaticNavigation`, this is intended to be used when migrating away from static configuration. See [Combining static and dynamic APIs](https://reactnavigation.org/docs/combine-static-with-dynamic) for more details.


# 05 API reference/Actions

## CommonActions reference  React Navigation

---
created: 2025-02-08T17:09:15 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# CommonActions reference | React Navigation

> ## Excerpt
> A navigation action is an object containing at least a type property. Internally, the action can be handled by routers with the getStateForAction method to return a new state from an existing navigation state.

---
A navigation action is an object containing at least a `type` property. Internally, the action can be handled by [routers](https://reactnavigation.org/docs/custom-routers) with the `getStateForAction` method to return a new state from an existing [navigation state](https://reactnavigation.org/docs/navigation-state).

Each navigation actions can contain at least the following properties:

-   `type` (required) - A string that represents the name of the action.
-   `payload` (options) - An object containing additional information about the action. For example, it will contain `name` and `params` for `navigate`.
-   `source` (optional) - The key of the route which should be considered as the source of the action. This is used for some actions to determine which route to apply the action on. By default, `navigation.dispatch` adds the key of the route that dispatched the action.
-   `target` (optional) - The key of the [navigation state](https://reactnavigation.org/docs/navigation-state) the action should be applied on.

It's important to highlight that dispatching a navigation action doesn't throw any error when the action is unhandled (similar to when you dispatch an action that isn't handled by a reducer in redux and nothing happens).

## Common actions[](https://reactnavigation.org/docs/shared-element-transitions/#common-actions "Direct link to Common actions")

The library exports several action creators under the `CommonActions` namespace. You should use these action creators instead of writing action objects manually.

### navigate[](https://reactnavigation.org/docs/shared-element-transitions/#navigate "Direct link to navigate")

The `navigate` action allows to navigate to a specific route. It takes the following arguments:

-   `name` - _string_ - A destination name of the screen in the current or a parent navigator.
-   `params` - _object_ - Params to use for the destination route.
-   `merge` - _boolean_ - Whether params should be merged with the existing route params, or replace them (when navigating to an existing screen). Defaults to `false`.

-   Static
-   Dynamic

```
navigation.dispatch(  CommonActions.navigate('Profile', { user: 'jane' }));
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+actions+navigate&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++CommonActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.navigate%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28CommonActions.goBack%28%29%29%7D%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28CommonActions.navigate%28%27Home%27%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Home%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.reset%28%7B%0A++++++++++++++index%3A+1%2C%0A++++++++++++++routes%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++name%3A+%27Profile%27%2C%0A++++++++++++++++++params%3A+%7B+user%3A+%27jane%27%2C+key%3A+route.params.key+%7D%2C%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B+name%3A+%27Home%27+%7D%2C%0A++++++++++++++%5D%2C%0A++++++++++++%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Reset+navigation+state%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.setParams%28%7B+user%3A+%27Wojtek%27+%7D%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Change+user+param%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.goBack%28%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++++target%3A+route%3F.params%3F.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

In a stack navigator ([stack](https://reactnavigation.org/docs/stack-navigator) or [native stack](https://reactnavigation.org/docs/native-stack-navigator)), calling `navigate` with a screen name will have the following behavior:

-   If you're already on a screen with the same name, it will update its params and not push a new screen.
-   If you're on a different screen, it will push the new screen onto the stack.
-   If the [`getId`](https://reactnavigation.org/docs/screen#id) prop is specified, and another screen in the stack has the same ID, it will navigate to that screen and update its params instead.

Advanced usage

### reset[](https://reactnavigation.org/docs/shared-element-transitions/#reset "Direct link to reset")

The `reset` action allows to reset the [navigation state](https://reactnavigation.org/docs/navigation-state) to the given state. It takes the following arguments:

-   `state` - _object_ - The new [navigation state](https://reactnavigation.org/docs/navigation-state) object to use.

-   Static
-   Dynamic

```
navigation.dispatch(  CommonActions.reset({    index: 1,    routes: [      {        name: 'Profile',        params: { user: 'jane', key: route.params.key },      },      { name: 'Home' },    ],  }));
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+actions+reset&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++CommonActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.navigate%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28CommonActions.goBack%28%29%29%7D%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.navigate%28%7B%0A++++++++++++++name%3A+%27Home%27%2C%0A++++++++++++%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Home%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.reset%28%7B%0A++++++++++++++index%3A+1%2C%0A++++++++++++++routes%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++name%3A+%27Profile%27%2C%0A++++++++++++++++++params%3A+%7B+user%3A+%27jane%27%2C+key%3A+route.params.key+%7D%2C%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B+name%3A+%27Home%27+%7D%2C%0A++++++++++++++%5D%2C%0A++++++++++++%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Reset+navigation+state%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.setParams%28%7B+user%3A+%27Wojtek%27+%7D%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Change+user+param%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.goBack%28%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++++target%3A+route%3F.params%3F.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

The state object specified in `reset` replaces the existing [navigation state](https://reactnavigation.org/docs/navigation-state) with the new one. This means that if you provide new route objects without a key, or route objects with a different key, it'll remove the existing screens for those routes and add new screens.

If you want to preserve the existing screens but only want to modify the state, you can pass a function to `dispatch` where you can get the existing state. Then you can change it as you like (make sure not to mutate the existing state, but create new state object for your changes). and return a `reset` action with the desired state:

```
import { CommonActions } from '@react-navigation/native';navigation.dispatch((state) => {  // Remove all the screens after `Profile`  const index = state.routes.findIndex((r) => r.name === 'Profile');  const routes = state.routes.slice(0, index + 1);  return CommonActions.reset({    ...state,    routes,    index: routes.length - 1,  });});
```

warning

Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the [navigation state](https://reactnavigation.org/docs/navigation-state) state object except `index` and `routes`, unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.

#### Rewriting the history with `reset`[](https://reactnavigation.org/docs/shared-element-transitions/#rewriting-the-history-with-reset "Direct link to rewriting-the-history-with-reset")

Since the `reset` action can update the navigation state with a new state object, it can be used to rewrite the navigation history. However, rewriting the history to alter the back stack is not recommended in most cases:

-   It can lead to a confusing user experience, as users expect to be able to go back to the screen they were on before.
-   When supporting the Web platform, the browser's history will still reflect the old navigation state, so users will see the old screen if they use the browser's back button - resulting in 2 different experiences depending on which back button the user presses.

So if you have such a use case, consider a different approach - e.g. updating the history once the user navigates back to the screen that has changed.

### goBack[](https://reactnavigation.org/docs/shared-element-transitions/#goback "Direct link to goBack")

The `goBack` action creator allows to go back to the previous route in history. It doesn't take any arguments.

-   Static
-   Dynamic

If you want to go back from a particular route, you can add a `source` property referring to the route key and a `target` property referring to the `key` of the navigator which contains the route:

-   Static
-   Dynamic

```
navigation.dispatch({  ...CommonActions.goBack(),  source: route.key,  target: route?.params?.key,});
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+actions+goBack&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++CommonActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.navigate%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28CommonActions.goBack%28%29%29%7D%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28CommonActions.navigate%28%27Home%27%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Home%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.reset%28%7B%0A++++++++++++++index%3A+1%2C%0A++++++++++++++routes%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++name%3A+%27Profile%27%2C%0A++++++++++++++++++params%3A+%7B+user%3A+%27jane%27%2C+key%3A+route.params.key+%7D%2C%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B+name%3A+%27Home%27+%7D%2C%0A++++++++++++++%5D%2C%0A++++++++++++%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Reset+navigation+state%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.setParams%28%7B+user%3A+%27Wojtek%27+%7D%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Change+user+param%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.goBack%28%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++++target%3A+route%3F.params%3F.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

By default, the key of the route that dispatched the action is passed as the `source` property and the `target` property is `undefined`.

### preload[](https://reactnavigation.org/docs/shared-element-transitions/#preload "Direct link to preload")

The `preload` action allows preloading a screen in the background before navigating to it. It takes the following arguments:

-   `name` - _string_ - A destination name of the screen in the current or a parent navigator.
-   `params` - _object_ - Params to use for the destination route.

-   Static
-   Dynamic

```
navigation.dispatch(  CommonActions.preload('Profile', { user: 'jane' }));
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+actions+preload&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++CommonActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.preload%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Preload+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.navigate%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%5BstartTime%5D+%3D+React.useState%28Date.now%28%29%29%3B%0A++const+%5BendTime%2C+setEndTime%5D+%3D+React.useState%28null%29%3B%0A%0A++React.useEffect%28%28%29+%3D%3E+%7B%0A++++const+unsubscribe+%3D+navigation.addListener%28%27focus%27%2C+%28%29+%3D%3E+%7B%0A++++++setEndTime%28Date.now%28%29%29%3B%0A++++%7D%29%3B%0A%0A++++return+%28%29+%3D%3E+%7B%0A++++++unsubscribe%28%29%3B%0A++++%7D%3B%0A++%7D%2C+%5Bnavigation%5D%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CText%3EPreloaded+for%3A+%7BendTime+%3F+endTime+-+startTime+%3A+%27N%2FA%27%7Dms%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Preloading a screen means that the screen will be rendered in the background. All the components in the screen will be mounted and the `useEffect` hooks will be called. This can be useful when you want to improve the perceived performance by hiding the delay in mounting heavy components or loading data.

Depending on the navigator, `preload` may work differently:

-   In a stack navigator ([stack](https://reactnavigation.org/docs/stack-navigator), [native stack](https://reactnavigation.org/docs/native-stack-navigator)), the screen will be rendered off-screen and animated in when you navigate to it. If [`getId`](https://reactnavigation.org/docs/screen#id) is specified, it'll be used for the navigation to identify the preloaded screen.
-   In a tab or drawer navigator ([bottom tabs](https://reactnavigation.org/docs/bottom-tab-navigator), [material top tabs](https://reactnavigation.org/docs/material-top-tab-navigator), [drawer](https://reactnavigation.org/docs/drawer-navigator), etc.), the existing screen will be rendered as if `lazy` was set to `false`. Calling `preload` on a screen that is already rendered will not have any effect.

When a screen is preloaded in a stack navigator, it will have a few limitations:

-   It can't dispatch navigation actions (e.g. `navigate`, `goBack`, etc.).
-   It can't update options with `navigation.setOptions`.
-   It can't listen to events from the navigator (e.g. `focus`, `tabPress`, etc.).

The `navigation` object will be updated once you navigate to the screen. So if you have an event listener in a `useEffect` hook, and have a dependency on `navigation`, it will add any listeners when the screen is navigated to:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('tabPress', () => {    // do something  });  return () => {    unsubscribe();  };}, [navigation]);
```

Similarly, for dispatching actions or updating options, you can check if the screen is focused before doing so:

```
if (navigation.isFocused()) {  navigation.setOptions({ title: 'Updated title' });}
```

### setParams[](https://reactnavigation.org/docs/shared-element-transitions/#setparams "Direct link to setParams")

The `setParams` action allows to update params for a certain route. It takes the following arguments:

-   `params` - _object_ - required - New params to be merged into existing route params.

-   Static
-   Dynamic

```
navigation.dispatch({  ...CommonActions.setParams({ user: 'Wojtek' }),
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+actions+setParams&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++CommonActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.navigate%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28CommonActions.goBack%28%29%29%7D%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28CommonActions.navigate%28%27Home%27%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Home%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.reset%28%7B%0A++++++++++++++index%3A+1%2C%0A++++++++++++++routes%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++name%3A+%27Profile%27%2C%0A++++++++++++++++++params%3A+%7B+user%3A+%27jane%27%2C+key%3A+route.params.key+%7D%2C%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B+name%3A+%27Home%27+%7D%2C%0A++++++++++++++%5D%2C%0A++++++++++++%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Reset+navigation+state%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.setParams%28%7B+user%3A+%27Wojtek%27+%7D%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Change+user+param%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.goBack%28%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++++target%3A+route%3F.params%3F.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you want to set params for a particular route, you can add a `source` property referring to the route key:

-   Static
-   Dynamic

```
navigation.dispatch({  ...CommonActions.setParams({ user: 'Wojtek' }),  source: route.key,});
```

[Try on **Snack**](https://snack.expo.dev/?name=Common+actions+setParams&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++CommonActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.navigate%28%27Profile%27%2C+%7B+user%3A+%27jane%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Profile%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28CommonActions.goBack%28%29%29%7D%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A%0A++return+%28%0A++++%3CView%0A++++++style%3D%7B%7B%0A++++++++flex%3A+1%2C%0A++++++++gap%3A+8%2C%0A++++++++alignItems%3A+%27center%27%2C%0A++++++++justifyContent%3A+%27center%27%2C%0A++++++%7D%7D%0A++++%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28CommonActions.navigate%28%27Home%27%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Navigate+to+Home%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++CommonActions.reset%28%7B%0A++++++++++++++index%3A+1%2C%0A++++++++++++++routes%3A+%5B%0A++++++++++++++++%7B%0A++++++++++++++++++name%3A+%27Profile%27%2C%0A++++++++++++++++++params%3A+%7B+user%3A+%27jane%27%2C+key%3A+route.params.key+%7D%2C%0A++++++++++++++++%7D%2C%0A++++++++++++++++%7B+name%3A+%27Home%27+%7D%2C%0A++++++++++++++%5D%2C%0A++++++++++++%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Reset+navigation+state%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.setParams%28%7B+user%3A+%27Wojtek%27+%7D%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Change+user+param%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%7B%0A++++++++++++...CommonActions.goBack%28%29%2C%0A++++++++++++source%3A+route.key%2C%0A++++++++++++target%3A+route%3F.params%3F.key%2C%0A++++++++++%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+back%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If the `source` property is explicitly set to `undefined`, it'll set the params for the focused route.


## DrawerActions reference  React Navigation

---
created: 2025-02-08T17:09:33 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# DrawerActions reference | React Navigation

> ## Excerpt
> DrawerActions is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in CommonActions.

---
Version: 7.x

`DrawerActions` is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in [CommonActions](https://reactnavigation.org/docs/navigation-actions).

The following actions are supported:

### openDrawer[](https://reactnavigation.org/docs/shared-element-transitions/#opendrawer "Direct link to openDrawer")

The `openDrawer` action can be used to open the drawer pane.

-   Static
-   Dynamic

```
navigation.dispatch(DrawerActions.openDrawer());
```

[Try on **Snack**](https://snack.expo.dev/?name=Drawer+Actions+-+openDrawer&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++DrawerActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B%0A++createDrawerNavigator%2C%0A++DrawerContentScrollView%2C%0A++DrawerItemList%2C%0A++DrawerItem%2C%0A%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+jumpToAction+%3D+DrawerActions.jumpTo%28%27Profile%27%2C+%7B+user%3A+%27Satya%27+%7D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28DrawerActions.openDrawer%28%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Open+Drawer%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28DrawerActions.toggleDrawer%28%29%29%7D%3E%0A++++++++Toggle+Drawer%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28jumpToAction%29%7D%3E%0A++++++++Jump+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute%3F.params%3F.user+%3F+route.params.user+%3A+%27Noone%27%7D%27s+profile%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+CustomDrawerContent%28props%29+%7B%0A++return+%28%0A++++%3CDrawerContentScrollView+%7B...props%7D%3E%0A++++++%3CDrawerItemList+%7B...props%7D+%2F%3E%0A++++++%3CDrawerItem%0A++++++++label%3D%22Close+drawer%22%0A++++++++onPress%3D%7B%28%29+%3D%3E+props.navigation.dispatch%28DrawerActions.closeDrawer%28%29%29%7D%0A++++++%2F%3E%0A++++++%3CDrawerItem%0A++++++++label%3D%22Toggle+drawer%22%0A++++++++onPress%3D%7B%28%29+%3D%3E+props.navigation.dispatch%28DrawerActions.toggleDrawer%28%29%29%7D%0A++++++%2F%3E%0A++++%3C%2FDrawerContentScrollView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CDrawer.Navigator%0A++++++++drawerContent%3D%7B%28props%29+%3D%3E+%3CCustomDrawerContent+%7B...props%7D+%2F%3E%7D%0A++++++%3E%0A++++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CDrawer.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FDrawer.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### closeDrawer[](https://reactnavigation.org/docs/shared-element-transitions/#closedrawer "Direct link to closeDrawer")

The `closeDrawer` action can be used to close the drawer pane.

-   Static
-   Dynamic

```
navigation.dispatch(DrawerActions.closeDrawer());
```

[Try on **Snack**](https://snack.expo.dev/?name=Drawer+Actions+-+closeDrawer&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++DrawerActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B%0A++createDrawerNavigator%2C%0A++DrawerContentScrollView%2C%0A++DrawerItemList%2C%0A++DrawerItem%2C%0A%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+jumpToAction+%3D+DrawerActions.jumpTo%28%27Profile%27%2C+%7B+user%3A+%27Satya%27+%7D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28DrawerActions.openDrawer%28%29%29%7D%3E%0A++++++++Open+Drawer%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28DrawerActions.toggleDrawer%28%29%29%7D%3E%0A++++++++Toggle+Drawer%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28jumpToAction%29%7D%3E%0A++++++++Jump+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute%3F.params%3F.user+%3F+route.params.user+%3A+%27Noone%27%7D%27s+profile%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+CustomDrawerContent%28%7B+navigation+%7D%29+%7B%0A++return+%28%0A++++%3CDrawerContentScrollView+%7B...props%7D%3E%0A++++++%3CDrawerItemList+%7B...props%7D+%2F%3E%0A++++++%3CDrawerItem%0A++++++++label%3D%22Close+drawer%22%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28DrawerActions.closeDrawer%28%29%29%3B%0A++++++++%7D%7D%0A++++++%2F%3E%0A++++++%3CDrawerItem%0A++++++++label%3D%22Toggle+drawer%22%0A++++++++onPress%3D%7B%28%29+%3D%3E+props.navigation.dispatch%28DrawerActions.toggleDrawer%28%29%29%7D%0A++++++%2F%3E%0A++++%3C%2FDrawerContentScrollView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CDrawer.Navigator%0A++++++++drawerContent%3D%7B%28props%29+%3D%3E+%3CCustomDrawerContent+%7B...props%7D+%2F%3E%7D%0A++++++%3E%0A++++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CDrawer.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FDrawer.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### toggleDrawer[](https://reactnavigation.org/docs/shared-element-transitions/#toggledrawer "Direct link to toggleDrawer")

The `toggleDrawer` action can be used to open the drawer pane if closed, or close if open.

-   Static
-   Dynamic

```
navigation.dispatch(DrawerActions.toggleDrawer());
```

[Try on **Snack**](https://snack.expo.dev/?name=Drawer+Actions+-+toggleDrawer&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++DrawerActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B%0A++createDrawerNavigator%2C%0A++DrawerContentScrollView%2C%0A++DrawerItemList%2C%0A++DrawerItem%2C%0A%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0A%0Afunction+HomeScreen%28%7B+navigation+%7D%29+%7B%0A++const+jumpToAction+%3D+DrawerActions.jumpTo%28%27Profile%27%2C+%7B+user%3A+%27Satya%27+%7D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28DrawerActions.openDrawer%28%29%29%7D%3E%0A++++++++Open+Drawer%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28DrawerActions.toggleDrawer%28%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Toggle+Drawer%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28jumpToAction%29%7D%3E%0A++++++++Jump+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute%3F.params%3F.user+%3F+route.params.user+%3A+%27Noone%27%7D%27s+profile%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+CustomDrawerContent%28props%29+%7B%0A++return+%28%0A++++%3CDrawerContentScrollView+%7B...props%7D%3E%0A++++++%3CDrawerItemList+%7B...props%7D+%2F%3E%0A++++++%3CDrawerItem%0A++++++++label%3D%22Close+drawer%22%0A++++++++onPress%3D%7B%28%29+%3D%3E+props.navigation.dispatch%28DrawerActions.closeDrawer%28%29%29%7D%0A++++++%2F%3E%0A++++++%3CDrawerItem%0A++++++++label%3D%22Toggle+drawer%22%0A++++++++onPress%3D%7B%28%29+%3D%3E+props.navigation.dispatch%28DrawerActions.toggleDrawer%28%29%29%7D%0A++++++%2F%3E%0A++++%3C%2FDrawerContentScrollView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CDrawer.Navigator%0A++++++++drawerContent%3D%7B%28props%29+%3D%3E+%3CCustomDrawerContent+%7B...props%7D+%2F%3E%7D%0A++++++%3E%0A++++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CDrawer.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FDrawer.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### jumpTo[](https://reactnavigation.org/docs/shared-element-transitions/#jumpto "Direct link to jumpTo")

The `jumpTo` action can be used to jump to an existing route in the drawer navigator.

-   `name` - _string_ - Name of the route to jump to.
-   `params` - _object_ - Screen params to pass to the destination route.

-   Static
-   Dynamic


## StackActions reference  React Navigation

---
created: 2025-02-08T17:09:27 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# StackActions reference | React Navigation

> ## Excerpt
> StackActions is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in CommonActions.

---
`StackActions` is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in [`CommonActions`](https://reactnavigation.org/docs/navigation-actions).

The following actions are supported:

### replace[](https://reactnavigation.org/docs/shared-element-transitions/#replace "Direct link to replace")

The `replace` action allows to replace a route in the [navigation state](https://reactnavigation.org/docs/navigation-state). It takes the following arguments:

-   `name` - _string_ - A destination name of the route that has been registered somewhere.
-   `params` - _object_ - Params to pass to the destination route.

-   Static
-   Dynamic

```
navigation.dispatch(  StackActions.replace('Profile', { user: 'Wojtek' }));
```

[Try on **Snack**](https://snack.expo.dev/?name=Stack+actions+replace&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++StackActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Afunction+HomeScreen%28%7B+navigation+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28StackActions.push%28%27Profile%27%2C+%7B+user%3A+%27Wojtek%27+%7D%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Push+Profile+on+the+stack%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++StackActions.replace%28%27Profile%27%2C+%7B+user%3A+%27Wojtek%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Replace+with+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+navigation%2C+route+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28StackActions.pop%281%29%29%7D%3E%0A++++++++Pop+one+screen+from+stack%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28StackActions.push%28%27Profile%27%2C+%7B+user%3A+%27Wojtek%27+%7D%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Push+same+screen+on+the+stack%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28StackActions.popToTop%28%29%29%7D%3E%0A++++++++Pop+to+top%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

If you want to replace a particular route, you can add a `source` property referring to the route key and `target` property referring to the navigation state key:

```
import { StackActions } from '@react-navigation/native';navigation.dispatch({  ...StackActions.replace('Profile', {    user: 'jane',  }),  source: route.key,  target: navigation.getState().key,});
```

If the `source` property is explicitly set to `undefined`, it'll replace the focused route.

### push[](https://reactnavigation.org/docs/shared-element-transitions/#push "Direct link to push")

The `push` action adds a route on top of the stack and navigates forward to it. This differs from `navigate` in that `navigate` will pop back to earlier in the stack if a route of the given name is already present there. `push` will always add on top, so a route can be present multiple times.

-   `name` - _string_ - Name of the route to push onto the stack.
-   `params` - _object_ - Screen params to pass to the destination route.

-   Static
-   Dynamic

```
navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));
```

[Try on **Snack**](https://snack.expo.dev/?name=Stack+actions+push&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++StackActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createStackNavigator+%7D+from+%27%40react-navigation%2Fstack%27%3B%0A%0Afunction+HomeScreen%28%7B+navigation+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28StackActions.push%28%27Profile%27%2C+%7B+user%3A+%27Wojtek%27+%7D%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Push+Profile+on+the+stack%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28%0A++++++++++++StackActions.replace%28%27Profile%27%2C+%7B+user%3A+%27Wojtek%27+%7D%29%0A++++++++++%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Replace+with+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+navigation%2C+route+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute.params.user%7D%27s+profile%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28StackActions.pop%281%29%29%7D%3E%0A++++++++Pop+one+screen+from+stack%0A++++++%3C%2FButton%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28StackActions.push%28%27Profile%27%2C+%7B+user%3A+%27Wojtek%27+%7D%29%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Push+same+screen+on+the+stack%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.dispatch%28StackActions.popToTop%28%29%29%7D%3E%0A++++++++Pop+to+top%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createStackNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fstack%407.0.18%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

### pop[](https://reactnavigation.org/docs/shared-element-transitions/#pop "Direct link to pop")

The `pop` action takes you back to a previous screen in the stack. It takes one optional argument (`count`), which allows you to specify how many screens to pop back by.

-   Static
-   Dynamic

### popTo[](https://reactnavigation.org/docs/shared-element-transitions/#popto "Direct link to popTo")

The `popTo` action takes you back to a previous screen in the stack by the name. It also allows you to pass params to the route.

If a matching screen is not found in the stack, this will pop the current screen and add a new screen with the specified name and params - essentially behaving like a [`replace`](https://reactnavigation.org/docs/shared-element-transitions/#replace). This ensures that the app doesn't break if a previous screen with the name did not exist - which can happen when the screen was opened from a deep link or push notification, or when used on the web etc.

The method accepts the following arguments:

-   `name` - _string_ - Name of the route to navigate to.
-   `params` - _object_ - Screen params to pass to the destination route.
-   `merge` - _boolean_ - Whether params should be merged with the existing route params, or replace them (when navigating to an existing screen). Defaults to `false`.

```
import { StackActions } from '@react-navigation/native';const popToAction = StackActions.popTo('Profile', { user: 'jane' });navigation.dispatch(popToAction);
```

### popToTop[](https://reactnavigation.org/docs/shared-element-transitions/#poptotop "Direct link to popToTop")

The `popToTop` action takes you back to the first screen in the stack, dismissing all the others. It's functionally identical to `StackActions.pop({n: currentIndex})`.

-   Static
-   Dynamic


## TabActions reference  React Navigation

---
created: 2025-02-08T17:09:38 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# TabActions reference | React Navigation

> ## Excerpt
> TabActions is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in CommonActions.

---
`TabActions` is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in [`CommonActions`](https://reactnavigation.org/docs/navigation-actions).

The following actions are supported:

### jumpTo[](https://reactnavigation.org/docs/shared-element-transitions/#jumpto "Direct link to jumpTo")

The `jumpTo` action can be used to jump to an existing route in the tab navigator.

-   `name` - _string_ - Name of the route to jump to.
-   `params` - _object_ - Screen params to pass to the destination route.

-   Static
-   Dynamic

```
function HomeScreen() {  const navigation = useNavigation();  const jumpToAction = TabActions.jumpTo('Profile', { user: 'Satya' });  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>Home!</Text>      <Button        onPress={() => {          navigation.dispatch(jumpToAction);        }}      >        Jump to Profile      </Button>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=Tab+Actions+-+jumpTo&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++TabActions%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+jumpToAction+%3D+TabActions.jumpTo%28%27Profile%27%2C+%7B+user%3A+%27Satya%27+%7D%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EHome%21%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.dispatch%28jumpToAction%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Jump+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+route+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile%21%3C%2FText%3E%0A++++++%3CText%3E%7Broute%3F.params%3F.user+%3F+route.params.user+%3A+%27Noone%27%7D%27s+profile%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)


# 05 API reference/Hooks

## useFocusEffect  React Navigation

---
created: 2025-02-08T17:08:17 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useFocusEffect | React Navigation

> ## Excerpt
> Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using focus and blur events, it's not very ergonomic.

---
Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using `focus` and `blur` events, it's not very ergonomic.

To make this easier, the library exports a `useFocusEffect` hook:

-   Static
-   Dynamic

```
import { useFocusEffect } from '@react-navigation/native';function ProfileScreen() {  useFocusEffect(    React.useCallback(() => {      // Do something when the screen is focused      return () => {        // Do something when the screen is unfocused        // Useful for cleanup functions      };    }, [])  );  return <View />;}
```

[Try on **Snack**](https://snack.expo.dev/?name=useFocusEffect+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0A%0Aimport+%7B+useFocusEffect+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++useFocusEffect%28%0A++++React.useCallback%28%28%29+%3D%3E+%7B%0A++++++%2F%2F+Do+something+when+the+screen+is+focused%0A++++++return+%28%29+%3D%3E+%7B%0A++++++++%2F%2F+Do+something+when+the+screen+is+unfocused%0A++++++++%2F%2F+Useful+for+cleanup+functions%0A++++++%7D%3B%0A++++%7D%2C+%5B%5D%29%0A++%29%3B%0A%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

warning

To avoid the running the effect too often, it's important to wrap the callback in `useCallback` before passing it to `useFocusEffect` as shown in the example.

The `useFocusEffect` is analogous to React's `useEffect` hook. The only difference is that it only runs if the screen is currently focused.

The effect will run whenever the dependencies passed to `React.useCallback` change, i.e. it'll run on initial render (if the screen is focused) as well as on subsequent renders if the dependencies have changed. If you don't wrap your effect in `React.useCallback`, the effect will run every render if the screen is focused.

The cleanup function runs when the previous effect needs to be cleaned up, i.e. when dependencies change and a new effect is scheduled and when the screen unmounts or blurs.

## Running asynchronous effects[](https://reactnavigation.org/docs/shared-element-transitions/#running-asynchronous-effects "Direct link to Running asynchronous effects")

When running asynchronous effects such as fetching data from server, it's important to make sure that you cancel the request in the cleanup function (similar to `React.useEffect`). If you're using an API that doesn't provide a cancellation mechanism, make sure to ignore the state updates:

```
useFocusEffect(  React.useCallback(() => {    let isActive = true;    const fetchUser = async () => {      try {        const user = await API.fetch({ userId });        if (isActive) {          setUser(user);        }      } catch (e) {        // Handle error      }    };    fetchUser();    return () => {      isActive = false;    };  }, [userId]));
```

If you don't ignore the result, then you might end up with inconsistent data due to race conditions in your API calls.

## Delaying effect until transition finishes[](https://reactnavigation.org/docs/shared-element-transitions/#delaying-effect-until-transition-finishes "Direct link to Delaying effect until transition finishes")

The `useFocusEffect` hook runs the effect as soon as the screen comes into focus. This often means that if there is an animation for the screen change, it might not have finished yet.

React Navigation runs its animations in native thread, so it's not a problem in many cases. But if the effect updates the UI or renders something expensive, then it can affect the animation performance. In such cases, we can use [`InteractionManager`](https://reactnative.dev/docs/interactionmanager) to defer our work until the animations or gestures have finished:

```
useFocusEffect(  React.useCallback(() => {    const task = InteractionManager.runAfterInteractions(() => {      // Expensive task    });    return () => task.cancel();  }, []));
```

## How is `useFocusEffect` different from adding a listener for `focus` event[](https://reactnavigation.org/docs/shared-element-transitions/#how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event "Direct link to how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event")

The `focus` event fires when a screen comes into focus. Since it's an event, your listener won't be called if the screen was already focused when you subscribed to the event. This also doesn't provide a way to perform a cleanup function when the screen becomes unfocused. You can subscribe to the `blur` event and handle it manually, but it can get messy. You will usually need to handle `componentDidMount` and `componentWillUnmount` as well in addition to these events, which complicates it even more.

The `useFocusEffect` allows you to run an effect on focus and clean it up when the screen becomes unfocused. It also handles cleanup on unmount. It re-runs the effect when dependencies change, so you don't need to worry about stale values in your listener.

## When to use `focus` and `blur` events instead[](https://reactnavigation.org/docs/shared-element-transitions/#when-to-use-focus-and-blur-events-instead "Direct link to when-to-use-focus-and-blur-events-instead")

Like `useEffect`, a cleanup function can be returned from the effect in `useFocusEffect`. The cleanup function is intended to cleanup the effect - e.g. abort an asynchronous task, unsubscribe from an event listener, etc. It's not intended to be used to do something on `blur`.

For example, **don't do the following**:

```
useFocusEffect(  React.useCallback(() => {    return () => {      // Do something that should run on blur    };  }, []));
```

The cleanup function runs whenever the effect needs to cleanup, i.e. on `blur`, unmount, dependency change etc. It's not a good place to update the state or do something that should happen on `blur`. You should use listen to the `blur` event instead:

```
React.useEffect(() => {  const unsubscribe = navigation.addListener('blur', () => {    // Do something when the screen blurs  });  return unsubscribe;}, [navigation]);
```

Similarly, if you want to do something when the screen receives focus (e.g. track screen focus) and it doesn't need cleanup or need to be re-run on dependency changes, then you should use the `focus` event instead:

## Using with class component[](https://reactnavigation.org/docs/shared-element-transitions/#using-with-class-component "Direct link to Using with class component")

You can make a component for your effect and use it in your class component:

```
function FetchUserData({ userId, onUpdate }) {  useFocusEffect(    React.useCallback(() => {      const unsubscribe = API.subscribe(userId, onUpdate);      return () => unsubscribe();    }, [userId, onUpdate])  );  return null;}// ...class Profile extends React.Component {  _handleUpdate = (user) => {    // Do something with user object  };  render() {    return (      <>        <FetchUserData          userId={this.props.userId}          onUpdate={this._handleUpdate}        />        {/* rest of your code */}      </>    );  }}
```


## useIsFocused  React Navigation

---
created: 2025-02-08T17:08:25 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useIsFocused | React Navigation

> ## Excerpt
> We might want to render different content based on the current focus state of the screen. The library exports a useIsFocused hook to make this easier:

---
Version: 7.x

We might want to render different content based on the current focus state of the screen. The library exports a `useIsFocused` hook to make this easier:

-   Static
-   Dynamic

```
import { useIsFocused } from '@react-navigation/native';function ProfileScreen() {  // This hook returns `true` if the screen is focused, `false` otherwise  const isFocused = useIsFocused();  return (    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>    </View>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=useIsFocused+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createMaterialTopTabNavigator+%7D+from+%27%40react-navigation%2Fmaterial-top-tabs%27%3B%0Aimport+%7B+useIsFocused+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+ProfileScreen%28%29+%7B%0A++%2F%2F+This+hook+returns+%60true%60+if+the+screen+is+focused%2C+%60false%60+otherwise%0A++const+isFocused+%3D+useIsFocused%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3E%7BisFocused+%3F+%27focused%27+%3A+%27unfocused%27%7D%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createMaterialTopTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fmaterial-top-tabs%407.0.18%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-pager-view%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Note that using this hook triggers a re-render for the component when the screen it's in changes focus. This might cause lags during the animation if your component is heavy. You might want to extract the expensive parts to separate components and use [`React.memo`](https://react.dev/reference/react/memo) or [`React.PureComponent`](https://react.dev/reference/react/PureComponent) to minimize re-renders for them.

## Using with class component[](https://reactnavigation.org/docs/shared-element-transitions/#using-with-class-component "Direct link to Using with class component")

You can wrap your class component in a function component to use the hook:

```
class Profile extends React.Component {  render() {    // Get it from props    const { isFocused } = this.props;  }}// Wrap and exportexport default function (props) {  const isFocused = useIsFocused();  return <Profile {...props} isFocused={isFocused} />;}
```

[

Previous

useFocusEffect

](https://reactnavigation.org/docs/use-focus-effect)[

Next

usePreventRemove

](https://reactnavigation.org/docs/use-prevent-remove)


## useLinkBuilder  React Navigation

---
created: 2025-02-08T17:08:50 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useLinkBuilder | React Navigation

> ## Excerpt
> The useLinkBuilder hook returns helpers to build href or action based on the linking options. It returns an object with the following properties:

---
The `useLinkBuilder` hook returns helpers to build `href` or action based on the linking options. It returns an object with the following properties:

The `buildHref` method lets us build a path to use for links for a screen in the current navigator's state. It returns a function that takes `name` and `params` for the screen to focus and returns path based on the [`linking` options](https://reactnavigation.org/docs/navigation-container#linking).

```
import { useLinkBuilder } from '@react-navigation/native';import { PlatformPressable } from '@react-navigation/elements';// ...function DrawerContent({ state, descriptors, navigation }) {  const { buildHref } = useLinkBuilder();  return state.routes((route) => (    <PlatformPressable      href={buildHref(route.name, route.params)}      onPress={() => navigation.navigate(route.name, route.params)}    >      {descriptors[route.key].options.title}    </PlatformPressable>  ));}
```

This hook is intended to be used in navigators to show links to various pages in the navigator, such as drawer and tab navigators. If you're building a custom navigator, custom drawer content, custom tab bar etc. then you might want to use this hook.

The `buildAction` method lets us parse a `href` string into an action object that can be used with [`navigation.dispatch`](https://reactnavigation.org/docs/navigation-object#dispatch) to navigate to the relevant screen.

```
import { Link, CommonActions, useLinkBuilder } from '@react-navigation/native';import { Button } from '@react-navigation/elements';// ...function MyComponent() {  const { buildAction } = useLinkBuilder();  return (    <Button onPress={() => navigation.dispatch(buildAction('/users/jane'))}>      Go to Jane's profile    </Button>  );}
```

The [`useLinkTo`](https://reactnavigation.org/docs/use-link-to) hook is a convenient wrapper around this hook to navigate to a screen using a `href` string.


## useLinkProps  React Navigation

---
created: 2025-02-08T17:08:43 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useLinkProps | React Navigation

> ## Excerpt
> The useLinkProps hook lets us build our custom link component. The link component can be used as a button to navigate to a screen. On the web, it will be rendered as an anchor tag (`) with the href attribute so that all the accessibility features of a link are preserved, e.g. - such as Right click -> Open link in new tab", Ctrl+Click/⌘+Click` etc.

---
The `useLinkProps` hook lets us build our custom link component. The link component can be used as a button to navigate to a screen. On the web, it will be rendered as an anchor tag (`<a>`) with the `href` attribute so that all the accessibility features of a link are preserved, e.g. - such as `Right click -> Open link in new tab"`, `Ctrl+Click`/`⌘+Click` etc.

It returns an object with some props that you can pass to a component.

Example:

```
import { useLinkProps } from '@react-navigation/native';// ...const LinkButton = ({ screen, params, action, href, children, ...rest }) => {  const props = useLinkProps({ screen, params, action, href });  const [isHovered, setIsHovered] = React.useState(false);  return (    <Pressable {...props} {...rest}>      <Text>{children}</Text>    </Pressable>  );};
```

Then you can use the `LinkButton` component elsewhere in your app:

```
function Home() {  return (    <LinkButton screen="Profile" params={{ id: 'jane' }}>      Go to Jane's profile    </LinkButton>  );}
```

## Options[](https://reactnavigation.org/docs/shared-element-transitions/#options "Direct link to Options")

### `screen` and `params`[](https://reactnavigation.org/docs/shared-element-transitions/#screen-and-params "Direct link to screen-and-params")

You can pass `screen` and `params` to navigate to a screen on press:

```
function Home() {  return (    <LinkButton screen="Profile" params={{ id: 'jane' }}>      Go to Jane's profile    </LinkButton>  );}
```

If you want to navigate to a nested screen, you can pass the name of the `screen` in `params` similar to [navigating to a screen in a nested navigator](https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator):

```
<LinkButton screen="Root" params={{ screen: 'Post', params: { id: 123 } }}>  Go to post 123</LinkButton>
```

### `action`[](https://reactnavigation.org/docs/shared-element-transitions/#action "Direct link to action")

Sometimes we want a different behavior for in-page navigation, such as `replace` instead of `navigate`. We can use the `action` prop to customize it:

Example:

```
import { StackActions } from '@react-navigation/native';// ...function Home() {  return (    <LinkButton      screen="Profile"      params={{ id: 'jane' }}      action={StackActions.replace('Profile', { id: 'jane' })}    >      Go to Jane's profile    </LinkButton>  );}
```

The `screen` and `params` props can be omitted if the `action` prop is specified. In that case, we recommend specifying the `href` prop as well to ensure that the link is accessible.

### `href`[](https://reactnavigation.org/docs/shared-element-transitions/#href "Direct link to href")

The `href` is used for the `href` attribute of the anchor tag on the Web to make the links accessible. By default, this is automatically determined based on the [`linking` options](https://reactnavigation.org/docs/navigation-container#linking) using the `screen` and `params` props.

If you want to use a custom `href`, you can pass it as the `href` prop:

```
function Home() {  return (    <LinkButton      action={StackActions.replace('Profile', { id: 'jane' })}      href="/users/jane"    >      Getting Started    </LinkButton>  );}
```


## useLinkTo  React Navigation

---
created: 2025-02-08T17:08:37 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useLinkTo | React Navigation

> ## Excerpt
> The useLinkTo hook lets us navigate to a screen using a path instead of a screen name based on the linking options. It returns a function that receives the path to navigate to.

---
The `useLinkTo` hook lets us navigate to a screen using a path instead of a screen name based on the [`linking` options](https://reactnavigation.org/docs/navigation-container#linking). It returns a function that receives the path to navigate to.

This is a low-level hook used to build more complex behavior on top. We recommended using the [`useLinkProps` hook](https://reactnavigation.org/docs/use-link-props) to build your custom link components instead of using this hook directly. It will ensure that your component is properly accessible on the web.

```
class Home extends React.Component {  render() {    // Get it from props    const { linkTo } = this.props;  }}// Wrap and exportexport default function (props) {  const linkTo = useLinkTo();  return <Profile {...props} linkTo={linkTo} />;}
```


## useNavigation  React Navigation

---
created: 2025-02-08T17:07:54 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useNavigation | React Navigation

> ## Excerpt
> useNavigation is a hook that gives access to navigation object. It's useful when you cannot pass the navigation object as a prop to the component directly, or don't want to pass it in case of a deeply nested child.

---
`useNavigation` is a hook that gives access to `navigation` object. It's useful when you cannot pass the `navigation` object as a prop to the component directly, or don't want to pass it in case of a deeply nested child.

The `useNavigation` hook returns the `navigation` object of the screen where it's used:

```
class MyBackButton extends React.Component {  render() {    // Get it from props    const { navigation } = this.props;  }}// Wrap and exportexport default function (props) {  const navigation = useNavigation();  return <MyBackButton {...props} navigation={navigation} />;}
```


## useNavigationState  React Navigation

---
created: 2025-02-08T17:08:10 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useNavigationState | React Navigation

> ## Excerpt
> useNavigationState is a hook which gives access to the navigation state of the navigator which contains the screen. It's useful in rare cases where you want to render something based on the navigation state.

---
`useNavigationState` is a hook which gives access to the [navigation state](https://reactnavigation.org/docs/navigation-state) of the navigator which contains the screen. It's useful in rare cases where you want to render something based on the navigation state.

warning

Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the [navigation state](https://reactnavigation.org/docs/navigation-state) state object except `index` and `routes`, unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.

It takes a selector function as an argument. The selector will receive the full [navigation state](https://reactnavigation.org/docs/navigation-state) and can return a specific value from the state:

```
const index = useNavigationState((state) => state.index);
```

The selector function helps to reduce unnecessary re-renders, so your screen will re-render only when that's something you care about. If you actually need the whole state object, you can do this explicitly:

```
const state = useNavigationState((state) => state);
```

warning

This hook is useful for advanced cases and it's easy to introduce performance issues if you're not careful. For most of the cases, you don't need the navigator's state.

## How is `useNavigationState` different from `navigation.getState()`?[](https://reactnavigation.org/docs/shared-element-transitions/#how-is-usenavigationstate-different-from-navigationgetstate "Direct link to how-is-usenavigationstate-different-from-navigationgetstate")

The `navigation.getState()` function also returns the current [navigation state](https://reactnavigation.org/docs/navigation-state). The main difference is that the `useNavigationState` hook will trigger a re-render when values change, while `navigation.getState()` won't. For example, the following code will be incorrect:

```
function Profile() {  const routesLength = navigation.getState().routes.length; // Don't do this  return <Text>Number of routes: {routesLength}</Text>;}
```

In this example, even if you push a new screen, this text won't update. If you use the hook, it'll work as expected:

-   Static
-   Dynamic

```
import { useNavigationState } from '@react-navigation/native';function useIsFirstRouteInParent() {  const route = useRoute();  const isFirstRouteInParent = useNavigationState(    (state) => state.routes[0].key === route.key  );  return isFirstRouteInParent;}function usePreviousRouteName() {  return useNavigationState((state) =>    state.routes[state.index - 1]?.name      ? state.routes[state.index - 1].name      : 'None'  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=useNavigationState+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+Button+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++useRoute%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0A%0Aimport+%7B+useNavigationState+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+useIsFirstRouteInParent%28%29+%7B%0A++const+route+%3D+useRoute%28%29%3B%0A++const+isFirstRouteInParent+%3D+useNavigationState%28%0A++++%28state%29+%3D%3E+state.routes%5B0%5D.key+%3D%3D%3D+route.key%0A++%29%3B%0A%0A++return+isFirstRouteInParent%3B%0A%7D%0A%0Afunction+usePreviousRouteName%28%29+%7B%0A++return+useNavigationState%28%28state%29+%3D%3E%0A++++state.routes%5Bstate.index+-+1%5D%3F.name%0A++++++%3F+state.routes%5Bstate.index+-+1%5D.name%0A++++++%3A+%27None%27%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%7B+navigation+%7D%29+%7B%0A++const+isFirstRoute+%3D+useIsFirstRouteInParent%28%29%3B%0A++const+previousRouteName+%3D+usePreviousRouteName%28%29%3B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EIt+is+%7BisFirstRoute+%3F+%27%27+%3A+%27not+%27%7Dfirst+route+in+navigator%3C%2FText%3E%0A++++++%3CText%3EPrevious+route+name%3A+%7BpreviousRouteName%7D%3C%2FText%3E%0A%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%7B+navigation+%7D%29+%7B%0A++const+isFirstRoute+%3D+useIsFirstRouteInParent%28%29%3B%0A++const+previousRouteName+%3D+usePreviousRouteName%28%29%3B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EIt+is+%7BisFirstRoute+%3F+%27%27+%3A+%27not+%27%7Dfirst+route+in+navigator%3C%2FText%3E%0A++++++%3CText%3EPrevious+route+name%3A+%7BpreviousRouteName%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Settings%27%29%7D%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+SettingsScreen%28%7B+navigation+%7D%29+%7B%0A++const+isFirstRoute+%3D+useIsFirstRouteInParent%28%29%3B%0A++const+previousRouteName+%3D+usePreviousRouteName%28%29%3B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EIt+is+%7BisFirstRoute+%3F+%27%27+%3A+%27not+%27%7Dfirst+route+in+navigator%3C%2FText%3E%0A++++++%3CText%3EPrevious+route+name%3A+%7BpreviousRouteName%7D%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.goBack%28%29%7D%3EGo+back%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+MyStack%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CMyStack+%2F%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

So when do you use `navigation.getState()`? It's mostly useful within event listeners where you don't care about what's rendered. In most cases, using the hook should be preferred.

## Using with class component[](https://reactnavigation.org/docs/shared-element-transitions/#using-with-class-component "Direct link to Using with class component")

You can wrap your class component in a function component to use the hook:

```
class Profile extends React.Component {  render() {    // Get it from props    const { routesLength } = this.props;  }}// Wrap and exportexport default function (props) {  const routesLength = useNavigationState((state) => state.routes.length);  return <Profile {...props} routesLength={routesLength} />;}
```


## usePreventRemove  React Navigation

---
created: 2025-02-08T17:08:30 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# usePreventRemove | React Navigation

> ## Excerpt
> The usePreventRemove hook allows you to prevent the user from leaving a screen. For example, if there are unsaved changes, you might want to show a confirmation dialog before the user can navigate away.

---
```
const EditTextScreen = () => {  const navigation = useNavigation();  const [text, setText] = React.useState('');  const hasUnsavedChanges = Boolean(text);  usePreventRemove(hasUnsavedChanges, ({ data }) => {    if (Platform.OS === 'web') {      // Alert is not supported on web, so we can use confirm      const discard = confirm(        'You have unsaved changes. Discard them and leave the screen?'      );      if (discard) {        navigation.dispatch(data.action);      }    } else {      // Prompt the user before leaving the screen      Alert.alert(        'Discard changes?',        'You have unsaved changes. Discard them and leave the screen?',        [          {            text: "Don't leave",            style: 'cancel',            onPress: () => {              // Do nothingP            },          },          {            text: 'Discard',            style: 'destructive',            onPress: () => navigation.dispatch(data.action),          },        ]      );    }  });  return (    <View style={styles.content}>      <TextInput        autoFocus        style={styles.input}        value={text}        placeholder="Type something…"        onChangeText={setText}      />    </View>  );};
```


## useRoute  React Navigation

---
created: 2025-02-08T17:08:04 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useRoute | React Navigation

> ## Excerpt
> useRoute is a hook which gives access to route object. It's useful when you cannot pass down the route object from props to the component, or don't want to pass it in case of a deeply nested child.

---
`useRoute` is a hook which gives access to `route` object. It's useful when you cannot pass down the `route` object from props to the component, or don't want to pass it in case of a deeply nested child.

`useRoute()` returns the `route` object of the screen it's inside.

## Example[](https://reactnavigation.org/docs/shared-element-transitions/#example "Direct link to Example")

-   Static
-   Dynamic

```
import { useRoute } from '@react-navigation/native';function MyText() {  const route = useRoute();  return <Text>{route.params.caption}</Text>;}
```

[Try on **Snack**](https://snack.expo.dev/?name=useRoute+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text+%7D+from+%27react-native%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+NavigationContainer%2C+useNavigation+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+useRoute+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+MyText%28%29+%7B%0A++const+route+%3D+useRoute%28%29%3B%0A%0A++return+%3CText%3E%7Broute.params.caption%7D%3C%2FText%3E%3B%0A%7D%0A%0Afunction+HomeScreen%28%7B+navigation+%7D%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EThis+is+the+home+screen+of+the+app%3C%2FText%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E+%7B%0A++++++++++navigation.navigate%28%27Profile%27%2C+%7B+caption%3A+%27Some+caption%27+%7D%29%3B%0A++++++++%7D%7D%0A++++++%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+ProfileScreen%28%29+%7B%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText%3EProfile+Screen%3C%2FText%3E%0A++++++%3CMyText+%2F%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CStack.Navigator+initialRouteName%3D%22Home%22%3E%0A++++++++%3CStack.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3C%2FStack.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+App%3B%0A&dependencies=%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2C%40react-navigation%2Fnative-stack%407.1.14%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

Check how to setup `useRoute` with TypeScript [here](https://reactnavigation.org/docs/typescript#annotating-useroute).

See the documentation for the [`route` object](https://reactnavigation.org/docs/route-object) for more info.

## Using with class component[](https://reactnavigation.org/docs/shared-element-transitions/#using-with-class-component "Direct link to Using with class component")

You can wrap your class component in a function component to use the hook:

```
class MyText extends React.Component {  render() {    // Get it from props    const { route } = this.props;  }}// Wrap and exportexport default function (props) {  const route = useRoute();  return <MyText {...props} route={route} />;}
```


## useScrollToTop  React Navigation

---
created: 2025-02-08T17:08:55 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useScrollToTop | React Navigation

> ## Excerpt
> The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.

---
Version: 7.x

The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.

In order to achieve it we export `useScrollToTop` which accept ref to scrollable component (e,g. `ScrollView` or `FlatList`).

Example:

-   Static
-   Dynamic

```
import { ScrollView } from 'react-native';import { useScrollToTop } from '@react-navigation/native';function Albums() {  const ref = React.useRef(null);  useScrollToTop(ref);  return (    <ScrollView ref={ref}>      {/* content */}    </ScrollView>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=useScrollToTop+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+View%2C+Image+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+ScrollView+%7D+from+%27react-native%27%3B%0Aimport+%7B+useScrollToTop+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+Albums%28%29+%7B%0A++const+ref+%3D+React.useRef%28null%29%3B%0A%0A++useScrollToTop%28ref%29%3B%0A%0A++return+%28%0A++++%3CScrollView+ref%3D%7Bref%7D%3E%0A++++++%7B%2F*+content+*%2F%7D%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%221%22%0A++++++%2F%3E%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%222%22%0A++++++%2F%3E%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%223%22%0A++++++%2F%3E%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%224%22%0A++++++%2F%3E%0A++++%3C%2FScrollView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Albums%22+component%3D%7BAlbums%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

## Using with class component[](https://reactnavigation.org/docs/shared-element-transitions/#using-with-class-component "Direct link to Using with class component")

You can wrap your class component in a function component to use the hook:

```
class Albums extends React.Component {  render() {    return <ScrollView ref={this.props.scrollRef}>{/* content */}</ScrollView>;  }}// Wrap and exportexport default function (props) {  const ref = React.useRef(null);  useScrollToTop(ref);  return <Albums {...props} scrollRef={ref} />;}
```

## Providing scroll offset[](https://reactnavigation.org/docs/shared-element-transitions/#providing-scroll-offset "Direct link to Providing scroll offset")

If you require offset to scroll position you can wrap and decorate passed reference:

-   Static
-   Dynamic

```
import { ScrollView } from 'react-native';import { useScrollToTop } from '@react-navigation/native';function Albums() {  const ref = React.useRef(null);  useScrollToTop(    React.useRef({      scrollToTop: () => ref.current?.scrollTo({ y: 100 }),    })  );  return (    <ScrollView ref={ref}>      {/* content */}    </ScrollView>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=useScrollToTop+hook+-+providing+scroll+offset&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+createBottomTabNavigator+%7D+from+%27%40react-navigation%2Fbottom-tabs%27%3B%0Aimport+%7B+View%2C+Image+%7D+from+%27react-native%27%3B%0Aimport+%7B+NavigationContainer+%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+ScrollView+%7D+from+%27react-native%27%3B%0Aimport+%7B+useScrollToTop+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+Albums%28%29+%7B%0A++const+ref+%3D+React.useRef%28null%29%3B%0A%0A++useScrollToTop%28%0A++++React.useRef%28%7B%0A++++++scrollToTop%3A+%28%29+%3D%3E+ref.current%3F.scrollTo%28%7B+y%3A+100+%7D%29%2C%0A++++%7D%29%0A++%29%3B%0A%0A++return+%28%0A++++%3CScrollView+ref%3D%7Bref%7D%3E%0A++++++%7B%2F*+content+*%2F%7D%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%221%22%0A++++++%2F%3E%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%222%22%0A++++++%2F%3E%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%223%22%0A++++++%2F%3E%0A++++++%3CImage%0A++++++++source%3D%7B%7B+uri%3A+%27https%3A%2F%2Ffacebook.github.io%2Freact%2Flogo-og.png%27+%7D%7D%0A++++++++style%3D%7B%7B+width%3A+400%2C+height%3A+400+%7D%7D%0A++++++++key%3D%224%22%0A++++++%2F%3E%0A++++%3C%2FScrollView%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++return+%3CView+%2F%3E%3B%0A%7D%0A%0Aconst+Tab+%3D+createBottomTabNavigator%28%29%3B%0A%0Aexport+default+function+App%28%29+%7B%0A++return+%28%0A++++%3CNavigationContainer%3E%0A++++++%3CTab.Navigator%3E%0A++++++++%3CTab.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CTab.Screen+name%3D%22Albums%22+component%3D%7BAlbums%7D+%2F%3E%0A++++++%3C%2FTab.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fbottom-tabs%407.1.3%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

[

Previous

useLinkBuilder

](https://reactnavigation.org/docs/use-link-builder)[

Next

useTheme

](https://reactnavigation.org/docs/use-theme)


## useTheme  React Navigation

---
created: 2025-02-08T17:09:01 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# useTheme | React Navigation

> ## Excerpt
> The useTheme hook lets us access the currently active theme. You can use it in your own components to have them respond to changes in the theme.

---
The `useTheme` hook lets us access the currently active theme. You can use it in your own components to have them respond to changes in the theme.

-   Static
-   Dynamic

```
import { useTheme } from '@react-navigation/native';function MyButton() {  const { colors } = useTheme();  return (    <TouchableOpacity style={{ backgroundColor: colors.card }}>      <Text style={{ color: colors.text }}>Button!</Text>    </TouchableOpacity>  );}
```

[Try on **Snack**](https://snack.expo.dev/?name=useTheme+hook&code=import+*+as+React+from+%27react%27%3B%0Aimport+%7B+View%2C+Text%2C+TouchableOpacity%2C+useColorScheme+%7D+from+%27react-native%27%3B%0Aimport+%7B%0A++NavigationContainer%2C%0A++DefaultTheme%2C%0A++DarkTheme%2C%0A++useNavigation%2C%0A%7D+from+%27%40react-navigation%2Fnative%27%3B%0Aimport+%7B+createNativeStackNavigator+%7D+from+%27%40react-navigation%2Fnative-stack%27%3B%0Aimport+%7B+createDrawerNavigator+%7D+from+%27%40react-navigation%2Fdrawer%27%3B%0Aimport+%7B+Button+%7D+from+%27%40react-navigation%2Felements%27%3B%0Aimport+%7B+useTheme+%7D+from+%27%40react-navigation%2Fnative%27%3B%0A%0Afunction+SettingsScreen%28%7B+route+%7D%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%7B+user+%7D+%3D+route.params%3B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3ESettings+Screen%3C%2FText%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3E%0A++++++++userParam%3A+%7BJSON.stringify%28user%29%7D%0A++++++%3C%2FText%3E%0A++++++%3CButton+onPress%3D%7B%28%29+%3D%3E+navigation.navigate%28%27Profile%27%29%7D%3E%0A++++++++Go+to+Profile%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0Afunction+ProfileScreen%28%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EProfile+Screen%3C%2FText%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Afunction+MyButton%28%29+%7B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CTouchableOpacity+style%3D%7B%7B+backgroundColor%3A+colors.card+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EButton%21%3C%2FText%3E%0A++++%3C%2FTouchableOpacity%3E%0A++%29%3B%0A%7D%0A%0Afunction+HomeScreen%28%29+%7B%0A++const+navigation+%3D+useNavigation%28%29%3B%0A++const+%7B+colors+%7D+%3D+useTheme%28%29%3B%0A%0A++return+%28%0A++++%3CView+style%3D%7B%7B+flex%3A+1%2C+alignItems%3A+%27center%27%2C+justifyContent%3A+%27center%27+%7D%7D%3E%0A++++++%3CText+style%3D%7B%7B+color%3A+colors.text+%7D%7D%3EHome+Screen%3C%2FText%3E%0A++++++%3CMyButton+%2F%3E%0A++++++%3CButton%0A++++++++onPress%3D%7B%28%29+%3D%3E%0A++++++++++navigation.navigate%28%27Root%27%2C+%7B%0A++++++++++++screen%3A+%27Settings%27%2C%0A++++++++++++params%3A+%7B+user%3A+%27jane%27+%7D%2C%0A++++++++++%7D%29%0A++++++++%7D%0A++++++%3E%0A++++++++Go+to+Settings%0A++++++%3C%2FButton%3E%0A++++%3C%2FView%3E%0A++%29%3B%0A%7D%0A%0Aconst+Drawer+%3D+createDrawerNavigator%28%29%3B%0Aconst+Stack+%3D+createNativeStackNavigator%28%29%3B%0A%0Afunction+Root%28%29+%7B%0A++return+%28%0A++++%3CStack.Navigator%3E%0A++++++%3CStack.Screen+name%3D%22Profile%22+component%3D%7BProfileScreen%7D+%2F%3E%0A++++++%3CStack.Screen+name%3D%22Settings%22+component%3D%7BSettingsScreen%7D+%2F%3E%0A++++%3C%2FStack.Navigator%3E%0A++%29%3B%0A%7D%0A%0Aexport+default+function+App%28%29+%7B%0A++const+scheme+%3D+useColorScheme%28%29%3B%0A%0A++return+%28%0A++++%3CNavigationContainer+theme%3D%7Bscheme+%3D%3D%3D+%27dark%27+%3F+DarkTheme+%3A+DefaultTheme%7D%3E%0A++++++%3CDrawer.Navigator%3E%0A++++++++%3CDrawer.Screen+name%3D%22Home%22+component%3D%7BHomeScreen%7D+%2F%3E%0A++++++++%3CDrawer.Screen%0A++++++++++name%3D%22Root%22%0A++++++++++component%3D%7BRoot%7D%0A++++++++++options%3D%7B%7B+headerShown%3A+false+%7D%7D%0A++++++++%2F%3E%0A++++++%3C%2FDrawer.Navigator%3E%0A++++%3C%2FNavigationContainer%3E%0A++%29%3B%0A%7D%0A&dependencies=%40react-navigation%2Fdrawer%407.0.19%2C%40react-navigation%2Fnative%407.0.13%2Creact%40*%2Creact-native%40*%2Creact-native-gesture-handler%40*%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2C%40react-navigation%2Felements%402.2.4%2C%40react-native-masked-view%2Fmasked-view%40*%2C%40react-navigation%2Fnative-stack%407.1.14&platform=web&supportedPlatforms=ios%2Candroid%2Cweb&preview=true&hideQueryParams=true)

See [theming guide](https://reactnavigation.org/docs/themes) for more details and usage guide around how to configure themes.

## Using with class component[](https://reactnavigation.org/docs/shared-element-transitions/#using-with-class-component "Direct link to Using with class component")

You can wrap your class component in a function component to use the hook:

```
class MyButton extends React.Component {  render() {    // Get it from props    const { theme } = this.props;  }}// Wrap and exportexport default function (props) {  const theme = useTheme();  return <MyButton {...props} theme={theme} />;}
```


# 06 Build your own Navigator

## Custom navigators  React Navigation

---
created: 2025-02-08T17:10:30 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Custom navigators | React Navigation

> ## Excerpt
> Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.

---
Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.

Under the hood, navigators are plain React components.

## Built-in Navigators[](https://reactnavigation.org/docs/shared-element-transitions/#built-in-navigators "Direct link to Built-in Navigators")

We include some commonly needed navigators such as:

-   [`createStackNavigator`](https://reactnavigation.org/docs/stack-navigator) - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack.
-   [`createDrawerNavigator`](https://reactnavigation.org/docs/drawer-navigator) - Provides a drawer that slides in from the left of the screen by default.
-   [`createBottomTabNavigator`](https://reactnavigation.org/docs/bottom-tab-navigator) - Renders a tab bar that lets the user switch between several screens.
-   [`createMaterialTopTabNavigator`](https://reactnavigation.org/docs/material-top-tab-navigator) - Renders tab view which lets the user switch between several screens using swipe gesture or the tab bar.

## API for building custom navigators[](https://reactnavigation.org/docs/shared-element-transitions/#api-for-building-custom-navigators "Direct link to API for building custom navigators")

A navigator bundles a router and a view which takes the [navigation state](https://reactnavigation.org/docs/navigation-state) and decides how to render it. We export a `useNavigationBuilder` hook to build custom navigators that integrate with rest of React Navigation.

### `useNavigationBuilder`[](https://reactnavigation.org/docs/shared-element-transitions/#usenavigationbuilder "Direct link to usenavigationbuilder")

This hook allows a component to hook into React Navigation. It accepts the following arguments:

-   `createRouter` - A factory method which returns a router object (e.g. `StackRouter`, `TabRouter`).
    
-   `options` - Options for the hook and the router. The navigator should forward its props here so that user can provide props to configure the navigator. By default, the following options are accepted:
    
    -   `children` (required) - The `children` prop should contain route configurations as `Screen` components.
    -   `screenOptions` - The `screenOptions` prop should contain default options for all of the screens.
    -   `initialRouteName` - The `initialRouteName` prop determines the screen to focus on initial render. This prop is forwarded to the router.
    
    If any other options are passed here, they'll be forwarded to the router.
    

The hook returns an object with following properties:

-   `state` - The [navigation state](https://reactnavigation.org/docs/navigation-state) for the navigator. The component can take this state and decide how to render it.
    
-   `navigation` - The navigation object containing various helper methods for the navigator to manipulate the [navigation state](https://reactnavigation.org/docs/navigation-state). This isn't the same as the navigation object for the screen and includes some helpers such as `emit` to emit events to the screens.
    
-   `descriptors` - This is an object containing descriptors for each route with the route keys as its properties. The descriptor for a route can be accessed by `descriptors[route.key]`. Each descriptor contains the following properties:
    
    -   `navigation` - The navigation object for the screen. You don't need to pass this to the screen manually. But it's useful if we're rendering components outside the screen that need to receive `navigation` prop as well, such as a header component.
    -   `options` - A getter which returns the options such as `title` for the screen if they are specified.
    -   `render` - A function which can be used to render the actual screen. Calling `descriptors[route.key].render()` will return a React element containing the screen content. It's important to use this method to render a screen, otherwise any child navigators won't be connected to the navigation tree properly.

Example:

```
import * as React from 'react';import { Text, Pressable, View } from 'react-native';import {  NavigationHelpersContext,  useNavigationBuilder,  TabRouter,  TabActions,} from '@react-navigation/native';function TabNavigator({  id,  initialRouteName,  children,  layout,  screenListeners,  screenOptions,  screenLayout,  tabBarStyle,  contentStyle,}) {  const { state, navigation, descriptors, NavigationContent } =    useNavigationBuilder(TabRouter, {      id,      initialRouteName,      children,      layout,      screenListeners,      screenOptions,      screenLayout,    });  return (    <NavigationContent>      <View style={[{ flexDirection: 'row' }, tabBarStyle]}>        {state.routes.map((route) => (          <Pressable            key={route.key}            onPress={() => {              const isFocused = state.index === index;              const event = navigation.emit({                type: 'tabPress',                target: route.key,                canPreventDefault: true,              });              if (!isFocused && !event.defaultPrevented) {                navigation.dispatch({                  ...TabActions.jumpTo(route.name, route.params),                  target: state.key,                });              }            }}            style={{ flex: 1 }}          >            <Text>{descriptors[route.key].options.title ?? route.name}</Text>          </Pressable>        ))}      </View>      <View style={[{ flex: 1 }, contentStyle]}>        {state.routes.map((route, i) => {          return (            <View              key={route.key}              style={[                StyleSheet.absoluteFill,                { display: i === state.index ? 'flex' : 'none' },              ]}            >              {descriptors[route.key].render()}            </View>          );        })}      </View>    </NavigationContent>  );}
```

The `navigation` object for navigators also has an `emit` method to emit custom events to the child screens. The usage looks like this:

```
navigation.emit({  type: 'transitionStart',  data: { blurring: false },  target: route.key,});
```

The `data` is available under the `data` property in the `event` object, i.e. `event.data`.

The `target` property determines the screen that will receive the event. If the `target` property is omitted, the event is dispatched to all screens in the navigator.

### `createNavigatorFactory`[](https://reactnavigation.org/docs/shared-element-transitions/#createnavigatorfactory "Direct link to createnavigatorfactory")

This `createNavigatorFactory` function is used to create a function that will `Navigator` and `Screen` pair. Custom navigators need to wrap the navigator component in `createNavigatorFactory` before exporting.

Example:

```
import {  useNavigationBuilder,  createNavigatorFactory,} from '@react-navigation/native';// ...export function createMyNavigator(config) {  return createNavigatorFactory(TabNavigator)(config);}
```

Then it can be used like this:

```
import { createMyNavigator } from './myNavigator';const My = createMyNavigator();function App() {  return (    <My.Navigator>      <My.Screen name="Home" component={HomeScreen} />      <My.Screen name="Feed" component={FeedScreen} />    </My.Navigator>  );}
```

## Type-checking navigators[](https://reactnavigation.org/docs/shared-element-transitions/#type-checking-navigators "Direct link to Type-checking navigators")

To type-check navigators, we need to provide 3 types:

-   Type of the props accepted by the view
-   Type of supported screen options
-   A map of event types emitted by the navigator

For example, to type-check our custom tab navigator, we can do something like this:

```
import * as React from 'react';import {  View,  Text,  Pressable,  type StyleProp,  type ViewStyle,  StyleSheet,} from 'react-native';import {  createNavigatorFactory,  CommonActions,  type DefaultNavigatorOptions,  type NavigatorTypeBagBase,  type ParamListBase,  type StaticConfig,  type TabActionHelpers,  type TabNavigationState,  TabRouter,  type TabRouterOptions,  type TypedNavigator,  useNavigationBuilder,} from '@react-navigation/native';// Props accepted by the viewtype TabNavigationConfig = {  tabBarStyle: StyleProp<ViewStyle>;  contentStyle: StyleProp<ViewStyle>;};// Supported screen optionstype TabNavigationOptions = {  title?: string;};// Map of event name and the type of data (in event.data)//// canPreventDefault: true adds the defaultPrevented property to the// emitted events.type TabNavigationEventMap = {  tabPress: {    data: { isAlreadyFocused: boolean };    canPreventDefault: true;  };};// The props accepted by the component is a combination of 3 thingstype Props = DefaultNavigatorOptions<  ParamListBase,  TabNavigationState<ParamListBase>,  TabNavigationOptions,  TabNavigationEventMap> &  TabRouterOptions &  TabNavigationConfig;function TabNavigator({  id,  initialRouteName,  children,  layout,  screenListeners,  screenOptions,  screenLayout,  backBehavior,  tabBarStyle,  contentStyle,}: Props) {  const { state, navigation, descriptors, NavigationContent } =    useNavigationBuilder<      TabNavigationState<ParamListBase>,      TabRouterOptions,      TabActionHelpers<ParamListBase>,      TabNavigationOptions,      TabNavigationEventMap    >(TabRouter, {      id,      initialRouteName,      children,      layout,      screenListeners,      screenOptions,      screenLayout,      backBehavior,    });  return (    <NavigationContent>      <View style={[{ flexDirection: 'row' }, tabBarStyle]}>        {state.routes.map((route, index) => (          <Pressable            key={route.key}            onPress={() => {              const isFocused = state.index === index;              const event = navigation.emit({                type: 'tabPress',                target: route.key,                canPreventDefault: true,                data: {                  isAlreadyFocused: isFocused,                },              });              if (!isFocused && !event.defaultPrevented) {                navigation.dispatch({                  ...CommonActions.navigate(route),                  target: state.key,                });              }            }}            style={{ flex: 1 }}          >            <Text>{descriptors[route.key].options.title || route.name}</Text>          </Pressable>        ))}      </View>      <View style={[{ flex: 1 }, contentStyle]}>        {state.routes.map((route, i) => {          return (            <View              key={route.key}              style={[                StyleSheet.absoluteFill,                { display: i === state.index ? 'flex' : 'none' },              ]}            >              {descriptors[route.key].render()}            </View>          );        })}      </View>    </NavigationContent>  );}export function createMyNavigator<  const ParamList extends ParamListBase,  const NavigatorID extends string | undefined = undefined,  const TypeBag extends NavigatorTypeBagBase = {    ParamList: ParamList;    NavigatorID: NavigatorID;    State: TabNavigationState<ParamList>;    ScreenOptions: TabNavigationOptions;    EventMap: TabNavigationEventMap;    NavigationList: {      [RouteName in keyof ParamList]: TabNavigationProp<        ParamList,        RouteName,        NavigatorID      >;    };    Navigator: typeof TabNavigator;  },  const Config extends StaticConfig<TypeBag> = StaticConfig<TypeBag>,>(config?: Config): TypedNavigator<TypeBag, Config> {  return createNavigatorFactory(TabNavigator)(config);}
```

## Extending Navigators[](https://reactnavigation.org/docs/shared-element-transitions/#extending-navigators "Direct link to Extending Navigators")

All of the built-in navigators export their views, which we can reuse and build additional functionality on top of them. For example, if we want to re-build the bottom tab navigator, we need the following code:

```
import * as React from 'react';import {  useNavigationBuilder,  createNavigatorFactory,  TabRouter,} from '@react-navigation/native';import { BottomTabView } from '@react-navigation/bottom-tabs';function BottomTabNavigator({  id,  initialRouteName,  children,  layout,  screenListeners,  screenOptions,  screenLayout,  backBehavior,  ...rest}) {  const { state, descriptors, navigation, NavigationContent } =    useNavigationBuilder(TabRouter, {      id,      initialRouteName,      children,      layout,      screenListeners,      screenOptions,      screenLayout,      backBehavior,    });  return (    <NavigationContent>      <BottomTabView        {...rest}        state={state}        navigation={navigation}        descriptors={descriptors}      />    </NavigationContent>  );}export function createMyNavigator(config) {  return createNavigatorFactory(TabNavigator)(config);}
```

Now, we can customize it to add additional functionality or change the behavior. For example, use a [custom router](https://reactnavigation.org/docs/custom-routers) instead of the default `TabRouter`:

```
import MyRouter from './MyRouter';// ...const { state, descriptors, navigation, NavigationContent } =  useNavigationBuilder(MyRouter, {    id,    initialRouteName,    children,    layout,    screenListeners,    screenOptions,    screenLayout,    backBehavior,  });// ...
```


## Custom routers  React Navigation

---
created: 2025-02-08T17:10:08 (UTC +04:00)
tags: []
source: https://reactnavigation.org/docs/shared-element-transitions/
author: 
---

# Custom routers | React Navigation

> ## Excerpt
> The router object provides various helper methods to deal with the state and actions, a reducer to update the state as well as some action creators.

---
The router object provides various helper methods to deal with the state and actions, a reducer to update the state as well as some action creators.

The router is responsible for handling actions dispatched by calling methods on the navigation object. If the router cannot handle an action, it can return `null`, which would propagate the action to other routers until it's handled.

You can make your own router by building an object with the following functions:

-   `type` - String representing the type of the router, e.g. `'stack'`, `'tab'`, `'drawer'` etc.
-   `getInitialState` - Function that returns the initial state for the navigator. Receives an options object with `routeNames` and `routeParamList` properties.
-   `getRehydratedState` - Function that rehydrates the full [navigation state](https://reactnavigation.org/docs/navigation-state) from a given partial state. Receives a partial state object and an options object with `routeNames` and `routeParamList` properties.
-   `getStateForRouteNamesChange` - Function that takes the current state and updated list of route names, and returns a new state. Receives the state object and an options object with `routeNames` and `routeParamList` properties.
-   `getStateForAction` - Reducer function that takes the current state and action along with an options object with `routeNames` and `routeParamList` properties, and returns a new state. If the action cannot be handled, it should return `null`.
-   `getStateForRouteFocus` - Function that takes the current state and key of a route, and returns a new state with that route focused.
-   `shouldActionChangeFocus` - Function that determines whether the action should also change focus in parent navigator. Some actions such as `NAVIGATE` can change focus in the parent.
-   `actionCreators` - Optional object containing a list of action creators, such as `push`, `pop` etc. These will be used to add helper methods to the `navigation` object to dispatch those actions.

info

The functions in the router object should be pure functions, i.e. they should not have any side-effects, mutate parameters or external variables, and should return the same output for the same input.

Example:

```
const router = {  type: 'tab',  getInitialState({ routeNames, routeParamList }) {    const index =      options.initialRouteName === undefined        ? 0        : routeNames.indexOf(options.initialRouteName);    return {      stale: false,      type: 'tab',      key: shortid(),      index,      routeNames,      routes: routeNames.map(name => ({        name,        key: name,        params: routeParamList[name],      })),    };  },  getRehydratedState(partialState, { routeNames, routeParamList }) {    const state = partialState;    if (state.stale === false) {      return state as NavigationState;    }    const routes = state.routes      .filter(route => routeNames.includes(route.name))      .map(        route =>          ({            ...route,            key: route.key || `${route.name}-${shortid()}`,            params:              routeParamList[route.name] !== undefined                ? {                    ...routeParamList[route.name],                    ...route.params,                  }                : route.params,          } as Route<string>)      );    return {      stale: false,      type: 'tab',      key: shortid(),      index:        typeof state.index === 'number' && state.index < routes.length          ? state.index          : 0,      routeNames,      routes,    };  },  getStateForRouteNamesChange(state, { routeNames }) {    const routes = state.routes.filter(route =>      routeNames.includes(route.name)    );    return {      ...state,      routeNames,      routes,      index: Math.min(state.index, routes.length - 1),    };  },  getStateForRouteFocus(state, key) {    const index = state.routes.findIndex(r => r.key === key);    if (index === -1 || index === state.index) {      return state;    }    return { ...state, index };  },  getStateForAction(state, action) {    switch (action.type) {      case 'NAVIGATE': {        const index = state.routes.findIndex(          route => route.name === action.payload.name        );        if (index === -1) {          return null;        }        return { ...state, index };      }      default:        return BaseRouter.getStateForAction(state, action);    }  },  shouldActionChangeFocus() {    return false;  },};const SimpleRouter = () => router;export default SimpleRouter;
```

## Built-In Routers[](https://reactnavigation.org/docs/shared-element-transitions/#built-in-routers "Direct link to Built-In Routers")

The library ships with a few standard routers:

-   `StackRouter`
-   `TabRouter`
-   `DrawerRouter`

## Customizing Routers[](https://reactnavigation.org/docs/shared-element-transitions/#customizing-routers "Direct link to Customizing Routers")

You can reuse a router and override the router functions as per your needs, such as customizing how existing actions are handled, adding additional actions etc.

See [custom navigators](https://reactnavigation.org/docs/custom-navigators) for details on how to override the router with a custom router in an existing navigator.

### Custom Navigation Actions[](https://reactnavigation.org/docs/shared-element-transitions/#custom-navigation-actions "Direct link to Custom Navigation Actions")

Let's say you want to add a custom action to clear the history:

```
import { TabRouter } from '@react-navigation/native';const MyTabRouter = (options) => {  const router = TabRouter(options);  return {    ...router,    getStateForAction(state, action, options) {      switch (action.type) {        case 'CLEAR_HISTORY':          return {            ...state,            routeKeyHistory: [],          };        default:          return router.getStateForAction(state, action, options);      }    },    actionCreators: {      ...router.actionCreators,      clearHistory() {        return { type: 'CLEAR_HISTORY' };      },    },  };};
```

Instead of writing a custom router to handle custom actions, you can [pass a function to `dispatch`](https://reactnavigation.org/docs/navigation-object#dispatch) instead. It's cleaner and recommended instead of overriding routers.

### Blocking Navigation Actions[](https://reactnavigation.org/docs/shared-element-transitions/#blocking-navigation-actions "Direct link to Blocking Navigation Actions")

Sometimes you may want to prevent some navigation activity, depending on your route. Let's say, you want to prevent pushing a new screen if `isEditing` is `true`:

```
import { StackRouter } from '@react-navigation/native';const MyStackRouter = (options) => {  const router = StackRouter(options);  return {    ...router,    getStateForAction(state, action, options) {      const result = router.getStateForAction(state, action, options);      if (        result != null &&        result.index > state.index &&        state.routes[state.index].params?.isEditing      ) {        // Returning the current state means that the action has been handled, but we don't have a new state        return state;      }      return result;    },  };};
```

If you want to prevent going back, the recommended approach is to use the [`usePreventRemove` hook](https://reactnavigation.org/docs/preventing-going-back).


