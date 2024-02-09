
export const shortWalletAddress = (address?: string) => {
    if (address == "N/A") return "N/A"
    if (address) return address.slice(0, 5) + "..." + address.slice(-4,)
    return "N/A"
}
