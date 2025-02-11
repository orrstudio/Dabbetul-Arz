---
created: 2025-02-09T22:50:34 (UTC +04:00)
tags: []
source: https://docs.expo.dev/versions/latest/sdk/audio/
author: 
---

# app.json / app.config.js - Expo Documentation

> ## Excerpt
> A reference of available properties in Expo app config.

---
A reference of available properties in Expo app config.

The following is a list of properties that are available for you under the `"expo"` key in app.json or app.config.json. These properties can be passed to the top level object of app.config.js or app.config.ts.

For more general information on app configuration, such as the differences between the various app configuration files, see [Configuration with app config](https://docs.expo.dev/workflow/configuration/).

`name`[](https://docs.expo.dev/versions/latest/sdk/audio/#name)

Type: `string`

The name of your app as it appears both within Expo Go and on your home screen as a standalone app.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow)

To change the name of your app, edit the 'Display Name' field in Xcode and the `app_name` string in `android/app/src/main/res/values/strings.xml`

`description`[](https://docs.expo.dev/versions/latest/sdk/audio/#description)

Type: `string`

A short description of what your app is and why it is great.

`slug`[](https://docs.expo.dev/versions/latest/sdk/audio/#slug)

Type: `string`

A URL-friendly name for your project that is unique across your account.

`owner`[](https://docs.expo.dev/versions/latest/sdk/audio/#owner)

Type: `string`

The name of the Expo account that owns the project. This is useful for teams collaborating on a project. If not provided, the owner defaults to the username of the current user.

`currentFullName`[](https://docs.expo.dev/versions/latest/sdk/audio/#currentfullname)

Type: `string`

The auto generated Expo account name and slug used for display purposes. It is not meant to be set directly. Formatted like `@username/slug`. When unauthenticated, the username is `@anonymous`. For published projects, this value may change when a project is transferred between accounts or renamed.

`originalFullName`[](https://docs.expo.dev/versions/latest/sdk/audio/#originalfullname)

Type: `string`

The auto generated Expo account name and slug used for services like Notifications and AuthSession proxy. It is not meant to be set directly. Formatted like `@username/slug`. When unauthenticated, the username is `@anonymous`. For published projects, this value will not change when a project is transferred between accounts or renamed.

`sdkVersion`[](https://docs.expo.dev/versions/latest/sdk/audio/#sdkversion)

Type: `string`

The Expo sdkVersion to run the project on. This should line up with the version specified in your package.json.

`runtimeVersion`[](https://docs.expo.dev/versions/latest/sdk/audio/#runtimeversion)

One of types:

-   `string` matching the following pattern: `^[a-zA-Z\d][a-zA-Z\d._+()-]{0,254}$`
-   `string` matching the following pattern: `^exposdk:((\d+\.\d+\.\d+)|(UNVERSIONED))$`
-   An `object` with the following properties:
    
    `policy`[](https://docs.expo.dev/versions/latest/sdk/audio/#policy)
    
    Type: `enum` • Path: `runtimeVersion.policy`
    
    Valid values: `nativeVersion`, `sdkVersion`, `appVersion`, `fingerprint`.
    

Property indicating compatibility between a build's native code and an OTA update.

`version`[](https://docs.expo.dev/versions/latest/sdk/audio/#version)

Type: `string`

Your app version. In addition to this field, you'll also use `ios.buildNumber` and `android.versionCode` — read more about how to version your app [here](https://docs.expo.dev/distribution/app-stores/#versioning-your-app). On iOS this corresponds to `CFBundleShortVersionString`, and on Android, this corresponds to `versionName`. The required format can be found [here](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleshortversionstring).

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-1)

To change your app version, edit the 'Version' field in Xcode and the `versionName` string in `android/app/build.gradle`

`platforms`[](https://docs.expo.dev/versions/latest/sdk/audio/#platforms)

Type: `array`

Platforms that your project explicitly supports. If not specified, it defaults to `["ios", "android"]`.

Example

`[ "ios", "android", "web" ]`

`githubUrl`[](https://docs.expo.dev/versions/latest/sdk/audio/#githuburl)

Type: `string`

If you would like to share the source code of your app on Github, enter the URL for the repository here and it will be linked to from your Expo project page.

Example

`"https://github.com/expo/expo"`

`orientation`[](https://docs.expo.dev/versions/latest/sdk/audio/#orientation)

Type: `enum`

Locks your app to a specific orientation with portrait or landscape. Defaults to no lock. Valid values: `default`, `portrait`, `landscape`

`userInterfaceStyle`[](https://docs.expo.dev/versions/latest/sdk/audio/#userinterfacestyle)

Type: `enum`

Configuration to force the app to always use the light or dark user-interface appearance, such as "dark mode", or make it automatically adapt to the system preferences. If not provided, defaults to `light`. Requires `expo-system-ui` be installed in your project to work on Android.

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor)

Type: `string`

The background color for your app, behind any of your React views. This is also known as the root view background color. Requires `expo-system-ui` be installed in your project to work on iOS.

6 character long hex color string, for example, `'#000000'`. Default is white: `'#ffffff'`

`primaryColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#primarycolor)

Type: `string`

On Android, this will determine the color of your app in the multitasker. Currently this is not used on iOS, but it may be used for other purposes in the future.

6 character long hex color string, for example, `'#000000'`

`icon`[](https://docs.expo.dev/versions/latest/sdk/audio/#icon)

Type: `string`

Local path or remote URL to an image to use for your app's icon. We recommend that you use a 1024x1024 png file. This icon will appear on the home screen and within the Expo Go app.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-2)

To change your app's icon, edit or replace the files in `ios/<PROJECT-NAME>/Assets.xcassets/AppIcon.appiconset` (we recommend using Xcode), and `android/app/src/main/res/mipmap-<RESOLUTION>`. Be sure to follow the guidelines for each platform ([iOS](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/), [Android 7.1 and below](https://material.io/design/iconography/#icon-treatments), and [Android 8+](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)) and to provide your new icon in each existing size.

`notification`[](https://docs.expo.dev/versions/latest/sdk/audio/#notification)

Type: `object`

Configuration for remote (push) notifications.

`icon`[](https://docs.expo.dev/versions/latest/sdk/audio/#icon-1)

Type: `string` • Path: `notification.icon`

(Android only) Local path or remote URL to an image to use as the icon for push notifications. 96x96 png grayscale with transparency. We recommend following [Google's design guidelines](https://material.io/design/iconography/product-icons.html#design-principles). If not provided, defaults to your app icon.

`color`[](https://docs.expo.dev/versions/latest/sdk/audio/#color)

Type: `string` • Path: `notification.color`

(Android only) Tint color for the push notification image when it appears in the notification tray. Defaults to `#ffffff`

6 character long hex color string, for example, `'#000000'`

`iosDisplayInForeground`[](https://docs.expo.dev/versions/latest/sdk/audio/#iosdisplayinforeground)

Type: `boolean` • Path: `notification.iosDisplayInForeground`

Whether or not to display notifications when the app is in the foreground on iOS. `_displayInForeground` option in the individual push notification message overrides this option. [Learn more.](https://docs.expo.dev/push-notifications/receiving-notifications/#foreground-notification-behavior) Defaults to `false`.

`androidMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#androidmode)

Type: `enum` • Path: `notification.androidMode`

Show each push notification individually (`default`) or collapse into one (`collapse`).

`androidCollapsedTitle`[](https://docs.expo.dev/versions/latest/sdk/audio/#androidcollapsedtitle)

Type: `string` • Path: `notification.androidCollapsedTitle`

If `androidMode` is set to `collapse`, this title is used for the collapsed notification message. For example, `'#{unread_notifications} new interactions'`.

`androidStatusBar`[](https://docs.expo.dev/versions/latest/sdk/audio/#androidstatusbar)

Type: `object`

Configuration for the status bar on Android. For more details please navigate to [Configuring StatusBar](https://docs.expo.dev/guides/configuring-statusbar/).

`barStyle`[](https://docs.expo.dev/versions/latest/sdk/audio/#barstyle)

Type: `enum` • Path: `androidStatusBar.barStyle`

Configures the status bar icons to have a light or dark color. Valid values: `light-content`, `dark-content`. Defaults to `dark-content`

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-1)

Type: `string` • Path: `androidStatusBar.backgroundColor`

Specifies the background color of the status bar. Defaults to `#00000000` (transparent) for `dark-content` bar style and `#00000088` (semi-transparent black) for `light-content` bar style

6 character long hex color string `'#RRGGBB'`, for example, `'#000000'` for black. Or 8 character long hex color string `'#RRGGBBAA'`, for example, `'#00000088'` for semi-transparent black.

`hidden`[](https://docs.expo.dev/versions/latest/sdk/audio/#hidden)

Type: `boolean` • Path: `androidStatusBar.hidden`

Instructs the system whether the status bar should be visible or not. Defaults to `false`

`translucent`[](https://docs.expo.dev/versions/latest/sdk/audio/#translucent)

Type: `boolean` • Path: `androidStatusBar.translucent`

When false, the system status bar pushes the content of your app down (similar to `position: relative`). When true, the status bar floats above the content in your app (similar to `position: absolute`). Defaults to `true` to match the iOS status bar behavior (which can only float above content). Explicitly setting this property to `true` will add `android:windowTranslucentStatus` to `styles.xml` and may cause unexpected keyboard behavior on Android when using the `softwareKeyboardLayoutMode` set to `resize`. In this case you will have to use `KeyboardAvoidingView` to manage the keyboard layout.

`androidNavigationBar`[](https://docs.expo.dev/versions/latest/sdk/audio/#androidnavigationbar)

Type: `object`

Configuration for the bottom navigation bar on Android. Can be used to configure the `expo-navigation-bar` module in EAS Build.

`visible`[](https://docs.expo.dev/versions/latest/sdk/audio/#visible)

Type: `enum` • Path: `androidNavigationBar.visible`

Determines how and when the navigation bar is shown. [Learn more](https://developer.android.com/training/system-ui/immersive). Requires `expo-navigation-bar` be installed in your project. Valid values: `leanback`, `immersive`, `sticky-immersive`

`leanback` results in the navigation bar being hidden until the first touch gesture is registered.

`immersive` results in the navigation bar being hidden until the user swipes up from the edge where the navigation bar is hidden.

`sticky-immersive` is identical to `'immersive'` except that the navigation bar will be semi-transparent and will be hidden again after a short period of time.

`barStyle`[](https://docs.expo.dev/versions/latest/sdk/audio/#barstyle-1)

Type: `enum` • Path: `androidNavigationBar.barStyle`

Configure the navigation bar icons to have a light or dark color. Supported on Android Oreo and newer. Valid values: `'light-content'`, `'dark-content'`

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-2)

Type: `string` • Path: `androidNavigationBar.backgroundColor`

Specifies the background color of the navigation bar.

6 character long hex color string, for example, `'#000000'`

`developmentClient`[](https://docs.expo.dev/versions/latest/sdk/audio/#developmentclient)

Type: `object`

Settings that apply specifically to running this app in a development client

`silentLaunch`[](https://docs.expo.dev/versions/latest/sdk/audio/#silentlaunch)

Type: `boolean` • Path: `developmentClient.silentLaunch`

If true, the app will launch in a development client with no additional dialogs or progress indicators, just like in a standalone app.

`scheme`[](https://docs.expo.dev/versions/latest/sdk/audio/#scheme)

One of types:

-   `string` matching the following pattern: `^[a-z][a-z0-9+.-]*$`
`{ "type": "array", "items": { "type": "string", "pattern": "^[a-z][a-z0-9+.-]*$" } }`

URL scheme(s) to link into your app. For example, if we set this to `'demo'`, then demo:// URLs would open your app when tapped. This is a build-time configuration, it has no effect in Expo Go.

String beginning with a lowercase letter followed by any combination of lowercase letters, digits, "+", "." or "-"

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-3)

To change your app's scheme, replace all occurrences of the old scheme in `Info.plist` and `AndroidManifest.xml`

`extra`[](https://docs.expo.dev/versions/latest/sdk/audio/#extra)

Type: `object`

Any extra fields you want to pass to your experience. Values are accessible via `Constants.expoConfig.extra` ([Learn more](https://docs.expo.dev/versions/latest/sdk/constants/#constantsmanifest))

`updates`[](https://docs.expo.dev/versions/latest/sdk/audio/#updates)

Type: `object`

Configuration for the expo-updates library

`enabled`[](https://docs.expo.dev/versions/latest/sdk/audio/#enabled)

Type: `boolean` • Path: `updates.enabled`

Whether the updates system will run. Defaults to true. If set to false, builds will only use code and assets bundled at time of build.

`checkAutomatically`[](https://docs.expo.dev/versions/latest/sdk/audio/#checkautomatically)

Type: `enum` • Path: `updates.checkAutomatically`

By default, expo-updates will check for updates every time the app is loaded. Set this to `ON_ERROR_RECOVERY` to disable automatic checking unless recovering from an error. Set this to `NEVER` to disable automatic checking. Valid values: `ON_LOAD` (default value), `ON_ERROR_RECOVERY`, `WIFI_ONLY`, `NEVER`

`useEmbeddedUpdate`[](https://docs.expo.dev/versions/latest/sdk/audio/#useembeddedupdate)

Type: `boolean` • Path: `updates.useEmbeddedUpdate`

Whether to load the embedded update. Defaults to true. If set to false, an update will be fetched at launch. When set to false, ensure that `checkAutomatically` is set to `ON_LOAD` and `fallbackToCacheTimeout` is large enough for the initial remote update to download. This should not be used in production.

`fallbackToCacheTimeout`[](https://docs.expo.dev/versions/latest/sdk/audio/#fallbacktocachetimeout)

Type: `number` • Path: `updates.fallbackToCacheTimeout`

How long (in ms) to wait for the app to check for and fetch a new update upon launch before falling back to the most recent update already present on the device. Defaults to 0. Must be between 0 and 300000 (5 minutes). If the startup update check takes longer than this value, any update downloaded during the check will be applied upon the next app launch.

`url`[](https://docs.expo.dev/versions/latest/sdk/audio/#url)

Type: `string` • Path: `updates.url`

URL from which expo-updates will fetch update manifests

`codeSigningCertificate`[](https://docs.expo.dev/versions/latest/sdk/audio/#codesigningcertificate)

Type: `string` • Path: `updates.codeSigningCertificate`

Local path of a PEM-formatted X.509 certificate used for verifying codesigned updates. When provided, all updates downloaded by expo-updates must be signed.

`codeSigningMetadata`[](https://docs.expo.dev/versions/latest/sdk/audio/#codesigningmetadata)

Type: `object` • Path: `updates.codeSigningMetadata`

Metadata for `codeSigningCertificate`

`alg`[](https://docs.expo.dev/versions/latest/sdk/audio/#alg)

Type: `enum` • Path: `updates.codeSigningMetadata.alg`

Algorithm used to generate manifest code signing signature. Valid values: `rsa-v1_5-sha256`

`keyid`[](https://docs.expo.dev/versions/latest/sdk/audio/#keyid)

Type: `string` • Path: `updates.codeSigningMetadata.keyid`

Identifier for the key in the certificate. Used to instruct signing mechanisms when signing or verifying signatures.

`requestHeaders`[](https://docs.expo.dev/versions/latest/sdk/audio/#requestheaders)

Type: `object` • Path: `updates.requestHeaders`

Extra HTTP headers to include in HTTP requests made by `expo-updates` when fetching manifests or assets. These may override preset headers.

`assetPatternsToBeBundled`[](https://docs.expo.dev/versions/latest/sdk/audio/#assetpatternstobebundled)

Type: `array` • Path: `updates.assetPatternsToBeBundled`

Array of glob patterns specifying which files should be included in updates. Glob patterns are relative to the project root. A value of `['**']` will match all asset files within the project root. When not supplied all asset files will be included. Example: Given a value of `['app/images/**/*.png', 'app/fonts/**/*.woff']` all `.png` files in all subdirectories of `app/images` and all `.woff` files in all subdirectories of `app/fonts` will be included in updates.

`disableAntiBrickingMeasures`[](https://docs.expo.dev/versions/latest/sdk/audio/#disableantibrickingmeasures)

Type: `boolean` • Path: `updates.disableAntiBrickingMeasures`

Whether to disable the built-in expo-updates anti-bricking measures. Defaults to false. If set to true, this will allow overriding certain configuration options from the JS API, which is liable to leave an app in a bricked state if not done carefully. This should not be used in production.

`locales`[](https://docs.expo.dev/versions/latest/sdk/audio/#locales)

Type: `object`

Provide overrides by locale for System Dialog prompts like Permissions Boxes

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-4)

To add or change language and localization information in your iOS app, you need to use Xcode.

`plugins`[](https://docs.expo.dev/versions/latest/sdk/audio/#plugins)

Type: `array`

Config plugins for adding extra functionality to your project. [Learn more](https://docs.expo.dev/guides/config-plugins/).

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-5)

Plugins that add modifications can only be used with [prebuilding](https://expo.fyi/prebuilding) and managed EAS Build

`splash`[](https://docs.expo.dev/versions/latest/sdk/audio/#splash)

Type: `object`

Configuration for loading and splash screen for standalone apps.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-6)

To change your app's icon, edit or replace the files in `ios/<PROJECT-NAME>/Assets.xcassets/AppIcon.appiconset` (we recommend using Xcode), and `android/app/src/main/res/mipmap-<RESOLUTION>` (Android Studio can [generate the appropriate image files for you](https://developer.android.com/studio/write/image-asset-studio)). Be sure to follow the guidelines for each platform ([iOS](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/), [Android 7.1 and below](https://material.io/design/iconography/#icon-treatments), and [Android 8+](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)) and to provide your new icon in each required size.

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-3)

Type: `string` • Path: `splash.backgroundColor`

Color to fill the loading screen background

6 character long hex color string, for example, `'#000000'`

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-7)

For Android, edit the `colorPrimary` item in `android/app/src/main/res/values/colors.xml`

`resizeMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#resizemode)

Type: `enum` • Path: `splash.resizeMode`

Determines how the `image` will be displayed in the splash loading screen. Must be one of `cover` or `contain`, defaults to `contain`.

`image`[](https://docs.expo.dev/versions/latest/sdk/audio/#image)

Type: `string` • Path: `splash.image`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`jsEngine`[](https://docs.expo.dev/versions/latest/sdk/audio/#jsengine)

Type: `enum`

Specifies the JavaScript engine for apps. Supported only on EAS Build. Defaults to `hermes`. Valid values: `hermes`, `jsc`.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-8)

To change the JavaScript engine, update the `expo.jsEngine` value in `ios/Podfile.properties.json` or `android/gradle.properties`

`newArchEnabled`[](https://docs.expo.dev/versions/latest/sdk/audio/#newarchenabled)

Type: `boolean`

A Boolean value that indicates whether the app should use the new architecture. Defaults to true.

`ios`[](https://docs.expo.dev/versions/latest/sdk/audio/#ios)

Type: `object`

Configuration that is specific to the iOS platform.

`appleTeamId`[](https://docs.expo.dev/versions/latest/sdk/audio/#appleteamid)

Type: `string` • Path: `ios.appleTeamId`

The Apple development team ID to use for all native targets. You can find your team ID in [the Apple Developer Portal](https://developer.apple.com/help/account/manage-your-team/locate-your-team-id/).

`publishManifestPath`[](https://docs.expo.dev/versions/latest/sdk/audio/#publishmanifestpath)

Type: `string` • Path: `ios.publishManifestPath`

The manifest for the iOS version of your app will be written to this path during publish.

`publishBundlePath`[](https://docs.expo.dev/versions/latest/sdk/audio/#publishbundlepath)

Type: `string` • Path: `ios.publishBundlePath`

The bundle for the iOS version of your app will be written to this path during publish.

`bundleIdentifier`[](https://docs.expo.dev/versions/latest/sdk/audio/#bundleidentifier)

Type: `string` • Path: `ios.bundleIdentifier`

The bundle identifier for your iOS standalone app. You make it up, but it needs to be unique on the App Store. See [this StackOverflow question](http://stackoverflow.com/questions/11347470/what-does-bundle-identifier-mean-in-the-ios-project).

iOS bundle identifier notation unique name for your app. For example, `host.exp.expo`, where `exp.host` is our domain and `expo` is our app name.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-9)

Set this value in `info.plist` under `CFBundleIdentifier`

`buildNumber`[](https://docs.expo.dev/versions/latest/sdk/audio/#buildnumber)

Type: `string` • Path: `ios.buildNumber`

Build number for your iOS standalone app. Corresponds to `CFBundleVersion` and must match Apple's [specified format](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleversion). (Note: Transporter will pull the value for `Version Number` from `expo.version` and NOT from `expo.ios.buildNumber`.)

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-10)

Set this value in `info.plist` under `CFBundleVersion`

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-4)

Type: `string` • Path: `ios.backgroundColor`

The background color for your iOS app, behind any of your React views. Overrides the top-level `backgroundColor` key if it is present. Requires `expo-system-ui` be installed in your project to work on iOS.

6 character long hex color string, for example, `'#000000'`

`icon`[](https://docs.expo.dev/versions/latest/sdk/audio/#icon-2)

One of types:

-   `string`
-   An `object` with the following properties:
    
    `light`[](https://docs.expo.dev/versions/latest/sdk/audio/#light)
    
    Type: `string` • Path: `ios.icon.light`
    
    The light icon. It will appear when neither dark nor tinted icons are used, or if they are not provided.
    
    `dark`[](https://docs.expo.dev/versions/latest/sdk/audio/#dark)
    
    Type: `string` • Path: `ios.icon.dark`
    
    The dark icon. It will appear for the app when the user's system appearance is dark. See Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#iOS-iPadOS) for more information.
    
    `tinted`[](https://docs.expo.dev/versions/latest/sdk/audio/#tinted)
    
    Type: `string` • Path: `ios.icon.tinted`
    
    The tinted icon. It will appear for the app when the user's system appearance is tinted. See Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#iOS-iPadOS) for more information.
    

Local path or remote URL to an image to use for your app's icon on iOS. Alternatively, an object specifying different icons for various system appearances (e.g., dark, tinted) can be provided. If specified, this overrides the top-level `icon` key. Use a 1024x1024 icon which follows Apple's interface guidelines for icons, including color profile and transparency.

Expo will generate the other required sizes. This icon will appear on the home screen and within the Expo Go app.

`appStoreUrl`[](https://docs.expo.dev/versions/latest/sdk/audio/#appstoreurl)

Type: `string` • Path: `ios.appStoreUrl`

URL to your app on the Apple App Store, if you have deployed it there. This is used to link to your store page from your Expo project page if your app is public.

Example

`"https://apps.apple.com/us/app/expo-client/id982107779"`

`bitcode`[](https://docs.expo.dev/versions/latest/sdk/audio/#bitcode)

Type: `undefined` • Path: `ios.bitcode`

Enable iOS Bitcode optimizations in the native build. Accepts the name of an iOS build configuration to enable for a single configuration and disable for all others, e.g. Debug, Release. Not available in Expo Go. Defaults to `undefined` which uses the template's predefined settings.

`config`[](https://docs.expo.dev/versions/latest/sdk/audio/#config)

Type: `object` • Path: `ios.config`

Note: This property key is not included in the production manifest and will evaluate to `undefined`. It is used internally only in the build process, because it contains API keys that some may want to keep private.

`branch`[](https://docs.expo.dev/versions/latest/sdk/audio/#branch)

Type: `object` • Path: `ios.config.branch`

[Branch](https://branch.io/) key to hook up Branch linking services.

`apiKey`[](https://docs.expo.dev/versions/latest/sdk/audio/#apikey)

Type: `string` • Path: `ios.config.branch.apiKey`

Your Branch API key

`usesNonExemptEncryption`[](https://docs.expo.dev/versions/latest/sdk/audio/#usesnonexemptencryption)

Type: `boolean` • Path: `ios.config.usesNonExemptEncryption`

Sets `ITSAppUsesNonExemptEncryption` in the standalone ipa's Info.plist to the given boolean value.

`googleMapsApiKey`[](https://docs.expo.dev/versions/latest/sdk/audio/#googlemapsapikey)

Type: `string` • Path: `ios.config.googleMapsApiKey`

[Google Maps iOS SDK](https://developers.google.com/maps/documentation/ios-sdk/start) key for your standalone app.

`googleServicesFile`[](https://docs.expo.dev/versions/latest/sdk/audio/#googleservicesfile)

Type: `string` • Path: `ios.googleServicesFile`

[Firebase Configuration File](https://support.google.com/firebase/answer/7015592) Location of the `GoogleService-Info.plist` file for configuring Firebase.

`supportsTablet`[](https://docs.expo.dev/versions/latest/sdk/audio/#supportstablet)

Type: `boolean` • Path: `ios.supportsTablet`

Whether your standalone iOS app supports tablet screen sizes. Defaults to `false`.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-11)

Set this value in `info.plist` under `UISupportedInterfaceOrientations~ipad`

`isTabletOnly`[](https://docs.expo.dev/versions/latest/sdk/audio/#istabletonly)

Type: `boolean` • Path: `ios.isTabletOnly`

If true, indicates that your standalone iOS app does not support handsets, and only supports tablets.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-12)

Set this value in `info.plist` under `UISupportedInterfaceOrientations`

`requireFullScreen`[](https://docs.expo.dev/versions/latest/sdk/audio/#requirefullscreen)

Type: `boolean` • Path: `ios.requireFullScreen`

If true, indicates that your standalone iOS app does not support Slide Over and Split View on iPad. Defaults to `false`

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-13)

Use Xcode to set `UIRequiresFullScreen`

`userInterfaceStyle`[](https://docs.expo.dev/versions/latest/sdk/audio/#userinterfacestyle-1)

Type: `enum` • Path: `ios.userInterfaceStyle`

Configuration to force the app to always use the light or dark user-interface appearance, such as "dark mode", or make it automatically adapt to the system preferences. If not provided, defaults to `light`.

`infoPlist`[](https://docs.expo.dev/versions/latest/sdk/audio/#infoplist)

Type: `object` • Path: `ios.infoPlist`

Dictionary of arbitrary configuration to add to your standalone app's native Info.plist. Applied prior to all other Expo-specific configuration. No other validation is performed, so use this at your own risk of rejection from the App Store.

`entitlements`[](https://docs.expo.dev/versions/latest/sdk/audio/#entitlements)

Type: `object` • Path: `ios.entitlements`

Dictionary of arbitrary configuration to add to your standalone app's native \*.entitlements (plist). Applied prior to all other Expo-specific configuration. No other validation is performed, so use this at your own risk of rejection from the App Store.

`privacyManifests`[](https://docs.expo.dev/versions/latest/sdk/audio/#privacymanifests)

Type: `object` • Path: `ios.privacyManifests`

Dictionary of privacy manifest definitions to add to your app's native PrivacyInfo.xcprivacy file. [Learn more](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files)

`NSPrivacyAccessedAPITypes`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacyaccessedapitypes)

Type: `array` • Path: `ios.privacyManifests.NSPrivacyAccessedAPITypes`

A list of required reasons of why your app uses restricted API categories. [Learn more](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)

`NSPrivacyAccessedAPIType`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacyaccessedapitype)

Type: `string` • Path: `ios.privacyManifests.NSPrivacyAccessedAPITypes.NSPrivacyAccessedAPIType`

A string that identifies the category of required reason APIs your app uses

`NSPrivacyAccessedAPITypeReasons`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacyaccessedapitypereasons)

Type: `array` • Path: `ios.privacyManifests.NSPrivacyAccessedAPITypes.NSPrivacyAccessedAPITypeReasons`

A list of reasons for a specific category.

`NSPrivacyTrackingDomains`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacytrackingdomains)

Type: `array` • Path: `ios.privacyManifests.NSPrivacyTrackingDomains`

A list of domains that your app uses for tracking.

`NSPrivacyTracking`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacytracking)

Type: `boolean` • Path: `ios.privacyManifests.NSPrivacyTracking`

A Boolean that indicates whether your app or third-party SDK uses data for tracking.

`NSPrivacyCollectedDataTypes`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacycollecteddatatypes)

Type: `array` • Path: `ios.privacyManifests.NSPrivacyCollectedDataTypes`

A list of collected data types that your app uses.

`NSPrivacyCollectedDataType`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacycollecteddatatype)

Type: `string` • Path: `ios.privacyManifests.NSPrivacyCollectedDataTypes.NSPrivacyCollectedDataType`

`NSPrivacyCollectedDataTypeLinked`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacycollecteddatatypelinked)

Type: `boolean` • Path: `ios.privacyManifests.NSPrivacyCollectedDataTypes.NSPrivacyCollectedDataTypeLinked`

`NSPrivacyCollectedDataTypeTracking`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacycollecteddatatypetracking)

Type: `boolean` • Path: `ios.privacyManifests.NSPrivacyCollectedDataTypes.NSPrivacyCollectedDataTypeTracking`

`NSPrivacyCollectedDataTypePurposes`[](https://docs.expo.dev/versions/latest/sdk/audio/#nsprivacycollecteddatatypepurposes)

Type: `array` • Path: `ios.privacyManifests.NSPrivacyCollectedDataTypes.NSPrivacyCollectedDataTypePurposes`

`associatedDomains`[](https://docs.expo.dev/versions/latest/sdk/audio/#associateddomains)

Type: `array` • Path: `ios.associatedDomains`

An array that contains Associated Domains for the standalone app. [Learn more](https://developer.apple.com/documentation/safariservices/supporting_associated_domains).

Entries must follow the format `applinks:<fully qualified domain>[:port number]`. [Learn more](https://developer.apple.com/documentation/safariservices/supporting_associated_domains).

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-14)

Build with EAS, or use Xcode to enable this capability manually. [Learn more](https://developer.apple.com/documentation/safariservices/supporting_associated_domains).

`usesIcloudStorage`[](https://docs.expo.dev/versions/latest/sdk/audio/#usesicloudstorage)

Type: `boolean` • Path: `ios.usesIcloudStorage`

A boolean indicating if the app uses iCloud Storage for `DocumentPicker`. See `DocumentPicker` docs for details.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-15)

Use Xcode, or ios.entitlements to configure this.

`usesAppleSignIn`[](https://docs.expo.dev/versions/latest/sdk/audio/#usesapplesignin)

Type: `boolean` • Path: `ios.usesAppleSignIn`

A boolean indicating if the app uses Apple Sign-In. See `AppleAuthentication` docs for details.

`usesBroadcastPushNotifications`[](https://docs.expo.dev/versions/latest/sdk/audio/#usesbroadcastpushnotifications)

Type: `boolean` • Path: `ios.usesBroadcastPushNotifications`

A boolean indicating if the app uses Push Notifications Broadcast option for Push Notifications capability. If true, EAS CLI will use the value during capability syncing. If EAS CLI is not used, this configuration will not have any effect unless another tool is used to operate on it, so enable the capability manually on the Apple Developer Portal in that case.

`accessesContactNotes`[](https://docs.expo.dev/versions/latest/sdk/audio/#accessescontactnotes)

Type: `boolean` • Path: `ios.accessesContactNotes`

A Boolean value that indicates whether the app may access the notes stored in contacts. You must [receive permission from Apple](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_contacts_notes) before you can submit your app for review with this capability.

`splash`[](https://docs.expo.dev/versions/latest/sdk/audio/#splash-1)

Type: `object` • Path: `ios.splash`

Configuration for loading and splash screen for standalone iOS apps.

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-5)

Type: `string` • Path: `ios.splash.backgroundColor`

Color to fill the loading screen background

6 character long hex color string, for example, `'#000000'`

`resizeMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#resizemode-1)

Type: `enum` • Path: `ios.splash.resizeMode`

Determines how the `image` will be displayed in the splash loading screen. Must be one of `cover` or `contain`, defaults to `contain`.

`image`[](https://docs.expo.dev/versions/latest/sdk/audio/#image-1)

Type: `string` • Path: `ios.splash.image`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`tabletImage`[](https://docs.expo.dev/versions/latest/sdk/audio/#tabletimage)

Type: `string` • Path: `ios.splash.tabletImage`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`dark`[](https://docs.expo.dev/versions/latest/sdk/audio/#dark-1)

Type: `object` • Path: `ios.splash.dark`

Configuration for loading and splash screen for standalone iOS apps in dark mode.

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-6)

Type: `string` • Path: `ios.splash.dark.backgroundColor`

Color to fill the loading screen background

6 character long hex color string, for example, `'#000000'`

`resizeMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#resizemode-2)

Type: `enum` • Path: `ios.splash.dark.resizeMode`

Determines how the `image` will be displayed in the splash loading screen. Must be one of `cover` or `contain`, defaults to `contain`.

`image`[](https://docs.expo.dev/versions/latest/sdk/audio/#image-2)

Type: `string` • Path: `ios.splash.dark.image`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`tabletImage`[](https://docs.expo.dev/versions/latest/sdk/audio/#tabletimage-1)

Type: `string` • Path: `ios.splash.dark.tabletImage`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`jsEngine`[](https://docs.expo.dev/versions/latest/sdk/audio/#jsengine-1)

Type: `enum` • Path: `ios.jsEngine`

Specifies the JavaScript engine for iOS apps. Supported only on EAS Build. Defaults to `hermes`. Valid values: `hermes`, `jsc`.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-16)

To change the JavaScript engine, update the `expo.jsEngine` value in `ios/Podfile.properties.json`

`newArchEnabled`[](https://docs.expo.dev/versions/latest/sdk/audio/#newarchenabled-1)

Type: `boolean` • Path: `ios.newArchEnabled`

A Boolean value that indicates whether the iOS app should use the new architecture.

`runtimeVersion`[](https://docs.expo.dev/versions/latest/sdk/audio/#runtimeversion-1)

One of types:

-   `string` matching the following pattern: `^[a-zA-Z\d][a-zA-Z\d._+()-]{0,254}$`
-   `string` matching the following pattern: `^exposdk:((\d+\.\d+\.\d+)|(UNVERSIONED))$`
-   An `object` with the following properties:
    
    `policy`[](https://docs.expo.dev/versions/latest/sdk/audio/#policy-1)
    
    Type: `enum` • Path: `ios.runtimeVersion.policy`
    
    Valid values: `nativeVersion`, `sdkVersion`, `appVersion`, `fingerprint`.
    

Property indicating compatibility between an iOS build's native code and an OTA update for the iOS platform. If provided, this will override the value of the top level `runtimeVersion` key on iOS.

`version`[](https://docs.expo.dev/versions/latest/sdk/audio/#version-1)

Type: `string` • Path: `ios.version`

Your iOS app version. Takes precedence over the root `version` field. In addition to this field, you'll also use `ios.buildNumber` — read more about how to version your app [here](https://docs.expo.dev/distribution/app-stores/#versioning-your-app). This corresponds to `CFBundleShortVersionString`. The required format can be found [here](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleshortversionstring).

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-17)

To change your app version, edit the 'Version' field in Xcode\`

`android`[](https://docs.expo.dev/versions/latest/sdk/audio/#android)

Type: `object`

Configuration that is specific to the Android platform.

`publishManifestPath`[](https://docs.expo.dev/versions/latest/sdk/audio/#publishmanifestpath-1)

Type: `string` • Path: `android.publishManifestPath`

The manifest for the Android version of your app will be written to this path during publish.

`publishBundlePath`[](https://docs.expo.dev/versions/latest/sdk/audio/#publishbundlepath-1)

Type: `string` • Path: `android.publishBundlePath`

The bundle for the Android version of your app will be written to this path during publish.

`package`[](https://docs.expo.dev/versions/latest/sdk/audio/#package)

Type: `string` • Path: `android.package`

The package name for your Android standalone app. You make it up, but it needs to be unique on the Play Store. See [this StackOverflow question](http://stackoverflow.com/questions/6273892/android-package-name-convention).

Reverse DNS notation unique name for your app. Valid Android Application ID. For example, `com.example.app`, where `com.example` is our domain and `app` is our app. The name may only contain lowercase and uppercase letters (a-z, A-Z), numbers (0-9) and underscores (\_), separated by periods (.). Each component of the name should start with a lowercase letter.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-18)

This is set in `android/app/build.gradle` as `applicationId` as well as in your `AndroidManifest.xml` file (multiple places).

`versionCode`[](https://docs.expo.dev/versions/latest/sdk/audio/#versioncode)

Type: `integer` • Path: `android.versionCode`

Version number required by Google Play. Increment by one for each release. Must be a positive integer. [Learn more](https://developer.android.com/studio/publish/versioning.html)

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-19)

This is set in `android/app/build.gradle` as `versionCode`

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-7)

Type: `string` • Path: `android.backgroundColor`

The background color for your Android app, behind any of your React views. Overrides the top-level `backgroundColor` key if it is present.

6 character long hex color string, for example, `'#000000'`

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-20)

This is set in `android/app/src/main/AndroidManifest.xml` under `android:windowBackground`

`userInterfaceStyle`[](https://docs.expo.dev/versions/latest/sdk/audio/#userinterfacestyle-2)

Type: `enum` • Path: `android.userInterfaceStyle`

Configuration to force the app to always use the light or dark user-interface appearance, such as "dark mode", or make it automatically adapt to the system preferences. If not provided, defaults to `light`. Requires `expo-system-ui` be installed in your project to work on Android.

`icon`[](https://docs.expo.dev/versions/latest/sdk/audio/#icon-3)

Type: `string` • Path: `android.icon`

Local path or remote URL to an image to use for your app's icon on Android. If specified, this overrides the top-level `icon` key. We recommend that you use a 1024x1024 png file (transparency is recommended for the Google Play Store). This icon will appear on the home screen and within the Expo Go app.

`adaptiveIcon`[](https://docs.expo.dev/versions/latest/sdk/audio/#adaptiveicon)

Type: `object` • Path: `android.adaptiveIcon`

Settings for an Adaptive Launcher Icon on Android. [Learn more](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)

`foregroundImage`[](https://docs.expo.dev/versions/latest/sdk/audio/#foregroundimage)

Type: `string` • Path: `android.adaptiveIcon.foregroundImage`

Local path or remote URL to an image to use for your app's icon on Android. If specified, this overrides the top-level `icon` and the `android.icon` keys. Should follow the [specified guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive). This icon will appear on the home screen.

`monochromeImage`[](https://docs.expo.dev/versions/latest/sdk/audio/#monochromeimage)

Type: `string` • Path: `android.adaptiveIcon.monochromeImage`

Local path or remote URL to an image representing the Android 13+ monochromatic icon. Should follow the [specified guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive). This icon will appear on the home screen when the user enables 'Themed icons' in system settings on a device running Android 13+.

`backgroundImage`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundimage)

Type: `string` • Path: `android.adaptiveIcon.backgroundImage`

Local path or remote URL to a background image for your app's Adaptive Icon on Android. If specified, this overrides the `backgroundColor` key. Must have the same dimensions as `foregroundImage`, and has no effect if `foregroundImage` is not specified. Should follow the [specified guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive).

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-8)

Type: `string` • Path: `android.adaptiveIcon.backgroundColor`

Color to use as the background for your app's Adaptive Icon on Android. Defaults to white, `#FFFFFF`. Has no effect if `foregroundImage` is not specified.

6 character long hex color string, for example, `'#000000'`

`playStoreUrl`[](https://docs.expo.dev/versions/latest/sdk/audio/#playstoreurl)

Type: `string` • Path: `android.playStoreUrl`

URL to your app on the Google Play Store, if you have deployed it there. This is used to link to your store page from your Expo project page if your app is public.

Example

`"https://play.google.com/store/apps/details?id=host.exp.exponent"`

`permissions`[](https://docs.expo.dev/versions/latest/sdk/audio/#permissions)

Type: `array` • Path: `android.permissions`

A list of permissions to add to the app `AndroidManifest.xml` during prebuild. For example: `['android.permission.SCHEDULE_EXACT_ALARM']`

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-21)

To change the permissions your app requests, edit `AndroidManifest.xml` directly. To prevent your app from requesting specific permissions (which may automatically be added through an installed native package), add those permissions to `AndroidManifest.xml` along with a `tools:node="remove"` tag.

`blockedPermissions`[](https://docs.expo.dev/versions/latest/sdk/audio/#blockedpermissions)

Type: `array` • Path: `android.blockedPermissions`

List of permissions to block in the final `AndroidManifest.xml`. This is useful for removing permissions that are added by native package `AndroidManifest.xml` files which are merged into the final manifest. Internally this feature uses the `tools:node="remove"` XML attribute to remove permissions. Not available in Expo Go.

`googleServicesFile`[](https://docs.expo.dev/versions/latest/sdk/audio/#googleservicesfile-1)

Type: `string` • Path: `android.googleServicesFile`

[Firebase Configuration File](https://support.google.com/firebase/answer/7015592) Location of the `google-services.json` file for configuring Firebase. Including this key automatically enables FCM in your standalone app.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-22)

Add or edit the file directly at `android/app/google-services.json`

`config`[](https://docs.expo.dev/versions/latest/sdk/audio/#config-1)

Type: `object` • Path: `android.config`

Note: This property key is not included in the production manifest and will evaluate to `undefined`. It is used internally only in the build process, because it contains API keys that some may want to keep private.

`branch`[](https://docs.expo.dev/versions/latest/sdk/audio/#branch-1)

Type: `object` • Path: `android.config.branch`

[Branch](https://branch.io/) key to hook up Branch linking services.

`apiKey`[](https://docs.expo.dev/versions/latest/sdk/audio/#apikey-1)

Type: `string` • Path: `android.config.branch.apiKey`

Your Branch API key

`googleMaps`[](https://docs.expo.dev/versions/latest/sdk/audio/#googlemaps)

Type: `object` • Path: `android.config.googleMaps`

[Google Maps Android SDK](https://developers.google.com/maps/documentation/android-api/signup) configuration for your standalone app.

`apiKey`[](https://docs.expo.dev/versions/latest/sdk/audio/#apikey-2)

Type: `string` • Path: `android.config.googleMaps.apiKey`

Your Google Maps Android SDK API key

`googleMobileAdsAppId`[](https://docs.expo.dev/versions/latest/sdk/audio/#googlemobileadsappid-1)

Type: `string` • Path: `android.config.googleMobileAdsAppId`

[Google Mobile Ads App ID](https://support.google.com/admob/answer/6232340) Google AdMob App ID.

`googleMobileAdsAutoInit`[](https://docs.expo.dev/versions/latest/sdk/audio/#googlemobileadsautoinit-1)

Type: `boolean` • Path: `android.config.googleMobileAdsAutoInit`

A boolean indicating whether to initialize Google App Measurement and begin sending user-level event data to Google immediately when the app starts. The default in Expo (Client and in standalone apps) is `false`. [Sets the opposite of the given value to the following key in `Info.plist`](https://developers.google.com/admob/ios/eu-consent#delay_app_measurement_optional)

`splash`[](https://docs.expo.dev/versions/latest/sdk/audio/#splash-2)

Type: `object` • Path: `android.splash`

Configuration for loading and splash screen for managed and standalone Android apps.

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-9)

Type: `string` • Path: `android.splash.backgroundColor`

Color to fill the loading screen background

6 character long hex color string, for example, `'#000000'`

`resizeMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#resizemode-3)

Type: `enum` • Path: `android.splash.resizeMode`

Determines how the `image` will be displayed in the splash loading screen. Must be one of `cover`, `contain` or `native`, defaults to `contain`.

`image`[](https://docs.expo.dev/versions/latest/sdk/audio/#image-3)

Type: `string` • Path: `android.splash.image`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`mdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#mdpi)

Type: `string` • Path: `android.splash.mdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Natural sized image (baseline)`

`hdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#hdpi)

Type: `string` • Path: `android.splash.hdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 1.5x`

`xhdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#xhdpi)

Type: `string` • Path: `android.splash.xhdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 2x`

`xxhdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#xxhdpi)

Type: `string` • Path: `android.splash.xxhdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 3x`

`xxxhdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#xxxhdpi)

Type: `string` • Path: `android.splash.xxxhdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 4x`

`dark`[](https://docs.expo.dev/versions/latest/sdk/audio/#dark-2)

Type: `object` • Path: `android.splash.dark`

Configuration for loading and splash screen for managed and standalone Android apps in dark mode.

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-10)

Type: `string` • Path: `android.splash.dark.backgroundColor`

Color to fill the loading screen background

6 character long hex color string, for example, `'#000000'`

`resizeMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#resizemode-4)

Type: `enum` • Path: `android.splash.dark.resizeMode`

Determines how the `image` will be displayed in the splash loading screen. Must be one of `cover`, `contain` or `native`, defaults to `contain`.

`image`[](https://docs.expo.dev/versions/latest/sdk/audio/#image-4)

Type: `string` • Path: `android.splash.dark.image`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`mdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#mdpi-1)

Type: `string` • Path: `android.splash.dark.mdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Natural sized image (baseline)`

`hdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#hdpi-1)

Type: `string` • Path: `android.splash.dark.hdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 1.5x`

`xhdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#xhdpi-1)

Type: `string` • Path: `android.splash.dark.xhdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 2x`

`xxhdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#xxhdpi-1)

Type: `string` • Path: `android.splash.dark.xxhdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 3x`

`xxxhdpi`[](https://docs.expo.dev/versions/latest/sdk/audio/#xxxhdpi-1)

Type: `string` • Path: `android.splash.dark.xxxhdpi`

Local path or remote URL to an image to fill the background of the loading screen in "native" mode. Image size and aspect ratio are up to you. [Learn more](https://developer.android.com/training/multiscreen/screendensities)

`Scale 4x`

`intentFilters`[](https://docs.expo.dev/versions/latest/sdk/audio/#intentfilters)

Type: `array` • Path: `android.intentFilters`

Configuration for setting an array of custom intent filters in Android manifest. [Learn more](https://developer.android.com/guide/components/intents-filters)

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-23)

This is set in `AndroidManifest.xml` directly. [Learn more.](https://developer.android.com/guide/components/intents-filters)

Example

`[ { "autoVerify": true, "action": "VIEW", "data": { "scheme": "https", "host": "*.example.com" }, "category": [ "BROWSABLE", "DEFAULT" ] } ]`

`autoVerify`[](https://docs.expo.dev/versions/latest/sdk/audio/#autoverify)

Type: `boolean` • Path: `android.intentFilters.autoVerify`

You may also use an intent filter to set your app as the default handler for links (without showing the user a dialog with options). To do so use `true` and then configure your server to serve a JSON file verifying that you own the domain. [Learn more](https://developer.android.com/training/app-links)

`action`[](https://docs.expo.dev/versions/latest/sdk/audio/#action)

Type: `string` • Path: `android.intentFilters.action`

`data`[](https://docs.expo.dev/versions/latest/sdk/audio/#data)

Type: `undefined` • Path: `android.intentFilters.data`

`category`[](https://docs.expo.dev/versions/latest/sdk/audio/#category)

Type: `undefined` • Path: `android.intentFilters.category`

`allowBackup`[](https://docs.expo.dev/versions/latest/sdk/audio/#allowbackup)

Type: `boolean` • Path: `android.allowBackup`

Allows your user's app data to be automatically backed up to their Google Drive. If this is set to false, no backup or restore of the application will ever be performed (this is useful if your app deals with sensitive information). Defaults to the Android default, which is `true`.

`softwareKeyboardLayoutMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#softwarekeyboardlayoutmode)

Type: `enum` • Path: `android.softwareKeyboardLayoutMode`

Determines how the software keyboard will impact the layout of your application. This maps to the `android:windowSoftInputMode` property. Defaults to `resize`. Valid values: `resize`, `pan`.

`jsEngine`[](https://docs.expo.dev/versions/latest/sdk/audio/#jsengine-2)

Type: `enum` • Path: `android.jsEngine`

Specifies the JavaScript engine for Android apps. Supported only on EAS Build and in Expo Go. Defaults to `hermes`. Valid values: `hermes`, `jsc`.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-24)

To change the JavaScript engine, update the `expo.jsEngine` value in `android/gradle.properties`

`newArchEnabled`[](https://docs.expo.dev/versions/latest/sdk/audio/#newarchenabled-2)

Type: `boolean` • Path: `android.newArchEnabled`

A Boolean value that indicates whether the Android app should use the new architecture.

`runtimeVersion`[](https://docs.expo.dev/versions/latest/sdk/audio/#runtimeversion-2)

One of types:

-   `string` matching the following pattern: `^[a-zA-Z\d][a-zA-Z\d._+()-]{0,254}$`
-   `string` matching the following pattern: `^exposdk:((\d+\.\d+\.\d+)|(UNVERSIONED))$`
-   An `object` with the following properties:
    
    `policy`[](https://docs.expo.dev/versions/latest/sdk/audio/#policy-2)
    
    Type: `enum` • Path: `android.runtimeVersion.policy`
    
    Valid values: `nativeVersion`, `sdkVersion`, `appVersion`, `fingerprint`.
    

Property indicating compatibility between a Android build's native code and an OTA update for the Android platform. If provided, this will override the value of top level `runtimeVersion` key on Android.

`version`[](https://docs.expo.dev/versions/latest/sdk/audio/#version-2)

Type: `string` • Path: `android.version`

Your android app version. Takes precedence over the root `version` field. In addition to this field, you'll also use `android.versionCode` — read more about how to version your app [here](https://docs.expo.dev/distribution/app-stores/#versioning-your-app). This corresponds to `versionName`. The required format can be found [here](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleshortversionstring).

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-25)

To change your app version, edit the `versionName` string in `android/app/build.gradle`

`web`[](https://docs.expo.dev/versions/latest/sdk/audio/#web)

Type: `object`

Configuration that is specific to the web platform.

`output`[](https://docs.expo.dev/versions/latest/sdk/audio/#output)

Type: `enum` • Path: `web.output`

Sets the export method for the web app for both `expo start` and `expo export`. `static` statically renders HTML files for every route in the `app/` directory, which is available only in Expo Router apps. `single` outputs a Single Page Application (SPA), with a single `index.html` in the output folder, and has no statically indexable HTML. `server` outputs static HTML, and API Routes for hosting with a custom Node.js server. Defaults to `single`.

`favicon`[](https://docs.expo.dev/versions/latest/sdk/audio/#favicon)

Type: `string` • Path: `web.favicon`

Relative path of an image to use for your app's favicon.

`name`[](https://docs.expo.dev/versions/latest/sdk/audio/#name-1)

Type: `string` • Path: `web.name`

Defines the title of the document, defaults to the outer level name

`shortName`[](https://docs.expo.dev/versions/latest/sdk/audio/#shortname)

Type: `string` • Path: `web.shortName`

A short version of the app's name, 12 characters or fewer. Used in app launcher and new tab pages. Maps to `short_name` in the PWA manifest.json. Defaults to the `name` property.

Maximum 12 characters long

`lang`[](https://docs.expo.dev/versions/latest/sdk/audio/#lang)

Type: `string` • Path: `web.lang`

Specifies the primary language for the values in the name and short\_name members. This value is a string containing a single language tag.

`scope`[](https://docs.expo.dev/versions/latest/sdk/audio/#scope)

Type: `string` • Path: `web.scope`

Defines the navigation scope of this website's context. This restricts what web pages can be viewed while the manifest is applied. If the user navigates outside the scope, it returns to a normal web page inside a browser tab/window. If the scope is a relative URL, the base URL will be the URL of the manifest.

`themeColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#themecolor)

Type: `string` • Path: `web.themeColor`

Defines the color of the Android tool bar, and may be reflected in the app's preview in task switchers.

6 character long hex color string, for example, `'#000000'`

`description`[](https://docs.expo.dev/versions/latest/sdk/audio/#description-1)

Type: `string` • Path: `web.description`

Provides a general description of what the pinned website does.

`dir`[](https://docs.expo.dev/versions/latest/sdk/audio/#dir)

Type: `enum` • Path: `web.dir`

Specifies the primary text direction for the name, short\_name, and description members. Together with the lang member, it helps the correct display of right-to-left languages.

`display`[](https://docs.expo.dev/versions/latest/sdk/audio/#display)

Type: `enum` • Path: `web.display`

Defines the developers’ preferred display mode for the website.

`startUrl`[](https://docs.expo.dev/versions/latest/sdk/audio/#starturl)

Type: `string` • Path: `web.startUrl`

The URL that loads when a user launches the application (e.g., when added to home screen), typically the index. Note: This has to be a relative URL, relative to the manifest URL.

`orientation`[](https://docs.expo.dev/versions/latest/sdk/audio/#orientation-1)

Type: `enum` • Path: `web.orientation`

Defines the default orientation for all the website's top level browsing contexts.

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-11)

Type: `string` • Path: `web.backgroundColor`

Defines the expected “background color” for the website. This value repeats what is already available in the site’s CSS, but can be used by browsers to draw the background color of a shortcut when the manifest is available before the stylesheet has loaded. This creates a smooth transition between launching the web application and loading the site's content.

6 character long hex color string, for example, `'#000000'`

`barStyle`[](https://docs.expo.dev/versions/latest/sdk/audio/#barstyle-2)

Type: `enum` • Path: `web.barStyle`

If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar.

`preferRelatedApplications`[](https://docs.expo.dev/versions/latest/sdk/audio/#preferrelatedapplications)

Type: `boolean` • Path: `web.preferRelatedApplications`

Hints for the user agent to indicate to the user that the specified native applications (defined in expo.ios and expo.android) are recommended over the website.

`dangerous`[](https://docs.expo.dev/versions/latest/sdk/audio/#dangerous)

Type: `object` • Path: `web.dangerous`

Experimental features. These will break without deprecation notice.

`splash`[](https://docs.expo.dev/versions/latest/sdk/audio/#splash-3)

Type: `object` • Path: `web.splash`

Configuration for PWA splash screens.

Bare Workflow[](https://docs.expo.dev/versions/latest/sdk/audio/#bare-workflow-26)

`backgroundColor`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundcolor-12)

Type: `string` • Path: `web.splash.backgroundColor`

Color to fill the loading screen background

6 character long hex color string, for example, `'#000000'`

`resizeMode`[](https://docs.expo.dev/versions/latest/sdk/audio/#resizemode-5)

Type: `enum` • Path: `web.splash.resizeMode`

Determines how the `image` will be displayed in the splash loading screen. Must be one of `cover` or `contain`, defaults to `contain`.

`image`[](https://docs.expo.dev/versions/latest/sdk/audio/#image-5)

Type: `string` • Path: `web.splash.image`

Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.

`config`[](https://docs.expo.dev/versions/latest/sdk/audio/#config-2)

Type: `object` • Path: `web.config`

Firebase web configuration. Used by the expo-firebase packages on both web and native. [Learn more](https://firebase.google.com/docs/reference/js/firebase.html#initializeapp)

`firebase`[](https://docs.expo.dev/versions/latest/sdk/audio/#firebase)

Type: `object` • Path: `web.config.firebase`

`apiKey`[](https://docs.expo.dev/versions/latest/sdk/audio/#apikey-3)

Type: `string` • Path: `web.config.firebase.apiKey`

`authDomain`[](https://docs.expo.dev/versions/latest/sdk/audio/#authdomain)

Type: `string` • Path: `web.config.firebase.authDomain`

`databaseURL`[](https://docs.expo.dev/versions/latest/sdk/audio/#databaseurl)

Type: `string` • Path: `web.config.firebase.databaseURL`

`projectId`[](https://docs.expo.dev/versions/latest/sdk/audio/#projectid)

Type: `string` • Path: `web.config.firebase.projectId`

`storageBucket`[](https://docs.expo.dev/versions/latest/sdk/audio/#storagebucket)

Type: `string` • Path: `web.config.firebase.storageBucket`

`messagingSenderId`[](https://docs.expo.dev/versions/latest/sdk/audio/#messagingsenderid)

Type: `string` • Path: `web.config.firebase.messagingSenderId`

`appId`[](https://docs.expo.dev/versions/latest/sdk/audio/#appid)

Type: `string` • Path: `web.config.firebase.appId`

`measurementId`[](https://docs.expo.dev/versions/latest/sdk/audio/#measurementid)

Type: `string` • Path: `web.config.firebase.measurementId`

`bundler`[](https://docs.expo.dev/versions/latest/sdk/audio/#bundler)

Type: `enum` • Path: `web.bundler`

Sets the bundler to use for the web platform. Only supported in the local CLI `npx expo`. Defaults to `webpack` if the `@expo/webpack-config` package is installed, if not, it defaults to `metro`.

`experiments`[](https://docs.expo.dev/versions/latest/sdk/audio/#experiments)

Type: `object`

Enable experimental features that may be unstable, unsupported, or removed without deprecation notices.

`baseUrl`[](https://docs.expo.dev/versions/latest/sdk/audio/#baseurl)

Type: `string` • Path: `experiments.baseUrl`

Export a website relative to a subpath of a domain. The path will be prepended as-is to links to all bundled resources. Prefix the path with a `/` (recommended) to load all resources relative to the server root. If the path does not start with a `/` then resources will be loaded relative to the code that requests them, this could lead to unexpected behavior. Example '/subpath'. Defaults to '' (empty string).

`supportsTVOnly`[](https://docs.expo.dev/versions/latest/sdk/audio/#supportstvonly)

Type: `boolean` • Path: `experiments.supportsTVOnly`

If true, indicates that this project does not support tablets or handsets, and only supports Apple TV and Android TV

`tsconfigPaths`[](https://docs.expo.dev/versions/latest/sdk/audio/#tsconfigpaths)

Type: `boolean` • Path: `experiments.tsconfigPaths`

Enable tsconfig/jsconfig `compilerOptions.paths` and `compilerOptions.baseUrl` support for import aliases in Metro.

`typedRoutes`[](https://docs.expo.dev/versions/latest/sdk/audio/#typedroutes)

Type: `boolean` • Path: `experiments.typedRoutes`

Enable support for statically typed links in Expo Router. This feature requires TypeScript be set up in your Expo Router v2 project.

`turboModules`[](https://docs.expo.dev/versions/latest/sdk/audio/#turbomodules)

Type: `boolean` • Path: `experiments.turboModules`

Enables Turbo Modules, which are a type of native modules that use a different way of communicating between JS and platform code. When installing a Turbo Module you will need to enable this experimental option (the library still needs to be a part of Expo SDK already, like react-native-reanimated v2). Turbo Modules do not support remote debugging and enabling this option will disable remote debugging.

`reactCanary`[](https://docs.expo.dev/versions/latest/sdk/audio/#reactcanary)

Type: `boolean` • Path: `experiments.reactCanary`

Experimentally use a vendored canary build of React for testing upcoming features.

`reactCompiler`[](https://docs.expo.dev/versions/latest/sdk/audio/#reactcompiler)

Type: `boolean` • Path: `experiments.reactCompiler`

Experimentally enable React Compiler.

`reactServerComponentRoutes`[](https://docs.expo.dev/versions/latest/sdk/audio/#reactservercomponentroutes)

Type: `boolean` • Path: `experiments.reactServerComponentRoutes`

Experimentally enable React Server Components by default in Expo Router and concurrent routing for transitions.

`reactServerFunctions`[](https://docs.expo.dev/versions/latest/sdk/audio/#reactserverfunctions)

Type: `boolean` • Path: `experiments.reactServerFunctions`

Experimentally enable React Server Functions support in Expo CLI and Expo Router.

`_internal`[](https://docs.expo.dev/versions/latest/sdk/audio/#_internal)

Type: `object`

Internal properties for developer tools

`pluginHistory`[](https://docs.expo.dev/versions/latest/sdk/audio/#pluginhistory)

Type: `object` • Path: `_internal.pluginHistory`

List of plugins already run on the config




# Asset - Expo Documentation

> ## Excerpt
> A universal library that allows downloading assets and using them with other libraries.

---
## Expo Asset

A universal library that allows downloading assets and using them with other libraries.

___

`expo-asset` provides an interface to Expo's asset system. An asset is any file that lives alongside the source code of your app that the app needs at runtime. Examples include images, fonts, and sounds. Expo's asset system integrates with React Native's, so that you can refer to files with `require('path/to/file')`. This is how you refer to static image files in React Native for use in an `Image` component, for example. Check out React Native's [documentation on static image resources](https://reactnative.dev/docs/images#static-image-resources) for more information. This method of referring to static image resources works out of the box with Expo.

## Installation[](https://docs.expo.dev/versions/latest/sdk/audio/#installation)

`-` `npx expo install expo-asset`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-asset) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/audio/#configuration-in-app-config)

You can configure `expo-asset` using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/audio/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": [
      [
        "expo-asset",
        {
          "assets": ["path/to/file.png", "path/to/directory"]
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/audio/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `assets` | `[]` | 
An array of asset files or directories to link to the native project. The paths should be relative to the project root so that the file names, whether specified directly or using a directory, will become the resource names.

Supported file types:

-   Images: `.png`, `.jpg`, `.gif`
-   Media: `.mp4`, `.mp3`, `.lottie`
-   SQLite database files: `.db`

> Note: To import an existing database file (`.db`), see instructions in [SQLite API reference](https://docs.expo.dev/versions/latest/sdk/sqlite/#import-an-existing-database). For other file types such as `.lottie`, see [how to add a file extension to `assetExts` in metro config](https://docs.expo.dev/guides/customizing-metro/#adding-more-file-extensions-to-assetexts).

 |

### Usage[](https://docs.expo.dev/versions/latest/sdk/audio/#usage)

Learn more about how to use the `expo-asset` config plugin to embed an asset file in your project in [Load an asset at build time](https://docs.expo.dev/develop/user-interface/assets/#load-an-asset-at-build-time).

## API[](https://docs.expo.dev/versions/latest/sdk/audio/#api)

```
import { Asset } from 'expo-asset';
```

## Hooks[](https://docs.expo.dev/versions/latest/sdk/audio/#hooks)

### `useAssets(moduleIds)`[](https://docs.expo.dev/versions/latest/sdk/audio/#useassetsmoduleids)

| Parameter | Type |
| --- | --- |
| moduleIds | `number | number[]` |

  

Downloads and stores one or more assets locally. After the assets are loaded, this hook returns a list of asset instances. If something went wrong when loading the assets, an error is returned.

> Note, the assets are not "reloaded" when you dynamically change the asset list.

Returns an array containing:

-   on the first position, a list of all loaded assets. If they aren't loaded yet, this value is `undefined`.
-   on the second position, an error which encountered when loading the assets. If there was no error, this value is `undefined`.

Example

```
const [assets, error] = useAssets([require('path/to/asset.jpg'), require('path/to/other.png')]);

return assets ? <Image source={assets[0]} /> : null;
```

## Classes[](https://docs.expo.dev/versions/latest/sdk/audio/#classes)

### `Asset`[](https://docs.expo.dev/versions/latest/sdk/audio/#asset)

The `Asset` class represents an asset in your app. It gives metadata about the asset (such as its name and type) and provides facilities to load the asset data.

Asset Properties

### `downloaded`[](https://docs.expo.dev/versions/latest/sdk/audio/#downloaded)

Type: `boolean` • Default: `false`

Whether the asset has finished downloading from a call to [`downloadAsync()`](https://docs.expo.dev/versions/latest/sdk/audio/#downloadasync).

### `hash`[](https://docs.expo.dev/versions/latest/sdk/audio/#hash)

Read Only • Type: `null | string` • Default: `null`

The MD5 hash of the asset's data.

### `height`[](https://docs.expo.dev/versions/latest/sdk/audio/#height)

Type: `null | number` • Default: `null`

If the asset is an image, the height of the image data divided by the scale factor. The scale factor is the number after `@` in the filename, or `1` if not present.

### `localUri`[](https://docs.expo.dev/versions/latest/sdk/audio/#localuri)

Type: `null | string` • Default: `null`

If the asset has been downloaded (by calling [`downloadAsync()`](https://docs.expo.dev/versions/latest/sdk/audio/#downloadasync)), the `file://` URI pointing to the local file on the device that contains the asset data.

### `name`[](https://docs.expo.dev/versions/latest/sdk/audio/#name)

Type: `string`

The name of the asset file without the extension. Also without the part from `@` onward in the filename (used to specify scale factor for images).

### `type`[](https://docs.expo.dev/versions/latest/sdk/audio/#type)

Read Only • Type: `string`

The extension of the asset filename.

### `uri`[](https://docs.expo.dev/versions/latest/sdk/audio/#uri)

Read Only • Type: `string`

A URI that points to the asset's data on the remote server. When running the published version of your app, this refers to the location on Expo's asset server where Expo has stored your asset. When running the app from Expo CLI during development, this URI points to Expo CLI's server running on your computer and the asset is served directly from your computer. If you are not using Classic Updates (legacy), this field should be ignored as we ensure your assets are on device before running your application logic.

### `width`[](https://docs.expo.dev/versions/latest/sdk/audio/#width)

Type: `null | number` • Default: `null`

If the asset is an image, the width of the image data divided by the scale factor. The scale factor is the number after `@` in the filename, or `1` if not present.

Asset Methods

### `downloadAsync()`[](https://docs.expo.dev/versions/latest/sdk/audio/#downloadasync)

Downloads the asset data to a local file in the device's cache directory. Once the returned promise is fulfilled without error, the [`localUri`](https://docs.expo.dev/versions/latest/sdk/audio/#localuri) field of this asset points to a local file containing the asset data. The asset is only downloaded if an up-to-date local file for the asset isn't already present due to an earlier download. The downloaded `Asset` will be returned when the promise is resolved.

Returns a Promise which fulfills with an `Asset` instance.

### `fromMetadata(meta)`[](https://docs.expo.dev/versions/latest/sdk/audio/#frommetadatameta)

| Parameter | Type |
| --- | --- |
| meta | `[AssetMetadata](https://docs.expo.dev/versions/latest/sdk/audio/#assetmetadata)` |

  

### `fromModule(virtualAssetModule)`[](https://docs.expo.dev/versions/latest/sdk/audio/#frommodulevirtualassetmodule)

| Parameter | Type | Description |
| --- | --- | --- |
| virtualAssetModule | `string | number | { height: number, uri: string, width: number }` | 
The value of `require('path/to/file')` for the asset or external network URL

 |

  

Returns the [`Asset`](https://docs.expo.dev/versions/latest/sdk/audio/#asset) instance representing an asset given its module or URL.

The [`Asset`](https://docs.expo.dev/versions/latest/sdk/audio/#asset) instance for the asset.

### `fromURI(uri)`[](https://docs.expo.dev/versions/latest/sdk/audio/#fromuriuri)

  

### `loadAsync(moduleId)`[](https://docs.expo.dev/versions/latest/sdk/audio/#loadasyncmoduleid)

| Parameter | Type | Description |
| --- | --- | --- |
| moduleId | `string | number | number[] | string[]` | 
An array of `require('path/to/file')` or external network URLs. Can also be just one module or URL without an Array.

 |

  

A helper that wraps `Asset.fromModule(module).downloadAsync` for convenience.

Returns a Promise that fulfills with an array of `Asset`s when the asset(s) has been saved to disk.

Example

```
const [{ localUri }] = await Asset.loadAsync(require('./assets/snack-icon.png'));
```

## Types[](https://docs.expo.dev/versions/latest/sdk/audio/#types)

### `AssetDescriptor`[](https://docs.expo.dev/versions/latest/sdk/audio/#assetdescriptor)

| Property | Type | Description |
| --- | --- | --- |
| hash(optional) | `string | null` | \- |
| height(optional) | `number | null` | \- |
| name | `string` | \- |
| type | `string` | \- |
| uri | `string` | \- |
| width(optional) | `number | null` | \- |

### `AssetMetadata`[](https://docs.expo.dev/versions/latest/sdk/audio/#assetmetadata)

Type: `[Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<[PackagerAsset](https://github.com/facebook/react-native/blob/main/packages/assets/registry.js), 'httpServerLocation' | 'name' | 'hash' | 'type' | 'scales' | 'width' | 'height'>` extended by:

| Property | Type | Description |
| --- | --- | --- |
| fileHashes(optional) | `string[]` | \- |
| fileUris(optional) | `string[]` | \- |
| uri(optional) | `string` | \- |




# BackgroundFetch - Expo Documentation

> ## Excerpt
> A universal library that provides API for performing background fetch tasks.

---
A universal library that provides API for performing background fetch tasks.

___

`expo-background-fetch` provides an API to perform [background fetch](https://developer.apple.com/documentation/uikit/core_app/managing_your_app_s_life_cycle/preparing_your_app_to_run_in_the_background/updating_your_app_with_background_app_refresh) tasks, allowing you to run specific code periodically in the background to update your app. This module uses [TaskManager](https://docs.expo.dev/versions/latest/sdk/task-manager/) Native API under the hood.

#### Known issues [](https://docs.expo.dev/versions/latest/sdk/audio/#known-issues)

`BackgroundFetch` only works when the app is backgrounded, not if the app was terminated or upon device reboot. You can check out [the relevant GitHub issue](https://github.com/expo/expo/issues/3582) for more details.

On iOS the `BackgroundFetch` library requires you to use a [development build](https://docs.expo.dev/develop/development-builds/introduction/) since Background Fetch is not enabled in the iOS Expo Go app.

## Installation[](https://docs.expo.dev/versions/latest/sdk/audio/#installation)

`-` `npx expo install expo-background-fetch`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-background-fetch) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration [](https://docs.expo.dev/versions/latest/sdk/audio/#configuration)

To be able to run background fetch tasks on iOS, you need to add the `fetch` value to the `UIBackgroundModes` array in your app's Info.plist file. This is required for background fetch to work properly.

If you're using [CNG](https://docs.expo.dev/workflow/continuous-native-generation/), the required `UIBackgroundModes` configuration will be applied automatically by prebuild.

Configure UIBackgroundModes manually on iOS[](https://docs.expo.dev/versions/latest/sdk/audio/#configure-uibackgroundmodes-manually-on-ios)

If you're not using Continuous Native Generation ([CNG](https://docs.expo.dev/workflow/continuous-native-generation/)) or you're using a native iOS project, then you'll need to add the following to your Expo.plist file:

ios/project-name/Supporting/Expo.plist

```
<key>UIBackgroundModes</key>
  <array>
    <string>fetch</string>
  </array>
</key>
```

## Usage[](https://docs.expo.dev/versions/latest/sdk/audio/#usage)

Below is an example that demonstrates how to use `expo-background-fetch`.

```
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';

const BACKGROUND_FETCH_TASK = 'background-fetch';

// 1. Define the task by providing a name and the function that should be executed
// Note: This needs to be called in the global scope (e.g outside of your React components)
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const now = Date.now();

  console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);

  // Be sure to return the successful result type!
  return BackgroundFetch.BackgroundFetchResult.NewData;
});

// 2. Register the task at some point in your app by providing the same name,
// and some configuration options for how the background fetch should behave
// Note: This does NOT need to be in the global scope and CAN be used in your React components!
async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60 * 15, // 15 minutes
    stopOnTerminate: false, // android only,
    startOnBoot: true, // android only
  });
}

// 3. (Optional) Unregister tasks by specifying the task name
// This will cancel any future background fetch calls that match the given name
// Note: This does NOT need to be in the global scope and CAN be used in your React components!
async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

export default function BackgroundFetchScreen() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    checkStatusAsync();
  }, []);

  const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
    setStatus(status);
    setIsRegistered(isRegistered);
  };

  const toggleFetchTask = async () => {
    if (isRegistered) {
      await unregisterBackgroundFetchAsync();
    } else {
      await registerBackgroundFetchAsync();
    }

    checkStatusAsync();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>
          Background fetch status:{' '}
          <Text style={styles.boldText}>
            {status && BackgroundFetch.BackgroundFetchStatus[status]}
          </Text>
        </Text>
        <Text>
          Background fetch task name:{' '}
          <Text style={styles.boldText}>
            {isRegistered ? BACKGROUND_FETCH_TASK : 'Not registered yet!'}
          </Text>
        </Text>
      </View>
      <View style={styles.textContainer}></View>
      <Button
        title={isRegistered ? 'Unregister BackgroundFetch task' : 'Register BackgroundFetch task'}
        onPress={toggleFetchTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
```

## Triggering background fetches[](https://docs.expo.dev/versions/latest/sdk/audio/#triggering-background-fetches)

Background fetches can be difficult to test because they can happen inconsistently. Fortunately, you can trigger background fetches manually when developing your apps.

For iOS, you can use the `Instruments` app on macOS to manually trigger background fetches:

1.  Open the Instruments app. The Instruments app can be searched through Spotlight (⌘ + Space) or opened from `/Applications/Xcode.app/Contents/Applications/Instruments.app`
2.  Select `Time Profiler`
3.  Select your device / simulator and pick the `Expo Go` app
4.  Press the `Record` button in the top left corner
5.  Navigate to the `Document` Menu and select `Simulate Background Fetch - Expo Go`:

For Android, you can set the `minimumInterval` option of your task to a small number and background your application like so:

```
async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 1 * 60, // task will fire 1 minute after app is backgrounded
  });
}
```

## API[](https://docs.expo.dev/versions/latest/sdk/audio/#api)

```
import * as BackgroundFetch from 'expo-background-fetch';
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/audio/#methods)

### `BackgroundFetch.getStatusAsync()`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchgetstatusasync)

Gets a status of background fetch.

Returns a promise which fulfils with one of `BackgroundFetchStatus` enum values.

### `BackgroundFetch.registerTaskAsync(taskName, options)`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchregistertaskasynctaskname-options)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the task to register. The task needs to be defined first - see [`TaskManager.defineTask`](https://docs.expo.dev/versions/latest/sdk/taskmanager/#defineTask) for more details.

 |
| options(optional) | `[BackgroundFetchOptions](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchoptions)` | 

An object containing the background fetch options.

Default:`{}`



 |

  

Registers background fetch task with given name. Registered tasks are saved in persistent storage and restored once the app is initialized.

Example

```
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';

TaskManager.defineTask(YOUR_TASK_NAME, () => {
  try {
    const receivedNewData = // do your background fetch here
    return receivedNewData ? BackgroundFetch.BackgroundFetchResult.NewData : BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});
```

### `BackgroundFetch.setMinimumIntervalAsync(minimumInterval)`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchsetminimumintervalasyncminimuminterval)

| Parameter | Type | Description |
| --- | --- | --- |
| minimumInterval | `number` | 
Number of seconds that must elapse before another background fetch can be called.

 |

  

Sets the minimum number of seconds that must elapse before another background fetch can be initiated. This value is advisory only and does not indicate the exact amount of time expected between fetch operations.

> This method doesn't take any effect on Android. It is a global value which means that it can overwrite settings from another application opened through Expo Go.

A promise which fulfils once the minimum interval is set.

### `BackgroundFetch.unregisterTaskAsync(taskName)`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchunregistertaskasynctaskname)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the task to unregister.

 |

  

Unregisters background fetch task, so the application will no longer be executing this task.

A promise which fulfils when the task is fully unregistered.

## Interfaces[](https://docs.expo.dev/versions/latest/sdk/audio/#interfaces)

### `BackgroundFetchOptions`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchoptions)

| Property | Type | Description |
| --- | --- | --- |
| minimumInterval(optional) | `number` | 
Inexact interval in seconds between subsequent repeats of the background fetch alarm. The final interval may differ from the specified one to minimize wakeups and battery usage.

-   On Android it defaults to 10 minutes,
-   On iOS it calls [`BackgroundFetch.setMinimumIntervalAsync`](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchsetminimumintervalasyncminimuminterval) behind the scenes and the default value is the smallest fetch interval supported by the system (10-15 minutes). Background fetch task receives no data, but your task should return a value that best describes the results of your background fetch work.



 |
| startOnBoot(optional) | `boolean` | 

Only for: 

Android

  

Whether to restart background fetch events when the device has finished booting.

Default:`false`



 |
| stopOnTerminate(optional) | `boolean` | 

Only for: 

Android

  

Whether to stop receiving background fetch events after user terminates the app.

Default:`true`



 |

## Enums[](https://docs.expo.dev/versions/latest/sdk/audio/#enums)

### `BackgroundFetchResult`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchresult)

This return value is to let iOS know what the result of your background fetch was, so the platform can better schedule future background fetches. Also, your app has up to 30 seconds to perform the task, otherwise your app will be terminated and future background fetches may be delayed.

#### `NoData`[](https://docs.expo.dev/versions/latest/sdk/audio/#nodata)

`BackgroundFetchResult.NoData ＝ 1`

There was no new data to download.

#### `NewData`[](https://docs.expo.dev/versions/latest/sdk/audio/#newdata)

`BackgroundFetchResult.NewData ＝ 2`

New data was successfully downloaded.

#### `Failed`[](https://docs.expo.dev/versions/latest/sdk/audio/#failed)

`BackgroundFetchResult.Failed ＝ 3`

An attempt to download data was made but that attempt failed.

### `BackgroundFetchStatus`[](https://docs.expo.dev/versions/latest/sdk/audio/#backgroundfetchstatus)

#### `Denied`[](https://docs.expo.dev/versions/latest/sdk/audio/#denied)

`BackgroundFetchStatus.Denied ＝ 1`

The user explicitly disabled background behavior for this app or for the whole system.

#### `Restricted`[](https://docs.expo.dev/versions/latest/sdk/audio/#restricted)

`BackgroundFetchStatus.Restricted ＝ 2`

Background updates are unavailable and the user cannot enable them again. This status can occur when, for example, parental controls are in effect for the current user.

#### `Available`[](https://docs.expo.dev/versions/latest/sdk/audio/#available)

`BackgroundFetchStatus.Available ＝ 3`

Background updates are available for the app.

## Permissions[](https://docs.expo.dev/versions/latest/sdk/audio/#permissions)

### Android[](https://docs.expo.dev/versions/latest/sdk/audio/#android)

On Android, this module might listen when the device is starting up. It's necessary to continue working on tasks started with `startOnBoot`. It also keeps devices "awake" that are going idle and asleep fast, to improve reliability of the tasks. Because of this both the `RECEIVE_BOOT_COMPLETED` and `WAKE_LOCK` permissions are added automatically.

| Android Permission | Description |
| --- | --- |
| 
`RECEIVE_BOOT_COMPLETED`[](https://docs.expo.dev/versions/latest/sdk/audio/#permission-receive_boot_completed)

 | 

Allows an application to receive the Intent.ACTION\_BOOT\_COMPLETED that is broadcast after the system finishes booting.

> Allows an application to receive the `[Intent.ACTION_BOOT_COMPLETED](https://developer.android.com/reference/android/content/Intent#ACTION_BOOT_COMPLETED)` that is broadcast after the system finishes booting. If you don't request this permission, you will not receive the broadcast at that time. Though holding this permission does not have any security implications, it can have a negative impact on the user experience by increasing the amount of time it takes the system to start and allowing applications to have themselves running without the user being aware of them. As such, you must explicitly declare your use of this facility to make that visible to the user.

 |
| 

`WAKE_LOCK`[](https://docs.expo.dev/versions/latest/sdk/audio/#permission-wake_lock)

 | 

Allows using PowerManager WakeLocks to keep processor from sleeping or screen from dimming.

 |




# DeviceMotion - Expo Documentation

> ## Excerpt
> A library that provides access to a device's motion and orientation sensors.

---
A library that provides access to a device's motion and orientation sensors.

___

`DeviceMotion` from `expo-sensors` provides access to the device motion and orientation sensors. All data is presented in terms of three axes that run through a device. According to portrait orientation: X runs from left to right, Y from bottom to top and Z perpendicularly through the screen from back to front.

## Installation[](https://docs.expo.dev/versions/latest/sdk/audio/#installation)

`-` `npx expo install expo-sensors`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-sensors) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/audio/#configuration-in-app-config)

You can configure `DeviceMotion` from `expo-sensor` using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/audio/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": [
      [
        "expo-sensors",
        {
          "motionPermission": "Allow $(PRODUCT_NAME) to access your device motion."
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/audio/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `motionPermission` | `"Allow $(PRODUCT_NAME) to access your device motion"` | 
Only for: 

iOS

  

A string to set the [`NSMotionUsageDescription`](https://docs.expo.dev/versions/latest/sdk/audio/#ios) permission message.

 |

Are you using this library in a bare React Native app?[](https://docs.expo.dev/versions/latest/sdk/audio/#are-you-using-this-library-in-a)

## API[](https://docs.expo.dev/versions/latest/sdk/audio/#api)

```
import { DeviceMotion } from 'expo-sensors';
```

## Constants[](https://docs.expo.dev/versions/latest/sdk/audio/#constants)

### `Gravity`[](https://docs.expo.dev/versions/latest/sdk/audio/#gravity)

Type: `number`

Constant value representing standard gravitational acceleration for Earth (`9.80665` m/s^2).

## Classes[](https://docs.expo.dev/versions/latest/sdk/audio/#classes)

### `DeviceMotion`[](https://docs.expo.dev/versions/latest/sdk/audio/#devicemotion)

Type: Class extends `[DeviceSensor](https://docs.expo.dev/versions/latest/sdk/sensors/)<[DeviceMotionMeasurement](https://docs.expo.dev/versions/latest/sdk/audio/#devicemotionmeasurement)>`

A base class for subscribable sensors. The events emitted by this class are measurements specified by the parameter type `Measurement`.

DeviceMotion Properties

### `Gravity`[](https://docs.expo.dev/versions/latest/sdk/audio/#gravity-1)

Type: `number` • Default: `ExponentDeviceMotion.Gravity`

Constant value representing standard gravitational acceleration for Earth (`9.80665` m/s^2).

DeviceMotion Methods

### `addListener(listener)`[](https://docs.expo.dev/versions/latest/sdk/audio/#addlistenerlistener)

| Parameter | Type | Description |
| --- | --- | --- |
| listener | `Listener<[DeviceMotionMeasurement](https://docs.expo.dev/versions/latest/sdk/audio/#devicemotionmeasurement)>` | 
A callback that is invoked when a device motion sensor update is available. When invoked, the listener is provided a single argument that is a `DeviceMotionMeasurement` object.

 |

  

Subscribe for updates to the device motion sensor.

A subscription that you can call `remove()` on when you would like to unsubscribe the listener.

### `getListenerCount()`[](https://docs.expo.dev/versions/latest/sdk/audio/#getlistenercount)

Returns the registered listeners count.

### `getPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/audio/#getpermissionsasync)

Checks user's permissions for accessing sensor.

### `hasListeners()`[](https://docs.expo.dev/versions/latest/sdk/audio/#haslisteners)

Returns boolean which signifies if sensor has any listeners registered.

### `isAvailableAsync()`[](https://docs.expo.dev/versions/latest/sdk/audio/#isavailableasync)

> You should always check the sensor availability before attempting to use it.

Returns whether the accelerometer is enabled on the device.

On mobile web, you must first invoke `DeviceMotion.requestPermissionsAsync()` in a user interaction (i.e. touch event) before you can use this module. If the `status` is not equal to `granted` then you should inform the end user that they may have to open settings.

On web this starts a timer and waits to see if an event is fired. This should predict if the iOS device has the device orientation API disabled in Settings > Safari > Motion & Orientation Access. Some devices will also not fire if the site isn't hosted with HTTPS as `DeviceMotion` is now considered a secure API. There is no formal API for detecting the status of `DeviceMotion` so this API can sometimes be unreliable on web.

A promise that resolves to a `boolean` denoting the availability of device motion sensor.

### `removeAllListeners()`[](https://docs.expo.dev/versions/latest/sdk/audio/#removealllisteners)

Removes all registered listeners.

### `removeSubscription(subscription)`[](https://docs.expo.dev/versions/latest/sdk/audio/#removesubscriptionsubscription)

| Parameter | Type | Description |
| --- | --- | --- |
| subscription | `EventSubscription` | 
A subscription to remove.

 |

  

Removes the given subscription.

### `requestPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/audio/#requestpermissionsasync)

Asks the user to grant permissions for accessing sensor.

### `setUpdateInterval(intervalMs)`[](https://docs.expo.dev/versions/latest/sdk/audio/#setupdateintervalintervalms)

| Parameter | Type | Description |
| --- | --- | --- |
| intervalMs | `number` | 
Desired interval in milliseconds between sensor updates.

> Starting from Android 12 (API level 31), the system has a 200ms limit for each sensor updates.
> 
> If you need an update interval less than 200ms, you should:
> 
> -   add `android.permission.HIGH_SAMPLING_RATE_SENSORS` to [app.json `permissions` field](https://docs.expo.dev/versions/latest/config/app/#permissions)
> -   or if you are using bare workflow, add `<uses-permission android:name="android.permission.HIGH_SAMPLING_RATE_SENSORS"/>` to AndroidManifest.xml.



 |

  

Set the sensor update interval.

## Interfaces[](https://docs.expo.dev/versions/latest/sdk/audio/#interfaces)

### `PermissionResponse`[](https://docs.expo.dev/versions/latest/sdk/audio/#permissionresponse)

An object obtained by permissions get and request functions.

| Property | Type | Description |
| --- | --- | --- |
| canAskAgain | `boolean` | 
Indicates if user can be asked again for specific permission. If not, one should be directed to the Settings app in order to enable/disable the permission.

 |
| expires | `[PermissionExpiration](https://docs.expo.dev/versions/latest/sdk/audio/#permissionexpiration)` | 

Determines time when the permission expires.

 |
| granted | `boolean` | 

A convenience boolean that indicates if the permission is granted.

 |
| status | `[PermissionStatus](https://docs.expo.dev/versions/latest/sdk/audio/#permissionstatus)` | 

Determines the status of the permission.

 |

## Types[](https://docs.expo.dev/versions/latest/sdk/audio/#types)

### `DeviceMotionMeasurement`[](https://docs.expo.dev/versions/latest/sdk/audio/#devicemotionmeasurement)

| Property | Type | Description |
| --- | --- | --- |
| acceleration | `null | { timestamp: number, x: number, y: number, z: number }` | 
Device acceleration on the three axis as an object with `x`, `y`, `z` keys. Expressed in meters per second squared (m/s^2).

 |
| accelerationIncludingGravity | `{ timestamp: number, x: number, y: number, z: number }` | 

Device acceleration with the effect of gravity on the three axis as an object with `x`, `y`, `z` keys. Expressed in meters per second squared (m/s^2).

 |
| interval | `number` | 

Interval at which data is obtained from the native platform. Expressed in milliseconds (ms).

 |
| orientation | `[DeviceMotionOrientation](https://docs.expo.dev/versions/latest/sdk/audio/#devicemotionorientation)` | 

Device orientation based on screen rotation. Value is one of:

-   `0` (portrait),
-   `90` (right landscape),
-   `180` (upside down),
-   `-90` (left landscape).



 |
| rotation | `{ alpha: number, beta: number, gamma: number, timestamp: number }` | 

Device's orientation in space as an object with alpha, beta, gamma keys where alpha is for rotation around Z axis, beta for X axis rotation and gamma for Y axis rotation.

 |
| rotationRate | `null | { alpha: number, beta: number, gamma: number, timestamp: number }` | 

Device's rate of rotation in space expressed in degrees per second (deg/s).

 |

### `PermissionExpiration`[](https://docs.expo.dev/versions/latest/sdk/audio/#permissionexpiration)

Literal Type: multiple types

Permission expiration time. Currently, all permissions are granted permanently.

Acceptable values are: `'never'` | `number`

### `Subscription`[](https://docs.expo.dev/versions/latest/sdk/audio/#subscription)

A subscription object that allows to conveniently remove an event listener from the emitter.

| Property | Type | Description |
| --- | --- | --- |
| remove | `() => void` | 
Removes an event listener for which the subscription has been created. After calling this function, the listener will no longer receive any events from the emitter.

 |

## Enums[](https://docs.expo.dev/versions/latest/sdk/audio/#enums)

### `DeviceMotionOrientation`[](https://docs.expo.dev/versions/latest/sdk/audio/#devicemotionorientation)

#### `LeftLandscape`[](https://docs.expo.dev/versions/latest/sdk/audio/#leftlandscape)

`DeviceMotionOrientation.LeftLandscape ＝ -90`

#### `Portrait`[](https://docs.expo.dev/versions/latest/sdk/audio/#portrait)

`DeviceMotionOrientation.Portrait ＝ 0`

#### `RightLandscape`[](https://docs.expo.dev/versions/latest/sdk/audio/#rightlandscape)

`DeviceMotionOrientation.RightLandscape ＝ 90`

#### `UpsideDown`[](https://docs.expo.dev/versions/latest/sdk/audio/#upsidedown)

`DeviceMotionOrientation.UpsideDown ＝ 180`

### `PermissionStatus`[](https://docs.expo.dev/versions/latest/sdk/audio/#permissionstatus)

#### `DENIED`[](https://docs.expo.dev/versions/latest/sdk/audio/#denied)

`PermissionStatus.DENIED ＝ "denied"`

User has denied the permission.

#### `GRANTED`[](https://docs.expo.dev/versions/latest/sdk/audio/#granted)

`PermissionStatus.GRANTED ＝ "granted"`

User has granted the permission.

#### `UNDETERMINED`[](https://docs.expo.dev/versions/latest/sdk/audio/#undetermined)

`PermissionStatus.UNDETERMINED ＝ "undetermined"`

User hasn't granted or denied the permission yet.

## Permissions[](https://docs.expo.dev/versions/latest/sdk/audio/#permissions)

### iOS[](https://docs.expo.dev/versions/latest/sdk/audio/#ios)

The following usage description keys are used by this library:

| Info.plist Key | Description |
| --- | --- |
| 
`NSMotionUsageDescription`[](https://docs.expo.dev/versions/latest/sdk/audio/#permission-nsmotionusagedescription)

 | A message that tells the user why the app is requesting access to the device’s motion data. |




# DocumentPicker - Expo Documentation

> ## Excerpt
> A library that provides access to the system's UI for selecting documents from the available providers on the user's device.

---
A library that provides access to the system's UI for selecting documents from the available providers on the user's device.

___

`expo-document-picker` provides access to the system's UI for selecting documents from the available providers on the user's device.

## Installation[](https://docs.expo.dev/versions/latest/sdk/audio/#installation)

`-` `npx expo install expo-document-picker`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-document-picker) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/audio/#configuration-in-app-config)

You can configure `expo-document-picker` using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect. If your app does not use EAS Build, then you'll need to manually configure the package.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/audio/#example-appjson-with-config-plugin)

If you want to enable [iCloud storage features](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_icloud-services), set the `expo.ios.usesIcloudStorage` key to `true` in the [app config](https://docs.expo.dev/workflow/configuration/) file as specified [configuration properties](https://docs.expo.dev/versions/latest/config/app/#usesicloudstorage).

Running [EAS Build](https://docs.expo.dev/build/introduction/) locally will use [iOS capabilities signing](https://docs.expo.dev/build-reference/ios-capabilities/) to enable the required capabilities before building.

```
{
  "expo": {
    "plugins": [
      [
        "expo-document-picker",
        {
          "iCloudContainerEnvironment": "Production"
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/audio/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `iCloudContainerEnvironment` | `undefined` | 
Only for: 

iOS

  

Sets the iOS `com.apple.developer.icloud-container-environment` entitlement used for AdHoc iOS builds. Possible values: `Development`, `Production`. [Learn more](https://github.com/expo/eas-cli/issues/693).

 |
| `kvStoreIdentifier` | `undefined` | 

Overrides the default iOS `com.apple.developer.ubiquity-kvstore-identifier` entitlement, which uses your Apple Team ID and bundle identifier. This may be needed if your app was transferred to another Apple Team after enabling iCloud storage.

 |

Are you using this library in a bare React Native app?[](https://docs.expo.dev/versions/latest/sdk/audio/#are-you-using-this-library-in-a)

Apps that don't use [EAS Build](https://docs.expo.dev/build/introduction/) and want [iCloud storage features](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_icloud-services) must [manually configure](https://docs.expo.dev/build-reference/ios-capabilities/#manual-setup) the [iCloud service with CloudKit support](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_icloud-container-environment) for their bundle identifier.

If you enable the iCloud capability through the [Apple Developer Console](https://docs.expo.dev/build-reference/ios-capabilities/#apple-developer-console), then be sure to add the following entitlements in your `ios/[app]/[app].entitlements` file (where `dev.expo.my-app` if your bundle identifier):

```
<key>com.apple.developer.icloud-container-identifiers</key>
<array>
    <string>iCloud.dev.expo.my-app</string>
</array>
<key>com.apple.developer.icloud-services</key>
<array>
    <string>CloudDocuments</string>
</array>
<key>com.apple.developer.ubiquity-container-identifiers</key>
<array>
    <string>iCloud.dev.expo.my-app</string>
</array>
<key>com.apple.developer.ubiquity-kvstore-identifier</key>
<string>$(TeamIdentifierPrefix)dev.expo.my-app</string>
```

Apple Developer Console also requires an iCloud Container to be created. When registering the new container, you are asked to provide a description and identifier for the container. You may enter any name under the description. Under the identifier, add `iCloud.<your_bundle_identifier>` (same value used for `com.apple.developer.icloud-container-identifiers` and `com.apple.developer.ubiquity-container-identifiers` entitlements).

## Using with `expo-file-system`[](https://docs.expo.dev/versions/latest/sdk/audio/#using-with-expo-file-system)

When using `expo-document-picker` with [`expo-file-system`](https://docs.expo.dev/versions/latest/sdk/filesystem/), it's not always possible for the file system to read the file immediately after the `expo-document-picker` picks it.

To allow the `expo-file-system` to read the file immediately after it is picked, you'll need to ensure that the [`copyToCacheDirectory`](https://docs.expo.dev/versions/latest/sdk/document-picker/#documentpickeroptions) option is set to `true`.

## API[](https://docs.expo.dev/versions/latest/sdk/audio/#api)

```
import * as DocumentPicker from 'expo-document-picker';
```

## Component[](https://docs.expo.dev/versions/latest/sdk/audio/#component)

### `getDocumentAsync`[](https://docs.expo.dev/versions/latest/sdk/audio/#getdocumentasync)

Type: `React.Element<[DocumentPickerOptions](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickeroptions)>`

Display the system UI for choosing a document. By default, the chosen file is copied to [the app's internal cache directory](https://docs.expo.dev/versions/latest/sdk/filesystem/#filesystemcachedirectory).

> Notes for Web: The system UI can only be shown after user activation (e.g. a `Button` press). Therefore, calling `getDocumentAsync` in `componentDidMount`, for example, will not work as intended. The `cancel` event will not be returned in the browser due to platform restrictions and inconsistencies across browsers.

## Types[](https://docs.expo.dev/versions/latest/sdk/audio/#types)

### `DocumentPickerAsset`[](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickerasset)

| Property | Type | Description |
| --- | --- | --- |
| file(optional) | `[File](https://docs.expo.dev/versions/latest/sdk/audio/#file)` | 
Only for: 

Web

  

`File` object for the parity with web File API.



 |
| lastModified(optional) | `number` | 

Timestamp of last document modification.

 |
| mimeType(optional) | `string` | 

Document MIME type.

 |
| name | `string` | 

Document original name.

 |
| size(optional) | `number` | 

Document size in bytes.

 |
| uri | `string` | 

An URI to the local document file.

 |

### `DocumentPickerCanceledResult`[](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickercanceledresult)

Type representing canceled pick result.

| Property | Type | Description |
| --- | --- | --- |
| assets | `null` | 
Always `null` when the request was canceled.

 |
| canceled | `true` | 

Always `true` when the request was canceled.

 |
| output(optional) | `null` | 

Only for: 

Web

  

Always `null` when the request was canceled.



 |

### `DocumentPickerOptions`[](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickeroptions)

| Property | Type | Description |
| --- | --- | --- |
| copyToCacheDirectory(optional) | `boolean` | 
If `true`, the picked file is copied to [`FileSystem.CacheDirectory`](https://docs.expo.dev/versions/latest/sdk/filesystem/#filesystemcachedirectory), which allows other Expo APIs to read the file immediately. This may impact performance for large files, so you should consider setting this to `false` if you expect users to pick particularly large files and your app does not need immediate read access.

Default:`true`



 |
| multiple(optional) | `boolean` | 

Allows multiple files to be selected from the system UI.

Default:`false`



 |
| type(optional) | `string | string[]` | 

The [MIME type(s)](https://en.wikipedia.org/wiki/Media_type) of the documents that are available to be picked. It also supports wildcards like `'image/*'` to choose any image. To allow any type of document you can use `'*/*'`.

Default:`'*/*'`



 |

### `DocumentPickerResult`[](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickerresult)

Literal Type: multiple types

Type representing successful and canceled document pick result.

Acceptable values are: `[DocumentPickerSuccessResult](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickersuccessresult)` | `[DocumentPickerCanceledResult](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickercanceledresult)`

### `DocumentPickerSuccessResult`[](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickersuccessresult)

Type representing successful pick result.

| Property | Type | Description |
| --- | --- | --- |
| assets | `[DocumentPickerAsset[]](https://docs.expo.dev/versions/latest/sdk/audio/#documentpickerasset)` | 
An array of picked assets.

 |
| canceled | `false` | 

If asset data have been returned this should always be `false`.

 |
| output(optional) | `[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)` | 

Only for: 

Web

  

`FileList` object for the parity with web File API.



 |




# FileSystem (next) - Expo Documentation

> ## Excerpt
> A library that provides access to the local file system on the device.

---
A library that provides access to the local file system on the device.

___

> The `next` version of the FileSystem API is included in the `expo-file-system` library. It can be used alongside the previous API, and offers a simplified, object oriented way of performing filesystem operations.

`expo-file-system/next` provides access to the file system stored locally on the device. It can also download files from the network.

> To provide quicker updates, `expo-file-system/next` is currently unsupported in Expo Go and Snack. To use it, create a [development build](https://docs.expo.dev/develop/development-builds/create-a-build/).

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-file-system`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-file-system) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

### Writing and reading text files[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#writing-and-reading-text-files)

```
import { File, Paths } from 'expo-file-system/next';

try {
  const file = new File(Paths.cache, 'example.txt');
  file.create(); // can throw an error if the file already exists or no permission to create it
  file.write('Hello, world!');
  console.log(file.text()); // Hello, world!
} catch (error) {
  console.error(error);
}
```

### Downloading files[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#downloading-files)

```
import { File, Paths } from 'expo-file-system/next';

const url = 'https://pdfobject.com/pdf/sample.pdf';
const destination = new Directory(Paths.cache, 'pdfs');
try {
  destination.create();
  const output = await File.downloadFileAsync(url, destination);
  console.log(output.exists); // true
  console.log(output.uri); // path to the downloaded file, e.g. '${cacheDirectory}/pdfs/sample.pdf'
} catch (error) {
  console.error(error);
}
```

### Moving and copying files[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#moving-and-copying-files)

```
import { File, Paths } from 'expo-file-system/next';

try {
  const file = new File(Paths.document, 'example.txt');
  file.create();
  console.log(file.uri); // '${documentDirectory}/example.txt'
  file.move(Paths.cache);
  console.log(file.uri); // '${cacheDirectory}/example.txt'
  file.move(new Directory(Paths.cache, 'newFolder'));
  console.log(file.uri); // '${cacheDirectory}/newFolder/example.txt'
} catch (error) {
  console.error(error);
}
```

### Using legacy FileSystem API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#using-legacy-filesystem-api)

```
import { FileSystem } from 'expo-file-system';
import { File, Paths } from 'expo-file-system/next';

try {
  const file = new File(Paths.cache, 'example.txt');
  const content = await FileSystem.readAsStringAsync(file.uri);
  console.log(content);
} catch (error) {
  console.error(error);
}
```

### Listing directory contents recursively[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#listing-directory-contents-recursively)

```
import { Directory, Paths } from 'expo-file-system/next';

function printDirectory(directory: Directory, indent: number = 0) {
  console.log(`${' '.repeat(indent)} + ${directory.name}`);
  const contents = directory.list();
  for (const item of contents) {
    if (item instanceof Directory) {
      printDirectory(item, indent + 2);
    } else {
      console.log(`${' '.repeat(indent + 2)} - ${item.name} (${item.size} bytes)`);
    }
  }
}

try {
  printDirectory(new Directory(Paths.cache));
} catch (error) {
  console.error(error);
}
```

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

## Classes[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#classes)

### `Directory`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)

Type: Class extends `[FileSystemDirectory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#filesystemdirectory)`

Represents a directory on the filesystem.

A `Directory` instance can be created for any path, and does not need to exist on the filesystem during creation.

Directory Properties

### `exists`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#exists)

Type: `boolean`

A boolean representing if a directory exists. `true` if the directory exists, `false` otherwise. Also `false` if the application does not have read access to the file.

### `uri`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#uri)

Read Only • Type: `string`

Represents the directory URI. The field is read-only, but it may change as a result of calling some methods such as `move`.

### `name`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#name)

Type: `string`

Directory name.

### `parentDirectory`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#parentdirectory)

Type: `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)`

Directory containing the file.

Directory Methods

### `copy(destination)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#copydestination)

| Parameter | Type |
| --- | --- |
| destination | `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory) | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file)` |

  

### `create()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#create)

Creates a directory that the current uri points to.

### `delete()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#delete)

Deletes a directory. Also deletes all files and directories inside the directory.

### `list()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#list)

Lists the contents of a directory. Calling this method if the parent directory does not exist will throw an error.

An array of `Directory` and `File` instances.

### `move(destination)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#movedestination)

| Parameter | Type |
| --- | --- |
| destination | `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory) | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file)` |

  

Moves a directory. Updates the `uri` property that now points to the new location.

### `File`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file)

Type: Class extends `[FileSystemFile](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#filesystemfile)`

File Properties

### `exists`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#exists-1)

Type: `boolean`

A boolean representing if a file exists. `true` if the file exists, `false` otherwise. Also `false` if the application does not have read access to the file.

### `md5`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#md5)

Type: `null | string`

An md5 hash of the file. Null if the file does not exist or it cannot be read.

### `size`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#size)

Type: `null | number`

A size of the file in bytes. Null if the file does not exist or it cannot be read.

### `uri`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#uri-1)

Read Only • Type: `string`

Represents the file URI. The field is read-only, but it may change as a result of calling some methods such as `move`.

### `name`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#name-1)

Type: `string`

File name. Includes the extension.

### `parentDirectory`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#parentdirectory-1)

Type: `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)`

Directory containing the file.

File Methods

### `base64()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#base64)

Retrieves content of the file as base64.

The contents of the file as a base64 string.

### `bytes()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#bytes)

Retrieves byte content of the entire file.

The contents of the file as a Uint8Array.

### `copy(destination)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#copydestination-1)

| Parameter | Type |
| --- | --- |
| destination | `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory) | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file)` |

  

### `create()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#create-1)

### `delete()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#delete-1)

### `downloadFileAsync(url, destination)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#downloadfileasyncurl-destination)

| Parameter | Type | Description |
| --- | --- | --- |
| url | `string` | 
The URL of the file to download.

 |
| destination | `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory) | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file)` | 

The destination directory or file. If a directory is provided, the resulting filename will be determined based on the response headers.

 |

  

A static method that downloads a file from the network.

A promise that resolves to the downloaded file.

Example

```
const file = await File.downloadFileAsync("https://example.com/image.png", new Directory(Paths.document));
```

### `move(destination)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#movedestination-1)

| Parameter | Type |
| --- | --- |
| destination | `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory) | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file)` |

  

Moves a directory. Updates the `uri` property that now points to the new location.

### `open()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#open)

Returns a FileHandle object that can be used to read and write data to the file.

### `readableStream()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#readablestream)

### `text()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#text)

Retrieves text from the file.

The contents of the file as string.

### `writableStream()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#writablestream)

### `write(content)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#writecontent)

| Parameter | Type | Description |
| --- | --- | --- |
| content | `string | [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)` | 
The content to write into the file.

 |

  

Writes content to the file.

### `Paths`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#paths)

Type: Class extends `[PathUtilities](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#pathutilities)`

Paths Properties

### `appleSharedContainers`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#applesharedcontainers)

Type: `Record<string, [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)>`

### `cache`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#cache)

Type: `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)`

A property containing the cache directory – a place to store files that can be deleted by the system when the device runs low on storage.

### `document`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#document)

Type: `[Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)`

A property containing the document directory – a place to store files that are safe from being deleted by the system.

Paths Methods

### `basename(path, ext)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#basenamepath-ext)

| Parameter | Type | Description |
| --- | --- | --- |
| path | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 
The path to get the base name from.

 |
| ext(optional) | `string` | 

An optional file extension.

 |

  

Returns the base name of a path.

A string representing the base name.

### `dirname(path)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#dirnamepath)

| Parameter | Type | Description |
| --- | --- | --- |
| path | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 
The path to get the directory name from.

 |

  

Returns the directory name of a path.

A string representing the directory name.

### `extname(path)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#extnamepath)

| Parameter | Type | Description |
| --- | --- | --- |
| path | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 
The path to get the extension from.

 |

  

Returns the extension of a path.

A string representing the extension.

### `isAbsolute(path)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#isabsolutepath)

| Parameter | Type | Description |
| --- | --- | --- |
| path | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 
The path to check.

 |

  

Checks if a path is absolute.

`true` if the path is absolute, `false` otherwise.

### `join(...paths)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#joinpaths)

| Parameter | Type | Description |
| --- | --- | --- |
| ...paths | `(string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory))[]` | 
An array of path segments.

 |

  

Joins path segments into a single path.

A string representing the joined path.

### `normalize(path)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#normalizepath)

| Parameter | Type | Description |
| --- | --- | --- |
| path | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 
The path to normalize.

 |

  

Normalizes a path.

A string representing the normalized path.

### `parse(path)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#parsepath)

| Parameter | Type | Description |
| --- | --- | --- |
| path | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 
The path to parse.

 |

  

Parses a path into its components.

`{ base: string, dir: string, ext: string, name: string, root: string }`

An object containing the parsed path components.

### `relative(from, to)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#relativefrom-to)

| Parameter | Type | Description |
| --- | --- | --- |
| from | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 
The base path.

 |
| to | `string | [File](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#file) | [Directory](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)` | 

The relative path.

 |

  

Resolves a relative path to an absolute path.

A string representing the resolved path.




# Font - Expo Documentation

> ## Excerpt
> A library that allows loading fonts at runtime and using them in React Native components.

---
## ![Expo Font icon](https://docs.expo.dev/static/images/packages/expo-font.png)Expo Font

A library that allows loading fonts at runtime and using them in React Native components.

___

`expo-font` allows loading fonts from the web and using them in React Native components. See more detailed usage information in the [Fonts](https://docs.expo.dev/develop/user-interface/fonts/) guide.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-font`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-font) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-app-config)

The recommended way to add fonts to your app is through `expo-font` built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run: [android|ios]`). The plugin allows you to embed font files at build time which is more efficient than using [`loadAsync`](https://docs.expo.dev/versions/latest/sdk/font/#loadasyncfontfamilyorfontmap-source). See the [Fonts](https://docs.expo.dev/develop/user-interface/fonts/#with-expo-font-config-plugin) guide on how to use it.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": [
      [
        "expo-font",
        {
          "fonts": ["path/to/file.ttf"]
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `fonts` | `[]` | 
An array of font files to link to the native project. The paths should be relative to the project root. The file names will become the font family names on Android. On iOS, the font family name may not be the same as the file name — use [`getLoadedFonts`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getloadedfonts) to see what fonts are available.

 |

Are you using this library in a bare React Native app?[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#are-you-using-this-library-in-a)

-   Android: Copy font files to android/app/src/main/assets/fonts.
-   iOS: See [Adding a Custom Font to Your App](https://developer.apple.com/documentation/uikit/text_display_and_fonts/adding_a_custom_font_to_your_app) in the Apple Developer documentation.

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

Minimal example of using a custom font

```
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import * as Font from 'expo-font';
```

## Hooks[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hooks)

### `useFonts(map)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usefontsmap)

| Parameter | Type | Description |
| --- | --- | --- |
| map | `string | Record<string, [FontSource](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontsource)>` | 
A map of `fontFamily`s to [`FontSource`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontsource)s. After loading the font you can use the key in the `fontFamily` style prop of a `Text` element.

 |

  

Load a map of fonts with [`loadAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#loadasyncfontfamilyorfontmap-source). This returns a `boolean` if the fonts are loaded and ready to use. It also returns an error if something went wrong, to use in development.

> Note, the fonts are not "reloaded" when you dynamically change the font map.

-   loaded (`boolean`) - A boolean to detect if the font for `fontFamily` has finished loading.
-   error (`Error | null`) - An error encountered when loading the fonts.

Example

```
const [loaded, error] = useFonts({ ... });
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `getLoadedFonts()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getloadedfonts)

Synchronously get all the fonts that have been loaded. This includes fonts that were bundled at build time using the config plugin, as well as those loaded at runtime using `loadAsync`.

Returns array of strings which you can use as `fontFamily` [style prop](https://reactnative.dev/docs/text#style).

### `isLoaded(fontFamily)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#isloadedfontfamily)

| Parameter | Type | Description |
| --- | --- | --- |
| fontFamily | `string` | 
The name used to load the `FontResource`.

 |

  

Synchronously detect if the font for `fontFamily` has finished loading.

Returns `true` if the font has fully loaded.

### `isLoading(fontFamily)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#isloadingfontfamily)

| Parameter | Type | Description |
| --- | --- | --- |
| fontFamily | `string` | 
The name used to load the `FontResource`.

 |

  

Synchronously detect if the font for `fontFamily` is still being loaded.

Returns `true` if the font is still loading.

### `loadAsync(fontFamilyOrFontMap, source)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#loadasyncfontfamilyorfontmap-source)

| Parameter | Type | Description |
| --- | --- | --- |
| fontFamilyOrFontMap | `string | Record<string, [FontSource](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontsource)>` | 
String or map of values that can be used as the `fontFamily` [style prop](https://reactnative.dev/docs/text#style) with React Native `Text` elements.

 |
| source(optional) | `[FontSource](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontsource)` | 

The font asset that should be loaded into the `fontFamily` namespace.

 |

  

An efficient method for loading fonts from static or remote resources which can then be used with the platform's native text elements. In the browser, this generates a `@font-face` block in a shared style sheet for fonts. No CSS is needed to use this method.

> Note: We recommend using the [config plugin](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-appjsonappconfigjs) instead whenever possible.

Returns a promise that fulfils when the font has loaded. Often you may want to wrap the method in a `try/catch/finally` to ensure the app continues if the font fails to load.

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `FontResource`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontresource)

An object used to dictate the resource that is loaded into the provided font namespace when used with [`loadAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#loadasyncfontfamilyorfontmap-source).

| Property | Type | Description |
| --- | --- | --- |
| default(optional) | `string` | \- |
| display(optional) | `[FontDisplay](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontdisplay)` | 
Only for: 

Web

  

Sets the [`font-display`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontdisplay) property for a given typeface in the browser.



 |
| uri(optional) | `string | number` | \- |

### `FontSource`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontsource)

Literal Type: multiple types

The different types of assets you can provide to the [`loadAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#loadasyncfontfamilyorfontmap-source) function. A font source can be a URI, a module ID, or an Expo Asset.

Acceptable values are: `string` | `number` | `[Asset](https://docs.expo.dev/versions/latest/sdk/asset/#asset)` | `[FontResource](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontresource)`

## Enums[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#enums)

### `FontDisplay`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fontdisplay)

Sets the [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) for a given typeface. The default font value on web is `FontDisplay.AUTO`. Even though setting the `fontDisplay` does nothing on native platforms, the default behavior emulates `FontDisplay.SWAP` on flagship devices like iOS, Samsung, Pixel, etc. Default functionality varies on One Plus devices. In the browser this value is set in the generated `@font-face` CSS block and not as a style property meaning you cannot dynamically change this value based on the element it's used in.

#### `AUTO`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#auto)

`FontDisplay.AUTO ＝ "auto"`

(Default) The font display strategy is defined by the user agent or platform. This generally defaults to the text being invisible until the font is loaded. Good for buttons or banners that require a specific treatment.

#### `BLOCK`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#block)

`FontDisplay.BLOCK ＝ "block"`

The text will be invisible until the font has loaded. If the font fails to load then nothing will appear - it's best to turn this off when debugging missing text.

#### `FALLBACK`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fallback)

`FontDisplay.FALLBACK ＝ "fallback"`

Splits the behavior between `SWAP` and `BLOCK`. There will be a [100ms timeout](https://developers.google.com/web/updates/2016/02/font-display?hl=en) where the text with a custom font is invisible, after that the text will either swap to the styled text or it'll show the unstyled text and continue to load the custom font. This is good for buttons that need a custom font but should also be quickly available to screen-readers.

#### `OPTIONAL`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#optional)

`FontDisplay.OPTIONAL ＝ "optional"`

This works almost identically to `FALLBACK`, the only difference is that the browser will decide to load the font based on slow connection speed or critical resource demand.

#### `SWAP`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#swap)

`FontDisplay.SWAP ＝ "swap"`

Fallback text is rendered immediately with a default font while the desired font is loaded. This is good for making the content appear to load instantly and is usually preferred.

## Error codes[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#error-codes)

| Code | Description |
| --- | --- |
| ERR\_FONT\_API | If the arguments passed to `loadAsync` are invalid. |
| ERR\_FONT\_SOURCE | The provided resource was of an incorrect type. |
| ERR\_WEB\_ENVIRONMENT | The browser's `document` element doesn't support injecting fonts. |
| ERR\_DOWNLOAD | Failed to download the provided resource. |
| ERR\_FONT\_FAMILY | Invalid font family name was provided. |
| ERR\_UNLOAD | Attempting to unload fonts that haven't finished loading yet. |




# Localization - Expo Documentation

> ## Excerpt
> A library that provides an interface for native user localization information.

---
A library that provides an interface for native user localization information.

___

`expo-localization` allows you to Localize your app, customizing the experience for specific regions, languages, or cultures. It also provides access to the locale data on the native device. Using a localization library such as [`lingui-js`](https://lingui.dev/introduction), [`react-i18next`](https://react.i18next.com/), [`react-intl`](https://formatjs.io/docs/getting-started/installation/) or [`i18n-js`](https://github.com/fnando/i18n-js) with `expo-localization` will enable you to create a very accessible experience for users.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-localization`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-localization) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-app-config)

You can configure `expo-localization` using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": ["expo-localization"]
  }
}
```

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

Find more information about using `expo-localization` and adding support for right-to-left languages in the [Localization](https://docs.expo.dev/guides/localization/) guide.

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import { getLocales, getCalendars } from 'expo-localization';
```

### Behavior[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#behavior)

You can use synchronous `getLocales()` and `getCalendars()` methods to get the locale settings of the user device. On iOS, the results will remain the same while the app is running.

On Android, the user can change locale preferences in Settings without restarting apps. To keep the localization current, you can rerun the `getLocales()` and `getCalendars()` methods every time the app returns to the foreground. Use `AppState` to detect this.

## Constants[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#constants)

> Deprecated Use [`Localization.getLocales()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#localizationgetlocales) instead. An [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag), consisting of a two-character language code and optional script, region and variant codes.

### `Localization.locale`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#localizationlocale)

Type: `string`

Example

`'en'`, `'en-US'`, `'zh-Hans'`, `'zh-Hans-CN'`, `'en-emodeng'`

## Hooks[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hooks)

### `useCalendars()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usecalendars)

A hook providing a list of user's preferred calendars, returned as an array of objects of type `Calendar`. Guaranteed to contain at least 1 element. For now always returns a single element, but it's likely to return a user preference list on some platforms in the future. If the OS settings change, the hook will rerender with a new list of calendars.

Example

```
[{
  "calendar": "gregory",
  "timeZone": "Europe/Warsaw",
  "uses24hourClock": true,
  "firstWeekday": 1
}]
```

### `useLocales()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#uselocales)

A hook providing a list of user's locales, returned as an array of objects of type `Locale`. Guaranteed to contain at least 1 element. These are returned in the order the user defines in their device settings. On the web currency and measurements systems are not provided, instead returned as null. If needed, you can infer them from the current region using a lookup table. If the OS settings change, the hook will rerender with a new list of locales.

Example

```
[{
  "languageTag": "pl-PL",
  "languageCode": "pl",
  "textDirection": "ltr",
  "digitGroupingSeparator": " ",
  "decimalSeparator": ",",
  "measurementSystem": "metric",
  "currencyCode": "PLN",
  "currencySymbol": "zł",
  "regionCode": "PL",
  "temperatureUnit": "celsius"
}]
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `Localization.getCalendars()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#localizationgetcalendars)

List of user's preferred calendars, returned as an array of objects of type `Calendar`. Guaranteed to contain at least 1 element. For now always returns a single element, but it's likely to return a user preference list on some platforms in the future.

Example

```
[{
  "calendar": "gregory",
  "timeZone": "Europe/Warsaw",
  "uses24hourClock": true,
  "firstWeekday": 1
}]
```

### `Localization.getLocales()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#localizationgetlocales)

List of user's locales, returned as an array of objects of type `Locale`. Guaranteed to contain at least 1 element. These are returned in the order the user defines in their device settings. On the web currency and measurements systems are not provided, instead returned as null. If needed, you can infer them from the current region using a lookup table.

Example

```
[{
  "languageTag": "pl-PL",
  "languageCode": "pl",
  "textDirection": "ltr",
  "digitGroupingSeparator": " ",
  "decimalSeparator": ",",
  "measurementSystem": "metric",
  "currencyCode": "PLN",
  "currencySymbol": "zł",
  "regionCode": "PL",
  "temperatureUnit": "celsius"
}]
```

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `Calendar`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#calendar)

| Property | Type | Description |
| --- | --- | --- |
| calendar | `[CalendarIdentifier](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#calendaridentifier) | null` | 
The calendar identifier, one of [Unicode calendar types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar).

On Android is limited to one of device's [available calendar types](https://developer.android.com/reference/java/util/Calendar#getAvailableCalendarTypes()).

On iOS uses [calendar identifiers](https://developer.apple.com/documentation/foundation/calendar/identifier), but maps them to the corresponding Unicode types, will also never contain `'dangi'` or `'islamic-rgsa'` due to it not being implemented on iOS.



 |
| firstWeekday | `[Weekday](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#weekday) | null` | 

The first day of the week. For most calendars Sunday is numbered `1`, with Saturday being number `7`. Can be null on some browsers that don't support the [weekInfo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo) property in [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API.

Example

`1`, `7`.





 |
| timeZone | `string | null` | 

Time zone for the calendar. Can be `null` on Web.

Example

`'America/Los_Angeles'`, `'Europe/Warsaw'`, `'GMT+1'`.





 |
| uses24hourClock | `boolean | null` | 

True when current device settings use 24-hour time format. Can be null on some browsers that don't support the [hourCycle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) property in [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API.

 |

### `Locale`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locale)

| Property | Type | Description |
| --- | --- | --- |
| currencyCode | `string | null` | 
Currency code for the locale. On iOS, it's the currency code from the `Region` setting under Language & Region, not for the current locale. On Android, it's the currency specifc to the locale in the list, as there are no separate settings for selecting a region. Is `null` on Web, use a table lookup based on region instead.

Example

`'USD'`, `'EUR'`, `'PLN'`.





 |
| currencySymbol | `string | null` | 

Currency symbol for the currency specified by `currencyCode`.

Example

`'$'`, `'€'`, `'zł'`.





 |
| decimalSeparator | `string | null` | 

Decimal separator used for formatting numbers with fractional parts.

Example

`'.'`, `','`.





 |
| digitGroupingSeparator | `string | null` | 

Digit grouping separator used for formatting large numbers.

Example

`'.'`, `','`.





 |
| langageCurrencyCode | `string | null` | 

Currency code for the locale. On iOS, it's the currency code for the current locale in the list, not the device region. On Android, it's equal to `currencyCode`. Is `null` on Web. Prefer using `currencyCode` for any internalization purposes.

Example

`'USD'`, `'EUR'`, `'PLN'`.





 |
| langageCurrencySymbol | `string | null` | 

Currency symbol for the currency specified by `langageCurrencyCode`. Prefer using `currencySymbol` for any internalization purposes.

Example

`'$'`, `'€'`, `'zł'`.





 |
| languageCode | `string | null` | 

An [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) without the region code.

Example

`'en'`, `'es'`, `'pl'`.





 |
| languageRegionCode | `string | null` | 

The region code for the preferred language. When the language is not region-specific, it returns the same value as `regionCode`. When the language is region-specific, it returns the region code for the language (`en-CA` -> `CA`). Prefer using `regionCode` for any internalization purposes.

Example

`'US'`.





 |
| languageTag | `string` | 

An [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) with a region code.

Example

`'en-US'`, `'es-419'`, `'pl-PL'`.





 |
| measurementSystem | `'metric' | 'us' | 'uk' | null` | 

The measurement system used in the locale. Is `null` on Web, as user chosen measurement system is not exposed on the web and using locale to determine measurement systems is unreliable. Ask for user preferences if possible.

 |
| regionCode | `string | null` | 

The region code for your device that comes from the Region setting under Language & Region on iOS, Region settings on Android and is parsed from locale on Web (can be `null` on Web).

Example

`'US'`.





 |
| temperatureUnit | `'celsius' | 'fahrenheit' | null` | 

The temperature unit used in the locale. Returns `null` if the region code is unknown.

 |
| textDirection | `'ltr' | 'rtl' | null` | 

Text direction for the locale. One of: `'ltr'`, `'rtl'`, but can also be `null` on some browsers without support for the [textInfo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/textInfo) property in [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API.

 |

### `Localization`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#localization)

| Property | Type | Description |
| --- | --- | --- |
| currency | `string | null` | 
Three-character ISO 4217 currency code. Returns `null` on web.

Example

`'USD'`, `'EUR'`, `'CNY'`, `null`





 |
| decimalSeparator | `string` | 

Decimal separator used for formatting numbers.

Example

`','`, `'.'`





 |
| digitGroupingSeparator | `string` | 

Digit grouping separator used when formatting numbers larger than 1000.

Example

`'.'`, `''`, `','`





 |
| isMetric | `boolean` | 

Boolean value that indicates whether the system uses the metric system. On Android and web, this is inferred from the current region.

 |
| isoCurrencyCodes | `string[]` | 

A list of all the supported language ISO codes.

 |
| isRTL | `boolean` | 

Returns if the system's language is written from Right-to-Left. This can be used to build features like [bidirectional icons](https://material.io/design/usability/bidirectionality.html).

Returns `false` in Server Side Rendering (SSR) environments.



 |
| locale | `string` | 

An [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag), consisting of a two-character language code and optional script, region and variant codes.

Example

`'en'`, `'en-US'`, `'zh-Hans'`, `'zh-Hans-CN'`, `'en-emodeng'`





 |
| locales | `string[]` | 

List of all the native languages provided by the user settings. These are returned in the order that the user defined in the device settings.

Example

`['en', 'en-US', 'zh-Hans', 'zh-Hans-CN', 'en-emodeng']`





 |
| region | `string | null` | 

The region code for your device that comes from the Region setting under Language & Region on iOS. This value is always available on iOS, but might return `null` on Android or web.

Example

`'US'`, `'NZ'`, `null`





 |
| timezone | `string` | 

The current time zone in display format. On Web time zone is calculated with Intl.DateTimeFormat().resolvedOptions().timeZone. For a better estimation you could use the moment-timezone package but it will add significant bloat to your website's bundle size.

Example

`'America/Los_Angeles'`





 |

## Enums[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#enums)

### `CalendarIdentifier`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#calendaridentifier)

The calendar identifier, one of [Unicode calendar types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar). Gregorian calendar is aliased and can be referred to as both `CalendarIdentifier.GREGORIAN` and `CalendarIdentifier.GREGORY`.

#### `BUDDHIST`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#buddhist)

`CalendarIdentifier.BUDDHIST ＝ "buddhist"`

Thai Buddhist calendar

#### `CHINESE`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#chinese)

`CalendarIdentifier.CHINESE ＝ "chinese"`

Traditional Chinese calendar

#### `COPTIC`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#coptic)

`CalendarIdentifier.COPTIC ＝ "coptic"`

Coptic calendar

#### `DANGI`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#dangi)

`CalendarIdentifier.DANGI ＝ "dangi"`

Traditional Korean calendar

#### `ETHIOAA`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#ethioaa)

`CalendarIdentifier.ETHIOAA ＝ "ethioaa"`

Ethiopic calendar, Amete Alem (epoch approx. 5493 B.C.E)

#### `ETHIOPIC`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#ethiopic)

`CalendarIdentifier.ETHIOPIC ＝ "ethiopic"`

Ethiopic calendar, Amete Mihret (epoch approx, 8 C.E.)

#### `GREGORIAN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#gregorian)

`CalendarIdentifier.GREGORIAN ＝ "gregory"`

Gregorian calendar (alias)

#### `GREGORY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#gregory)

`CalendarIdentifier.GREGORY ＝ "gregory"`

Gregorian calendar

#### `HEBREW`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hebrew)

`CalendarIdentifier.HEBREW ＝ "hebrew"`

Traditional Hebrew calendar

#### `INDIAN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#indian)

`CalendarIdentifier.INDIAN ＝ "indian"`

Indian calendar

#### `ISLAMIC`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#islamic)

`CalendarIdentifier.ISLAMIC ＝ "islamic"`

Islamic calendar

#### `ISLAMIC_CIVIL`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#islamic_civil)

`CalendarIdentifier.ISLAMIC_CIVIL ＝ "islamic-civil"`

Islamic calendar, tabular (intercalary years \[2,5,7,10,13,16,18,21,24,26,29\] - civil epoch)

#### `ISLAMIC_RGSA`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#islamic_rgsa)

`CalendarIdentifier.ISLAMIC_RGSA ＝ "islamic-rgsa"`

Islamic calendar, Saudi Arabia sighting

#### `ISLAMIC_TBLA`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#islamic_tbla)

`CalendarIdentifier.ISLAMIC_TBLA ＝ "islamic-tbla"`

Islamic calendar, tabular (intercalary years \[2,5,7,10,13,16,18,21,24,26,29\] - astronomical epoch)

#### `ISLAMIC_UMALQURA`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#islamic_umalqura)

`CalendarIdentifier.ISLAMIC_UMALQURA ＝ "islamic-umalqura"`

Islamic calendar, Umm al-Qura

#### `ISO8601`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#iso8601)

`CalendarIdentifier.ISO8601 ＝ "iso8601"`

ISO calendar (Gregorian calendar using the ISO 8601 calendar week rules)

#### `JAPANESE`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#japanese)

`CalendarIdentifier.JAPANESE ＝ "japanese"`

Japanese imperial calendar

#### `PERSIAN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#persian)

`CalendarIdentifier.PERSIAN ＝ "persian"`

Persian calendar

#### `ROC`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#roc)

`CalendarIdentifier.ROC ＝ "roc"`

Civil (algorithmic) Arabic calendar

### `Weekday`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#weekday)

An enum mapping days of the week in Gregorian calendar to their index as returned by the `firstWeekday` property.

#### `TUESDAY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tuesday)

`Weekday.TUESDAY ＝ 3`

#### `WEDNESDAY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#wednesday)

`Weekday.WEDNESDAY ＝ 4`

#### `THURSDAY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#thursday)

`Weekday.THURSDAY ＝ 5`

#### `SATURDAY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#saturday)

`Weekday.SATURDAY ＝ 7`




# Location - Expo Documentation

> ## Excerpt
> A library that provides access to reading geolocation information, polling current location or subscribing location update events from the device.

---
## ![Expo Location icon](https://docs.expo.dev/static/images/packages/expo-location.png)Expo Location

A library that provides access to reading geolocation information, polling current location or subscribing location update events from the device.

___

`expo-location` allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-location`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-location) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-app-config)

You can configure `expo-location` using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `locationAlwaysAndWhenInUsePermission` | `"Allow $(PRODUCT_NAME) to use your location"` | 
Only for: 

iOS

  

A string to set the [`NSLocationAlwaysAndWhenInUseUsageDescription`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-nslocationalwaysandwheninuseusagedescription) permission message.

 |
| `locationAlwaysPermission` | `"Allow $(PRODUCT_NAME) to use your location"` | 

Only for: 

iOS

  

A string to set the [`NSLocationAlwaysUsageDescription`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-nslocationalwaysusagedescription) permission message.

 |
| `locationWhenInUsePermission` | `"Allow $(PRODUCT_NAME) to use your location"` | 

Only for: 

iOS

  

A string to set the [`NSLocationWhenInUseUsageDescription`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-nslocationwheninuseusagedescription) permission message.

 |
| `isIosBackgroundLocationEnabled` | `false` | 

Only for: 

iOS

  

A boolean to enable `location` in the `UIBackgroundModes` in Info.plist.

 |
| `isAndroidBackgroundLocationEnabled` | `false` | 

Only for: 

Android

  

A boolean to enable the [`ACCESS_BACKGROUND_LOCATION`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-access_background_location) permission.

 |
| `isAndroidForegroundServiceEnabled` | \- | 

Only for: 

Android

  

A boolean to enable the [`FOREGROUND_SERVICE`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-foreground_service) permission and [`FOREGROUND_SERVICE_LOCATION`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-foreground_service_location). Defaults to `true` if `isAndroidBackgroundLocationEnabled` is `true`, otherwise `false`.

 |

Are you using this library in a bare React Native app?[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#are-you-using-this-library-in-a)

### Background location[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#background-location)

Background location allows your app to receive location updates while it is running in the background and includes both location updates and region monitoring through geofencing. This feature is subject to platform API limitations and system constraints:

-   Background location will stop if the user terminates the app.
-   Background location resumes if the user restarts the app.
-   A terminated app will not automatically restart when a location or geofencing event occurs due to platform limitations.
-   The system will restart the terminated app when a new geofence event occurs.

> On Android, the result of removing an app from the recent apps list varies by device vendor. For example, some implementations treat removing an app from the recent apps list as killing it. Read more about these differences here: [https://dontkillmyapp.com](https://dontkillmyapp.com/).

### Background location configuration [](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#background-location-configuration)

To be able to run background location on iOS, you need to add the `location` value to the `UIBackgroundModes` array in your app's Info.plist file.

If you're using [CNG](https://docs.expo.dev/workflow/continuous-native-generation/), the required `UIBackgroundModes` configuration will be applied automatically by prebuild.

Configure UIBackgroundModes manually on iOS[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configure-uibackgroundmodes-manually-on-ios)

If you're not using Continuous Native Generation ([CNG](https://docs.expo.dev/workflow/continuous-native-generation/)) or you're using a native iOS project, then you'll need to add the following to your Expo.plist file:

ios/project-name/Supporting/Expo.plist

```
<key>UIBackgroundModes</key>
  <array>
    <string>location</string>
  </array>
</key>
```

### Background location methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#background-location-methods)

To use Background Location methods, the following requirements apply:

-   Location permissions must be granted.
-   Background location task must be defined in the top-level scope, using [`TaskManager.defineTask`](https://docs.expo.dev/versions/latest/sdk/task-manager/#taskmanagerdefinetasktaskname-taskexecutor).
-   `"location"` background mode must be specified in Info.plist file. See [Background location configuration](https://docs.expo.dev/versions/latest/sdk/location/#background-location-configuration).
-   You must use a [development build](https://docs.expo.dev/develop/development-builds/introduction/) to use background location since it is not supported in the Expo Go app.

### Geofencing methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geofencing-methods)

To use Geofencing methods, the following requirements apply:

-   Location permissions must be granted.
-   The Geofencing task must be defined in the top-level scope, using [TaskManager.defineTask](https://docs.expo.dev/versions/latest/sdk/task-manager/#taskmanagerdefinetasktaskname-taskexecutor).

When using Geofencing, the following platform differences apply:

-   You are allowed [up to 100](https://developer.android.com/develop/sensors-and-location/location/geofencing) active geofences per app.
-   Expo Location will report the initial state of the registered geofence(s) at app startup.
-   There is a [limit of 20](https://developer.apple.com/documentation/corelocation/monitoring_the_user_s_proximity_to_geographic_regions) `regions` that can be simultaneously monitored.

### Background permissions[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#background-permissions)

To use location tracking or Geofencing in the background, you must request the appropriate permissions:

-   On Android, you must request both foreground and background permissions.
-   On iOS, it must be granted with the `Always` option using [`requestBackgroundPermissionsAsync`](https://docs.expo.dev/versions/latest/sdk/location/#locationrequestbackgroundpermissionsasync).

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

If you're using the Android Emulator or iOS Simulator, ensure that [Location is enabled](https://docs.expo.dev/versions/latest/sdk/location/#enable-emulator-location).

```
import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
%%placeholder-start%%%%placeholder-end%%import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      %%placeholder-start%%%%placeholder-end%%if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
```

## Enable Emulator Location[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#enable-emulator-location)

### Android Emulator[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#android-emulator)

Open Android Studio, and launch the Android Emulator. Inside it, go to Settings > Location and enable Use location.

If you don't receive the locations in the emulator, you may have to turn off the Improve Location Accuracy setting. This will turn off Wi-Fi location and only use GPS. Then you can manipulate the location with GPS data through the emulator.

For Android 12 and higher, go to Settings > Location > Location Services > Google Location Accuracy, and turn off Improve Location Accuracy. For Android 11 and lower, go to Settings > Location > Advanced > Google Location Accuracy, and turn off Google Location Accuracy.

### iOS Simulator[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#ios-simulator)

With Simulator open, go to Features > Location and choose any option besides None.

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import * as Location from 'expo-location';
```

## Hooks[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hooks)

### `useBackgroundPermissions(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usebackgroundpermissionsoptions)

| Parameter | Type |
| --- | --- |
| options(optional) | `[PermissionHookOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionhookoptions)<object>` |

  

Check or request permissions for the background location. This uses both `requestBackgroundPermissionsAsync` and `getBackgroundPermissionsAsync` to interact with the permissions.

`[null | [PermissionResponse](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse), RequestPermissionMethod<[PermissionResponse](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse)>, GetPermissionMethod<[PermissionResponse](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse)>]`

Example

```
const [status, requestPermission] = Location.useBackgroundPermissions();
```

### `useForegroundPermissions(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#useforegroundpermissionsoptions)

| Parameter | Type |
| --- | --- |
| options(optional) | `[PermissionHookOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionhookoptions)<object>` |

  

Check or request permissions for the foreground location. This uses both `requestForegroundPermissionsAsync` and `getForegroundPermissionsAsync` to interact with the permissions.

`[null | [LocationPermissionResponse](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationpermissionresponse), RequestPermissionMethod<[LocationPermissionResponse](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationpermissionresponse)>, GetPermissionMethod<[LocationPermissionResponse](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationpermissionresponse)>]`

Example

```
const [status, requestPermission] = Location.useForegroundPermissions();
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `Location.enableNetworkProviderAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationenablenetworkproviderasync)

Asks the user to turn on high accuracy location mode which enables network provider that uses Google Play services to improve location accuracy and location-based services.

A promise resolving as soon as the user accepts the dialog. Rejects if denied.

### `Location.geocodeAsync(address)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgeocodeasyncaddress)

| Parameter | Type | Description |
| --- | --- | --- |
| address | `string` | 
A string representing address, eg. `"Baker Street London"`.

 |

  

Geocode an address string to latitude-longitude location.

On Android, you must request location permissions with [`requestForegroundPermissionsAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationrequestforegroundpermissionsasync) before geocoding can be used.

> Note: Geocoding is resource consuming and has to be used reasonably. Creating too many requests at a time can result in an error, so they have to be managed properly. It's also discouraged to use geocoding while the app is in the background and its results won't be shown to the user immediately.

A promise which fulfills with an array (in most cases its size is 1) of [`LocationGeocodedLocation`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgeocodedlocation) objects.

### `Location.getBackgroundPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgetbackgroundpermissionsasync)

Checks user's permissions for accessing location while the app is in the background.

A promise that fulfills with an object of type [`PermissionResponse`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse).

### `Location.getCurrentPositionAsync(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgetcurrentpositionasyncoptions)

| Parameter | Type |
| --- | --- |
| options(optional) | `[LocationOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationoptions)` |

  

Requests for one-time delivery of the user's current location. Depending on given `accuracy` option it may take some time to resolve, especially when you're inside a building.

> Note: Calling it causes the location manager to obtain a location fix which may take several seconds. Consider using [`getLastKnownPositionAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgetlastknownpositionasyncoptions) if you expect to get a quick response and high accuracy is not required.

A promise which fulfills with an object of type [`LocationObject`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationobject).

### `Location.getForegroundPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgetforegroundpermissionsasync)

Checks user's permissions for accessing location while the app is in the foreground.

A promise that fulfills with an object of type [`LocationPermissionResponse`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationpermissionresponse).

### `Location.getHeadingAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgetheadingasync)

Gets the current heading information from the device. To simplify, it calls `watchHeadingAsync` and waits for a couple of updates, and then returns the one that is accurate enough.

A promise which fulfills with an object of type [`LocationHeadingObject`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationheadingobject).

### `Location.getLastKnownPositionAsync(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgetlastknownpositionasyncoptions)

| Parameter | Type |
| --- | --- |
| options(optional) | `[LocationLastKnownOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationlastknownoptions)` |

  

Gets the last known position of the device or `null` if it's not available or doesn't match given requirements such as maximum age or required accuracy. It's considered to be faster than `getCurrentPositionAsync` as it doesn't request for the current location, but keep in mind the returned location may not be up-to-date.

A promise which fulfills with an object of type [`LocationObject`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationobject) or `null` if it's not available or doesn't match given requirements such as maximum age or required accuracy.

### `Location.getProviderStatusAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgetproviderstatusasync)

Check status of location providers.

A promise which fulfills with an object of type [`LocationProviderStatus`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationproviderstatus).

### `Location.hasServicesEnabledAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationhasservicesenabledasync)

Checks whether location services are enabled by the user.

A promise which fulfills to `true` if location services are enabled on the device, or `false` if not.

### `Location.hasStartedGeofencingAsync(taskName)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationhasstartedgeofencingasynctaskname)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the geofencing task to check.

 |

  

A promise which fulfills with boolean value indicating whether the geofencing task is started or not.

### `Location.hasStartedLocationUpdatesAsync(taskName)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationhasstartedlocationupdatesasynctaskname)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the location task to check.

 |

  

A promise which fulfills with boolean value indicating whether the location task is started or not.

### `Location.installWebGeolocationPolyfill()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationinstallwebgeolocationpolyfill)

Polyfills `navigator.geolocation` for interop with the core React Native and Web API approach to geolocation.

### `Location.isBackgroundLocationAvailableAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationisbackgroundlocationavailableasync)

### `Location.requestBackgroundPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationrequestbackgroundpermissionsasync)

Asks the user to grant permissions for location while the app is in the background. On Android 11 or higher: this method will open the system settings page - before that happens you should explain to the user why your application needs background location permission. For example, you can use `Modal` component from `react-native` to do that.

> Note: Foreground permissions should be granted before asking for the background permissions (your app can't obtain background permission without foreground permission).

A promise that fulfills with an object of type [`PermissionResponse`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse).

### `Location.requestForegroundPermissionsAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationrequestforegroundpermissionsasync)

Asks the user to grant permissions for location while the app is in the foreground.

A promise that fulfills with an object of type [`LocationPermissionResponse`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationpermissionresponse).

### `Location.reverseGeocodeAsync(location)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationreversegeocodeasynclocation)

| Parameter | Type | Description |
| --- | --- | --- |
| location | `[Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<[LocationGeocodedLocation](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgeocodedlocation), 'latitude' | 'longitude'>` | 
An object representing a location.

 |

  

Reverse geocode a location to postal address.

On Android, you must request location permissions with [`requestForegroundPermissionsAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationrequestforegroundpermissionsasync) before geocoding can be used.

> Note: Geocoding is resource consuming and has to be used reasonably. Creating too many requests at a time can result in an error, so they have to be managed properly. It's also discouraged to use geocoding while the app is in the background and its results won't be shown to the user immediately.

A promise which fulfills with an array (in most cases its size is 1) of [`LocationGeocodedAddress`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgeocodedaddress) objects.

### `Location.startGeofencingAsync(taskName, regions)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationstartgeofencingasynctaskname-regions)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the task that will be called when the device enters or exits from specified regions.

 |
| regions(optional) | `[LocationRegion[]](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationregion)` | 

Array of region objects to be geofenced.

Default:`[]`



 |

  

Starts geofencing for given regions. When the new event comes, the task with specified name will be called with the region that the device enter to or exit from. If you want to add or remove regions from already running geofencing task, you can just call `startGeofencingAsync` again with the new array of regions.

#### Task parameters[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#task-parameters)

Geofencing task will be receiving following data:

-   `eventType` - Indicates the reason for calling the task, which can be triggered by entering or exiting the region. See [`GeofencingEventType`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geofencingeventtype).
-   `region` - Object containing details about updated region. See [`LocationRegion`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationregion) for more details.

A promise resolving as soon as the task is registered.

Example

```
import { GeofencingEventType } from 'expo-location';
import * as TaskManager from 'expo-task-manager';

 TaskManager.defineTask(YOUR_TASK_NAME, ({ data: { eventType, region }, error }) => {
  if (error) {
    // check `error.message` for more details.
    return;
  }
  if (eventType === GeofencingEventType.Enter) {
    console.log("You've entered region:", region);
  } else if (eventType === GeofencingEventType.Exit) {
    console.log("You've left region:", region);
  }
});
```

### `Location.startLocationUpdatesAsync(taskName, options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationstartlocationupdatesasynctaskname-options)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the task receiving location updates.

 |
| options(optional) | `[LocationTaskOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationtaskoptions)` | 

An object of options passed to the location manager.

 |

  

Registers for receiving location updates that can also come when the app is in the background.

#### Task parameters[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#task-parameters-1)

Background location task will be receiving following data:

-   `locations` - An array of the new locations.

A promise resolving once the task with location updates is registered.

Example

```
import * as TaskManager from 'expo-task-manager';

TaskManager.defineTask(YOUR_TASK_NAME, ({ data: { locations }, error }) => {
 if (error) {
   // check `error.message` for more details.
   return;
 }
 console.log('Received new locations', locations);
});
```

### `Location.stopGeofencingAsync(taskName)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationstopgeofencingasynctaskname)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the task to unregister.

 |

  

Stops geofencing for specified task. It unregisters the background task so the app will not be receiving any updates, especially in the background.

A promise resolving as soon as the task is unregistered.

### `Location.stopLocationUpdatesAsync(taskName)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationstoplocationupdatesasynctaskname)

| Parameter | Type | Description |
| --- | --- | --- |
| taskName | `string` | 
Name of the background location task to stop.

 |

  

Stops location updates for specified task.

A promise resolving as soon as the task is unregistered.

### `Location.watchHeadingAsync(callback)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationwatchheadingasynccallback)

| Parameter | Type | Description |
| --- | --- | --- |
| callback | `[LocationHeadingCallback](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationheadingcallback)` | 
This function is called on each compass update. It receives an object of type [LocationHeadingObject](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationheadingobject) as the first argument.

 |

  

Subscribe to compass updates from the device.

A promise which fulfills with a [`LocationSubscription`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationsubscription) object.

### `Location.watchPositionAsync(options, callback)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationwatchpositionasyncoptions-callback)

| Parameter | Type | Description |
| --- | --- | --- |
| options | `[LocationOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationoptions)` | \- |
| callback | `[LocationCallback](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationcallback)` | 
This function is called on each location update. It receives an object of type [`LocationObject`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationobject) as the first argument.

 |

  

Subscribe to location updates from the device. Please note that updates will only occur while the application is in the foreground. To get location updates while in background you'll need to use [`startLocationUpdatesAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationstartlocationupdatesasynctaskname-options).

A promise which fulfills with a [`LocationSubscription`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationsubscription) object.

## Interfaces[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#interfaces)

### `PermissionResponse`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse)

An object obtained by permissions get and request functions.

| Property | Type | Description |
| --- | --- | --- |
| canAskAgain | `boolean` | 
Indicates if user can be asked again for specific permission. If not, one should be directed to the Settings app in order to enable/disable the permission.

 |
| expires | `[PermissionExpiration](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionexpiration)` | 

Determines time when the permission expires.

 |
| granted | `boolean` | 

A convenience boolean that indicates if the permission is granted.

 |
| status | `[PermissionStatus](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionstatus)` | 

Determines the status of the permission.

 |

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `LocationCallback(location)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationcallbacklocation)

Represents `watchPositionAsync` callback.

| Parameter | Type |
| --- | --- |
| location | `[LocationObject](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationobject)` |

### `LocationGeocodedAddress`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgeocodedaddress)

Type representing a result of `reverseGeocodeAsync`.

| Property | Type | Description |
| --- | --- | --- |
| city | `string | null` | 
City name of the address.

 |
| country | `string | null` | 

Localized country name of the address.

 |
| district | `string | null` | 

Additional city-level information like district name.

 |
| formattedAddress | `string | null` | 

Only for: 

Android

  

Composed string of the address components, for example, "111 8th Avenue, New York, NY".



 |
| isoCountryCode | `string | null` | 

Localized (ISO) country code of the address, if available.

 |
| name | `string | null` | 

The name of the placemark, for example, "Tower Bridge".

 |
| postalCode | `string | null` | 

Postal code of the address.

 |
| region | `string | null` | 

The state or province associated with the address.

 |
| street | `string | null` | 

Street name of the address.

 |
| streetNumber | `string | null` | 

Street number of the address.

 |
| subregion | `string | null` | 

Additional information about administrative area.

 |
| timezone | `string | null` | 

Only for: 

iOS

  

The timezone identifier associated with the address.



 |

### `LocationGeocodedLocation`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationgeocodedlocation)

Type representing a result of `geocodeAsync`.

| Property | Type | Description |
| --- | --- | --- |
| accuracy(optional) | `number` | 
The radius of uncertainty for the location, measured in meters.

 |
| altitude(optional) | `number` | 

The altitude in meters above the WGS 84 reference ellipsoid.

 |
| latitude | `number` | 

The latitude in degrees.

 |
| longitude | `number` | 

The longitude in degrees.

 |

### `LocationHeadingCallback(location)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationheadingcallbacklocation)

Represents `watchHeadingAsync` callback.

| Parameter | Type |
| --- | --- |
| location | `[LocationHeadingObject](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationheadingobject)` |

### `LocationHeadingObject`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationheadingobject)

Type of the object containing heading details and provided by `watchHeadingAsync` callback.

| Property | Type | Description |
| --- | --- | --- |
| accuracy | `number` | 
Level of calibration of compass:

-   `3`: high accuracy
-   `2`: medium accuracy
-   `1`: low accuracy
-   `0`: none

Reference for iOS:

-   `3`: < 20 degrees uncertainty
-   `2`: < 35 degrees
-   `1`: < 50 degrees
-   `0`: > 50 degrees



 |
| magHeading | `number` | 

Measure of magnetic north in degrees.

 |
| trueHeading | `number` | 

Measure of true north in degrees (needs location permissions, will return `-1` if not given).

 |

### `LocationLastKnownOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationlastknownoptions)

Type representing options object that can be passed to `getLastKnownPositionAsync`.

| Property | Type | Description |
| --- | --- | --- |
| maxAge(optional) | `number` | 
A number of milliseconds after which the last known location starts to be invalid and thus `null` is returned.

 |
| requiredAccuracy(optional) | `number` | 

The maximum radius of uncertainty for the location, measured in meters. If the last known location's accuracy radius is bigger (less accurate) then `null` is returned.

 |

### `LocationObject`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationobject)

Type representing the location object.

| Property | Type | Description |
| --- | --- | --- |
| coords | `[LocationObjectCoords](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationobjectcoords)` | 
The coordinates of the position.

 |
| mocked(optional) | `boolean` | 

Only for: 

Android

  

Whether the location coordinates is mocked or not.



 |
| timestamp | `number` | 

The time at which this position information was obtained, in milliseconds since epoch.

 |

### `LocationObjectCoords`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationobjectcoords)

Type representing the location GPS related data.

| Property | Type | Description |
| --- | --- | --- |
| accuracy | `number | null` | 
The radius of uncertainty for the location, measured in meters. Can be `null` on Web if it's not available.

 |
| altitude | `number | null` | 

The altitude in meters above the WGS 84 reference ellipsoid. Can be `null` on Web if it's not available.

 |
| altitudeAccuracy | `number | null` | 

The accuracy of the altitude value, in meters. Can be `null` on Web if it's not available.

 |
| heading | `number | null` | 

Horizontal direction of travel of this device, measured in degrees starting at due north and continuing clockwise around the compass. Thus, north is 0 degrees, east is 90 degrees, south is 180 degrees, and so on. Can be `null` on Web if it's not available.

 |
| latitude | `number` | 

The latitude in degrees.

 |
| longitude | `number` | 

The longitude in degrees.

 |
| speed | `number | null` | 

The instantaneous speed of the device in meters per second. Can be `null` on Web if it's not available.

 |

### `LocationOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationoptions)

Type representing options argument in `getCurrentPositionAsync`.

| Property | Type | Description |
| --- | --- | --- |
| accuracy(optional) | `[Accuracy](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#accuracy)` | 
Location manager accuracy. Pass one of `Accuracy` enum values. For low-accuracies the implementation can avoid geolocation providers that consume a significant amount of power (such as GPS).

Default:`LocationAccuracy.Balanced`



 |
| distanceInterval(optional) | `number` | 

Receive updates only when the location has changed by at least this distance in meters. Default value may depend on `accuracy` option.

 |
| mayShowUserSettingsDialog(optional) | `boolean` | 

Only for: 

Android

  

Specifies whether to ask the user to turn on improved accuracy location mode which uses Wi-Fi, cell networks and GPS sensor.

Default:`true`



 |
| timeInterval(optional) | `number` | 

Only for: 

Android

  

Minimum time to wait between each update in milliseconds. Default value may depend on `accuracy` option.



 |

### `LocationPermissionResponse`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationpermissionresponse)

`LocationPermissionResponse` extends [`PermissionResponse`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse) type exported by `expo-modules-core` and contains additional platform-specific fields.

Type: `[PermissionResponse](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionresponse)` extended by:

| Property | Type | Description |
| --- | --- | --- |
| android(optional) | `[PermissionDetailsLocationAndroid](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissiondetailslocationandroid)` | \- |
| ios(optional) | `[PermissionDetailsLocationIOS](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissiondetailslocationios)` | \- |

### `LocationProviderStatus`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationproviderstatus)

Represents the object containing details about location provider.

| Property | Type | Description |
| --- | --- | --- |
| backgroundModeEnabled | `boolean` | \- |
| gpsAvailable(optional) | `boolean` | 
Only for: 

Android

  

Whether the GPS provider is available. If `true` the location data will come from GPS, especially for requests with high accuracy.



 |
| locationServicesEnabled | `boolean` | 

Whether location services are enabled. See [Location.hasServicesEnabledAsync](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationhasservicesenabledasync) for a more convenient solution to get this value.

 |
| networkAvailable(optional) | `boolean` | 

Only for: 

Android

  

Whether the network provider is available. If `true` the location data will come from cellular network, especially for requests with low accuracy.



 |
| passiveAvailable(optional) | `boolean` | 

Only for: 

Android

  

Whether the passive provider is available. If `true` the location data will be determined passively.



 |

### `LocationRegion`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationregion)

Type representing geofencing region object.

| Property | Type | Description |
| --- | --- | --- |
| identifier(optional) | `string` | 
The identifier of the region object. Defaults to auto-generated UUID hash.

 |
| latitude | `number` | 

The latitude in degrees of region's center point.

 |
| longitude | `number` | 

The longitude in degrees of region's center point.

 |
| notifyOnEnter(optional) | `boolean` | 

Boolean value whether to call the task if the device enters the region.

Default:`true`



 |
| notifyOnExit(optional) | `boolean` | 

Boolean value whether to call the task if the device exits the region.

Default:`true`



 |
| radius | `number` | 

The radius measured in meters that defines the region's outer boundary.

 |
| state(optional) | `[GeofencingRegionState](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geofencingregionstate)` | 

One of [GeofencingRegionState](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geofencingregionstate) region state. Determines whether the device is inside or outside a region.

 |

### `LocationSubscription`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationsubscription)

Represents subscription object returned by methods watching for new locations or headings.

| Property | Type | Description |
| --- | --- | --- |
| remove | `() => void` | 
Call this function with no arguments to remove this subscription. The callback will no longer be called for location updates.

 |

### `LocationTaskOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationtaskoptions)

Type representing background location task options.

Type: `[LocationOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationoptions)` extended by:

| Property | Type | Description |
| --- | --- | --- |
| activityType(optional) | `[ActivityType](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#activitytype)` | 
Only for: 

iOS

  

The type of user activity associated with the location updates.

Default:`ActivityType.Other`

> See: See [Apple docs](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620567-activitytype) for more details.



 |
| deferredUpdatesDistance(optional) | `number` | 

The distance in meters that must occur between last reported location and the current location before deferred locations are reported.

Default:`0`



 |
| deferredUpdatesInterval(optional) | `number` | 

Minimum time interval in milliseconds that must pass since last reported location before all later locations are reported in a batched update

Default:`0`



 |
| deferredUpdatesTimeout(optional) | `number` | \- |
| foregroundService(optional) | `[LocationTaskServiceOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationtaskserviceoptions)` | \- |
| pausesUpdatesAutomatically(optional) | `boolean` | 

Only for: 

iOS

  

A boolean value indicating whether the location manager can pause location updates to improve battery life without sacrificing location data. When this option is set to `true`, the location manager pauses updates (and powers down the appropriate hardware) at times when the location data is unlikely to change. You can help the determination of when to pause location updates by assigning a value to the `activityType` property.

Default:`false`



 |
| showsBackgroundLocationIndicator(optional) | `boolean` | 

Only for: 

iOS

  

A boolean indicating whether the status bar changes its appearance when location services are used in the background.

Default:`false`



 |

### `LocationTaskServiceOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locationtaskserviceoptions)

| Property | Type | Description |
| --- | --- | --- |
| killServiceOnDestroy(optional) | `boolean` | 
Boolean value whether to destroy the foreground service if the app is killed.

 |
| notificationBody | `string` | 

Subtitle of the foreground service notification.

 |
| notificationColor(optional) | `string` | 

Color of the foreground service notification. Accepts `#RRGGBB` and `#AARRGGBB` hex formats.

 |
| notificationTitle | `string` | 

Title of the foreground service notification.

 |

### `PermissionDetailsLocationAndroid`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissiondetailslocationandroid)

| Property | Type | Description |
| --- | --- | --- |
| accuracy | `'fine' | 'coarse' | 'none'` | 
Indicates the type of location provider.

 |

### `PermissionDetailsLocationIOS`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissiondetailslocationios)

| Property | Type | Description |
| --- | --- | --- |
| scope | `'whenInUse' | 'always' | 'none'` | 
The scope of granted permission. Indicates when it's possible to use location.

 |

### `PermissionExpiration`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionexpiration)

Literal Type: multiple types

Permission expiration time. Currently, all permissions are granted permanently.

Acceptable values are: `'never'` | `number`

### `PermissionHookOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionhookoptions)

Literal Type: multiple types

Acceptable values are: `PermissionHookBehavior` | `Options`

## Enums[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#enums)

### `Accuracy`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#accuracy)

Enum with available location accuracies.

#### `Lowest`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#lowest)

`Accuracy.Lowest ＝ 1`

Accurate to the nearest three kilometers.

#### `Low`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#low)

`Accuracy.Low ＝ 2`

Accurate to the nearest kilometer.

#### `Balanced`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#balanced)

`Accuracy.Balanced ＝ 3`

Accurate to within one hundred meters.

#### `High`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#high)

`Accuracy.High ＝ 4`

Accurate to within ten meters of the desired target.

#### `Highest`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#highest)

`Accuracy.Highest ＝ 5`

The best level of accuracy available.

#### `BestForNavigation`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#bestfornavigation)

`Accuracy.BestForNavigation ＝ 6`

The highest possible accuracy that uses additional sensor data to facilitate navigation apps.

### `ActivityType`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#activitytype)

Enum with available activity types of background location tracking.

#### `Other`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#other)

`ActivityType.Other ＝ 1`

Default activity type. Use it if there is no other type that matches the activity you track.

#### `AutomotiveNavigation`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#automotivenavigation)

`ActivityType.AutomotiveNavigation ＝ 2`

Location updates are being used specifically during vehicular navigation to track location changes to the automobile.

#### `Fitness`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fitness)

`ActivityType.Fitness ＝ 3`

Use this activity type if you track fitness activities such as walking, running, cycling, and so on.

#### `OtherNavigation`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#othernavigation)

`ActivityType.OtherNavigation ＝ 4`

Activity type for movements for other types of vehicular navigation that are not automobile related.

#### `Airborne`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#airborne)

`ActivityType.Airborne ＝ 5`

Intended for airborne activities. Fall backs to `ActivityType.Other` if unsupported.

### `GeofencingEventType`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geofencingeventtype)

A type of the event that geofencing task can receive.

#### `Enter`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#enter)

`GeofencingEventType.Enter ＝ 1`

Emitted when the device entered observed region.

#### `Exit`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#exit)

`GeofencingEventType.Exit ＝ 2`

Occurs as soon as the device left observed region

### `GeofencingRegionState`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geofencingregionstate)

State of the geofencing region that you receive through the geofencing task.

#### `Unknown`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#unknown)

`GeofencingRegionState.Unknown ＝ 0`

Indicates that the device position related to the region is unknown.

#### `Inside`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#inside)

`GeofencingRegionState.Inside ＝ 1`

Indicates that the device is inside the region.

#### `Outside`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#outside)

`GeofencingRegionState.Outside ＝ 2`

Inverse of inside state.

### `PermissionStatus`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissionstatus)

#### `DENIED`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#denied)

`PermissionStatus.DENIED ＝ "denied"`

User has denied the permission.

#### `GRANTED`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#granted)

`PermissionStatus.GRANTED ＝ "granted"`

User has granted the permission.

#### `UNDETERMINED`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#undetermined)

`PermissionStatus.UNDETERMINED ＝ "undetermined"`

User hasn't granted or denied the permission yet.

## Permissions[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permissions)

### Android[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#android)

> Foreground and background services are not available in Expo Go for Android. Instead, we recommend using a [development build](https://docs.expo.dev/develop/development-builds/introduction/) to avoid limitations.

When you install the `expo-location` module, it automatically adds the following permissions:

-   `ACCESS_COARSE_LOCATION`: for approximate device location
-   `ACCESS_FINE_LOCATION`: for precise device location

The following permissions are optional:

-   `FOREGROUND_SERVICE` and `FOREGROUND_SERVICE_LOCATION`: to be able to access location while the app is open but backgrounded. `FOREGROUND_SERVICE_LOCATION` is only required as of Android 14. When you enable this in a new build, you will need to [submit your app for review and request access to use the foreground service permission](https://support.google.com/googleplay/android-developer/answer/13392821?hl=en).
-   `ACCESS_BACKGROUND_LOCATION`: to be able to access location while the app is backgrounded or closed. When you enable this in a new build, you will need to [submit your app for review and request access to use the background location permission](https://support.google.com/googleplay/android-developer/answer/9799150?hl=en).

| Android Permission | Description |
| --- | --- |
| 
`ACCESS_COARSE_LOCATION`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-access_coarse_location)

 | 

Allows an app to access approximate location.

> Alternatively, you might want `[ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission#ACCESS_FINE_LOCATION)`.

 |
| 

`ACCESS_FINE_LOCATION`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-access_fine_location)

 | 

Allows an app to access precise location.

> Alternatively, you might want `[ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission#ACCESS_COARSE_LOCATION)`.

 |
| 

`FOREGROUND_SERVICE`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-foreground_service)

 | 

Allows a regular application to use Service.startForeground.

> Allows a regular application to use `[Service.startForeground](https://developer.android.com/reference/android/app/Service#startForeground(int,%20android.app.Notification))`.

 |
| 

`FOREGROUND_SERVICE_LOCATION`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-foreground_service_location)

 | 

Allows a regular application to use Service.startForeground with the type "location".

> Allows a regular application to use `[Service.startForeground](https://developer.android.com/reference/android/app/Service#startForeground(int,%20android.app.Notification))` with the type "location".

 |
| 

`ACCESS_BACKGROUND_LOCATION`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-access_background_location)

 | 

Allows an app to access location in the background.

> If you're requesting this permission, you must also request either `[ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission#ACCESS_COARSE_LOCATION)` or `[ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission#ACCESS_FINE_LOCATION)`. Requesting this permission by itself doesn't give you location access.

 |

#### Excluding a permission[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#excluding-a-permission)

> Note: Excluding a required permission from a module in your app can break the functionality corresponding to that permission. Always make sure to include all permissions a module is dependent on.

When your Expo project doesn't benefit from having particular permission included, you can omit it. For example, if your application doesn't need access to the precise location, you can exclude the `ACCESS_FINE_LOCATION` permission.

Another example can be stated using [available location accuracies](https://docs.expo.dev/versions/latest/sdk/location/#accuracy). Android defines the approximate location accuracy estimation within about 3 square kilometers, and the precise location accuracy estimation within about 50 meters. For example, if the location accuracy value is [Low](https://docs.expo.dev/versions/latest/sdk/location/#low), you can exclude `ACCESS_FINE_LOCATION` permission. To learn more about levels of location accuracies, see [Android documentation](https://developer.android.com/training/location/permissions#accuracy).

To learn more on how to exclude permission, see [Excluding Android permissions](https://docs.expo.dev/guides/permissions/#excluding-android-permissions).

### iOS[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#ios)

The following usage description keys are used by this library:

| Info.plist Key | Description |
| --- | --- |
| 
`NSLocationAlwaysAndWhenInUseUsageDescription`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-nslocationalwaysandwheninuseusagedescription)

 | A message that tells the user why the app is requesting access to the user’s location information at all times. |
| 

`NSLocationAlwaysUsageDescription`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-nslocationalwaysusagedescription)

 | A message that tells the user why the app is requesting access to the user's location at all times.DeprecatedFor apps deployed to targets in iOS 11 and later, use NSLocationAlwaysAndWhenInUseUsageDescription instead. |
| 

`NSLocationWhenInUseUsageDescription`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#permission-nslocationwheninuseusagedescription)

 | A message that tells the user why the app is requesting access to the user’s location information while the app is running in the foreground. |




# NavigationBar - Expo Documentation

> ## Excerpt
> A library that provides access to various interactions with the native navigation bar on Android.

---
A library that provides access to various interactions with the native navigation bar on Android.

___

`expo-navigation-bar` enables you to modify and observe the native navigation bar on Android devices. Due to some Android platform restrictions, parts of this API overlap with the `expo-status-bar` API.

Properties are named after style properties; visibility, position, backgroundColor, borderColor, and so on.

The APIs in this package have no impact when "Gesture Navigation" is enabled on the Android device. There is currently no native Android API to detect if "Gesture Navigation" is enabled or not.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-navigation-bar`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-navigation-bar) as mentioned by the library's README under "Installation in bare React Native projects" section.

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import * as NavigationBar from 'expo-navigation-bar';
```

## Hooks[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hooks)

### `useVisibility()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usevisibility)

React hook that statefully updates with the visibility of the system navigation bar.

Visibility of the navigation bar, `null` during async initialization.

Example

```
function App() {
  const visibility = NavigationBar.useVisibility()
  // React Component...
}
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `NavigationBar.getBackgroundColorAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbargetbackgroundcolorasync)

Gets the navigation bar's background color.

Current navigation bar color in hex format. Returns `#00000000` (transparent) on unsupported platforms (iOS, web).

Example

```
const color = await NavigationBar.getBackgroundColorAsync();
```

### `NavigationBar.getBehaviorAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbargetbehaviorasync)

Gets the behavior of the status and navigation bars when the user swipes or touches the screen.

Navigation bar interaction behavior. Returns `inset-touch` on unsupported platforms (iOS, web).

Example

```
await NavigationBar.getBehaviorAsync()
```

### `NavigationBar.getBorderColorAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbargetbordercolorasync)

Gets the navigation bar's top border color, also known as the "divider color".

Navigation bar top border color in hex format. Returns `#00000000` (transparent) on unsupported platforms (iOS, web).

Example

```
const color = await NavigationBar.getBorderColorAsync();
```

### `NavigationBar.getButtonStyleAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbargetbuttonstyleasync)

Gets the navigation bar's button color styles.

Navigation bar foreground element color settings. Returns `light` on unsupported platforms (iOS, web).

Example

```
const style = await NavigationBar.getButtonStyleAsync();
```

### `NavigationBar.getVisibilityAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbargetvisibilityasync)

Get the navigation bar's visibility.

Navigation bar's current visibility status. Returns `hidden` on unsupported platforms (iOS, web).

Example

```
const visibility = await NavigationBar.getVisibilityAsync("hidden");
```

### `NavigationBar.setBackgroundColorAsync(color)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarsetbackgroundcolorasynccolor)

  

Changes the navigation bar's background color.

Example

```
NavigationBar.setBackgroundColorAsync("white");
```

### `NavigationBar.setBehaviorAsync(behavior)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarsetbehaviorasyncbehavior)

| Parameter | Type | Description |
| --- | --- | --- |
| behavior | `[NavigationBarBehavior](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarbehavior)` | 
Dictates the interaction behavior of the navigation bar.

 |

  

Sets the behavior of the status bar and navigation bar when they are hidden and the user wants to reveal them.

For example, if the navigation bar is hidden (`setVisibilityAsync(false)`) and the behavior is `'overlay-swipe'`, the user can swipe from the bottom of the screen to temporarily reveal the navigation bar.

-   `'overlay-swipe'`: Temporarily reveals the System UI after a swipe gesture (bottom or top) without insetting your App's content.
-   `'inset-swipe'`: Reveals the System UI after a swipe gesture (bottom or top) and insets your App's content (Safe Area). The System UI is visible until you explicitly hide it again.
-   `'inset-touch'`: Reveals the System UI after a touch anywhere on the screen and insets your App's content (Safe Area). The System UI is visible until you explicitly hide it again.

Example

```
await NavigationBar.setBehaviorAsync('overlay-swipe')
```

### `NavigationBar.setBorderColorAsync(color)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarsetbordercolorasynccolor)

  

Changes the navigation bar's border color.

Example

```
NavigationBar.setBorderColorAsync("red");
```

### `NavigationBar.setButtonStyleAsync(style)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarsetbuttonstyleasyncstyle)

| Parameter | Type | Description |
| --- | --- | --- |
| style | `[NavigationBarButtonStyle](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarbuttonstyle)` | 
Dictates the color of the foreground element color.

 |

  

Changes the navigation bar's button colors between white (`light`) and a dark gray color (`dark`).

Example

```
NavigationBar.setButtonStyleAsync("light");
```

### `NavigationBar.setPositionAsync(position)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarsetpositionasyncposition)

| Parameter | Type | Description |
| --- | --- | --- |
| position | `[NavigationBarPosition](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarposition)` | 
Based on CSS position property.

 |

  

Sets positioning method used for the navigation bar (and status bar). Setting position `absolute` will float the navigation bar above the content, whereas position `relative` will shrink the screen to inline the navigation bar.

When drawing behind the status and navigation bars, ensure the safe area insets are adjusted accordingly.

Example

```
// enables edge-to-edge mode
await NavigationBar.setPositionAsync('absolute')
// transparent backgrounds to see through
await NavigationBar.setBackgroundColorAsync('#ffffff00')
```

### `NavigationBar.setVisibilityAsync(visibility)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarsetvisibilityasyncvisibility)

| Parameter | Type | Description |
| --- | --- | --- |
| visibility | `[NavigationBarVisibility](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarvisibility)` | 
Based on CSS visibility property.

 |

  

Set the navigation bar's visibility.

Example

```
NavigationBar.setVisibilityAsync("hidden");
```

### `NavigationBar.unstable_getPositionAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarunstable_getpositionasync)

Whether the navigation and status bars float above the app (absolute) or sit inline with it (relative). This value can be incorrect if `androidNavigationBar.visible` is used instead of the config plugin `position` property.

This method is unstable because the position can be set via another native module and get out of sync. Alternatively, you can get the position by measuring the insets returned by `react-native-safe-area-context`.

Navigation bar positional rendering mode. Returns `relative` on unsupported platforms (iOS, web).

Example

```
await NavigationBar.unstable_getPositionAsync()
```

## Event Subscriptions[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#event-subscriptions)

### `NavigationBar.addVisibilityListener(listener)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbaraddvisibilitylistenerlistener)

| Parameter | Type |
| --- | --- |
| listener | `(event: [NavigationBarVisibilityEvent](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarvisibilityevent)) => void` |

  

Observe changes to the system navigation bar. Due to platform constraints, this callback will also be triggered when the status bar visibility changes.

Example

```
NavigationBar.addVisibilityListener(({ visibility }) => {
  // ...
});
```

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `NavigationBarBehavior`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarbehavior)

Literal Type: `string`

Interaction behavior for the system navigation bar.

Acceptable values are: `'overlay-swipe'` | `'inset-swipe'` | `'inset-touch'`

### `NavigationBarButtonStyle`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarbuttonstyle)

Literal Type: `string`

Appearance of the foreground elements in the navigation bar, i.e. the color of the menu, back, home button icons.

-   `dark` makes buttons darker to adjust for a mostly light nav bar.
-   `light` makes buttons lighter to adjust for a mostly dark nav bar.

Acceptable values are: `'light'` | `'dark'`

### `NavigationBarPosition`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarposition)

Literal Type: `string`

Navigation bar positional mode.

Acceptable values are: `'relative'` | `'absolute'`

### `NavigationBarVisibility`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarvisibility)

Literal Type: `string`

Visibility of the navigation bar.

Acceptable values are: `'visible'` | `'hidden'`

### `NavigationBarVisibilityEvent`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarvisibilityevent)

Current system UI visibility state. Due to platform constraints, this will return when the status bar visibility changes as well as the navigation bar.

| Property | Type | Description |
| --- | --- | --- |
| rawVisibility | `number` | 
Native Android system UI visibility state, returned from the native Android `setOnSystemUiVisibilityChangeListener` API.

 |
| visibility | `[NavigationBarVisibility](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationbarvisibility)` | 

Current navigation bar visibility.

 |




# Router - Expo Documentation

> ## Excerpt
> A file-based routing library for React Native and web applications.

---
## Expo Router

A file-based routing library for React Native and web applications.

___

`expo-router` is a routing library for React Native and web apps. It enables navigation management using a file-based routing system and provides native navigation components and is built on top of [React Navigation](https://reactnavigation.org/).

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-router`

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-app-config)

If you are using the [default](https://docs.expo.dev/more/create-expo/#--template) template to create a new project, `expo-router` [config plugin](https://docs.expo.dev/config-plugins/introduction/) is automatically configured in the app config automatically.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": ["expo-router"]
  }
}
```

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

Find more information and guides about using `expo-router` in [Expo Router](https://docs.expo.dev/router/introduction/) section.

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import { Stack, Tabs, Link } from 'expo-router';
```

## Components[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#components)

### `ErrorBoundary`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#errorboundary)

Type: `React.Element<[ErrorBoundaryProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#errorboundaryprops)>`

Props passed to a page's `ErrorBoundary` export.

ErrorBoundaryProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#errorboundaryprops)

### `error`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#error)

The error that was thrown.

### `retry`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#retry)

A function that will re-render the route component by clearing the `error` state.

### `Link`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#link)

Type: `React.Element<PropsWithChildren<[LinkProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#linkprops)>>`

Component that renders a link using [`href`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href) to another route. By default, it accepts children and wraps them in a `<Text>` component.

Uses an anchor tag (`<a>`) on web and performs a client-side navigation to preserve the state of the website and navigate faster. The web-only attributes such as `target`, `rel`, and `download` are supported and passed to the anchor tag on web. See [`WebAnchorProps`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webanchorprops) for more details.

> Note: Client-side navigation works with both single-page apps, and [static-rendering](https://docs.expo.dev/router/reference/static-rendering/).

Example

```
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Route() {
 return (
  <View>
   <Link href="/about">About</Link>
  </View>
 );
}
```

### `asChild`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#aschild)

Optional • Type: `boolean`

Used to customize the `Link` component. It will forward all props to the first child of the `Link`. Note that the child component must accept `onPress` or `onClick` props. The `href` and `role` are also passed to the child.

Example

```
import { Link } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Route() {
 return (
  <View>
   <Link href="/home" asChild>
     <Pressable>
      <Text>Home</Text>
     </Pressable>
   </Link>
  </View>
 );
}
```

### `className`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#classname)

Optional • Type: `string`

On native, this can be used with CSS interop tools like Nativewind. On web, this sets the HTML `class` directly.

### `dismissTo`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#dismissto)

Optional • Type: `boolean`

While in a stack, this will dismiss screens until the provided href is reached. If the href is not found, it will instead replace the current screen with the provided href.

Example

```
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Route() {
 return (
  <View>
    <Link dismissTo href="/feed">Close modal</Link>
  </View>
 );
}
```

### `href`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)

Type: `string | [HrefObject](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hrefobject)`

The path of the route to navigate to. It can either be:

-   string: A full path like `/profile/settings` or a relative path like `../settings`.
-   object: An object with a `pathname` and optional `params`. The `pathname` can be a full path like `/profile/settings` or a relative path like `../settings`. The params can be an object of key-value pairs.

Example

```
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Route() {
 return (
  <View>
   <Link href="/about">About</Link>
   <Link
    href={{
      pathname: '/user/[id]',
      params: { id: 'bacon' }
    }}>
      View user
   </Link>
  </View>
 );
}
```

### `onPress`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#onpress)

This function is called on press. Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).

### `push`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#push)

Optional • Type: `boolean`

Always pushes a new route, and never pops or replaces to existing route. You can push the current route multiple times or with new parameters.

Example

```
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Route() {
 return (
  <View>
    <Link push href="/feed">Login</Link>
  </View>
 );
}
```

### `relativeToDirectory`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#relativetodirectory)

Optional • Type: `boolean`

Relative URL references are either relative to the directory or the document. By default, relative paths are relative to the document.

### `replace`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#replace)

Optional • Type: `boolean`

Removes the current route from the history and replace it with the specified URL. This is useful for [redirects](https://docs.expo.dev/router/reference/redirects/).

Example

```
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Route() {
 return (
  <View>
    <Link replace href="/feed">Login</Link>
  </View>
 );
}
```

### `withAnchor`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#withanchor)

Optional • Type: `boolean`

Replaces the initial screen with the current route.

### `Redirect`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#redirect)

Type: `React.Element<[RedirectProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#redirectprops)>`

Redirects to the `href` as soon as the component is mounted.

Example

```
import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';

export default function Page() {
 const { user } = useAuth();

 if (!user) {
   return <Redirect href="/login" />;
 }

 return (
   <View>
     <Text>Welcome Back!</Text>
   </View>
 );
}
```

RedirectProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#redirectprops)

### `href`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href-1)

Type: `[Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)`

The path of the route to navigate to. It can either be:

-   string: A full path like `/profile/settings` or a relative path like `../settings`.
-   object: An object with a `pathname` and optional `params`. The `pathname` can be a full path like `/profile/settings` or a relative path like `../settings`. The params can be an object of key-value pairs.

Example

```
import { Redirect } from 'expo-router';

export default function RedirectToAbout() {
 return (
   <Redirect href="/about">About</Link>
 );
}
```

### `relativeToDirectory`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#relativetodirectory-1)

Optional • Type: `boolean`

Relative URL references are either relative to the directory or the document. By default, relative paths are relative to the document.

### `withAnchor`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#withanchor-1)

Optional • Type: `boolean`

Replaces the initial screen with the current route.

### `Slot`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#slot)

Type: `React.Element<[Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[NavigatorProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigatorprops)<any>, 'children'>>`

Renders the currently selected content.

There are actually two different implementations of `<Slot/>`:

-   Used inside a `_layout` as the `Navigator`
-   Used inside a `Navigator` as the content

Since a custom `Navigator` will set the `NavigatorContext.contextKey` to the current `_layout`, you can use this to determine if you are inside a custom navigator or not.

## Hooks[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hooks)

### `useFocusEffect(effect, do_not_pass_a_second_prop)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usefocuseffecteffect-do_not_pass_a_second_prop)

| Parameter | Type | Description |
| --- | --- | --- |
| effect | `[EffectCallback](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#effectcallback)` | 
Memoized callback containing the effect, should optionally return a cleanup function.

 |
| do\_not\_pass\_a\_second\_prop(optional) | `undefined` | \- |

  

Hook to run an effect whenever a route is focused. Similar to [`React.useEffect`](https://react.dev/reference/react/useEffect).

This can be used to perform side-effects such as fetching data or subscribing to events. The passed callback should be wrapped in [`React.useCallback`](https://react.dev/reference/react/useCallback) to avoid running the effect too often.

Example

```
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';

export default function Route() {
  useFocusEffect(
    // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
    useCallback(() => {
      // Invoked whenever the route is focused.
      console.log('Hello, I'm focused!');

      // Return function is invoked whenever the route gets out of focus.
      return () => {
        console.log('This route is now unfocused.');
      };
    }, []);
   );

 return </>;
}
```

### `useGlobalSearchParams()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#useglobalsearchparams)

Returns URL parameters for globally selected route, including dynamic path segments. This function updates even when the route is not focused. Useful for analytics or other background operations that don't draw to the screen.

Route URL example: `acme://profile/baconbrix?extra=info`.

When querying search params in a stack, opt-towards using [`useLocalSearchParams`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#uselocalsearchparams) because it will only update when the route is focused.

`RouteParams<TRoute> & TParams`

Example

```
import { Text } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';

export default function Route() {
  // user=baconbrix & extra=info
  const { user, extra } = useGlobalSearchParams();

  return <Text>User: {user}</Text>;
}
```

### `useLocalSearchParams()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#uselocalsearchparams)

Returns the URL parameters for the contextually focused route. Useful for stacks where you may push a new screen that changes the query parameters. For dynamic routes, both the route parameters and the search parameters are returned.

Route URL example: `acme://profile/baconbrix?extra=info`.

To observe updates even when the invoking route is not focused, use [`useGlobalSearchParams`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#useglobalsearchparams).

`RouteParams<TRoute> & TParams`

Example

```
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Route() {
 // user=baconbrix & extra=info
 const { user, extra } = useLocalSearchParams();

 return <Text>User: {user}</Text>;
}
```

### `useNavigation(parent)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usenavigationparent)

| Parameter | Type | Description |
| --- | --- | --- |
| parent(optional) | `string | [HrefObject](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hrefobject)` | 
Provide an absolute path such as `/(root)` to the parent route or a relative path like `../../` to the parent route.

 |

  

Returns the underlying React Navigation [`navigation` object](https://reactnavigation.org/docs/navigation-object) to imperatively access layout-specific functionality like `navigation.openDrawer()` in a [Drawer](https://docs.expo.dev/router/advanced/drawer/) layout.

The navigation object for the current route.

Example

```
import { useNavigation } from 'expo-router';

export default function Route() {
  // Access the current navigation object for the current route.
  const navigation = useNavigation();

  return (
    <View>
      <Text onPress={() => {
        // Open the drawer view.
        navigation.openDrawer();
      }}>
        Open Drawer
      </Text>
    </View>
  );
}
```

When using nested layouts, you can access higher-order layouts by passing a secondary argument denoting the layout route. For example, `/menu/_layout.tsx` is nested inside `/app/orders/`, you can use `useNavigation('/orders/menu/')`.

Example

app/orders/menu/index.tsx

```
import { useNavigation } from 'expo-router';

export default function MenuRoute() {
  const rootLayout = useNavigation('/');
  const ordersLayout = useNavigation('/orders');

  // Same as the default results of `useNavigation()` when invoked in this route.
  const parentLayout = useNavigation('/orders/menu');
}
```

If you attempt to access a layout that doesn't exist, an error such as `Could not find parent navigation with route "/non-existent"` is thrown.

### `useNavigationContainerRef()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usenavigationcontainerref)

The root `<NavigationContainer />` ref for the app. The `ref.current` may be `null` if the `<NavigationContainer />` hasn't mounted yet.

### `usePathname()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usepathname)

Returns the currently selected route location without search parameters. For example, `/acme?foo=bar` returns `/acme`. Segments will be normalized. For example, `/[id]?id=normal` becomes `/normal`.

Example

```
import { Text } from 'react-native';
import { usePathname } from 'expo-router';

export default function Route() {
  // pathname = "/profile/baconbrix"
  const pathname = usePathname();

  return <Text>User: {user}</Text>;
}
```

> Deprecated Use [`useNavigationContainerRef`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usenavigationcontainerref) instead, which returns a React `ref`.

### `useRootNavigation()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#userootnavigation)

### `useRootNavigationState()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#userootnavigationstate)

Returns the [navigation state](https://reactnavigation.org/docs/navigation-state/) of the navigator which contains the current screen.

Example

```
import { useRootNavigationState } from 'expo-router';

export default function Route() {
 const { routes } = useRootNavigationState();

 return <Text>{routes[0].name}</Text>;
}
```

### `useRouter()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#userouter)

Returns the [Router](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#router) object for imperative navigation.

Example

```
import { useRouter } from 'expo-router';
import { Text } from 'react-native';

export default function Route() {
 const router = useRouter();

 return (
  <Text onPress={() => router.push('/home')}>Go Home</Text>
 );
}
```

### `useSegments()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usesegments)

Returns a list of selected file segments for the currently selected route. Segments are not normalized, so they will be the same as the file path. For example, `/[id]?id=normal` becomes `["[id]"]`.

Example

```
import { Text } from 'react-native';
import { useSegments } from 'expo-router';

export default function Route() {
  // segments = ["profile", "[user]"]
  const segments = useSegments();

  return <Text>Hello</Text>;
}
```

`useSegments` can be typed using an abstract. Consider the following file structure:

```
- app
  - [user]
    - index.tsx
    - followers.tsx
  - settings.tsx
```

This can be strictly typed using the following abstract with `useSegments` hook:

```
const [first, second] = useSegments<['settings'] | ['[user]'] | ['[user]', 'followers']>()
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `withLayoutContext(Nav, processor)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#withlayoutcontextnav-processor)

| Parameter | Type |
| --- | --- |
| Nav | `T` |
| processor(optional) | `(options: [ScreenProps[]](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenprops)) => [ScreenProps[]](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenprops)` |

  

Returns a navigator that automatically injects matched routes and renders nothing when there are no children. Return type with `children` prop optional.

`[Component](https://react.dev/reference/react/Component)<PropsWithoutRef<[PickPartial](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#pickpartial)<ComponentProps<T>, 'children'>>> & { Screen: (props: [ScreenProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenprops)<TOptions, TState, TEventMap>) => null }`

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `EffectCallback()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#effectcallback)

Memoized callback containing the effect, should optionally return a cleanup function.

`undefined | void | () => void`

### `ExternalPathString`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#externalpathstring)

Literal Type: multiple types

Acceptable values are: `{string}:{string}` | `//{string}`

### `Href<T>`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hreft)

The main routing type for Expo Router. It includes all available routes with strongly typed parameters. It can either be:

-   string: A full path like `/profile/settings` or a relative path like `../settings`.
-   object: An object with a `pathname` and optional `params`. The `pathname` can be a full path like `/profile/settings` or a relative path like `../settings`. The params can be an object of key-value pairs.

An Href can either be a string or an object.

Generic: `T`

Type: `T ? T[href] : string | [HrefObject](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hrefobject)`

### `HrefObject`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hrefobject)

| Property | Type | Description |
| --- | --- | --- |
| params(optional) | `UnknownInputParams` | 
Optional parameters for the route.

 |
| pathname | `string` | 

The path of the route.

 |

### `NativeIntent`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#nativeintent)

Created by using a special file called `+native-intent.tsx` at the top-level of your project's app directory. It exports `redirectSystemPath` or `legacy_subscribe` functions, both methods designed to handle URL/path processing.

Useful for re-writing URLs to correctly target a route when unique/referred URLs are incoming from third-party providers or stale URLs from previous versions.

> See: For more information on how to use `NativeIntent`, see [Customizing links](https://docs.expo.dev/router/advanced/native-intent/).

| Property | Type | Description |
| --- | --- | --- |
| legacy\_subscribe(optional) | `(listener: (url: string) => void) => undefined | void | () => void` | 
> Experimentally available in SDK 52.

Useful as an alternative API when a third-party provider doesn't support Expo Router but has support for React Navigation via `Linking.subscribe()` for existing projects.

Using this API is not recommended for newer projects or integrations since it is incompatible with Server Side Routing and [Static Rendering](https://docs.expo.dev/router/reference/static-rendering/), and can become challenging to manage while offline or in a low network environment.

`listener: (url: string) => void`



 |
| redirectSystemPath(optional) | `(event: { initial: boolean, path: string }) => [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<string> | string` | 

A special method used to process URLs in native apps. When invoked, it receives an `options` object with the following properties:

-   path: represents the URL or path undergoing processing.
-   initial: a boolean indicating whether the path is the app's initial URL.

It's return value should either be a `string` or a `Promise<string>`. Note that throwing errors within this method may result in app crashes. It's recommended to wrap your code inside a `try/catch` block and utilize `.catch()` when appropriate.

> See: For usage information, see [Redirecting system paths](https://docs.expo.dev/router/advanced/native-intent/#redirectsystempath).

`event: { initial: boolean, path: string }`



 |

### `PickPartial`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#pickpartial)

Literal Type: multiple types

The list of input keys will become optional, everything else will remain the same.

Acceptable values are: `[Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<T, K>` | `[Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<T, K>>`

### `RelativePathString`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#relativepathstring)

Literal Type: multiple types

Acceptable values are: `./{string}` | `../{string}` | `'..'`

### `ResultState`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resultstate)

Type: `PartialState<[NavigationState](https://reactnavigation.org/docs/navigation-state)>` extended by:

| Property | Type | Description |
| --- | --- | --- |
| state(optional) | `[ResultState](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resultstate)` | \- |

### `Router`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#router)

Returns `router` object for imperative navigation API.

Example

```
import { router } from 'expo-router';
import { Text } from 'react-native';

export default function Route() {

 return (
  <Text onPress={() => router.push('/home')}>Go Home</Text>
 );
}
```

| Property | Type | Description |
| --- | --- | --- |
| back | `() => void` | 
Goes back in the navigation history.

 |
| canDismiss | `() => boolean` | 

Checks if it is possible to dismiss the current screen. Returns `true` if the router is within the stack with more than one screen in stack's history.

 |
| canGoBack | `() => boolean` | 

Navigates to a route in the navigator's history if it supports invoking the `back` function.

 |
| dismiss | `(count: number) => void` | 

Navigates to the a stack lower than the current screen using the provided count if possible, otherwise 1.

If the current screen is the only route, it will dismiss the entire stack.

`count: number`



 |
| dismissAll | `() => void` | 

Returns to the first screen in the closest stack. This is similar to [`popToTop`](https://reactnavigation.org/docs/stack-actions/#poptotop) stack action.

 |
| dismissTo | `(href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href), options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)) => void` | 

Dismisses screens until the provided href is reached. If the href is not found, it will instead replace the current screen with the provided `href`.

`href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)`

`options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)`



 |
| navigate | `(href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href), options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)) => void` | 

Navigates to the provided [`href`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href).

`href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)`

`options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)`



 |
| push | `(href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href), options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)) => void` | 

Navigates to the provided [`href`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href) using a push operation if possible.

`href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)`

`options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)`



 |
| replace | `(href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href), options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)) => void` | 

Navigates to route without appending to the history. Can be used with [`useFocusEffect`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usefocuseffecteffect-do_not_pass_a_second_prop) to redirect imperatively to a new screen.

> See: [Using `useRouter()` hook](https://docs.expo.dev/router/reference/redirects/) to redirect.

`href: [Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)`

`options: [NavigationOptions](https://reactnavigation.org/docs/screen-options/)`



 |
| setParams | `(params: [Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<RouteInputParams<T>>) => void` | 

Updates the current route's query params.

`params: [Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<RouteInputParams<T>>`



 |

### `ScreenProps`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenprops)

| Property | Type | Description |
| --- | --- | --- |
| getId(optional) | `({ params }: { params: Record<string, any> }) => string | undefined` | \-
`{ params }: { params: Record<string, any> }`



 |
| initialParams(optional) | `Record<string, any>` | \- |
| listeners(optional) | `ScreenListeners<TState, TEventMap> | (prop: { navigation: any, route: [RouteProp](https://reactnavigation.org/docs/glossary-of-terms/#route-object)<ParamListBase, string> }) => ScreenListeners<TState, TEventMap>` | \- |
| name(optional) | `string` | 

Name is required when used inside a Layout component.

 |
| options(optional) | `TOptions | (prop: { navigation: any, route: [RouteProp](https://reactnavigation.org/docs/glossary-of-terms/#route-object)<ParamListBase, string> }) => TOptions` | \- |
| redirect(optional) | `boolean` | 

Redirect to the nearest sibling route. If all children are `redirect={true}`, the layout will render `null` as there are no children to render.

 |

### `SearchOrHash`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#searchorhash)

Literal Type: multiple types

Acceptable values are: `?{string}` | `#{string}`

### `WebAnchorProps`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webanchorprops)

| Property | Type | Description |
| --- | --- | --- |
| download(optional) | `string` | 
Specifies that the [`href`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href) should be downloaded when the user clicks on the link, instead of navigating to it. It is typically used for links that point to files that the user should download, such as PDFs, images, documents, and more.

The value of the `download` property, which represents the filename for the downloaded file. This property is passed to the underlying anchor (`<a>`) tag.

Example

```
<Link href="/image.jpg" download="my-image.jpg">Download image</Link>
```





 |
| rel(optional) | `string` | 

Specifies the relationship between the [`href`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href) and the current route.

Common values:

-   nofollow: Indicates to search engines that they should not follow the `href`. This is often used for user-generated content or links that should not influence search engine rankings.
-   noopener: Suggests that the `href` should not have access to the opening window's `window.opener` object, which is a security measure to prevent potentially harmful behavior in cases of links that open new tabs or windows.
-   noreferrer: Requests that the browser does not send the `Referer` HTTP header when navigating to the `href`. This can enhance user privacy.

The `rel` property is primarily used for informational and instructive purposes, helping browsers and web crawlers make better decisions about how to handle and interpret the links on a web page. It is important to use appropriate `rel` values to ensure that links behave as intended and adhere to best practices for web development and SEO (Search Engine Optimization).

This property is passed to the underlying anchor (`<a>`) tag.

Example

```
<Link href="https://expo.dev" rel="nofollow">Go to Expo</Link>
```





 |
| target(optional) | `'_self' | '_blank' | '_parent' | '_top' | string & object` | 

Specifies where to open the [`href`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href).

-   \_self: the current tab.
-   \_blank: opens in a new tab or window.
-   \_parent: opens in the parent browsing context. If no parent, defaults to \_self.
-   \_top: opens in the highest browsing context ancestor. If no ancestors, defaults to \_self.

This property is passed to the underlying anchor (`<a>`) tag.

Default:`'_self'`

Example

```
<Link href="https://expo.dev" target="_blank">Go to Expo in new tab</Link>
```





 |




# Router UI - Expo Documentation

> ## Excerpt
> An Expo Router submodule that provides headless tab components to create custom tab layouts.

---
## Expo Router UI

An Expo Router submodule that provides headless tab components to create custom tab layouts.

___

`expo-router/ui` is a submodule of `expo-router` library and exports components and hooks to build custom tab layouts, rather than using the default [React Navigation](https://reactnavigation.org/) navigators provided by `expo-router`.

> See the [Expo Router](https://docs.expo.dev/versions/latest/sdk/router/) reference for more information about the file-based routing library for native and web app.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-router`

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-app-config)

If you are using the [default](https://docs.expo.dev/more/create-expo/#--template) template to create a new project, `expo-router` [config plugin](https://docs.expo.dev/config-plugins/introduction/) is automatically configured in the app config automatically.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": ["expo-router"]
  }
}
```

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

Find more information about using `expo-router/ui` in [Expo Router UI](https://docs.expo.dev/router/advanced/custom-tabs/) guide.

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
```

## Components[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#components)

### `TabList`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tablist)

Type: `React.Element<[TabListProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tablistprops)>`

Wrapper component for `TabTriggers`. `TabTriggers` within the `TabList` define the tabs.

Example

```
<Tabs>
 <TabSlot />
 <TabList>
  <TabTrigger name="home" href="/" />
 </TabList>
</Tabs>
```

TabListProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tablistprops)

### `asChild`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#aschild)

Optional • Type: `boolean`

Forward props to child component and removes the extra `<View>`. Useful for custom wrappers.

### `Tabs`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabs)

Type: `React.Element<[TabsProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabsprops)>`

Root component for the headless tabs.

> See: [`useTabsWithChildren`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabswithchildrenoptions) for a hook version of this component.

Example

```
<Tabs>
 <TabSlot />
 <TabList>
  <TabTrigger name="home" href="/" />
 </TabList>
</Tabs>
```

TabsProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabsprops)

### `asChild`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#aschild-1)

Optional • Type: `boolean`

Forward props to child component and removes the extra `<View>`. Useful for custom wrappers.

### `options`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#options)

Optional • Type: `[UseTabsOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabsoptions)`

### `TabSlot`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabslot)

Type: `React.Element<[TabSlotProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabslotprops)>`

Renders the current tab.

> See: [`useTabSlot`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabslot) for a hook version of this component.

Example

```
<Tabs>
 <TabSlot />
 <TabList>
  <TabTrigger name="home" href="/" />
 </TabList>
</Tabs>
```

TabSlotProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabslotprops)

### `detachInactiveScreens`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#detachinactivescreens)

Optional • Type: `boolean`

Remove inactive screens.

### `renderFn`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#renderfn)

Optional • Type: `defaultTabsSlotRender`

Override how the `Screen` component is rendered.

#### Inherited Props[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#inherited-props-2)

-   `ComponentProps<ScreenContainer>`

### `TabTrigger`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabtrigger)

Type: `React.Element<[TabTriggerProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabtriggerprops)>`

Creates a trigger to navigate to a tab. When used as child of `TabList`, its functionality slightly changes since the `href` prop is required, and the trigger also defines what routes are present in the `Tabs`.

When used outside of `TabList`, this component no longer requires an `href`.

Example

```
<Tabs>
 <TabSlot />
 <TabList>
  <TabTrigger name="home" href="/" />
 </TabList>
</Tabs>
```

TabTriggerProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabtriggerprops)

### `asChild`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#aschild-2)

Optional • Type: `boolean`

Forward props to child component. Useful for custom wrappers.

### `href`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)

Optional • Type: `[Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)`

Name of tab. Required when used within a `TabList`.

### `name`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#name)

Type: `string`

Name of tab. When used within a `TabList` this sets the name of the tab. Otherwise, this references the name.

### `reset`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#reset)

Optional • Type: `SwitchToOptions[reset] | 'onLongPress'`

Resets the route when switching to a tab.

### `useTabSlot`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabslot)

Type: `React.Element<[TabSlotProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabslotprops)>`

Returns a `ReactElement` of the current tab.

Example

```
function MyTabSlot() {
  const slot = useTabSlot();

  return slot;
}
```

## Constants[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#constants)

### `Tabs.TabContext`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabstabcontext)

Type: `[Context](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#context)<[ExpoTabsNavigatorScreenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#expotabsnavigatorscreenoptions)>`

## Hooks[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hooks)

### `useTabSlot(namedParameters)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabslotnamedparameters)

| Parameter | Type |
| --- | --- |
| namedParameters(optional) | `[TabSlotProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabslotprops)` |

  

Returns a `ReactElement` of the current tab.

Example

```
function MyTabSlot() {
  const slot = useTabSlot();

  return slot;
}
```

### `useTabsWithChildren(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabswithchildrenoptions)

| Parameter | Type |
| --- | --- |
| options | `[UseTabsWithChildrenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabswithchildrenoptions)` |

  

Hook version of `Tabs`. The returned NavigationContent component should be rendered.

> See: [`Tabs`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabs) for the component version of this hook.

Example

```
export function MyTabs({ children }) {
 const { NavigationContent } = useTabsWithChildren({ children })

 return <NavigationContent />
}
```

### `useTabsWithTriggers(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabswithtriggersoptions)

| Parameter | Type |
| --- | --- |
| options | `[UseTabsWithTriggersOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabswithtriggersoptions)` |

  

Alternative hook version of `Tabs` that uses explicit triggers instead of `children`.

> See: [`Tabs`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabs) for the component version of this hook.

Example

```
export function MyTabs({ children }) {
  const { NavigationContent } = useTabsWithChildren({ triggers: [] })

  return <NavigationContent />
}
```

### `useTabTrigger(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabtriggeroptions)

| Parameter | Type |
| --- | --- |
| options | `[TabTriggerProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabtriggerprops)` |

  

Utility hook creating custom `TabTrigger`.

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `ExpoTabsNavigatorScreenOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#expotabsnavigatorscreenoptions)

| Property | Type | Description |
| --- | --- | --- |
| detachInactiveScreens(optional) | `boolean` | \- |
| freezeOnBlur(optional) | `boolean` | \- |
| lazy(optional) | `boolean` | \- |
| unmountOnBlur(optional) | `boolean` | \- |

### `ExpoTabsResetValue`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#expotabsresetvalue)

Literal Type: `string`

Acceptable values are: `'always'` | `'onFocus'` | `'never'`

### `ExpoTabsScreenOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#expotabsscreenoptions)

Type: `[Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<[BottomTabNavigationOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#bottomtabnavigationoptions), 'title' | 'lazy' | 'freezeOnBlur'>` extended by:

| Property | Type | Description |
| --- | --- | --- |
| action | `[NavigationAction](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#navigationaction)` | \- |
| params(optional) | `object` | \- |
| title | `string` | \- |

### `SwitchToOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#switchtooptions)

Options for `switchTab` function.

| Property | Type | Description |
| --- | --- | --- |
| reset(optional) | `[ExpoTabsResetValue](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#expotabsresetvalue)` | 
Navigate and reset the history.

 |

### `TabNavigationEventMap`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabnavigationeventmap)

| Property | Type | Description |
| --- | --- | --- |
| tabLongPress | `{ data: undefined }` | 
Event which fires on long press on the tab in the tab bar.

 |
| tabPress | `{ canPreventDefault: true, data: undefined }` | 

Event which fires on tapping on the tab in the tab bar.

 |

### `TabsContextValue`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabscontextvalue)

Type: `[ReturnType](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#returntype)<useNavigationBuilder>`

The React Navigation custom navigator.

### `TabsSlotRenderOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabsslotrenderoptions)

Options provided to the `UseTabSlotOptions`.

| Property | Type | Description |
| --- | --- | --- |
| detachInactiveScreens | `boolean` | 
Should the screen be unloaded when inactive.

 |
| index | `number` | 

Index of screen.

 |
| isFocused | `boolean` | 

Whether the screen is focused.

 |
| loaded | `boolean` | 

Whether the screen has been loaded.

 |

### `TabTriggerOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tabtriggeroptions)

| Property | Type | Description |
| --- | --- | --- |
| href | `[Href](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#href)` | \- |
| name | `string` | \- |

### `Trigger`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#trigger)

Type: extended by:

| Property | Type | Description |
| --- | --- | --- |
| isFocused | `boolean` | \- |
| resolvedHref | `string` | \- |
| route | `[number]` | \- |

### `UseTabsWithChildrenOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabswithchildrenoptions-1)

Type: `PropsWithChildren<[UseTabsOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabsoptions)>`

### `UseTabsWithTriggersOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabswithtriggersoptions-1)

Type: `[UseTabsOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabsoptions)` extended by:

| Property | Type | Description |
| --- | --- | --- |
| triggers | `[ScreenTrigger[]](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screentrigger)` | \- |

### `UseTabTriggerResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usetabtriggerresult)

| Property | Type | Description |
| --- | --- | --- |
| getTrigger | `(name: string) => [Trigger](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#trigger) | undefined` | \-
`name: string`



 |
| switchTab | `(name: string, options: [SwitchToOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#switchtooptions)) => void` | \-

`name: string`

`options: [SwitchToOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#switchtooptions)`



 |
| trigger(optional) | `[Trigger](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#trigger)` | \- |
| triggerProps | `[TriggerProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#triggerprops)` | \- |




# ScreenOrientation - Expo Documentation

> ## Excerpt
> A universal library for managing a device's screen orientation.

---
A universal library for managing a device's screen orientation.

___

Screen Orientation is defined as the orientation in which graphics are painted on the device. For example, the figure below has a device in a vertical and horizontal physical orientation, but a portrait screen orientation. For physical device orientation, see the orientation section of [Device Motion](https://docs.expo.dev/versions/latest/sdk/devicemotion/).

On both Android and iOS platforms, changes to the screen orientation will override any system settings or user preferences. On Android, it is possible to change the screen orientation while taking the user's preferred orientation into account. On iOS, user and system settings are not accessible by the application and any changes to the screen orientation will override existing settings.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-screen-orientation`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-screen-orientation) as mentioned by the library's README under "Installation in bare React Native projects" section.

### Warning[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#warning)

Apple added support for _split view_ mode to iPads in iOS 9. This changed how the screen orientation is handled by the system. To put the matter shortly, for iOS, your iPad is always in landscape mode unless you open two applications side by side. To be able to lock screen orientation using this module you will need to disable support for this feature. For more information about the _split view_ mode, check out [the official Apple documentation](https://support.apple.com/en-us/HT207582).

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-app-config)

You can configure `expo-screen-orientation` using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

Are you using this library in a bare React Native app?[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#are-you-using-this-library-in-a)

1.  Open the ios directory in Xcode with `xed ios`. If you don't have the directory, run `npx expo prebuild -p ios` to generate one.
2.  Tick the `Requires Full Screen` checkbox in Xcode. It should be located under Project Target > General > Deployment Info.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "ios": {
      "requireFullScreen": true
    },
    "plugins": [
      [
        "expo-screen-orientation",
        {
          "initialOrientation": "DEFAULT"
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `initialOrientation` | `undefined` | 
Only for: 

iOS

  

Sets the iOS initial screen orientation. Possible values: `DEFAULT`, `ALL`, `PORTRAIT`, `PORTRAIT_UP`, `PORTRAIT_DOWN`, `LANDSCAPE`, `LANDSCAPE_LEFT`, `LANDSCAPE_RIGHT`

 |

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import * as ScreenOrientation from 'expo-screen-orientation';
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `ScreenOrientation.getOrientationAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationgetorientationasync)

Gets the current screen orientation.

Returns a promise that fulfils with an [`Orientation`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientation) value that reflects the current screen orientation.

### `ScreenOrientation.getOrientationLockAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationgetorientationlockasync)

Gets the current screen orientation lock type.

Returns a promise which fulfils with an [`OrientationLock`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationlock) value.

### `ScreenOrientation.getPlatformOrientationLockAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationgetplatformorientationlockasync)

Gets the platform specific screen orientation lock type.

Returns a promise which fulfils with a [`PlatformOrientationInfo`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#platformorientationinfo) value.

### `ScreenOrientation.lockAsync(orientationLock)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationlockasyncorientationlock)

| Parameter | Type | Description |
| --- | --- | --- |
| orientationLock | `[OrientationLock](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationlock)` | 
The orientation lock to apply. See the [`OrientationLock`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationlock) enum for possible values.

 |

  

Lock the screen orientation to a particular `OrientationLock`.

Returns a promise with `void` value, which fulfils when the orientation is set.

Example

```
async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}
```

### `ScreenOrientation.lockPlatformAsync(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationlockplatformasyncoptions)

| Parameter | Type | Description |
| --- | --- | --- |
| options | `[PlatformOrientationInfo](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#platformorientationinfo)` | 
The platform specific lock to apply. See the [`PlatformOrientationInfo`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#platformorientationinfo) object type for the different platform formats.

 |

  

Returns a promise with `void` value, resolving when the orientation is set and rejecting if an invalid option or value is passed.

### `ScreenOrientation.supportsOrientationLockAsync(orientationLock)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationsupportsorientationlockasyncorientationlock)

| Parameter | Type |
| --- | --- |
| orientationLock | `[OrientationLock](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationlock)` |

  

Returns whether the [`OrientationLock`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationlock) policy is supported on the device.

Returns a promise that resolves to a `boolean` value that reflects whether or not the orientationLock is supported.

### `ScreenOrientation.unlockAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationunlockasync)

Sets the screen orientation back to the `OrientationLock.DEFAULT` policy.

Returns a promise with `void` value, which fulfils when the orientation is set.

## Event Subscriptions[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#event-subscriptions)

### `ScreenOrientation.addOrientationChangeListener(listener)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationaddorientationchangelistenerlistener)

| Parameter | Type | Description |
| --- | --- | --- |
| listener | `[OrientationChangeListener](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationchangelistener)` | 
Each orientation update will pass an object with the new [`OrientationChangeEvent`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationchangeevent) to the listener.

 |

  

Invokes the `listener` function when the screen orientation changes from `portrait` to `landscape` or from `landscape` to `portrait`. For example, it won't be invoked when screen orientation change from `portrait up` to `portrait down`, but it will be called when there was a change from `portrait up` to `landscape left`.

### `ScreenOrientation.removeOrientationChangeListener(subscription)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationremoveorientationchangelistenersubscription)

| Parameter | Type | Description |
| --- | --- | --- |
| subscription | `EventSubscription` | 
A subscription object that manages the updates passed to a listener function on an orientation change.

 |

  

Unsubscribes the listener associated with the `Subscription` object from all orientation change updates.

### `ScreenOrientation.removeOrientationChangeListeners()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationremoveorientationchangelisteners)

Removes all listeners subscribed to orientation change updates.

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `OrientationChangeEvent`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationchangeevent)

| Property | Type | Description |
| --- | --- | --- |
| orientationInfo | `[ScreenOrientationInfo](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationinfo)` | 
The current `ScreenOrientationInfo` of the device.

 |
| orientationLock | `[OrientationLock](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationlock)` | 

The current `OrientationLock` of the device.

 |

### `OrientationChangeListener(event)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationchangelistenerevent)

| Parameter | Type |
| --- | --- |
| event | `[OrientationChangeEvent](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationchangeevent)` |

### `PlatformOrientationInfo`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#platformorientationinfo)

| Property | Type | Description |
| --- | --- | --- |
| screenOrientationArrayIOS(optional) | `[Orientation[]](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientation)` | 
Only for: 

iOS

  

An array of orientations to allow on the iOS platform.



 |
| screenOrientationConstantAndroid(optional) | `number` | 

Only for: 

Android

  

A constant to set using the Android native [API](https://developer.android.com/reference/android/R.attr#screenOrientation). For example, in order to set the lock policy to [unspecified](https://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_UNSPECIFIED), `-1` should be passed in.



 |
| screenOrientationLockWeb(optional) | `[WebOrientationLock](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#weborientationlock)` | 

Only for: 

Web

  

A web orientation lock to apply in the browser.



 |

### `ScreenOrientationInfo`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationinfo)

| Property | Type | Description |
| --- | --- | --- |
| horizontalSizeClass(optional) | `[SizeClassIOS](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sizeclassios)` | 
Only for: 

iOS

  

The [horizontal size class](https://developer.apple.com/documentation/uikit/uitraitcollection/1623508-horizontalsizeclass) of the device.



 |
| orientation | `[Orientation](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientation)` | 

The current orientation of the device.

 |
| verticalSizeClass(optional) | `[SizeClassIOS](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sizeclassios)` | 

Only for: 

iOS

  

The [vertical size class](https://developer.apple.com/documentation/uikit/uitraitcollection/1623513-verticalsizeclass) of the device.



 |

### `Subscription`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#subscription)

A subscription object that allows to conveniently remove an event listener from the emitter.

| Property | Type | Description |
| --- | --- | --- |
| remove | `() => void` | 
Removes an event listener for which the subscription has been created. After calling this function, the listener will no longer receive any events from the emitter.

 |

## Enums[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#enums)

### `Orientation`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientation)

#### `UNKNOWN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#unknown)

`Orientation.UNKNOWN ＝ 0`

An unknown screen orientation. For example, the device is flat, perhaps on a table.

#### `PORTRAIT_UP`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_up)

`Orientation.PORTRAIT_UP ＝ 1`

Right-side up portrait interface orientation.

#### `PORTRAIT_DOWN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_down)

`Orientation.PORTRAIT_DOWN ＝ 2`

Upside down portrait interface orientation.

#### `LANDSCAPE_LEFT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_left)

`Orientation.LANDSCAPE_LEFT ＝ 3`

Left landscape interface orientation.

#### `LANDSCAPE_RIGHT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_right)

`Orientation.LANDSCAPE_RIGHT ＝ 4`

Right landscape interface orientation.

### `OrientationLock`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#orientationlock)

An enum whose values can be passed to the [`lockAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationlockasyncorientationlock) method.

> Note: `OrientationLock.ALL` and `OrientationLock.PORTRAIT` are invalid on devices which don't support `OrientationLock.PORTRAIT_DOWN`.

#### `DEFAULT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#default)

`OrientationLock.DEFAULT ＝ 0`

The default orientation. On iOS, this will allow all orientations except `Orientation.PORTRAIT_DOWN`. On Android, this lets the system decide the best orientation.

#### `ALL`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#all)

`OrientationLock.ALL ＝ 1`

All four possible orientations

#### `PORTRAIT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait)

`OrientationLock.PORTRAIT ＝ 2`

Any portrait orientation.

#### `PORTRAIT_UP`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_up-1)

`OrientationLock.PORTRAIT_UP ＝ 3`

Right-side up portrait only.

#### `PORTRAIT_DOWN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_down-1)

`OrientationLock.PORTRAIT_DOWN ＝ 4`

Upside down portrait only.

#### `LANDSCAPE`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape)

`OrientationLock.LANDSCAPE ＝ 5`

Any landscape orientation.

#### `LANDSCAPE_LEFT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_left-1)

`OrientationLock.LANDSCAPE_LEFT ＝ 6`

Left landscape only.

#### `LANDSCAPE_RIGHT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_right-1)

`OrientationLock.LANDSCAPE_RIGHT ＝ 7`

Right landscape only.

#### `OTHER`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#other)

`OrientationLock.OTHER ＝ 8`

A platform specific orientation. This is not a valid policy that can be applied in [`lockAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationlockasyncorientationlock).

#### `UNKNOWN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#unknown-1)

`OrientationLock.UNKNOWN ＝ 9`

An unknown screen orientation lock. This is not a valid policy that can be applied in [`lockAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationlockasyncorientationlock).

### `SizeClassIOS`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sizeclassios)

Each iOS device has a default set of [size classes](https://developer.apple.com/documentation/uikit/uiuserinterfacesizeclass) that you can use as a guide when designing your interface.

#### `UNKNOWN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#unknown-2)

`SizeClassIOS.UNKNOWN ＝ 0`

#### `COMPACT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#compact)

`SizeClassIOS.COMPACT ＝ 1`

#### `REGULAR`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#regular)

`SizeClassIOS.REGULAR ＝ 2`

### `WebOrientation`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#weborientation)

#### `LANDSCAPE_PRIMARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_primary)

`WebOrientation.LANDSCAPE_PRIMARY ＝ "landscape-primary"`

#### `LANDSCAPE_SECONDARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_secondary)

`WebOrientation.LANDSCAPE_SECONDARY ＝ "landscape-secondary"`

#### `PORTRAIT_PRIMARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_primary)

`WebOrientation.PORTRAIT_PRIMARY ＝ "portrait-primary"`

#### `PORTRAIT_SECONDARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_secondary)

`WebOrientation.PORTRAIT_SECONDARY ＝ "portrait-secondary"`

### `WebOrientationLock`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#weborientationlock)

An enum representing the lock policies that can be applied on the web platform, modelled after the [W3C specification](https://w3c.github.io/screen-orientation/#dom-orientationlocktype). These values can be applied through the [`lockPlatformAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#screenorientationlockplatformasyncoptions) method.

#### `ANY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#any)

`WebOrientationLock.ANY ＝ "any"`

#### `LANDSCAPE`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape-1)

`WebOrientationLock.LANDSCAPE ＝ "landscape"`

#### `LANDSCAPE_PRIMARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_primary-1)

`WebOrientationLock.LANDSCAPE_PRIMARY ＝ "landscape-primary"`

#### `LANDSCAPE_SECONDARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#landscape_secondary-1)

`WebOrientationLock.LANDSCAPE_SECONDARY ＝ "landscape-secondary"`

#### `NATURAL`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#natural)

`WebOrientationLock.NATURAL ＝ "natural"`

#### `PORTRAIT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait-1)

`WebOrientationLock.PORTRAIT ＝ "portrait"`

#### `PORTRAIT_PRIMARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_primary-1)

`WebOrientationLock.PORTRAIT_PRIMARY ＝ "portrait-primary"`

#### `PORTRAIT_SECONDARY`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#portrait_secondary-1)

`WebOrientationLock.PORTRAIT_SECONDARY ＝ "portrait-secondary"`

#### `UNKNOWN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#unknown-3)

`WebOrientationLock.UNKNOWN ＝ "unknown"`




# SQLite - Expo Documentation

> ## Excerpt
> A library that provides access to a database that can be queried through a SQLite API.

---
## ![Expo SQLite icon](https://docs.expo.dev/static/images/packages/expo-sqlite.png)Expo SQLite

A library that provides access to a database that can be queried through a SQLite API.

___

`expo-sqlite` gives your app access to a database that can be queried through a SQLite API. The database is persisted across restarts of your app.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-sqlite`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-sqlite) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Configuration in app config[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configuration-in-app-config)

You can configure `expo-sqlite` for advanced configurations using its built-in [config plugin](https://docs.expo.dev/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](https://docs.expo.dev/build/introduction/) or `npx expo run:[android|ios]`). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

### Example app.json with config plugin[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#example-appjson-with-config-plugin)

```
{
  "expo": {
    "plugins": [
      [
        "expo-sqlite",
        {
          "enableFTS": true,
          "useSQLCipher": true,
          "android": {
            // Override the shared configuration for Android
            "enableFTS": false,
            "useSQLCipher": false
          },
          "ios": {
            // You can also override the shared configurations for iOS
            "customBuildFlags": ["-DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_SNAPSHOT=1"]
          }
        }
      ]
    ]
  }
}
```

### Configurable properties[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#configurable-properties)

| Name | Default | Description |
| --- | --- | --- |
| `customBuildFlags` | \- | 
Custom build flags to be passed to the SQLite build process.

 |
| `enableFTS` | `true` | 

Whether to enable the [FTS3, FTS4](https://www.sqlite.org/fts3.html) and [FTS5](https://www.sqlite.org/fts5.html) extensions.

 |
| `useSQLCipher` | `false` | 

Use the [SQLCipher](https://www.zetetic.net/sqlcipher/) implementations rather than the default SQLite.

 |

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

Import the module from `expo-sqlite`.

Import the module from expo-sqlite

```
import * as SQLite from 'expo-sqlite';
```

### Basic CRUD operations[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#basic-crud-operations)

```
const db = await SQLite.openDatabaseAsync('databaseName');

// `execAsync()` is useful for bulk queries when you want to execute altogether.
// Note that `execAsync()` does not escape parameters and may lead to SQL injection.
await db.execAsync(`
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
INSERT INTO test (value, intValue) VALUES ('test1', 123);
INSERT INTO test (value, intValue) VALUES ('test2', 456);
INSERT INTO test (value, intValue) VALUES ('test3', 789);
`);

// `runAsync()` is useful when you want to execute some write operations.
const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
console.log(result.lastInsertRowId, result.changes);
await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object

// `getFirstAsync()` is useful when you want to get a single row from the database.
const firstRow = await db.getFirstAsync('SELECT * FROM test');
console.log(firstRow.id, firstRow.value, firstRow.intValue);

// `getAllAsync()` is useful when you want to get all results as an array of objects.
const allRows = await db.getAllAsync('SELECT * FROM test');
for (const row of allRows) {
  console.log(row.id, row.value, row.intValue);
}

// `getEachAsync()` is useful when you want to iterate SQLite query cursor.
for await (const row of db.getEachAsync('SELECT * FROM test')) {
  console.log(row.id, row.value, row.intValue);
}
```

### Prepared statements[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#prepared-statements)

Prepared statement allows you compile your SQL query once and execute it multiple times with different parameters. You can get a prepared statement by calling [`prepareAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#prepareasyncsource) or [`prepareSync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#preparesyncsource) method on a database instance. The prepared statement can fulfill CRUD operations by calling [`executeAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#executeasyncparams) or [`executeSync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#executesyncparams) method.

> Note: Remember to call [`finalizeAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#finalizeasync) or [`finalizeSync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#finalizesync) method to release the prepared statement after you finish using the statement. `try-finally` block is recommended to ensure the prepared statement is finalized.

```
const statement = await db.prepareAsync(
  'INSERT INTO test (value, intValue) VALUES ($value, $intValue)'
);
try {
  let result = await statement.executeAsync({ $value: 'bbb', $intValue: 101 });
  console.log('bbb and 101:', result.lastInsertRowId, result.changes);

  result = await statement.executeAsync({ $value: 'ccc', $intValue: 102 });
  console.log('ccc and 102:', result.lastInsertRowId, result.changes);

  result = await statement.executeAsync({ $value: 'ddd', $intValue: 103 });
  console.log('ddd and 103:', result.lastInsertRowId, result.changes);
} finally {
  await statement.finalizeAsync();
}

const statement2 = await db.prepareAsync('SELECT * FROM test WHERE intValue >= $intValue');
try {
  const result = await statement2.executeAsync<{ value: string; intValue: number }>({
    $intValue: 100,
  });

  // `getFirstAsync()` is useful when you want to get a single row from the database.
  const firstRow = await result.getFirstAsync();
  console.log(firstRow.id, firstRow.value, firstRow.intValue);

  // Reset the SQLite query cursor to the beginning for the next `getAllAsync()` call.
  await result.resetAsync();

  // `getAllAsync()` is useful when you want to get all results as an array of objects.
  const allRows = await result.getAllAsync();
  for (const row of allRows) {
    console.log(row.value, row.intValue);
  }

  // Reset the SQLite query cursor to the beginning for the next `for-await-of` loop.
  await result.resetAsync();

  // The result object is also an async iterable. You can use it in `for-await-of` loop to iterate SQLite query cursor.
  for await (const row of result) {
    console.log(row.value, row.intValue);
  }
} finally {
  await statement2.finalizeAsync();
}
```

### `useSQLiteContext()` hook[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usesqlitecontext-hook)

```
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SQLiteProvider databaseName="test.db" onInit={migrateDbIfNeeded}>
        <Header />
        <Content />
      </SQLiteProvider>
    </View>
  );
}

export function Header() {
  const db = useSQLiteContext();
  const [version, setVersion] = useState('');
  useEffect(() => {
    async function setup() {
      const result = await db.getFirstAsync<{ 'sqlite_version()': string }>(
        'SELECT sqlite_version()'
      );
      setVersion(result['sqlite_version()']);
    }
    setup();
  }, []);
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>SQLite version: {version}</Text>
    </View>
  );
}

interface Todo {
  value: string;
  intValue: number;
}

export function Content() {
  const db = useSQLiteContext();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<Todo>('SELECT * FROM todos');
      setTodos(result);
    }
    setup();
  }, []);

  return (
    <View style={styles.contentContainer}>
      {todos.map((todo, index) => (
        <View style={styles.todoItemContainer} key={index}>
          <Text>{`${todo.intValue} - ${todo.value}`}</Text>
        </View>
      ))}
    </View>
  );
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
`);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);
    currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

const styles = StyleSheet.create({
  // Your styles...
});
```

### `useSQLiteContext()` hook with `React.Suspense`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usesqlitecontext-hook-with-reactsuspense)

As with the [`useSQLiteContext()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#usesqlitecontext-hook) hook, you can also integrate the [`SQLiteProvider`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqliteprovider) with [`React.Suspense`](https://react.dev/reference/react/Suspense) to show a fallback component until the database is ready. To enable the integration, pass the `useSuspense` prop to the `SQLiteProvider` component.

useSQLiteContext() hook with React.Suspense

```
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { Suspense } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Suspense fallback={<Fallback />}>
        <SQLiteProvider databaseName="test.db" onInit={migrateDbIfNeeded} useSuspense>
          <Header />
          <Content />
        </SQLiteProvider>
      </Suspense>
    </View>
  );
}
```

### Executing queries within an async transaction[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executing-queries-within-an-async-transaction)

Executing queries within an async transaction

```
const db = await SQLite.openDatabaseAsync('databaseName');

await db.withTransactionAsync(async () => {
  const result = await db.getFirstAsync('SELECT COUNT(*) FROM USERS');
  console.log('Count:', result.rows[0]['COUNT(*)']);
});
```

Due to the nature of async/await, any query that runs while the transaction is active will be included in the transaction. This includes query statements that are outside of the scope function passed to `withTransactionAsync()` and may be surprising behavior. For example, the following test case runs queries inside and outside of a scope function passed to `withTransactionAsync()`. However, all of the queries will run within the actual SQL transaction because the second `UPDATE` query runs before the transaction finishes.

```
Promise.all([
  // 1. A new transaction begins
  db.withTransactionAsync(async () => {
    // 2. The value "first" is inserted into the test table and we wait 2
    //    seconds
    await db.execAsync('INSERT INTO test (data) VALUES ("first")');
    await sleep(2000);

    // 4. Two seconds in, we read the latest data from the table
    const row = await db.getFirstAsync<{ data: string }>('SELECT data FROM test');

    // ❌ The data in the table will be "second" and this expectation will fail.
    //    Additionally, this expectation will throw an error and roll back the
    //    transaction, including the `UPDATE` query below since it ran within
    //    the transaction.
    expect(row.data).toBe('first');
  }),
  // 3. One second in, the data in the test table is updated to be "second".
  //    This `UPDATE` query runs in the transaction even though its code is
  //    outside of it because the transaction happens to be active at the time
  //    this query runs.
  sleep(1000).then(async () => db.execAsync('UPDATE test SET data = "second"')),
]);
```

The [`withExclusiveTransactionAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#withexclusivetransactionasynctask) function addresses this. Only queries that run within the scope function passed to `withExclusiveTransactionAsync()` will run within the actual SQL transaction.

### Executing PRAGMA queries[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executing-pragma-queries)

```
const db = await SQLite.openDatabaseAsync('databaseName');
await db.execAsync('PRAGMA journal_mode = WAL');
await db.execAsync('PRAGMA foreign_keys = ON');
```

> Tip: Enable [WAL journal mode](https://www.sqlite.org/wal.html) when you create a new database to improve performance in general.

### Import an existing database[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#import-an-existing-database)

To open a new SQLite database using an existing .db file you already have, you can use the [`SQLiteProvider`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqliteprovider) with [`assetSource`](https://docs.expo.dev/versions/latest/sdk/sqlite/#assetsource).

useSQLiteContext() with existing database

```
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SQLiteProvider databaseName="test.db" assetSource={{ assetId: require('./assets/test.db') }}>
        <Header />
        <Content />
      </SQLiteProvider>
    </View>
  );
}
```

### Sharing a database between apps/extensions (iOS)[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sharing-a-database-between-appsextensions-ios)

To share a database with other apps/extensions in the same App Group, you can use shared containers by following the steps below:

1

Configure the App Group in app config:

```
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.myapp",
      "entitlements": {
        "com.apple.security.application-groups": ["group.com.myapp"]
      }
    }
  }
}
```

2

Use [`Paths.appleSharedContainers`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#applesharedcontainers) from the [`expo-file-system`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/) library to retrieve the path to the shared container:

Using Shared Container for SQLite Database on iOS

```
import { SQLiteProvider, defaultDatabaseDirectory } from 'expo-sqlite';
import { Paths } from 'expo-file-system/next';
import { useMemo } from 'react';
import { Platform, View } from 'react-native';

export default function App() {
  const dbDirectory = useMemo(() => {
    if (Platform.OS === 'ios') {
      return Object.values(Paths.appleSharedContainers)?.[0]?.uri;
      // or `Paths.appleSharedContainers['group.com.myapp']?.uri` to choose specific container
    }
    return defaultDatabaseDirectory;
  }, []);

  return (
    <View style={styles.container}>
      <SQLiteProvider databaseName="test.db" directory={dbDirectory}>
        <Header />
        <Content />
      </SQLiteProvider>
    </View>
  );
}
```

### Passing binary data[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#passing-binary-data)

Use [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) to pass binary data to the database:

```
await db.execAsync(`
DROP TABLE IF EXISTS blobs;
CREATE TABLE IF NOT EXISTS blobs (id INTEGER PRIMARY KEY NOT NULL, data BLOB);
`);

const blob = new Uint8Array([0x00, 0x01, 0x02, 0x03, 0x04, 0x05]);
await db.runAsync('INSERT INTO blobs (data) VALUES (?)', blob);

const row = await db.getFirstAsync<{ data: Uint8Array }>('SELECT * FROM blobs');
expect(row.data).toEqual(blob);
```

### Browse an on-device database[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#browse-an-on-device-database)

You can inspect a database, execute queries against it, and explore data with the [`drizzle-studio-expo` dev tools plugin](https://github.com/drizzle-team/drizzle-studio-expo). This plugin enables you to launch [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview), connected to a database in your app, directly from Expo CLI. This plugin can be used with any `expo-sqlite` configuration. It does not require that you use [Drizzle ORM](https://docs.expo.dev/versions/latest/sdk/sqlite/#drizzle-orm) in your app. [Learn how to install and use the plugin](https://github.com/drizzle-team/drizzle-studio-expo).

### Key-value storage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#key-value-storage)

The `expo-sqlite` library provides [`Storage`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqlitestorage) as a drop-in replacement for the [`@react-native-async-storage/async-storage`](https://github.com/react-native-async-storage/async-storage) library. This key-value store is backed by SQLite. If your project already uses `expo-sqlite`, you can leverage `expo-sqlite/kv-store` without needing to add another dependency.

[`Storage`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqlitestorage) provides the same API as `@react-native-async-storage/async-storage`:

```
// The storage API is the default export, you can call it Storage, AsyncStorage, or whatever you prefer.
import Storage from 'expo-sqlite/kv-store';

await Storage.setItem('key', JSON.stringify({ entity: 'value' }));
const value = await Storage.getItem('key');
const entity = JSON.parse(value);
console.log(entity); // { entity: 'value' }
```

A key benefit of using `expo-sqlite/kv-store` is the addition of synchronous APIs for added convenience:

Using the Store with synchronous APIs

```
// The storage API is the default export, you can call it Storage, AsyncStorage, or whatever you prefer.
import Storage from 'expo-sqlite/kv-store';

Storage.setItemSync('key', 'value');
const value = Storage.getItemSync('key');
```

If you're currently using `@react-native-async-storage/async-storage` in your project, switching to `expo-sqlite/kv-store` is as simple as changing the import statement:

```
- import AsyncStorage from '@react-native-async-storage/async-storage';
+ import AsyncStorage from 'expo-sqlite/kv-store';
```

## Third-party library integrations[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#third-party-library-integrations)

The `expo-sqlite` library is designed to be a solid SQLite foundation. It enables broader integrations with third-party libraries for more advanced higher-level features. Here are some of the libraries that you can use with `expo-sqlite`.

### Drizzle ORM[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#drizzle-orm)

[Drizzle](https://orm.drizzle.team/) is a ["headless TypeScript ORM with a head"](https://orm.drizzle.team/docs/overview). It runs on Node.js, Bun, Deno, and React Native. It also has a CLI companion called [`drizzle-kit`](https://orm.drizzle.team/kit-docs/overview) for generating SQL migrations.

Check out the [Drizzle ORM documentation](https://orm.drizzle.team/) and the [`expo-sqlite` integration guide](https://orm.drizzle.team/docs/get-started/expo-new) for more details.

### Knex.js[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#knexjs)

[Knex.js](https://knexjs.org/) is a SQL query builder that is ["flexible, portable, and fun to use!"](https://github.com/knex/knex)

Check out the [`expo-sqlite` integration guide](https://github.com/expo/knex-expo-sqlite-dialect) for more details.

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

### Cheatsheet for the common API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#cheatsheet-for-the-common-api)

The following table summarizes the common API for [`SQLiteDatabase`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqlitedatabase) and [`SQLiteStatement`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqlitestatement) classes:

| [`SQLiteDatabase`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqlitedatabase) methods | [`SQLiteStatement`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqlitestatement) methods | Description | Use Case |
| --- | --- | --- | --- |
| [`runAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#runasyncsource-params) | [`executeAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#executeasyncparams) | Executes a SQL query, returning information on the changes made. | Ideal for SQL write operations such as `INSERT`, `UPDATE`, `DELETE`. |
| [`getFirstAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#getfirstasyncsource-params) | [`executeAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#executeasyncparams) + [`getFirstAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#getfirstasync) | Retrieves the first row from the query result. | Suitable for fetching a single row from the database. For example: `getFirstAsync('SELECT * FROM Users WHERE id = ?', userId)`. |
| [`getAllAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#getallasyncsource-params) | [`executeAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#executeasyncparams) + [`getFirstAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#getallasync) | Fetches all query results at once. | Best suited for scenarios with smaller result sets, such as queries with a LIMIT clause, like `SELECT * FROM Table LIMIT 100`, where you intend to retrieve all results in a single batch. |
| [`getEachAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#geteachasyncsource-params) | [`executeAsync()`](https://docs.expo.dev/versions/latest/sdk/sqlite/#executeasyncparams) + `for-await-of` async iterator | Provides an iterator for result set traversal. This method fetches one row at a time from the database, potentially reducing memory usage compared to `getAllAsync()`. | Recommended for handling large result sets incrementally, such as with infinite scrolling implementations. |

## Component[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#component)

### `SQLiteProvider`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteprovider)

Type: `React.Element<[SQLiteProviderProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteproviderprops)>`

Context.Provider component that provides a SQLite database to all children. All descendants of this component will be able to access the database using the [`useSQLiteContext`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usesqlitecontext) hook.

SQLiteProviderProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteproviderprops)

### `assetSource`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#assetsource)

Optional • Type: `[SQLiteProviderAssetSource](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteproviderassetsource)`

Import a bundled database file from the specified asset module.

Example

```
assetSource={{ assetId: require('./assets/db.db') }}
```

### `children`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#children)

The children to render.

### `databaseName`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#databasename)

Type: `string`

The name of the database file to open.

### `directory`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#directory)

Optional • Type: `string` • Default: `defaultDatabaseDirectory`

The directory where the database file is located.

### `onError`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#onerror)

Optional • Type: `(error: [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)) => void` • Default: `rethrow the error`

Handle errors from SQLiteProvider.

### `onInit`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#oninit)

Optional • Type: `(db: [SQLiteDatabase](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedatabase)) => [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

A custom initialization handler to run before rendering the children. You can use this to run database migrations or other setup tasks.

### `options`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#options)

Optional • Type: `[SQLiteOpenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions)`

Open options.

### `useSuspense`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usesuspense)

Optional • Type: `boolean` • Default: `false`

Enable [`React.Suspense`](https://react.dev/reference/react/Suspense) integration.

Example

```
export default function App() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <SQLiteProvider databaseName="test.db" useSuspense={true}>
        <Main />
      </SQLiteProvider>
    </Suspense>
  );
}
```

## Constants[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#constants)

### `SQLite.AsyncStorage`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteasyncstorage)

Type: `[SQLiteStorage](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestorage)`

### `SQLite.defaultDatabaseDirectory`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedefaultdatabasedirectory)

Type: `any`

The default directory for SQLite databases.

### `SQLite.Storage`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestorage)

Type: `[SQLiteStorage](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestorage)`

Alias for [`AsyncStorage`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteasyncstorage), given the storage not only offers asynchronous methods.

## Hooks[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#hooks)

### `useSQLiteContext()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usesqlitecontext)

A global hook for accessing the SQLite database across components. This hook should only be used within a [`<SQLiteProvider>`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteprovider) component.

Example

```
export default function App() {
  return (
    <SQLiteProvider databaseName="test.db">
      <Main />
    </SQLiteProvider>
  );
}

export function Main() {
  const db = useSQLiteContext();
  console.log('sqlite version', db.getFirstSync('SELECT sqlite_version()'));
  return <View />
}
```

## Classes[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#classes)

### `SQLiteDatabase`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedatabase)

A SQLite database.

SQLiteDatabase Properties

### `databasePath`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#databasepath)

Read Only • Type: `string`

### `options`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#options-1)

Read Only • Type: `[SQLiteOpenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions)`

SQLiteDatabase Methods

### `closeAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#closeasync)

### `closeSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#closesync)

### `execAsync(source)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#execasyncsource)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing all the SQL queries.

 |

  

Execute all SQL queries in the supplied string.

> Note: The queries are not escaped for you! Be careful when constructing your queries.

### `execSync(source)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#execsyncsource)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing all the SQL queries.

 |

  

Execute all SQL queries in the supplied string.

> Note: The queries are not escaped for you! Be careful when constructing your queries.

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `getAllAsync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallasyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

A convenience wrapper around [`SQLiteDatabase.prepareAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#prepareasyncsource), [`SQLiteStatement.executeAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executeasyncparams), [`SQLiteExecuteAsyncResult.getAllAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallasync), and [`SQLiteStatement.finalizeAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizeasync).

Example

```
// For unnamed parameters, you pass values in an array.
db.getAllAsync('SELECT * FROM test WHERE intValue = ? AND name = ?', [1, 'Hello']);

// For unnamed parameters, you pass values in variadic arguments.
db.getAllAsync('SELECT * FROM test WHERE intValue = ? AND name = ?', 1, 'Hello');

// For named parameters, you should pass values in object.
db.getAllAsync('SELECT * FROM test WHERE intValue = $intValue AND name = $name', { $intValue: 1, $name: 'Hello' });
```

### `getAllSync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallsyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

A convenience wrapper around [`SQLiteDatabase.prepareSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#preparesyncsource), [`SQLiteStatement.executeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executesyncparams), [`SQLiteExecuteSyncResult.getAllSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallsync), and [`SQLiteStatement.finalizeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizesync).

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `getEachAsync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geteachasyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

A convenience wrapper around [`SQLiteDatabase.prepareAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#prepareasyncsource), [`SQLiteStatement.executeAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executeasyncparams), [`SQLiteExecuteAsyncResult`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecuteasyncresult) `AsyncIterator`, and [`SQLiteStatement.finalizeAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizeasync).

Rather than returning Promise, this function returns an [`AsyncIterableIterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator). You can use `for await...of` to iterate over the rows from the SQLite query result.

### `getEachSync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#geteachsyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

A convenience wrapper around [`SQLiteDatabase.prepareSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#preparesyncsource), [`SQLiteStatement.executeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executesyncparams), [`SQLiteExecuteSyncResult`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecutesyncresult) `Iterator`, and [`SQLiteStatement.finalizeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizesync).

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

This function returns an [`IterableIterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator). You can use `for...of` to iterate over the rows from the SQLite query result.

### `getFirstAsync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getfirstasyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

### `getFirstSync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getfirstsyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

A convenience wrapper around [`SQLiteDatabase.prepareSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#preparesyncsource), [`SQLiteStatement.executeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executesyncparams), [`SQLiteExecuteSyncResult.getFirstSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getfirstsync), and [`SQLiteStatement.finalizeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizesync).

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `isInTransactionAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#isintransactionasync)

Asynchronous call to return whether the database is currently in a transaction.

### `isInTransactionSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#isintransactionsync)

Synchronous call to return whether the database is currently in a transaction.

### `prepareAsync(source)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#prepareasyncsource)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |

  

### `prepareSync(source)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#preparesyncsource)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |

  

Create a [prepared SQLite statement](https://www.sqlite.org/c3ref/prepare.html).

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `runAsync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#runasyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

### `runSync(source, params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#runsyncsource-params)

| Parameter | Type | Description |
| --- | --- | --- |
| source | `string` | 
A string containing the SQL query.

 |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 

The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

A convenience wrapper around [`SQLiteDatabase.prepareSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#preparesyncsource), [`SQLiteStatement.executeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executesyncparams), and [`SQLiteStatement.finalizeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizesync).

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `serializeAsync(databaseName)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#serializeasyncdatabasename)

| Parameter | Type | Description |
| --- | --- | --- |
| databaseName(optional) | `string` | 
The name of the current attached databases. The default value is `main` which is the default database name.

Default:`'main'`



 |

  

### `serializeSync(databaseName)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#serializesyncdatabasename)

| Parameter | Type | Description |
| --- | --- | --- |
| databaseName(optional) | `string` | 
The name of the current attached databases. The default value is `main` which is the default database name.

Default:`'main'`



 |

  

[Serialize the database](https://sqlite.org/c3ref/serialize.html) as `Uint8Array`.

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `withExclusiveTransactionAsync(task)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#withexclusivetransactionasynctask)

| Parameter | Type | Description |
| --- | --- | --- |
| task | `(txn: [Transaction](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#transaction)) => [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>` | 
An async function to execute within a transaction. Any queries inside the transaction must be executed on the `txn` object. The `txn` object has the same interfaces as the [`SQLiteDatabase`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedatabase) object. You can use `txn` like a [`SQLiteDatabase`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedatabase) object.

 |

  

Execute a transaction and automatically commit/rollback based on the `task` result.

The transaction may be exclusive. As long as the transaction is converted into a write transaction, the other async write queries will abort with `database is locked` error.

Example

```
db.withExclusiveTransactionAsync(async (txn) => {
  await txn.execAsync('UPDATE test SET name = "aaa"');
});
```

### `withTransactionAsync(task)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#withtransactionasynctask)

| Parameter | Type | Description |
| --- | --- | --- |
| task | `() => [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>` | 
An async function to execute within a transaction.

 |

  

Execute a transaction and automatically commit/rollback based on the `task` result.

> Note: This transaction is not exclusive and can be interrupted by other async queries.

Example

```
db.withTransactionAsync(async () => {
  await db.execAsync('UPDATE test SET name = "aaa"');

  //
  // We cannot control the order of async/await order, so order of execution is not guaranteed.
  // The following UPDATE query out of transaction may be executed here and break the expectation.
  //

  const result = await db.getFirstAsync<{ name: string }>('SELECT name FROM Users');
  expect(result?.name).toBe('aaa');
});
db.execAsync('UPDATE test SET name = "bbb"');
```

If you worry about the order of execution, use `withExclusiveTransactionAsync` instead.

### `withTransactionSync(task)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#withtransactionsynctask)

| Parameter | Type | Description |
| --- | --- | --- |
| task | `() => void` | 
An async function to execute within a transaction.

 |

  

Execute a transaction and automatically commit/rollback based on the `task` result.

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `SQLiteStatement`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestatement)

A prepared statement returned by [`SQLiteDatabase.prepareAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#prepareasyncsource) or [`SQLiteDatabase.prepareSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#preparesyncsource) that can be binded with parameters and executed.

SQLiteStatement Methods

### `executeAsync(params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executeasyncparams)

| Parameter | Type | Description |
| --- | --- | --- |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 
The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

Run the prepared statement and return the [`SQLiteExecuteAsyncResult`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecuteasyncresult) instance.

### `executeSync(params)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executesyncparams)

| Parameter | Type | Description |
| --- | --- | --- |
| params | `[SQLiteBindParams](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)` | 
The parameters to bind to the prepared statement. You can pass values in array, object, or variadic arguments. See [`SQLiteBindValue`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue) for more information about binding values.

 |

  

Run the prepared statement and return the [`SQLiteExecuteSyncResult`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecutesyncresult) instance.

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `finalizeAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizeasync)

Finalize the prepared statement. This will call the [`sqlite3_finalize()`](https://www.sqlite.org/c3ref/finalize.html) C function under the hood.

Attempting to access a finalized statement will result in an error.

> Note: While expo-sqlite will automatically finalize any orphaned prepared statements upon closing the database, it is considered best practice to manually finalize prepared statements as soon as they are no longer needed. This helps to prevent resource leaks. You can use the `try...finally` statement to ensure that prepared statements are finalized even if an error occurs.

### `finalizeSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#finalizesync)

Finalize the prepared statement. This will call the [`sqlite3_finalize()`](https://www.sqlite.org/c3ref/finalize.html) C function under the hood.

Attempting to access a finalized statement will result in an error.

> Note: While expo-sqlite will automatically finalize any orphaned prepared statements upon closing the database, it is considered best practice to manually finalize prepared statements as soon as they are no longer needed. This helps to prevent resource leaks. You can use the `try...finally` statement to ensure that prepared statements are finalized even if an error occurs.

### `getColumnNamesAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getcolumnnamesasync)

Get the column names of the prepared statement.

### `getColumnNamesSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getcolumnnamessync)

Get the column names of the prepared statement.

### `SQLiteStorage`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestorage-1)

Key-value store backed by SQLite. This class accepts a `databaseName` parameter in its constructor, which is the name of the database file to use for the storage.

SQLiteStorage Methods

### `clear()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#clear)

Alias for [`clearAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#clearasync) method.

### `clearAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#clearasync)

Clears all key-value pairs from the storage asynchronously.

### `clearSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#clearsync)

Clears all key-value pairs from the storage synchronously.

### `close()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#close)

Alias for [`closeAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#closeasync-1) method.

### `closeAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#closeasync-1)

Closes the database connection asynchronously.

### `closeSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#closesync-1)

Closes the database connection synchronously.

### `getAllKeys()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallkeys)

Alias for [`getAllKeysAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallkeysasync) method.

### `getAllKeysAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallkeysasync)

Retrieves all keys stored in the storage asynchronously.

### `getAllKeysSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallkeyssync)

Retrieves all keys stored in the storage synchronously.

### `getItem(key)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getitemkey)

  

Alias for [`getItemAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getitemasynckey) method.

### `getItemAsync(key)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getitemasynckey)

  

Retrieves the value associated with the given key asynchronously.

### `getItemSync(key)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getitemsynckey)

  

Retrieves the value associated with the given key synchronously.

### `mergeItem(key, value)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#mergeitemkey-value)

| Parameter | Type |
| --- | --- |
| key | `string` |
| value | `string` |

  

Merges the given value with the existing value for the given key asynchronously. If the existing value is a JSON object, performs a deep merge.

### `multiGet(keys)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#multigetkeys)

| Parameter | Type |
| --- | --- |
| keys | `string[]` |

  

Retrieves the values associated with the given keys asynchronously.

### `multiMerge(keyValuePairs)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#multimergekeyvaluepairs)

| Parameter | Type |
| --- | --- |
| keyValuePairs | `undefined` |

  

Merges multiple key-value pairs asynchronously. If existing values are JSON objects, performs a deep merge.

### `multiRemove(keys)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#multiremovekeys)

| Parameter | Type |
| --- | --- |
| keys | `string[]` |

  

Removes the values associated with the given keys asynchronously.

### `multiSet(keyValuePairs)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#multisetkeyvaluepairs)

| Parameter | Type |
| --- | --- |
| keyValuePairs | `undefined` |

  

Sets multiple key-value pairs asynchronously.

### `removeItem(key)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#removeitemkey)

  

Alias for [`removeItemAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#removeitemasynckey) method.

### `removeItemAsync(key)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#removeitemasynckey)

  

Removes the value associated with the given key asynchronously.

### `removeItemSync(key)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#removeitemsynckey)

  

Removes the value associated with the given key synchronously.

### `setItem(key, value)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#setitemkey-value)

| Parameter | Type |
| --- | --- |
| key | `string` |
| value | `string | [SQLiteStorageSetItemUpdateFunction](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestoragesetitemupdatefunction)` |

  

Alias for [`setItemAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#setitemasynckey-value).

### `setItemAsync(key, value)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#setitemasynckey-value)

| Parameter | Type |
| --- | --- |
| key | `string` |
| value | `string | [SQLiteStorageSetItemUpdateFunction](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestoragesetitemupdatefunction)` |

  

Sets the value for the given key asynchronously. If a function is provided, it computes the new value based on the previous value.

### `setItemSync(key, value)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#setitemsynckey-value)

| Parameter | Type |
| --- | --- |
| key | `string` |
| value | `string | [SQLiteStorageSetItemUpdateFunction](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestoragesetitemupdatefunction)` |

  

Sets the value for the given key synchronously. If a function is provided, it computes the new value based on the previous value.

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `SQLite.deleteDatabaseAsync(databaseName, directory)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedeletedatabaseasyncdatabasename-directory)

| Parameter | Type | Description |
| --- | --- | --- |
| databaseName | `string` | 
The name of the database file to delete.

 |
| directory(optional) | `string` | 

The directory where the database file is located. The default value is `defaultDatabaseDirectory`.

 |

  

### `SQLite.deleteDatabaseSync(databaseName, directory)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedeletedatabasesyncdatabasename-directory)

| Parameter | Type | Description |
| --- | --- | --- |
| databaseName | `string` | 
The name of the database file to delete.

 |
| directory(optional) | `string` | 

The directory where the database file is located. The default value is `defaultDatabaseDirectory`.

 |

  

Delete a database file.

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `SQLite.deserializeDatabaseAsync(serializedData, options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedeserializedatabaseasyncserializeddata-options)

| Parameter | Type | Description |
| --- | --- | --- |
| serializedData | `[Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)` | 
The binary array to deserialize from [`SQLiteDatabase.serializeAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#serializeasyncdatabasename).

 |
| options(optional) | `[SQLiteOpenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions)` | 

Open options.

 |

  

### `SQLite.deserializeDatabaseSync(serializedData, options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitedeserializedatabasesyncserializeddata-options)

| Parameter | Type | Description |
| --- | --- | --- |
| serializedData | `[Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)` | 
The binary array to deserialize from [`SQLiteDatabase.serializeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#serializesyncdatabasename)

 |
| options(optional) | `[SQLiteOpenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions)` | 

Open options.

 |

  

Given a `Uint8Array` data and [deserialize to memory database](https://sqlite.org/c3ref/deserialize.html).

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

### `SQLite.openDatabaseAsync(databaseName, options, directory)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopendatabaseasyncdatabasename-options-directory)

| Parameter | Type | Description |
| --- | --- | --- |
| databaseName | `string` | 
The name of the database file to open.

 |
| options(optional) | `[SQLiteOpenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions)` | 

Open options.

 |
| directory(optional) | `string` | 

The directory where the database file is located. The default value is `defaultDatabaseDirectory`.

 |

  

### `SQLite.openDatabaseSync(databaseName, options, directory)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopendatabasesyncdatabasename-options-directory)

| Parameter | Type | Description |
| --- | --- | --- |
| databaseName | `string` | 
The name of the database file to open.

 |
| options(optional) | `[SQLiteOpenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions)` | 

Open options.

 |
| directory(optional) | `string` | 

The directory where the database file is located. The default value is `defaultDatabaseDirectory`.

 |

  

Open a database.

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

## Event Subscriptions[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#event-subscriptions)

### `SQLite.addDatabaseChangeListener(listener)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteadddatabasechangelistenerlistener)

| Parameter | Type | Description |
| --- | --- | --- |
| listener | `(event: [DatabaseChangeEvent](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#databasechangeevent)) => void` | 
A function that receives the `databaseName`, `databaseFilePath`, `tableName` and `rowId` of the modified data.

 |

  

Add a listener for database changes.

> Note: to enable this feature, you must set [`enableChangeListener` to `true`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions) when opening the database.

A `Subscription` object that you can call `remove()` on when you would like to unsubscribe the listener.

## Interfaces[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#interfaces)

### `SQLiteExecuteAsyncResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecuteasyncresult)

Extends: `[AsyncIterableIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator)<T>`

A result returned by [`SQLiteStatement.executeAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executeasyncparams).

Example

The result includes the [`lastInsertRowId`](https://www.sqlite.org/c3ref/last_insert_rowid.html) and [`changes`](https://www.sqlite.org/c3ref/changes.html) properties. You can get the information from the write operations.

```
const statement = await db.prepareAsync('INSERT INTO test (value) VALUES (?)');
try {
  const result = await statement.executeAsync(101);
  console.log('lastInsertRowId:', result.lastInsertRowId);
  console.log('changes:', result.changes);
} finally {
  await statement.finalizeAsync();
}
```

Example

The result implements the [`AsyncIterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) interface, so you can use it in `for await...of` loops.

```
const statement = await db.prepareAsync('SELECT value FROM test WHERE value > ?');
try {
  const result = await statement.executeAsync<{ value: number }>(100);
  for await (const row of result) {
    console.log('row value:', row.value);
  }
} finally {
  await statement.finalizeAsync();
}
```

Example

If your write operations also return values, you can mix all of them together.

```
const statement = await db.prepareAsync('INSERT INTO test (name, value) VALUES (?, ?) RETURNING name');
try {
  const result = await statement.executeAsync<{ name: string }>('John Doe', 101);
  console.log('lastInsertRowId:', result.lastInsertRowId);
  console.log('changes:', result.changes);
  for await (const row of result) {
    console.log('name:', row.name);
  }
} finally {
  await statement.finalizeAsync();
}
```

SQLiteExecuteAsyncResult Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecuteasyncresult-methods)

### `getAllAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallasync)

Get all rows of the result set. This requires the SQLite cursor to be in its initial state. If you have already retrieved rows from the result set, you need to reset the cursor first by calling [`resetAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resetasync). Otherwise, an error will be thrown.

### `getFirstAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getfirstasync)

Get the first row of the result set. This requires the SQLite cursor to be in its initial state. If you have already retrieved rows from the result set, you need to reset the cursor first by calling [`resetAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resetasync). Otherwise, an error will be thrown.

### `resetAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resetasync)

Reset the prepared statement cursor. This will call the [`sqlite3_reset()`](https://www.sqlite.org/c3ref/reset.html) C function under the hood.

### `SQLiteExecuteSyncResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecutesyncresult)

Extends: `[IterableIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)<T>`

A result returned by [`SQLiteStatement.executeSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#executesyncparams).

> Note: Running heavy tasks with this function can block the JavaScript thread and affect performance.

Example

The result includes the [`lastInsertRowId`](https://www.sqlite.org/c3ref/last_insert_rowid.html) and [`changes`](https://www.sqlite.org/c3ref/changes.html) properties. You can get the information from the write operations.

```
const statement = db.prepareSync('INSERT INTO test (value) VALUES (?)');
try {
  const result = statement.executeSync(101);
  console.log('lastInsertRowId:', result.lastInsertRowId);
  console.log('changes:', result.changes);
} finally {
  statement.finalizeSync();
}
```

Example

The result implements the [`Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) interface, so you can use it in `for...of` loops.

```
const statement = db.prepareSync('SELECT value FROM test WHERE value > ?');
try {
  const result = statement.executeSync<{ value: number }>(100);
  for (const row of result) {
    console.log('row value:', row.value);
  }
} finally {
  statement.finalizeSync();
}
```

Example

If your write operations also return values, you can mix all of them together.

```
const statement = db.prepareSync('INSERT INTO test (name, value) VALUES (?, ?) RETURNING name');
try {
  const result = statement.executeSync<{ name: string }>('John Doe', 101);
  console.log('lastInsertRowId:', result.lastInsertRowId);
  console.log('changes:', result.changes);
  for (const row of result) {
    console.log('name:', row.name);
  }
} finally {
  statement.finalizeSync();
}
```

SQLiteExecuteSyncResult Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteexecutesyncresult-methods)

### `getAllSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getallsync)

Get all rows of the result set. This requires the SQLite cursor to be in its initial state. If you have already retrieved rows from the result set, you need to reset the cursor first by calling [`resetSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resetsync). Otherwise, an error will be thrown.

### `getFirstSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#getfirstsync)

Get the first row of the result set. This requires the SQLite cursor to be in its initial state. If you have already retrieved rows from the result set, you need to reset the cursor first by calling [`resetSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resetsync). Otherwise, an error will be thrown.

### `resetSync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resetsync)

Reset the prepared statement cursor. This will call the [`sqlite3_reset()`](https://www.sqlite.org/c3ref/reset.html) C function under the hood.

### `SQLiteOpenOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteopenoptions)

Options for opening a database.

| Property | Type | Description |
| --- | --- | --- |
| enableChangeListener(optional) | `boolean` | 
Whether to call the [`sqlite3_update_hook()`](https://www.sqlite.org/c3ref/update_hook.html) function and enable the `onDatabaseChange` events. You can later subscribe to the change events by [`addDatabaseChangeListener`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteadddatabasechangelistenerlistener).

Default:`false`



 |
| enableCRSQLite(optional) | `boolean` | 

> Deprecated CR-SQLite is no longer actively maintained. Its support is deprecated in SDK 52, and the option will be removed in SDK 53.

Whether to enable the CR-SQLite extension.

Default:`false`



 |
| useNewConnection(optional) | `boolean` | 

Whether to create new connection even if connection with the same database name exists in cache.

Default:`false`



 |

### `SQLiteProviderAssetSource`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteproviderassetsource)

| Property | Type | Description |
| --- | --- | --- |
| assetId | `number` | 
The asset ID returned from the `require()` call.

 |
| forceOverwrite(optional) | `boolean` | 

Force overwrite the local database file even if it already exists.

Default:`false`



 |

### `SQLiteRunResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliterunresult)

A result returned by [`SQLiteDatabase.runAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#runasyncsource-params) or [`SQLiteDatabase.runSync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#runsyncsource-params).

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `DatabaseChangeEvent`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#databasechangeevent)

The event payload for the listener of [`addDatabaseChangeListener`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqliteadddatabasechangelistenerlistener)

| Property | Type | Description |
| --- | --- | --- |
| databaseFilePath | `string` | 
The absolute file path to the database.

 |
| databaseName | `string` | 

The database name. The value would be `main` by default and other database names if you use `ATTACH DATABASE` statement.

 |
| rowId | `number` | 

The changed row ID.

 |
| tableName | `string` | 

The table name.

 |

### `SQLiteBindParams`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindparams)

Literal Type: multiple types

Acceptable values are: `Record<string, [SQLiteBindValue](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue)>`

### `SQLiteBindValue`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue)

Literal Type: multiple types

Bind parameters to the prepared statement. You can either pass the parameters in the following forms:

Example

A single array for unnamed parameters.

```
const statement = await db.prepareAsync('SELECT * FROM test WHERE value = ? AND intValue = ?');
const result = await statement.executeAsync(['test1', 789]);
const firstRow = await result.getFirstAsync();
```

Example

Variadic arguments for unnamed parameters.

```
const statement = await db.prepareAsync('SELECT * FROM test WHERE value = ? AND intValue = ?');
const result = await statement.executeAsync('test1', 789);
const firstRow = await result.getFirstAsync();
```

Example

A single object for [named parameters](https://www.sqlite.org/lang_expr.html)

We support multiple named parameter forms such as `:VVV`, `@VVV`, and `$VVV`. We recommend using `$VVV` because JavaScript allows using `$` in identifiers without escaping.

```
const statement = await db.prepareAsync('SELECT * FROM test WHERE value = $value AND intValue = $intValue');
const result = await statement.executeAsync({ $value: 'test1', $intValue: 789 });
const firstRow = await result.getFirstAsync();
```

Acceptable values are: `string` | `number` | `null` | `boolean` | `[Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)`

### `SQLiteStorageSetItemUpdateFunction(prevValue)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitestoragesetitemupdatefunctionprevvalue)

Update function for the [`setItemAsync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#setitemasynckey-value) or [`setItemSync()`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#setitemsynckey-value) method. It computes the new value based on the previous value. The function returns the new value to set for the key.

| Parameter | Type | Description |
| --- | --- | --- |
| prevValue | `string | null` | 
The previous value associated with the key, or `null` if the key was not set.

 |

### `SQLiteVariadicBindParams`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitevariadicbindparams)

Type: `[SQLiteBindValue[]](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#sqlitebindvalue)`




# Symbols - Expo Documentation

> ## Excerpt
> A library that allows access to native symbols.

---
## ![Expo Symbols icon](https://docs.expo.dev/static/images/packages/expo-symbols.png)Expo Symbols

A library that allows access to native symbols.

___

> This library is currently in beta and subject to breaking changes.

`expo-symbols` provides access to the [SF Symbols](https://developer.apple.com/sf-symbols/) library on iOS.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-symbols`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-symbols) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

```
import { SymbolView, SymbolViewProps, SFSymbol } from 'expo-symbols';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SymbolView name="airpods.chargingcase" style={styles.symbol} type="hierarchical" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbol: {
    width: 35,
    height: 35,
    margin: 5,
  },
});
```

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import { SymbolView } from 'expo-symbols';
```

## Component[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#component)

### `SymbolView`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symbolview)

Type: `React.Element<[SymbolViewProps](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symbolviewprops)>`

SymbolViewProps[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symbolviewprops)

### `animationSpec`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#animationspec)

Optional • Type: `[AnimationSpec](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#animationspec)`

The animation configuration to apply to the symbol.

### `colors`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#colors)

Optional • Type: `string | string[] | null`

An array of colors to use when the [SymbolType](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symboltype) is `palette`.

### `fallback`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#fallback)

Optional • Type: `React.ReactNode`

Fallback to render on Android and Web where `SF Symbols` are not available.

### `name`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#name)

### `resizeMode`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#resizemode)

Optional • Type: `[ContentMode](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#contentmode)` • Default: `'scaleToAspectFit'`

Determines how the image should be resized to fit its container.

### `scale`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#scale)

Optional • Type: `[SymbolScale](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symbolscale)` • Default: `'unspecified'`

The scale of the symbol to render.

### `size`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#size)

Optional • Type: `number` • Default: `24`

The size of the symbol.

### `tintColor`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#tintcolor)

Optional • Type: `string | null` • Default: `null`

The tint color to apply to the symbol.

### `type`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#type)

Optional • Type: `[SymbolType](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symboltype)` • Default: `'monochrome'`

Determines the symbol variant to use.

### `weight`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#weight)

Optional • Type: `[SymbolWeight](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symbolweight)` • Default: `'unspecified'`

The weight of the symbol to render.

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `AnimationEffect`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#animationeffect)

| Property | Type | Description |
| --- | --- | --- |
| direction(optional) | `'up' | 'down'` | 
The direction of the animation.

 |
| type | `[AnimationType](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#animationtype)` | 

The type of animation to apply to the symbol.

 |
| wholeSymbol(optional) | `boolean` | 

Whether the entire symbol should animate or just the individual layers.

Default:`false`



 |

### `AnimationSpec`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#animationspec-1)

The animation configuration to apply to the symbol.

| Property | Type | Description |
| --- | --- | --- |
| effect(optional) | `[AnimationEffect](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#animationeffect)` | 
The effect to apply to the symbol.

 |
| repeatCount(optional) | `number` | 

The number of times the animation should repeat.

 |
| repeating(optional) | `boolean` | 

If the animation should repeat.

 |
| speed(optional) | `number` | 

The duration of the animation in seconds.

 |
| variableAnimationSpec(optional) | `[VariableAnimationSpec](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#variableanimationspec)` | 

An object that specifies how the symbol’s layers should animate.

 |

### `AnimationType`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#animationtype)

Literal Type: `string`

The type of animation to apply to the symbol.

Acceptable values are: `'bounce'` | `'pulse'` | `'scale'`

### `ContentMode`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#contentmode)

Literal Type: `string`

Determines how the image should be resized to fit its container.

Acceptable values are: `'scaleToFill'` | `'scaleAspectFit'` | `'scaleAspectFill'` | `'redraw'` | `'center'` | `'top'` | `'bottom'` | `'left'` | `'right'` | `'topLeft'` | `'topRight'` | `'bottomLeft'` | `'bottomRight'`

### `SymbolScale`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symbolscale)

Literal Type: `string`

The scale of the symbol to render.

Acceptable values are: `'default'` | `'unspecified'` | `'small'` | `'medium'` | `'large'`

### `SymbolType`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symboltype)

Literal Type: `string`

Determines the symbol variant to use.

-   `'monochrome'` - Creates a color configuration that specifies that the symbol image uses its monochrome variant.
    
-   `'hierarchical'` - Creates a color configuration with a color scheme that originates from one color.
    
-   `'palette'` - Creates a color configuration with a color scheme from a palette of multiple colors.
    
-   `'multicolor'` - Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
    

Acceptable values are: `'monochrome'` | `'hierarchical'` | `'palette'` | `'multicolor'`

### `SymbolWeight`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#symbolweight)

Literal Type: `string`

The weight of the symbol to render.

Acceptable values are: `'unspecified'` | `'ultraLight'` | `'thin'` | `'light'` | `'regular'` | `'medium'` | `'semibold'` | `'bold'` | `'heavy'` | `'black'`

### `VariableAnimationSpec`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#variableanimationspec)

A variable color animation draws attention to a symbol by changing the opacity of the symbol’s layers. You can choose to apply the effect to layers either cumulatively or iteratively. For cumulative animations, each layer’s opacity remains changed until the end of the animation cycle. For iterative animations, each layer’s opacity changes briefly before returning to its original state. These effects are compounding, each value set to `true` will add an additional effect.

| Property | Type | Description |
| --- | --- | --- |
| cumulative(optional) | `boolean` | 
This effect enables each successive variable layer, and the layer remains enabled until the end of the animation cycle. This effect cancels the iterative variant.

 |
| dimInactiveLayers(optional) | `boolean` | 

An effect that dims inactive layers of a symbol. This effect draws inactive layers with reduced, but nonzero, opacity.

 |
| hideInactiveLayers(optional) | `boolean` | 

An effect that hides inactive layers of a symbol. This effect hides inactive layers completely, rather than drawing them with reduced, but nonzero, opacity.

 |
| iterative(optional) | `boolean` | 

An effect that momentarily enables each layer of a symbol in sequence.

 |
| nonReversing(optional) | `boolean` | 

An effect that doesn’t reverse each time it repeats.

 |
| reversing(optional) | `boolean` | 

An effect that reverses each time it repeats.

 |




# VideoThumbnails - Expo Documentation

> ## Excerpt
> A library that allows you to generate an image to serve as a thumbnail from a video file.

---
```
import { useState } from 'react';
import { StyleSheet, Button, View, Image, Text } from 'react-native';
import * as VideoThumbnails from 'expo-video-thumbnails';

export default function App() {
  const [image, setImage] = useState(null);

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        {
          time: 15000,
        }
      );
      setImage(uri);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={generateThumbnail} title="Generate thumbnail" />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text>{image}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
  },
});
```




# WebBrowser - Expo Documentation

> ## Excerpt
> A library that provides access to the system's web browser and supports handling redirects.

---
## ![Expo WebBrowser icon](https://docs.expo.dev/static/images/packages/expo-web-browser.png)Expo WebBrowser

A library that provides access to the system's web browser and supports handling redirects.

___

`expo-web-browser` provides access to the system's web browser and supports handling redirects. On Android, it uses `ChromeCustomTabs` and on iOS, it uses `SFSafariViewController` or `ASWebAuthenticationSession`, depending on the method you call. As of iOS 11, `SFSafariViewController` no longer shares cookies with Safari, so if you are using `WebBrowser` for authentication you will want to use `WebBrowser.openAuthSessionAsync`, and if you just want to open a webpage (such as your app privacy policy), then use `WebBrowser.openBrowserAsync`.

## Installation[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#installation)

`-` `npx expo install expo-web-browser`

If you are installing this in an [existing React Native app](https://docs.expo.dev/bare/overview/), start by [installing `expo`](https://docs.expo.dev/bare/installing-expo-modules/) in your project. Then, follow the [additional instructions](https://github.com/expo/expo/tree/main/packages/expo-web-browser) as mentioned by the library's README under "Installation in bare React Native projects" section.

## Usage[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#usage)

```
import { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
%%placeholder-start%%%%placeholder-end%%import Constants from 'expo-constants';

export default function App() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://expo.dev');
    setResult(result);
  };
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
```

### Handling deep links from the WebBrowser[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#handling-deep-links-from-the-webbrowser)

If your project uses Expo Router, deep links are handled automatically.

## API[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#api)

```
import * as WebBrowser from 'expo-web-browser';
```

## Methods[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#methods)

### `WebBrowser.coolDownAsync(browserPackage)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercooldownasyncbrowserpackage)

| Parameter | Type | Description |
| --- | --- | --- |
| browserPackage(optional) | `string` | 
Package of browser to be cooled. If not set, preferred browser will be used.

 |

  

This methods removes all bindings to services created by [`warmUpAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserwarmupasyncbrowserpackage) or [`mayInitWithUrlAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsermayinitwithurlasyncurl-browserpackage). You should call this method once you don't need them to avoid potential memory leaks. However, those binding would be cleared once your application is destroyed, which might be sufficient in most cases.

The promise which fulfils with `WebBrowserCoolDownResult` when cooling is performed, or an empty object when there was no connection to be dismissed.

### `WebBrowser.dismissAuthSession()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserdismissauthsession)

Dismisses the current authentication session. On web, it will close the popup window associated with auth process.

The `void` on the successful attempt or throws an error if dismiss functionality is not available.

### `WebBrowser.dismissBrowser()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserdismissbrowser)

Dismisses the presented web browser.

`[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<{ type: WebBrowserResultType.DISMISS }>`

The promise that resolves with `{ type: 'dismiss' }` on the successful attempt or throws an error if dismiss functionality is not available.

### `WebBrowser.getCustomTabsSupportingBrowsersAsync()`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsergetcustomtabssupportingbrowsersasync)

Returns a list of applications package names supporting Custom Tabs, Custom Tabs service, user chosen and preferred one. This may not be fully reliable, since it uses `PackageManager.getResolvingActivities` under the hood. (For example, some browsers might not be present in browserPackages list once another browser is set to default.)

The promise which fulfils with [`WebBrowserCustomTabsResults`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercustomtabsresults) object.

### `WebBrowser.maybeCompleteAuthSession(options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsermaybecompleteauthsessionoptions)

| Parameter | Type |
| --- | --- |
| options(optional) | `[WebBrowserCompleteAuthSessionOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercompleteauthsessionoptions)` |

  

Possibly completes an authentication session on web in a window popup. The method should be invoked on the page that the window redirects to.

Returns an object with message about why the redirect failed or succeeded:

If `type` is set to `failed`, the reason depends on the message:

-   `Not supported on this platform`: If the platform doesn't support this method (Android, iOS).
-   `Cannot use expo-web-browser in a non-browser environment`: If the code was executed in an SSR or node environment.
-   `No auth session is currently in progress`: (the cached state wasn't found in local storage). This can happen if the window redirects to an origin (website) that is different to the initial website origin. If this happens in development, it may be because the auth started on localhost and finished on your computer port (Ex: `128.0.0.*`). This is controlled by the `redirectUrl` and `returnUrl`.
-   `Current URL "<URL>" and original redirect URL "<URL>" do not match`: This can occur when the redirect URL doesn't match what was initial defined as the `returnUrl`. You can skip this test in development by passing `{ skipRedirectCheck: true }` to the function.

If `type` is set to `success`, the parent window will attempt to close the child window immediately.

If the error `ERR_WEB_BROWSER_REDIRECT` was thrown, it may mean that the parent window was reloaded before the auth was completed. In this case you'll need to close the child window manually.

### `WebBrowser.mayInitWithUrlAsync(url, browserPackage)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsermayinitwithurlasyncurl-browserpackage)

| Parameter | Type | Description |
| --- | --- | --- |
| url | `string` | 
The url of page that is likely to be loaded first when opening browser.

 |
| browserPackage(optional) | `string` | 

Package of browser to be informed. If not set, preferred browser will be used.

 |

  

This method initiates (if needed) [CustomTabsSession](https://developer.android.com/reference/android/support/customtabs/CustomTabsSession.html#maylaunchurl) and calls its `mayLaunchUrl` method for browser specified by the package.

A promise which fulfils with `WebBrowserMayInitWithUrlResult` object.

### `WebBrowser.openAuthSessionAsync(url, redirectUrl, options)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowseropenauthsessionasyncurl-redirecturl-options)

| Parameter | Type | Description |
| --- | --- | --- |
| url | `string` | 
The url to open in the web browser. This should be a login page.

 |
| redirectUrl(optional) | `null | string` | 

_Optional_ - The url to deep link back into your app. On web, this defaults to the output of [`Linking.createURL("")`](https://docs.expo.dev/versions/latest/sdk/linking/#linkingcreateurlpath-namedparameters).

 |
| options(optional) | `[AuthSessionOpenOptions](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#authsessionopenoptions)` | 

_Optional_ - An object extending the [`WebBrowserOpenOptions`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowseropenoptions). If there is no native AuthSession implementation available (which is the case on Android) these params will be used in the browser polyfill. If there is a native AuthSession implementation, these params will be ignored.

Default:`{}`



 |

  

#### On Android:[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#on-android)

This will be done using a "custom Chrome tabs" browser, [AppState](https://reactnative.dev/docs/appstate), and [Linking](https://docs.expo.dev/versions/latest/sdk/linking/) APIs.

#### On iOS:[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#on-ios)

Opens the url with Safari in a modal using `ASWebAuthenticationSession`. The user will be asked whether to allow the app to authenticate using the given url. To handle redirection back to the mobile application, the redirect URI set in the authentication server has to use the protocol provided as the scheme in app.json [`expo.scheme`](https://docs.expo.dev/versions/latest/config/app/#scheme). For example, `demo://` not `https://` protocol. Using `Linking.addEventListener` is not needed and can have side effects.

#### On web:[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#on-web)

> This API can only be used in a secure environment (localhost/https). to test this. Otherwise, an error with code [`ERR_WEB_BROWSER_CRYPTO`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#err_web_browser_crypto) will be thrown. This will use the browser's [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) API.

-   _Desktop_: This will create a new web popup window in the browser that can be closed later using `WebBrowser.maybeCompleteAuthSession()`.
-   _Mobile_: This will open a new tab in the browser which can be closed using `WebBrowser.maybeCompleteAuthSession()`.

How this works on web:

-   A crypto state will be created for verifying the redirect.
    -   This means you need to run with `npx expo start --https`
-   The state will be added to the window's `localstorage`. This ensures that auth cannot complete unless it's done from a page running with the same origin as it was started. Ex: if `openAuthSessionAsync` is invoked on `https://localhost:19006`, then `maybeCompleteAuthSession` must be invoked on a page hosted from the origin `https://localhost:19006`. Using a different website, or even a different host like `https://128.0.0.*:19006` for example will not work.
-   A timer will be started to check for every 1000 milliseconds (1 second) to detect if the window has been closed by the user. If this happens then a promise will resolve with `{ type: 'dismiss' }`.

> On mobile web, Chrome and Safari will block any call to [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) which takes too long to fire after a user interaction. This method must be invoked immediately after a user interaction. If the event is blocked, an error with code [`ERR_WEB_BROWSER_BLOCKED`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#err_web_browser_blocked) will be thrown.

-   If the user does not permit the application to authenticate with the given url, the Promise fulfills with `{ type: 'cancel' }` object.
-   If the user closed the web browser, the Promise fulfills with `{ type: 'cancel' }` object.
-   If the browser is closed using [`dismissBrowser`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserdismissbrowser), the Promise fulfills with `{ type: 'dismiss' }` object.

### `WebBrowser.openBrowserAsync(url, browserParams)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowseropenbrowserasyncurl-browserparams)

| Parameter | Type | Description |
| --- | --- | --- |
| url | `string` | 
The url to open in the web browser.

 |
| browserParams(optional) | `[WebBrowserOpenOptions](https://docs.expo.dev/versions/latest/sdk/webbrowser/#webbrowseropenoptions)` | 

A dictionary of key-value pairs.

Default:`{}`



 |

  

Opens the url with Safari in a modal on iOS using [`SFSafariViewController`](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller), and Chrome in a new [custom tab](https://developer.chrome.com/multidevice/android/customtabs) on Android. On iOS, the modal Safari will not share cookies with the system Safari. If you need this, use [`openAuthSessionAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowseropenauthsessionasyncurl-redirecturl-options).

The promise behaves differently based on the platform. On Android promise resolves with `{ type: 'opened' }` if we were able to open browser. On iOS:

-   If the user closed the web browser, the Promise resolves with `{ type: 'cancel' }`.
-   If the browser is closed using [`dismissBrowser`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserdismissbrowser), the Promise resolves with `{ type: 'dismiss' }`.

### `WebBrowser.warmUpAsync(browserPackage)`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserwarmupasyncbrowserpackage)

| Parameter | Type | Description |
| --- | --- | --- |
| browserPackage(optional) | `string` | 
Package of browser to be warmed up. If not set, preferred browser will be warmed.

 |

  

This method calls `warmUp` method on [CustomTabsClient](https://developer.android.com/reference/android/support/customtabs/CustomTabsClient.html#warmup(long)) for specified package.

A promise which fulfils with `WebBrowserWarmUpResult` object.

## Types[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#types)

### `AuthSessionOpenOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#authsessionopenoptions)

If there is no native AuthSession implementation available (which is the case on Android) the params inherited from [`WebBrowserOpenOptions`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowseropenoptions) will be used in the browser polyfill. Otherwise, the browser parameters will be ignored.

Type: `[WebBrowserOpenOptions](https://docs.expo.dev/versions/latest/sdk/webbrowser/#webbrowseropenoptions)` extended by:

| Property | Type | Description |
| --- | --- | --- |
| preferEphemeralSession(optional) | `boolean` | 
Only for: 

iOS

  

Determines whether the session should ask the browser for a private authentication session. Set this to `true` to request that the browser doesn’t share cookies or other browsing data between the authentication session and the user’s normal browser session. Whether the request is honored depends on the user’s default web browser.

Default:`false`



 |

### `WebBrowserAuthSessionResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserauthsessionresult)

Literal Type: multiple types

Acceptable values are: `[WebBrowserRedirectResult](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserredirectresult)` | `[WebBrowserResult](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserresult)`

### `WebBrowserCompleteAuthSessionOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercompleteauthsessionoptions)

| Property | Type | Description |
| --- | --- | --- |
| skipRedirectCheck(optional) | `boolean` | 
Attempt to close the window without checking to see if the auth redirect matches the cached redirect URL.

 |

### `WebBrowserCompleteAuthSessionResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercompleteauthsessionresult)

| Property | Type | Description |
| --- | --- | --- |
| message | `string` | 
Additional description or reasoning of the result.

 |
| type | `'success' | 'failed'` | 

Type of the result.

 |

### `WebBrowserCoolDownResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercooldownresult)

Type: `ServiceActionResult`

### `WebBrowserCustomTabsResults`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercustomtabsresults)

| Property | Type | Description |
| --- | --- | --- |
| browserPackages | `string[]` | 
All packages recognized by `PackageManager` as capable of handling Custom Tabs. Empty array means there is no supporting browsers on device.

 |
| defaultBrowserPackage(optional) | `string` | 

Default package chosen by user, `null` if there is no such packages. Also `null` usually means, that user will be prompted to choose from available packages.

 |
| preferredBrowserPackage(optional) | `string` | 

Package preferred by `CustomTabsClient` to be used to handle Custom Tabs. It favors browser chosen by user as default, as long as it is present on both `browserPackages` and `servicePackages` lists. Only such browsers are considered as fully supporting Custom Tabs. It might be `null` when there is no such browser installed or when default browser is not in `servicePackages` list.

 |
| servicePackages | `string[]` | 

All packages recognized by `PackageManager` as capable of handling Custom Tabs Service. This service is used by [`warmUpAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserwarmupasyncbrowserpackage), [`mayInitWithUrlAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsermayinitwithurlasyncurl-browserpackage) and [`coolDownAsync`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsercooldownasyncbrowserpackage).

 |

### `WebBrowserMayInitWithUrlResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsermayinitwithurlresult)

Type: `ServiceActionResult`

### `WebBrowserOpenOptions`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowseropenoptions)

| Property | Type | Description |
| --- | --- | --- |
| browserPackage(optional) | `string` | 
Only for: 

Android

  

Package name of a browser to be used to handle Custom Tabs. List of available packages is to be queried by [`getCustomTabsSupportingBrowsers`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowsergetcustomtabssupportingbrowsersasync) method.



 |
| controlsColor(optional) | `string` | 

Only for: 

iOS

  

Tint color for controls in SKSafariViewController. Supports React Native [color formats](https://reactnative.dev/docs/colors).



 |
| createTask(optional) | `boolean` | 

Only for: 

Android

  

A boolean determining whether the browser should open in a new task or in the same task as your app.

Default:`true`



 |
| dismissButtonStyle(optional) | `'done' | 'close' | 'cancel'` | 

Only for: 

iOS

  

The style of the dismiss button. Should be one of: `done`, `close`, or `cancel`.



 |
| enableBarCollapsing(optional) | `boolean` | 

A boolean determining whether the toolbar should be hiding when a user scrolls the website.

 |
| enableDefaultShareMenuItem(optional) | `boolean` | 

Only for: 

Android

  

A boolean determining whether a default share item should be added to the menu.



 |
| presentationStyle(optional) | `[WebBrowserPresentationStyle](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserpresentationstyle)` | 

Only for: 

iOS

  

The [presentation style](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621355-modalpresentationstyle) of the browser window.

Default:`WebBrowser.WebBrowserPresentationStyle.OverFullScreen`



 |
| readerMode(optional) | `boolean` | 

Only for: 

iOS

  

A boolean determining whether Safari should enter Reader mode, if it is available.



 |
| secondaryToolbarColor(optional) | `string` | 

Only for: 

Android

  

Color of the secondary toolbar. Supports React Native [color formats](https://reactnative.dev/docs/colors).



 |
| showInRecents(optional) | `boolean` | 

Only for: 

Android

  

A boolean determining whether browsed website should be shown as separate entry in Android recents/multitasking view. Requires `createTask` to be `true` (default).

Default:`false`



 |
| showTitle(optional) | `boolean` | 

Only for: 

Android

  

A boolean determining whether the browser should show the title of website on the toolbar.



 |
| toolbarColor(optional) | `string` | 

Color of the toolbar. Supports React Native [color formats](https://reactnative.dev/docs/colors).

 |
| windowFeatures(optional) | `string | [WebBrowserWindowFeatures](https://docs.expo.dev/versions/latest/sdk/webbrowser/#webbrowserwindowfeatures)` | 

Only for: 

Web

  

Features to use with `window.open()`.



 |
| windowName(optional) | `string` | 

Only for: 

Web

  

Name to assign to the popup window.



 |

### `WebBrowserRedirectResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserredirectresult)

| Property | Type | Description |
| --- | --- | --- |
| type | `'success'` | 
Type of the result.

 |
| url | `string` | \- |

### `WebBrowserResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserresult)

| Property | Type | Description |
| --- | --- | --- |
| type | `[WebBrowserResultType](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserresulttype)` | 
Type of the result.

 |

### `WebBrowserWarmUpResult`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserwarmupresult)

Type: `ServiceActionResult`

### `WebBrowserWindowFeatures`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserwindowfeatures)

Type: `Record<string, number | boolean | string>`

## Enums[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#enums)

### `WebBrowserPresentationStyle`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserpresentationstyle)

#### `AUTOMATIC`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#automatic)

`WebBrowserPresentationStyle.AUTOMATIC ＝ "automatic"`

The default presentation style chosen by the system. On older iOS versions, falls back to `WebBrowserPresentationStyle.FullScreen`.

#### `CURRENT_CONTEXT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#current_context)

`WebBrowserPresentationStyle.CURRENT_CONTEXT ＝ "currentContext"`

A presentation style where the browser is displayed over the app's content.

#### `FORM_SHEET`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#form_sheet)

`WebBrowserPresentationStyle.FORM_SHEET ＝ "formSheet"`

A presentation style that displays the browser centered in the screen.

#### `FULL_SCREEN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#full_screen)

`WebBrowserPresentationStyle.FULL_SCREEN ＝ "fullScreen"`

A presentation style in which the presented browser covers the screen.

#### `OVER_CURRENT_CONTEXT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#over_current_context)

`WebBrowserPresentationStyle.OVER_CURRENT_CONTEXT ＝ "overCurrentContext"`

A presentation style where the browser is displayed over the app's content.

#### `OVER_FULL_SCREEN`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#over_full_screen)

`WebBrowserPresentationStyle.OVER_FULL_SCREEN ＝ "overFullScreen"`

A presentation style in which the browser view covers the screen.

#### `PAGE_SHEET`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#page_sheet)

`WebBrowserPresentationStyle.PAGE_SHEET ＝ "pageSheet"`

A presentation style that partially covers the underlying content.

#### `POPOVER`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#popover)

`WebBrowserPresentationStyle.POPOVER ＝ "popover"`

A presentation style where the browser is displayed in a popover view.

### `WebBrowserResultType`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#webbrowserresulttype)

#### `CANCEL`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#cancel)

`WebBrowserResultType.CANCEL ＝ "cancel"`

#### `DISMISS`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#dismiss)

`WebBrowserResultType.DISMISS ＝ "dismiss"`

#### `LOCKED`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#locked)

`WebBrowserResultType.LOCKED ＝ "locked"`

#### `OPENED`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#opened)

`WebBrowserResultType.OPENED ＝ "opened"`

## Error codes[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#error-codes)

### `ERR_WEB_BROWSER_REDIRECT`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#err_web_browser_redirect)

Web only: The window cannot complete the redirect request because the invoking window doesn't have a reference to its parent. This can happen if the parent window was reloaded.

### `ERR_WEB_BROWSER_BLOCKED`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#err_web_browser_blocked)

Web only: The popup window was blocked by the browser or failed to open. This can happen in mobile browsers when the `window.open()` method was invoked too long after a user input was fired.

Mobile browsers do this to prevent malicious websites from opening many unwanted popups on mobile.

You're method can still run in an async function but there cannot be any long running tasks before it. You can use hooks to disable user-inputs until any other processes have finished loading.

### `ERR_WEB_BROWSER_CRYPTO`[](https://docs.expo.dev/versions/latest/sdk/filesystem-next/#err_web_browser_crypto)

Web only: The current environment doesn't support crypto. Ensure you are running from a secure origin (localhost/https).
