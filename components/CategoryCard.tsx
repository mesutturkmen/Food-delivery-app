import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

// Reusable Component: Category Card
//  - To be used in combination with Categories component
const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image
            source={{
                uri: imgUrl,
            }}
            className='h-20 w-20 rounded'
        />
        <Text className='absolute bottom-1 left-1 text-white font-bold text-[11px]'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard