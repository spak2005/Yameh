import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import React from 'react'
import { Theme } from '../Theme/Theme'
import CategoryCard from './CategoryCard'
import TrendingCard from './TrendingCard'

const SimilarProducts = (prop) => {
  return (
    <>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10}}>
        
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        >
        {/* CategoryCard */}
        <TrendingCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/B/178303_1608528339.jpg'
        title='Thaermocool mini deep fridge'
        short_description='Get the best fridges at the lowest prices'

        />
        <TrendingCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Thaermocool mini deep fridge'
        short_description='Get the best fridges at the lowest prices'

        />
        <TrendingCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Thaermocool mini deep fridge'
        short_description='Get the best fridges at the lowest prices'

        />
        <TrendingCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Thaermocool mini deep fridge'
        short_description='Get the best fridges at the lowest prices'

        />
        <TrendingCard
        id={10}
        rating={4.5}
        imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/M/171575_1652964692.jpg'
        title='Thaermocool mini deep fridge'
        short_description='Get the best fridges at the lowest prices'

        />

      </ScrollView>
        
    </>
  )
}

export default SimilarProducts