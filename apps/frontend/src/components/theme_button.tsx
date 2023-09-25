import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { IconMoonFilled, IconSunHigh } from '@tabler/icons-react'

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    useEffect(() => {
        console.log(theme =='light' ? 'dark' : 'ligth', 'theme');
    })
    if (!mounted) return null

    return (
        <div >
            <Switch
                className="ml-20"
                onClick={() => document.documentElement.classList.toggle('dark')}                
                size="lg"
                color="secondary"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <IconMoonFilled className={className} />
                        ) : (
                        <IconSunHigh className={className} />
                    )
                }
            >
            </Switch>
        </div>
    )
};


