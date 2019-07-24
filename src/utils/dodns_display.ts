// Displays if the user is using DigitalOcean DNS.
export default (item: string | null) => {
    if (!item) {
        document.getElementById("NS-Extra")!.innerHTML = `
            <p><b>This is a sub-domain and does not have any NS records.</b></p>
        `
    } else if (!item.endsWith(".digitalocean.com") && !item.endsWith(".digitalocean.com.")) {
        document.getElementById("NS-Extra")!.innerHTML = `
            <p><b>This domain is not using DigitalOcean DNS.</b> <a href="https://www.digitalocean.com/docs/networking/dns/">Learn more about DigitalOcean DNS.</a></p>
        `
    } else {
        document.getElementById("NS-Extra")!.innerHTML = `
            <p><b>This domain is using DigitalOcean DNS.</b> <a href="https://www.digitalocean.com/docs/networking/dns/">Learn more about DigitalOcean DNS.</a></p>
        `
    }
}
