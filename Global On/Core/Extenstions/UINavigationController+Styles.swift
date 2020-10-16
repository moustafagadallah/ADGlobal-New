//
//  UINavigationController+Styles.swift
//  365Drive
//
//  Created by Ahmed Naguib on 6/19/20.
//  Copyright © 2020 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension UINavigationController {

    func applyTransparentNavigationBar() {

//        navigationBar.bounds = navigationBar.bounds.insetBy(dx: 0, dy: -10.0)
        navigationBar.isTranslucent = true
        navigationBar.isOpaque = false
        navigationBar.setBackgroundImage(UIImage(), for: .default)
        navigationBar.shadowImage = UIImage()
        navigationBar.tintColor = .black
        navigationBar.barTintColor = .clear
        navigationBar.shadowOpacity = 0.0
        view.backgroundColor = .clear
    }
    
    func applyGrayNavigationBar() {
        
        navigationBar.setBackgroundImage(UIImage(color: .weemGrayNavigationBarColor, size: navigationBar.bounds.size), for: .default)
//        navigationBar.setBackgroundImage(UIImage(named: "Navigation Background"), for: .default)
        navigationBar.shadowColor = .weemGrayBorder
        navigationBar.shadowOpacity = 1.0
        navigationBar.shadowOffset = CGSize(width: 0, height: 5)
        navigationBar.shadowRadius = 6
    }
}
