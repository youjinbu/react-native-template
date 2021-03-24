import UIKit

@UIApplicationMain
class AppDelegate: UMAppDelegateWrapper {
  var bridge: RCTBridge!
  var launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  var moduleRegistryAdapter: UMModuleRegistryAdapter?

  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.launchOptions = launchOptions;
    self.moduleRegistryAdapter = UMModuleRegistryAdapter(moduleRegistryProvider: UMModuleRegistryProvider())

    #if DEBUG
    initializeReactNativeApp()
    #else
    initializeReactNativeAppWithExpoUpdates()
    #endif

    super.application(application, didFinishLaunchingWithOptions: launchOptions)
    return true
  }

  @discardableResult
  func initializeReactNativeApp() -> RCTBridge? {
    if let bridge = RCTBridge(delegate: self, launchOptions: self.launchOptions) {
      let rootView = RCTRootView(bridge: bridge, moduleName: "HelloWorld", initialProperties: nil)
      let rootViewController = UIViewController()
      rootView.backgroundColor = UIColor.white
      rootViewController.view = rootView

      window?.rootViewController = rootViewController
      window?.makeKeyAndVisible()
      self.bridge = bridge
    }
    return nil
  }

  func initializeReactNativeAppWithExpoUpdates() {
    let controller = EXUpdatesAppController.sharedInstance()
    controller.setConfiguration([
      "EXUpdatesURL": env("EXPO_UPDATES_URL", ""),
      "EXUpdatesEnabled": envBool("EXPO_UPDATES_ENABLED"),
      "EXUpdatesCheckOnLaunch": env("EXPO_UPDATES_CHECK_ON_LAUNCH", "WIFI_ONLY"),
      "EXUpdatesReleaseChannel": env("EXPO_UPDATES_RELEASE_CHANNEL", "default"),
      "EXUpdatesRuntimeVersion": env("EXPO_UPDATES_RUNTIME_VERSION", "")
    ])
    controller.delegate = self
    controller.startAndShowLaunchScreen(self.window!)
  }

  private func env(_ name: String, _ defaults: String) -> String {
    return ReactNativeConfig.env(for: name) ?? defaults
  }

  private func envBool(_ name: String) -> Bool {
    let v = env(name, "")
    if (v == "true" || v == "1" || v == "y") {
      return true
    }

    return false
  }
}

extension AppDelegate: RCTBridgeDelegate {
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    #if DEBUG
    return RCTBundleURLProvider.sharedSettings()?.jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
    #else
    return EXUpdatesAppController.sharedInstance().launchAssetUrl
    #endif
  }

  func extraModules(for bridge: RCTBridge!) -> [RCTBridgeModule]! {
    let extraModules = moduleRegistryAdapter?.extraModules(for: bridge)
    return extraModules
  }
}

extension AppDelegate: EXUpdatesAppControllerDelegate {
  func appController(_ appController: EXUpdatesAppController, didStartWithSuccess success: Bool) {
    appController.bridge = self.initializeReactNativeApp()
    let splashScreenService: EXSplashScreenService = UMModuleRegistryProvider.getSingletonModule(for: EXSplashScreenService.classForCoder()) as! EXSplashScreenService
    splashScreenService.showSplashScreen(for: (self.window?.rootViewController)!)
  }
}
