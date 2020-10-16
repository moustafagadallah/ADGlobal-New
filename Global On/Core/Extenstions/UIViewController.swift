//
//  UIViewController.swift
//  365Drive
//
//  Created by Al Wefaq on 11/28/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension UIViewController {
    
    var isDarkModeEnabled: Bool {
        get {
            if #available(iOS 12.0, *) {
                return traitCollection.userInterfaceStyle == .dark
            } else {
                return false
            }
        }
    }
    
    class func topMostViewController() -> UIViewController? {
        
        var topController = UIApplication.shared.keyWindow?.rootViewController
//
//        while let presentedViewController = topController?.presentedViewController {
//            topController = presentedViewController
//        }

        while true {
            if let presented = topController?.presentedViewController {
                topController = presented
            } else if let nav = topController as? UINavigationController {
                topController = nav.visibleViewController
            } else if let tab = topController as? UITabBarController {
                topController = tab.selectedViewController
            } else {
                break
            }
        }
        
        return topController
    }
}
