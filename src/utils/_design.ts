const defaultColors = {
    color_success: "#0DC268",
    color_warning: "#ED0A34",
    color_danger: "#FF9E00",

    color_gray_0: "#FFFFFF",
    color_gray_1: "#F9F9FA",
    color_gray_2: "#F3F3F5",
    color_gray_3: "#ECEDF0",
    color_gray_4: "#E6E7EB",
    color_gray_5: "#E0E1E6",
    color_gray_6: "#DADCE0",
    color_gray_7: "#D4D6DB",
    color_gray_8: "#CFD1D6",
    color_gray_9: "#CACCD1",
    color_gray_10: "#4D4E52",
    color_gray_11: "#484A4D",
    color_gray_12: "#444547",
    color_gray_13: "#3F4042",
    color_gray_14: "#3A3B3D",
    color_gray_15: "#363638",
    color_gray_16: "#313133",
    color_gray_17: "#2C2D2E",
    color_gray_18: "#272829",
    color_gray_19: "#232324",
    color_gray_20: "#1E1E1F",
}

const additionalVars = {
    color_primary: "#005FF9",
    color_secondary: defaultColors.color_gray_3,

    color_bg_dark_primary: defaultColors.color_gray_12,
    color_bg_dark_secondary: defaultColors.color_gray_20,

    color_bg_light_primary: defaultColors.color_gray_0,
    color_bg_light_secondary: defaultColors.color_gray_5,

    color_text: defaultColors.color_gray_17,
    color_text_secondary: defaultColors.color_gray_10,
    color_link: "#005BD1",
    color_link_active: "#528FDF",

    color_icon: defaultColors.color_gray_17,
    color_icon_secondary: defaultColors.color_gray_9,

    font_family_primary: "Inter, sans-serif",
    font_family_secondary: "Roboto, sans-serif",
    font_family_headers: "Montserrat, sans-serif",

    font_size_default: 16,
    font_size_medium: 20,
    font_size_big: 24,
}

const design = {
    ...defaultColors,
    ...additionalVars
}

export default design;