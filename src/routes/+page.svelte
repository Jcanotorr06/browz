<script lang="ts">
	import { onMount } from "svelte";
    import Button from "../components/button.svelte";
    import Platform from 'platform'
    import axios from 'axios'
    const loadModule = async () => {
        try {
            // @ts-expect-error
            return await import('just-detect-adblock').then(mod => mod.default)
        } catch (error) {
            return false
        }
    }

    let platform:any = '';
    let width:number, height:number, availHeight:number, availWidth:number, colorDepth:number
    let cookiesEnabled:boolean, javaEnabled:boolean
    let matches:boolean
    let flash:MimeType | undefined
    let language:string
    let version:string
    let os:any
    let pixelRatio:number
    let adBlock:any
    let ip:string = '0.0.0.0'
    onMount(async () => {
        let Detect = await loadModule()

        platform = Platform.name
        version = Platform.version!
        os = Platform.os?.toString()
        width = window.screen.width, height = window.screen.height, availHeight = window.screen.availHeight, availWidth = window.screen.availWidth, colorDepth = window.screen.colorDepth
        cookiesEnabled =  navigator.cookieEnabled, javaEnabled = navigator.javaEnabled()
        matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        // @ts-expect-error
        flash = navigator.mimeTypes['application/x-shockwave-flash']<MimeType|undefined>
        language = navigator.language
        pixelRatio = window.devicePixelRatio
        adBlock = Detect ? await Detect.detectAnyAdblocker() : true
        ip = await axios.get("https://www.myexternalip.com/json").then(res => res.data.ip)
        
    })
</script>

<template>
    <div class="bg-main rounded-sm window-shadow-2 border border-secondary-content p-4 w-full h-full">
        <header class="flex p-2 align-center justify-between bg-accent text-card">
            <div>-</div>
            <div>
                <span>ABOUT_YOUR_DEVICE</span>
            </div>
            <div>-</div>
        </header>
        <div class="grid grid-cols-12 gap-8 p-8 bg-pixels-light">
            <div class="grid grid-cols-6 col-span-12 lg:col-span-6 gap-8">
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-6">Platform: <span class="font-bold">{platform}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Version: <span class="font-bold">{version}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Screen Width: <span class="font-bold">{width}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Screen Height<span class="font-bold">{height}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Available Width: <span class="font-bold">{availWidth}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Available Height: <span class="font-bold">{availHeight}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Color Depth: <span class="font-bold">{colorDepth} bit</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-6">Cookies: <span class="font-bold">{cookiesEnabled ? 'Enabled' : 'Disabled'}</span></div>
            </div>
            <div class="grid grid-cols-6 col-span-12 lg:col-span-6 gap-8">
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Java: <span class="font-bold">{javaEnabled ? 'Enabled' : 'Disabled'}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Motion: <span class="font-bold">{matches ? 'Prefers Reduced' : 'Smooth'}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-6">Flash: <span class="font-bold">{flash ? 'Enabled' : 'Disabled'}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-6">Language: <span class="font-bold">{language}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-6">Os: <span class="font-bold">{os}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-6">Pixel Ratio: <span class="font-bold">{pixelRatio}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Ad Blocker: <span class="font-bold">{adBlock ? 'Enabled' : 'Disabled'}</span></div>
                <div class="p-4 window-shadow-2 border border-secondary bg-card col-span-6 lg:col-span-3">Ip Address: <span class="font-bold">{ip}</span></div>
            </div>
        </div>
    </div>
</template>