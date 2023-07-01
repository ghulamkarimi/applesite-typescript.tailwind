import { useContext } from "react"
import { AppContext } from "../../AppContext"



const Bottom = () => {
  const { isLight } = useContext(AppContext)
  return (
    <div className="py-20 px-10  text-center">

      <ol className={`flex flex-col text-xl ${isLight ? "text-white " : "text-black "}`}>
        <li className="">
          Trade-in values based on the condition, age, and
          configuration of your traded-in device. Minimum age to trade in for
          credit or payment is 18 years. Not all devices are eligible for
          credit. For more information on trade-ins for qualifying devices,
          visit the Apple trade-in partner. Restrictions and limitations may
          apply. Payouts are based on the device received matching the
          description provided at the time of the request. Apple reserves the
          right to refuse a device or limit the number of devices for any
          reason. The value of the current device can be applied towards the
          purchase of a new Apple device. This offer may not be available at
          every Apple Store. Desktop trade-ins are currently online only, and
          some stores may have additional requirements. You must be at least
          18 years old to use the trade-in for credit via bank transfer
          option. A valid account with a bank in Germany is required. For more
          details, contact Apples approved trade-in and recycling partner for
          qualifying devices. Restrictions and limitations may apply. The
          amount of the trade-in is based on the description you submitted of
          the device to be traded; the relevant point in time is the
          transmission of your description. Value online and in store may
          vary.
        </li>
        <li>
          Apple Fitness+ requires an iPhone 8 or later, or an Apple Watch
          Series 3 or later paired with an iPhone 6s or later. For new
          subscribers only. €9.99/month after the trial expires. The
          subscription will be automatically renewed until canceled.
          Conditions apply .
        </li>
      </ol>

    </div>
  )
}

export default Bottom
