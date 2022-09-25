<script lang="ts">
	import { onMount } from "svelte";
    import Button from "../components/button.svelte";
    import Platform from 'platform'
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
    })
</script>

<style>
    *{
        font-family: Verdana, Geneva, Tahoma, sans-serif ;
    }
</style>

<template>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <div class="grid grid-cols-3 gap-4 p-4">
        <span>Platform: <span class="font-bold">{platform}</span></span>
        <span>Version: <span class="font-bold">{version}</span></span>
        <span>Screen Width: <span class="font-bold">{width}</span></span>
        <span>Screen Height<span class="font-bold">{height}</span></span>
        <span>Available Width: <span class="font-bold">{availWidth}</span></span>
        <span>Available Height: <span class="font-bold">{availHeight}</span></span>
        <span>Color Depth: <span class="font-bold">{colorDepth} bit</span></span>
        <span>Cookies: <span class="font-bold">{cookiesEnabled ? 'Enabled' : 'Disabled'}</span></span>
        <span>Java: <span class="font-bold">{javaEnabled ? 'Enabled' : 'Disabled'}</span></span>
        <span>Motion: <span class="font-bold">{matches ? 'Prefers Reduced' : 'Smooth'}</span></span>
        <span>Flash: <span class="font-bold">{flash ? 'Enabled' : 'Disabled'}</span></span>
        <span>Language: <span class="font-bold">{language}</span></span>
        <span>Os: <span class="font-bold">{os}</span></span>
        <span>Pixel Ratio: <span class="font-bold">{pixelRatio}</span></span>
        <span>Ad Blocker: <span class="font-bold">{adBlock ? 'Enabled' : 'Disabled'}</span></span>
    </div>
    <Button/>
</template>