export const navigation = {
    categories: [
      {
        id: 'kitchenandhomehub',
        name: 'Kitchen and Home Hub',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/I/61B8-nfHqlL._AC._SR360,460.jpg',
            imageAlt: 'New Arrivals',
          },
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_recipe_380x500_1._V509410474_.jpg',
            imageAlt: 'New Arrivals',
          },
        ],
        sections: [
          {
            id: 'kitchenappliances',
            name: 'Kitchen Appliances',
            items: [
              { name: 'Lunch Box', id:"lunch_box", href: `{kitchenandhomehub/kitchenappliances/lunch_box}` },
              { name: 'Food Storage', id:"food_storage", href: '#' },
              { name: 'Water Bottles', id: 'water_bottles' },
              { name: 'Mixer', id: 'mixer' },
              { name: 'Gas Stove', id: 'gas_stove' },
              { name: 'Pressure Cooker', id: 'pressure_cooker' },
             
            ],
          },
          {
            id: 'homeappliances',
            name: 'Home Appliances',
            items: [
              { name: 'Vacuum Cleaner', id: 'vacuum_cleaner' },
              { name: 'Iron', id: 'iron' },
              { name: 'Bucket Mob', id: 'bucket_mob' },
             
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Philips', id: '#' },
              { name: 'Bajaj', id: '#' },
              { name: 'Usha', id: '#' },
              { name: 'Pigeon', id: '#' },
              { name: 'Prestige', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'kitchenandhomehub',
        name: 'Electronics Hub',
        featured: [
          {
            name: 'Audio Store',
            id: '#',
            imageSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/Megamanu/megamenu_sony_473x623.jpg',
            imageAlt: 'Sound System',
          },
          {
            name: 'Fans',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_fans_380x500_1._V509410474_.jpg',
            imageAlt:
              'Fans',
          },
        ],
        sections: [
          {
            id: 'kitchenappliances',
            name: 'Electronics',
            items: [
              { name: 'Microwave', id: 'microwave' , href: `{kitchenandhomehub/kitchenappliances/microwave}` },
              { name: 'Induction', id: 'induction' },
              { name: 'Electric Kettle', id: 'electric_kettle' },
              { name: 'Ceiling Fan', id: 'ceiling_fan' },
              { name: 'Stand Fan', id: 'stand_fan' },
              // `{electronicshub/electronics/microwave}`
              
            ],
          },
          {
            id: 'homeappliances',
            name: 'Sound System',
            items: [
              { name: 'Bluetooth Speaker', id: 'bluetooth_speaker' },
              { name: 'Sound Accessories', id: 'sound_accessories' },
              
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Crompton', id: '#' },
              { name: 'Usha', id: '#' },
              { name: 'Bajaj', id: '#' },
              { name: 'Whirlpool', id: '#' },
              { name: 'LG', id: '#' },
              { name: 'Panasonic', id: '#' },
              { name: 'BOAT', id: '#' },
            ],
          },
        ],
      },
    ]
    // ,
    // pages: [
    //   { name: 'Ssservice', to:'/service' },
    //   { name: 'About Us', id: '/' },
    // ],
  }