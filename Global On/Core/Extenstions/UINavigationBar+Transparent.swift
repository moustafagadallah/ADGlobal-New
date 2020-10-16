//
//  UINavigationBar+Transparent.swift
//  365Drive
//
//  Created by Ahmed Naguib on 7/12/20.
//  Copyright © 2020 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension UINavigationBar {

    open override func point(inside point: CGPoint, with event: UIEvent?) -> Bool {
        
        guard nestedInteractiveViews(in: self, contain: point) else { return false }
        return super.point(inside: point, with: event)
    }

    private func nestedInteractiveViews(in view: UIView, contain point: CGPoint) -> Bool {

        if view is UIControl, view.bounds.contains(convert(point, to: view)) {
            return true
        }

        for subview in view.subviews {
            if nestedInteractiveViews(in: subview, contain: point) {
                return true
            }
        }

        return false
    }
}
