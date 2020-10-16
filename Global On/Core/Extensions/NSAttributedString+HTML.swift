//
//  NSAttributedString+HTML.swift
//  365Drive
//
//  Created by Ahmed Naguib on 7/5/20.
//  Copyright © 2020 Al Wefaq Rent a Car. All rights reserved.
//

import Foundation
import UIKit


extension NSAttributedString {

    convenience init?(htmlString html: String, font: UIFont? = nil) {
        
        let options: [NSAttributedString.DocumentReadingOptionKey : Any] = [
            .documentType: NSAttributedString.DocumentType.html,
            .characterEncoding: String.Encoding.utf8.rawValue
        ]

        let data = html.data(using: .utf8, allowLossyConversion: true)
       
        guard (data != nil),
              let fontFamily = font?.familyName,
              let attr = try? NSMutableAttributedString(data: data!, options: options, documentAttributes: nil)
            else { return nil }

        let fontSize: CGFloat? = (font == nil) ? nil : font!.pointSize
        
        let range = NSRange(location: 0, length: attr.length)
        
        attr.enumerateAttribute(.font, in: range, options: .longestEffectiveRangeNotRequired) { attrib, range, _ in
            
            if let htmlFont = attrib as? UIFont {
                
                let traits = htmlFont.fontDescriptor.symbolicTraits
                var descrip = htmlFont.fontDescriptor.withFamily(fontFamily)

                if (traits.rawValue & UIFontDescriptor.SymbolicTraits.traitBold.rawValue) != 0 {
                    descrip = descrip.withSymbolicTraits(.traitBold)!
                }

                if (traits.rawValue & UIFontDescriptor.SymbolicTraits.traitItalic.rawValue) != 0 {
                    descrip = descrip.withSymbolicTraits(.traitItalic)!
                }

                attr.addAttribute(.font, value: UIFont(descriptor: descrip, size: fontSize ?? htmlFont.pointSize), range: range)
            }
        }

        self.init(attributedString: attr)
    }
}
