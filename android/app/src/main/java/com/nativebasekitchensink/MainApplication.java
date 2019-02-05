package com.nativebasekitchensink;

import android.app.Application;
import android.support.multidex.MultiDexApplication;
import android.support.multidex.MultiDex;
import com.facebook.react.ReactApplication;
import org.reactnative.camera.RNCameraPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.clipsub.RNSweetAlert.RNSweetAlertPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.anyline.reactnative.AnylinePackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends MultiDexApplication implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNCameraPackage(),
            new ReactVideoPackage(),
            new RNSweetAlertPackage(),
            new SplashScreenReactPackage(),
            new AnylinePackage(),
            new PhotoViewPackage(),
            new LinearGradientPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    MultiDex.install(this);
  }
}
