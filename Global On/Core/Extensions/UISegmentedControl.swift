//
//  UISegmentedControl.swift
//  365Drive
//
//  Created by Al Wefaq on 11/20/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension UISegmentedControl {
    
    /// Tint color doesn't have any effect on iOS 13.
    func ensureiOS12Style() {
        if #available(iOS 13, *) {
            
            let tintColorImage = UIImage(color: tintColor)
            let dividerImage = UIImage(color: tintColor, size: CGSize(width: 0.3, height: 1.0))
            // Must set the background image for normal to something (even clear) else the rest won't work
            setBackgroundImage(UIImage(color: backgroundColor ?? .clear), for: .normal, barMetrics: .default)
            setBackgroundImage(tintColorImage, for: .selected, barMetrics: .default)
            setBackgroundImage(UIImage(color: tintColor.withAlphaComponent(0.2)), for: .highlighted, barMetrics: .default)
            setBackgroundImage(tintColorImage, for: [.highlighted, .selected], barMetrics: .default)
            setTitleTextAttributes([.foregroundColor: tintColor ?? .clear, NSAttributedString.Key.font: UIFont.systemFont(ofSize: 13, weight: .regular)], for: .normal)
            setDividerImage(dividerImage, forLeftSegmentState: .normal, rightSegmentState: .normal, barMetrics: .default)
            layer.borderWidth = 1
            layer.borderColor = tintColor.cgColor
            layer.cornerRadius = 0.2
        }
    }
    
    func defaultConfiguration() {
        
        ensureiOS12Style()

        let selectedStateColor = UIColor.darkBlueColor
        let normalStateColor = UIColor.white

        let systemFont = UIFont.systemFont(ofSize: UIFont.systemFontSize)
        let cairoRegularFont = UIFont.cairoRegular(fontSize: 12.0)
        
        let titleTextAttributes: [NSAttributedString.Key : Any]? = [
            NSAttributedString.Key.foregroundColor: selectedStateColor,
            NSAttributedString.Key.font : cairoRegularFont ?? systemFont
        ]
        
        let selectedtitleTextAttributes: [NSAttributedString.Key : Any]? = [
            NSAttributedString.Key.foregroundColor: normalStateColor,
            NSAttributedString.Key.font : cairoRegularFont ?? systemFont
        ]
        
        setTitleTextAttributes(titleTextAttributes, for: .normal)
        setTitleTextAttributes(selectedtitleTextAttributes, for: .selected)
    }
}

