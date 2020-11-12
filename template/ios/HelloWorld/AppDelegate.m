#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTConvert.h>

#import <UMCore/UMModuleRegistry.h>
#import <UMReactNativeAdapter/UMNativeModulesProxy.h>
#import <UMReactNativeAdapter/UMModuleRegistryAdapter.h>
#import <EXSplashScreen/EXSplashScreenService.h>
#import <UMCore/UMModuleRegistryProvider.h>
#import "ReactNativeConfig.h"

@interface AppDelegate () <RCTBridgeDelegate>

@property (nonatomic, strong) UMModuleRegistryAdapter *moduleRegistryAdapter;
@property (nonatomic, strong) NSDictionary *launchOptions;

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleRegistryAdapter = [[UMModuleRegistryAdapter alloc] initWithModuleRegistryProvider:[[UMModuleRegistryProvider alloc] init]];
  self.launchOptions = launchOptions;
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];

  #ifdef DEBUG
    [self initializeReactNativeApp];
  #else
    [self initializeReactNativeAppWithExpoUpdates];
  #endif

  [super application:application didFinishLaunchingWithOptions:launchOptions];
  return YES;
}

- (RCTBridge *)initializeReactNativeApp
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:self.launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"HelloWorld" initialProperties:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  return bridge;
}

- (void)initializeReactNativeAppWithExpoUpdates
{
  EXUpdatesAppController *controller = [EXUpdatesAppController sharedInstance];

  [controller setConfiguration: @{
    @"EXUpdatesURL": [ReactNativeConfig envFor:@"EXPO_UPDATES_URL"],
    @"EXUpdatesEnabled": [self envBool:@"EXPO_UPDATES_ENABLED"],
    @"EXUpdatesCheckOnLaunch": [ReactNativeConfig envFor:@"EXPO_UPDATES_CHECK_ON_LAUNCH"] ?: @"WIFI_ONLY",
    @"EXUpdatesReleaseChannel": [ReactNativeConfig envFor:@"EXPO_UPDATES_RELEASE_CHANNEL"] ?: @"default",
    @"EXUpdatesRuntimeVersion": [ReactNativeConfig envFor:@"EXPO_UPDATES_RUNTIME_VERSION"]
  }];
  controller.delegate = self;
  [controller startAndShowLaunchScreen:self.window];
}

- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge
{
    NSArray<id<RCTBridgeModule>> *extraModules = [_moduleRegistryAdapter extraModulesForBridge:bridge];
    // If you'd like to export some custom RCTBridgeModules that are not Expo modules, add them here!
    return extraModules;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[EXUpdatesAppController sharedInstance] launchAssetUrl];
#endif
}

- (void)appController:(EXUpdatesAppController *)appController didStartWithSuccess:(BOOL)success
{
  appController.bridge = [self initializeReactNativeApp];
  EXSplashScreenService *splashScreenService = (EXSplashScreenService *)[UMModuleRegistryProvider getSingletonModuleForClass:[EXSplashScreenService class]];
  [splashScreenService showSplashScreenFor:self.window.rootViewController];
}

- (NSNumber *)envBool:(NSString *)name
{
  NSString *v = [ReactNativeConfig envFor:name] ?: @"";

  if ([v isEqual:@"true"] || [v isEqual:@"1"] || [v isEqual:@"y"]) {
    return @YES;
  }

  return @NO;
}

@end
