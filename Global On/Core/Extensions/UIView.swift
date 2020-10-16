//
//  UIView.swift
//  365Drive
//
//  Created by Ahmed Naguib on 1/21/20.
//  Copyright © 2020 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension UIView {
    
    var isDarkModeEnabled: Bool {
        get {
            if #available(iOS 12.0, *) {
                return traitCollection.userInterfaceStyle == .dark
            } else {
                return false
            }
        }
    }
    
    func pixelColorAt(point:CGPoint) -> UIColor {
        
        let pixel = UnsafeMutablePointer<CUnsignedChar>.allocate(capacity: 4)
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        let bitmapInfo = CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedLast.rawValue)
        let context = CGContext(data: pixel, width: 1, height: 1, bitsPerComponent: 8, bytesPerRow: 4, space: colorSpace, bitmapInfo: bitmapInfo.rawValue)
        
        context!.translateBy(x: -point.x, y: -point.y)
        layer.render(in: context!)
        let color:UIColor = UIColor(red: CGFloat(pixel[0])/255.0,
                                    green: CGFloat(pixel[1])/255.0,
                                    blue: CGFloat(pixel[2])/255.0,
                                    alpha: CGFloat(pixel[3])/255.0)
        
        pixel.deallocate()
        return color
    }
}

extension UIView {
    
    func makeCircular() {
        
        self.layer.cornerRadius = min(self.frame.size.height, self.frame.size.width) / 2.0
        self.clipsToBounds = true
    }
    
    /// Create image snapshot of view.
     ///
     /// - Parameters:
     ///   - rect: The coordinates (in the view's own coordinate space) to be captured. If omitted, the entire `bounds` will be captured.
     ///   - afterScreenUpdates: A Boolean value that indicates whether the snapshot should be rendered after recent changes have been incorporated. Specify the value false if you want to render a snapshot in the view hierarchy's current state, which might not include recent changes. Defaults to `true`.
     ///
     /// - Returns: The `UIImage` snapshot.
     func snapshot(of rect: CGRect? = nil, afterScreenUpdates: Bool = true) -> UIImage {
         return UIGraphicsImageRenderer(bounds: rect ?? bounds).image { _ in
             drawHierarchy(in: bounds, afterScreenUpdates: afterScreenUpdates)
         }
     }
}
