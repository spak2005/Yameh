import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import React from 'react'
import { Theme } from '../Theme/Theme'
import CategoryCard from './CategoryCard'

const Category = (prop) => {
  return (
    <>
      <View style={{flexDirection:'row', alignItems:'center',marginTop: 10, justifyContent:'space-between'}}>
        <Text style={{ fontWeight: "400", fontWeight:'bold' }}>{prop.name}</Text>
        <ArrowRightIcon size={30} color={Theme.color.gold}/>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15,
        }}
        paddingTop={5}
        showsHorizontalScrollIndicator={false}
        >
        {/* CategoryCard */}
        <CategoryCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Refridgerator'
        short_description='Get the best fridges at the lowest prices'

        />
        <CategoryCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Refridgerator'
        short_description='Get the best fridges at the lowest prices'

        />
        <CategoryCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Refridgerator'
        short_description='Get the best fridges at the lowest prices'

        />
        <CategoryCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Refridgerator'
        short_description='Get the best fridges at the lowest prices'

        />
        <CategoryCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Refridgerator'
        short_description='Get the best fridges at the lowest prices'

        />

      </ScrollView>
        
    </>
  )
}

export default Category