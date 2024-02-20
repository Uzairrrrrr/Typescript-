function describe_city(name: string, country: string = 'Pakistan'): void{
    console.log(`${name} is in ${country}.`)
}
describe_city('Lahore')
describe_city('Karachi')
describe_city('Mumbai', 'India')