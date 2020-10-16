//
//  UINavigationController+Pop.swift
//  365Drive
//
//  Created by Mahmoud on 7/16/20.
//  Copyright © 2020 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension UINavigationController {
    
    func backToViewController(viewController: Swift.AnyClass) {
        for element in viewControllers as Array {
            if element.isKind(of: viewController) {
                self.popToViewController(element, animated: true)
                break
            }
        }
    }
}
