export interface Products {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  url: string;
}

export const products = [
  {
    name: 'Satinique Anti-Hairfall Shampoo',
    description: '#91,022 in Beauty & Personal Care',
    image: '../assets/images/1.jpg',
    price: 17.08,
    rating: 5,
    url: 'https://www.amazon.com/dp/B078K4PKKR/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B078K4PKKR&pd_rd_w=kegnf&pf_rd_p=57cbdc41-b731-4e3d-aca7-49078b13a07b&pd_rd_wg=sTPfk&pf_rd_r=XZFJX4DRF2AE9CJXREHA&pd_rd_r=b1f5a074-2269-4c9f-aebb-13202a4a3924&s=beauty&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQ1VTVUM5SzQ5Qlo5JmVuY3J5cHRlZElkPUEwODg4ODE1MVlIUzRWSVBJMVRSTCZlbmNyeXB0ZWRBZElkPUEwODU5MTEyTDI3SFJOMEE5Q0FXJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    name: 'G&H Protect Deodorant',
    description: 'STAY FRESH AND DRY – Fast-drying, clear formula won’t leave white marks on clothes or skin.',
    image: '../assets/images/2.jpg',
    price: 16.99,
    rating: 3,
    url: 'https://www.amazon.com/Protect-Deodorant-Anti-Perspirant-Roll/dp/B08L4NS3L5/ref=sr_1_5?keywords=amway&qid=1646654448&sr=8-5'
  },
  {
    name: 'TP-Link Wi-Fi Range Extender AC750',
    description: 'Extend Wi-Fi Coverage - Boost Internet Wi-Fi coverage up to 1200 square feet and connects up to 20 devices - Compatible with Wi-Fi Router, Gateway, Access Point (2.4GHz - 300Mbps ; 5GHz - 433Mbps)',
    image: '../assets/images/3.jpg',
    price: 29.99,
    rating: 4,
    url: 'https://www.amazon.com/stores/page/36EF0F6D-CE44-44C7-9DCA-5C6FF4B8AA62/?_encoding=UTF8&store_ref=SB_A03164193NS3XBKC0X93M&pd_rd_plhdr=t&aaxitk=202607af2aa4dcd6964b6edf319b86ed&hsa_cr_id=2394181350201&lp_asins=B08DHLCLCY%2CB0971BBYSN%2CB09D8X8VSV&lp_slot=desktop-arbies&lp_page_asin=B00R92CL5E&pd_rd_i=ad2&ref_=sbx_be_dp_arbies_mbd_asin&pd_rd_w=OrR1P&pf_rd_p=e0a52e39-1d47-4e10-9efc-a7ebc24d6d4a&pd_rd_wg=lBGB3&pf_rd_r=N3Q87QZFT1C3BXFNF2VK&pd_rd_r=384f0b77-c09e-449e-8ee9-e52071a8bb99'
  },
  {
    name: 'Amazon Basics 36 Pack AAA High-Performance Alkaline Batteries',
    description: 'These high-performance batteries deliver the right amount of power for the specific device, ensuring optimal efficiency.',
    image: '../assets/images/4.jpg',
    rating: 4.5,
    url: 'https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00LH3DMUO/ref=lp_17938598011_1_5?th=1'
  },
  {
    name: 'Switch Pro Controller for Nintendo Switch/Switch Lite',
    description: 'Upgrade Pro Controller: This controller has NFC and Wake up from sleep features. This controller is fully compatible with Nintendo Switch, including all the keys of the original Switch. This easy to use controller is quick to connect and ergonomic.',
    image: '../assets/images/5.jpg',
    rating: 4.6,
    price: 28.99,
    url: 'https://www.amazon.com/dp/B09J4M22WW/ref=sspa_dk_detail_0?pd_rd_i=B09J4M22WW&pd_rd_w=dXr17&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=hDql2&pf_rd_r=SSAQY4SBFW2R5EYZCSGA&pd_rd_r=5eb845c8-51c2-44ac-a49b-866388824e50&s=videogames&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyM01HU1pGSThNVkFJJmVuY3J5cHRlZElkPUEwNDIyNTg5M0dMRUFVSklGT0JXTyZlbmNyeXB0ZWRBZElkPUEwMzY2OTEzM09KN1k1SjdDNlYwMyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1'
  },
  {
    name: '3 x GLISTER ® Multi-action Oral Rinse 2 fl. oz',
    description: '3 bottles of 59 mL Glister Multi-Action Oral Rinse. Each bottle provides 100 uses. Reduces plaque and kills bacteria that causes bad breath.',
    image: '../assets/images/6.jpg',
    price: 36.99,
    rating: 5,
    url: 'https://www.amazon.com/GLISTER-Multi-action-Oral-Rinse-fl/dp/B007XZOPI8/ref=sr_1_3?crid=2CG3RXJU3RQCY&keywords=glister&qid=1646654378&sprefix=glist%2Caps%2C586&sr=8-3'
  },
  {
    name: 'Scotch Heavy Duty Packaging Tape',
    price: 9.99,
    description: 'This heavy duty packing tape is guaranteed to Stay Sealed. If your box does not stay sealed, 3M will refund the purchase price of this tape. ',
    image: '../assets/images/7.jpg',
    rating: 5,
    url: 'https://www.amazon.com/Scotch-Shipping-Packaging-Dispenser-142-6/dp/B000J07BRQ/ref=lp_17938598011_1_10'
  },
  {
    name: 'NIVEA Nourishing In Shower Body Lotion for Dry Skin',
    price: 5.21,
    description: 'Instant Moisture: This water-activated NIVEA body lotion delivers moisture right in the shower that lasts for 24+ hours',
    image: '../assets/images/8.jpg',
    rating: 4.6,
    url: 'https://www.amazon.com/dp/B00NV9KLXS/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B00NV9KLXS&pd_rd_w=YnZL5&pf_rd_p=57cbdc41-b731-4e3d-aca7-49078b13a07b&pd_rd_wg=YXNm9&pf_rd_r=CAEKJ0GMFJGT8M2AHXPT&pd_rd_r=9a4344d0-e3e7-4ded-9b46-ce104283ce94&s=beauty&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNVM0N1JLRFhZS0hHJmVuY3J5cHRlZElkPUEwNzUwNDc5MlRXRTNSVjRUN1pCMyZlbmNyeXB0ZWRBZElkPUEwODM1OTM3MjdLSDFZNVFNVk9RVyZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
  },
  {
    name: 'PlayStation Classic',
    price: 72.99,
    description: 'PlayStation Classic comes with 20 pre loaded games including, Final Fantasy Vll, Jumping Flash, Ridge Racer Type 4, Tekken 3 and Wild Arms',
    image: '../assets/images/9.jpg',
    rating: 4,
    url: 'https://www.amazon.com/PlayStation-Classic-Console/dp/B07HHVF2XG/ref=sr_1_1?keywords=playstation+consoles&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=K1YFCVN24BB0RRC9Y0C1&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1646656447&s=videogames&sr=1-1'
  },
  {
    name: 'Razer BlackShark V2 Gaming Headset:THX 7.1',
    price: 79.99,
    description: 'Custom-tuned HyperX 7.1 surround sound',
    image: '../assets/images/10.jpg',
    rating: 4.5,
    url: 'https://www.amazon.com/dp/B086PKMZ1Q/ref=sspa_dk_detail_0?pd_rd_i=B086PKMZ1Q&pd_rd_w=OIXF4&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=qeolk&pf_rd_r=D6FD1EWM4GQQ5PW7HQNA&pd_rd_r=1373548b-a7d3-4a81-9f7f-d88055364d2a&s=pc&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVzAxSlVQMUhJMkFNJmVuY3J5cHRlZElkPUEwMDgyODc2WThJRFY5REFZRlRGJmVuY3J5cHRlZEFkSWQ9QTA2NTEwMThTVktXVlZBV0RaT1Ymd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1'
  }
];
