tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "outline": "#988e90",
                "on-secondary": "#3c2f00",
                "inverse-primary": "#5e5e5e",
                "on-error-container": "#ffdad6",
                "on-tertiary-container": "#75766a",
                "on-tertiary": "#2f3128",
                "surface-tint": "#c6c6c6",
                "on-secondary-fixed-variant": "#574500",
                "on-surface": "#e5e2e1",
                "tertiary-container": "#000000",
                "on-primary": "#303030",
                "primary-container": "#000000",
                "surface-variant": "#353535",
                "surface-container": "#20201f",
                "on-tertiary-fixed": "#1b1c14",
                "surface-dim": "#131313",
                "on-primary-fixed-variant": "#474747",
                "secondary-fixed-dim": "#e9c349",
                "inverse-surface": "#e5e2e1",
                "on-background": "#e5e2e1",
                "on-tertiary-fixed-variant": "#46483d",
                "on-surface-variant": "#cfc4c5",
                "on-error": "#690005",
                "error": "#ffb4ab",
                "secondary": "#D4AF37", /* Metallic Gold */
                "tertiary-fixed-dim": "#c7c7ba",
                "surface-container-highest": "#353535",
                "tertiary": "#c7c7ba",
                "background": "#0e0e0e", /* Deep Black */
                "primary-fixed": "#e2e2e2",
                "tertiary-fixed": "#e3e3d5",
                "outline-variant": "#4c4546",
                "on-primary-fixed": "#1b1b1b",
                "secondary-container": "#af8d11",
                "on-primary-container": "#757575",
                "surface-container-high": "#2a2a2a",
                "surface": "#131313",
                "surface-container-lowest": "#0e0e0e",
                "on-secondary-container": "#342800",
                "on-secondary-fixed": "#241a00",
                "secondary-fixed": "#ffe088",
                "primary-fixed-dim": "#c6c6c6",
                "inverse-on-surface": "#313030",
                "error-container": "#93000a",
                "surface-container-low": "#1c1b1b",
                "primary": "#D4AF37", /* Metallic Gold replacing pink */
                "surface-bright": "#393939"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "margin-desktop": "64px",
                "section-gap": "128px",
                "container-max": "1200px",
                "gutter": "24px",
                "margin-mobile": "20px",
                "unit": "8px",
                "stack-lg": "32px",
                "stack-md": "16px",
                "stack-sm": "8px",
                "section-padding-desktop": "120px",
                "section-padding-mobile": "60px"
            },
            fontFamily: {
                "label-caps": ["Manrope"],
                "body-lg": ["Manrope"],
                "headline-sm": ["Playfair Display"],
                "headline-lg": ["Playfair Display"],
                "display-lg": ["Playfair Display"],
                "body-md": ["Manrope"],
                "display-lg-mobile": ["Playfair Display"]
            },
            fontSize: {
                "label-caps": ["12px", { "lineHeight": "1.2", "letterSpacing": "0.15em", "fontWeight": "700" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "400" }],
                "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
                "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "display-lg-mobile": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "label-lg": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }],
                "headline-md": ["32px", { "lineHeight": "1.4", "fontWeight": "500" }],
                "label-md": ["12px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500" }]
            }
        }
    }
}
