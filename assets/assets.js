import logo from "./Heztech_logo.png";
import arduino_mega from "./arduino_mega.png";
import arduino_nano_v3 from "./arduino_nano_v3.png";
import rf_transmitter from "./rf_transmitter.png";
import rf_receiver from "./rf_receiver.png";
import arduino_uno from "./arduino_uno_smd.png";
import arduino_uno_R3 from "./arduino_uno_R3.png";
import bluetooth_module from "./bluetooth_module.png";
import dht11_sensor from "./dht11_sensor.png";
import flame_sensor from "./flame_sensor.png";
import soil_moisture_sensor from "./soil_moisture_sensor.png";
import ultrasonic_sensor from "./ultrasonic_sensor.png";
import L298N_motor_driver from "./L298N_motor_driver.png";
import servo_sg90 from "./servo_sg90.png";
import LCD_1602 from "./LCD_1602.png";
import ESP32a from "./ESP32a.png";
import esp_cam from "./esp_cam.png";
import arduino_rfid_kit from "./arduino_rfid_kit.png";
import arduino_rfid_kit_components from "./arduino_rfid_kit_components.png";
import whatsapp from "./whatsapp.png";

import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import my_location_image from "./my_location_image.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";

import upload_area from "./upload_area.png";
import checkmark from "./checkmark.png";

export const assets = {
  logo,
  whatsapp,
  ESP32a,
  arduino_rfid_kit,
  arduino_mega,
  arduino_nano_v3,
  rf_transmitter,
  arduino_uno,
  arduino_uno_R3,
  bluetooth_module,
  dht11_sensor,
  flame_sensor,
  soil_moisture_sensor,
  ultrasonic_sensor,
  L298N_motor_driver,
  rf_receiver,
  LCD_1602,
  servo_sg90,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,

  upload_area,
  esp_cam,
  checkmark,
};

export const BagIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z"
        stroke="#4b5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>
  );
};

export const BoxIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);

export const HomeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
    />
  </svg>
);

export const productsDummyData = [
  {
    _id: "67a1f4e43f34a77b6dde9144",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Arduino UNO board smd + USB cable",
    description:
      "Arduino Uno is a microcontroller board based on the ATmega328P . It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.. You can tinker with your UNO without worring too much about doing something wrong,",
    price: 12000.0,
    offerPrice: 10500.0,
    image: [assets.arduino_uno],
    category: "microcontroller",
    date: 1738667236865,
    __v: 0,
  },
  {
    _id: "67a1f52e3f34a77b6dde914a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "LCD1602 Display Blue",
    description:
      "LCD modules are vey commonly used in most embedded projects, the reason being its cheap price, availability and programmer friendly. Most of us would have come across these displays in our day to day life, either at PCO’s or calculators. The appearance and the pinouts have already been visualized above now let us get a bit technical.16×2 LCD is named so because; it has 16 Columns and 2 Rows. There are a lot of combinations available like, 8×1, 8×2, 10×2, 16×1, etc. but the most used one is the 16×2 LCD. So, it will have (16×2=32) 32 characters in total and each character will be made of 5×8 Pixel Dots",
    price: 4000.0,
    offerPrice: 3500,
    image: [assets.LCD_1602],
    category: "display",
    date: 1738667310300,
    __v: 0,
  },
  {
    _id: "67a1f5663f34a77b6dde914c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Arduino nano",
    description: `The Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328 (Arduino Nano 3.x). It has more or less the same functionality of the Arduino Duemilanove, but in a different package. It lacks only a DC power jack, and works with a Mini-B USB cable instead of a standard one.`,
    price: 10500.0,
    offerPrice: 9000,
    image: [assets.arduino_nano_v3],
    category: "microcontroller",
    date: 1738667366224,
    __v: 0,
  },
  {
    _id: "67a1f5993f34a77b6dde914e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Arduino mega",
    description: `The Arduino Mega is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. Never fear for accidental electrical discharge, either since since the Mega also includes a plastic base plate to protect it! 
     The Mega 2560 R3 also adds SDA and SCL pins next to the AREF. In addition, there are two new pins placed near the RESET pin. One is the IOREF that allow the shields to adapt to the voltage provided from the board. The other is a not connected and is reserved for future purposes. The Mega 2560 R3 works with all existing shields but can adapt to new shields which use these additional pins.`,
    price: 38000.0,
    offerPrice: 36000.0,
    image: [assets.arduino_mega],
    category: "microcontroller",
    date: 1738667417511,
    __v: 0,
  },
  {
    _id: "67a1f5ef3f34a77b6dde9150",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Arduino Uno R3",
    description: `Arduino Uno is a microcontroller board based on the ATmega328P . It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.. You can tinker with your UNO without worring too much about doing something wrong,`,
    price: 16500.0,
    offerPrice: 15000.0,
    image: [assets.arduino_uno_R3],
    category: "microcontroller",
    date: 1738667503075,
    __v: 0,
  },
  {
    _id: "67a1f70c3f34a77b6dde9156",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Bluetooth Module HC-05 (programmable)",
    description: `The HC-05 is a very cool module which can add two-way (full-duplex) wireless functionality to your projects. You can use this module to communicate between two microcontrollers like Arduino or communicate with any device with Bluetooth functionality like a Phone or Laptop. There are many android applications that are already available which makes this process a lot easier. The module communicates with the help of USART at 9600 baud rate hence it is easy to interface with any microcontroller that supports USART. We can also configure the default values of the module by using the command mode. So if you looking for a Wireless module that could transfer data from your computer or mobile phone to microcontroller or vice versa then this module might be the right choice for you`,
    price: 13000.0,
    offerPrice: 12000.0,
    image: [assets.bluetooth_module],
    category: "module",
    date: 1738667788883,
    __v: 0,
  },
  {
    _id: "67a1f7c93f34a77b6dde915a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Temperature and Humidity sensor DHT11",
    description:
      "The MacBook Pro 16, powered by Apple's M2 Pro chip, offers outstanding performance with 16GB RAM and a 512GB SSD. Whether you're editing high-resolution video, developing software, or multitasking with ease, this laptop can handle the toughest tasks. It features a stunning Retina display with True Tone technology, making it a top choice for professionals in creative industries or anyone who demands premium performance in a portable form.",
    price: 2799.0,
    offerPrice: 2499.0,
    image: [assets.dht11_sensor],
    category: "Laptop",
    date: 1738667977644,
    __v: 0,
  },
  {
    _id: "67a1f8363f34a77b6dde915c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Flame sensor module",
    description: `This module is sensitive to the flame and radiation. It also can detect ordinary light source in the range of of a wavelength 760nm-1100 nm. The detection distance is up to 100 cm.The Flame sensor can output digital or analog signal. When fire burns it emits a small amount of Infra-red light, this light will be received by the Photodiode (IR receiver) on the sensor module. Then we use an Op-Amp to check for change in voltage across the IR Receiver, so that if a fire is detected the output pin (DO) will give 5V(HIGH) and if there is no fire the output pin will be 0V(LOW). It can be used as a flame alarm or in fire fighting robots.`,
    price: 1600.0,
    offerPrice: 1400.0,
    image: [assets.flame_sensor],
    category: "module",
    date: 1738668086331,
    __v: 0,
  },
  {
    _id: "67a1f85e3f34a77b6dde915e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "L298N motor driver",
    description: `Description Driver chip: L298N dual H-bridge driver chip Terminal driver part of the supply area VMS: +5 V ~ +35 V
Drive part of the peak current Io: 2A / Bridge Logical part of the terminal power supply range Vss :4.5-5 .5 V Logical part of the operating current range: 0 ~ 36mA The control signal input voltage range: 4.5-5.5V low 0V high
Maximum power consumption: 20W Storage temperature: -25 ~ +130 Driver B
External dimensions: 43*43*27mm
Driver board Weight: 33g
 Other features: control direction indicator, power indicator, current detection, logical part of the plate to take power interface`,
    price: 6500.0,
    offerPrice: 6000.0,
    image: [assets.L298N_motor_driver],
    category: "motor_driver",
    date: 1738668126660,
    __v: 0,
  },
  {
    _id: "67a1fa4b3f34a77b6dde9166",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "0.91 Inch OLED Dispaly module 128*32 Blue Colour I2C",
    description:
      "0.91 Inch OLED Display module with 128×32 character Display White Color I2C Interface Which makes it easy to Connect with Arduino using only 2 wires.This 0.91 inch 128×32 Module features 128×32 pixel resolution. Featuring much less thickness than LCD displays with good brightness and also produce better and true colors. This OLED Display Module is very compact and will add a great ever user interface experience to your Arduino project. The connection of this display with Arduino is made through the I2C(also called as IIC) serial interface. The Module produces Blue text on black background with good contrast when supplied with DC 3.3-5V supply. The Module also offers a very wide viewing angle.",
    price: 7000.0,
    offerPrice: 5000.0,
    image: [assets.OLED_091],
    category: "display",
    date: 1738668619198,
    __v: 0,
  },
];

export const userDummyData = {
  _id: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  name: "GreatStack",
  email: "admin@example.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ycnlnUnFiUDBYT2dEZ2h1ZmRXcGlpdWV5OXoiLCJyaWQiOiJ1c2VyXzJzWkZIUzFVSUl5c0p5RFZ6Q3BRaFVoVElodyJ9",
  cartItems: {
    // "67a1f4e43f34a77b6dde9144": 3
  },
  __v: 0,
};

export const orderDummyData = [
  {
    _id: "67a20934b3db72db5cc77b2b",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67a1f4e43f34a77b6dde9144",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Apple AirPods Pro",
          description:
            "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
          price: 499.99,
          offerPrice: 399.99,
          image: [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/lrllaprpos2pnp5c9pyy.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/jqotgy2rvm36vfjv6lxl.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/niw7tqxvjsxt7wcehxeo.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/h8cq4x9cfzqzwaiarvpk.png",
          ],
          category: "Earphone",
          date: 1738667236865,
          __v: 0,
        },
        quantity: 1,
        _id: "67a20934b3db72db5cc77b2c",
      },
    ],
    amount: 406.99,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "GreatStack",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      state: "State",
      __v: 0,
    },
    status: "Order Placed",
    date: 1738672426822,
    __v: 0,
  },
  {
    _id: "67a20949b3db72db5cc77b2e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67a1f52e3f34a77b6dde914a",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Bose QuietComfort 45",
          description:
            "The Bose QuietComfort 45 headphones are engineered for exceptional sound quality and unparalleled noise cancellation. With a 24-hour battery life and comfortable, lightweight design, these headphones deliver premium audio for any environment. Whether on a flight, in the office, or at home, the Bose QC45 blocks out distractions, offering an immersive listening experience.",
          price: 429.99,
          offerPrice: 329.99,
          image: [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667311/m16coelz8ivkk9f0nwrz.png",
          ],
          category: "Headphone",
          date: 1738667310300,
          __v: 0,
        },
        quantity: 1,
        _id: "67a20949b3db72db5cc77b2f",
      },
    ],
    amount: 335.99,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "GreatStack",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      state: "State",
      __v: 0,
    },
    status: "Order Placed",
    date: 1738672448031,
    __v: 0,
  },
  {
    _id: "67a209bab3db72db5cc77b34",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67a1f4e43f34a77b6dde9144",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Apple AirPods Pro",
          description:
            "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
          price: 499.99,
          offerPrice: 399.99,
          image: [
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/lrllaprpos2pnp5c9pyy.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/jqotgy2rvm36vfjv6lxl.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667238/niw7tqxvjsxt7wcehxeo.png",
            "https://res.cloudinary.com/djbvf02yt/image/upload/v1738667237/h8cq4x9cfzqzwaiarvpk.png",
          ],
          category: "Earphone",
          date: 1738667236865,
          __v: 0,
        },
        quantity: 1,
        _id: "67a209bab3db72db5cc77b35",
      },
    ],
    amount: 406.99,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "GreatStack",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      state: "State",
      __v: 0,
    },
    status: "Order Placed",
    date: 1738672560698,
    __v: 0,
  },
];

export const addressDummyData = [
  {
    _id: "67a1e4233f34a77b6dde9055",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    fullName: "GreatStack",
    phoneNumber: "0123456789",
    pincode: 654321,
    area: "Main Road , 123 Street, G Block",
    city: "City",
    state: "State",
    __v: 0,
  },
];
