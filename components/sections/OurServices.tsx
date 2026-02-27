import { Building, House, Tag, Upload, Users } from 'lucide-react'
import { Button } from '../ui/button'

const OurServices = () => {
  const services = [
    { title: 'Rent Property', description: 'Family homes and Commercial properties ready to move in.', icon: House, button: 'Explore Rentals' },
    { title: 'Buy Property', description: 'Verified properties for sale.', icon: Building, button: 'Explore Properties' },
    { title: 'Price Reduced', description: 'Save 100-500k off these properties while it lasts.', icon: Tag, button: 'View Deals' },
    { title: 'Find Agent', description: 'Trusted professionals near you.', icon: Users, button: 'Find an Agent' },
    { title: 'New Listings', description: '70+ new properties added this week.', icon: Tag, button: 'See Listings' },
    { title: 'List Property', description: 'Post a property in minutes for Sale or Rent.', icon: Upload, button: 'List Now' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm min-h-45"
              >
                <div className="absolute right-0 top-0 h-full w-2/5 bg-linear-to-l from-blue-50 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-teal-50 p-2 text-teal-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                  </div>

                  <p className="text-sm text-gray-500 max-w-[60%]">{service.description}</p>

                  <Button className="w-fit bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm px-5">
                    {service.button}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurServices