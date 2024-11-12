import { ThemeOptions } from '@mui/material/styles';


export const ColorPalette = {
    DEEP_SKY_BLUE: '#01adff',
    STEEL_BLUE: '#38789e',
    LIGHT_BLUE: '#a0d1f9',
    MEDIUM_VIOLET_RED: '#d92d7c'
}

export const globalThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#0d48a1',
        },
        secondary: {
            main: '#00adff',
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 15
    },
    components: {
        MuiFilledInput: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiFormControl: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiFormHelperText: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiInputBase: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiInputLabel: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiListItem: {
            defaultProps: {
                dense: true,
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiTable: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiTextField: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiToolbar: {
            defaultProps: {
                variant: 'dense',
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
};