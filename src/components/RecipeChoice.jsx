// src/components/RecipeChoice.jsx
import { Center, Heading, Image, Text } from '@chakra-ui/react';

const RecipeChoice = ({ recipe }) => {
  return (
    <Center
      gap='1'
      maxW='960px'
      mx='auto'
      sm='30em'
      md='48em'
      lg='62em'
      xl='80em'
      display='flexbox'
      lineHeight={1.9}
      align={'center'}
    >
      <Heading
        fontSize={'1xl'}
        color='gray.300'
        bg={'orange.400'}
        lineHeight={1.3}
      >
        {/* Heading text */}
      </Heading>

      {/* Recipe Image */}
      <Image
        src={recipe.image}
        w={300}
        h={300}
        borderRadius={'2xl'}
        alt={recipe.alt}
      />

      <Text>
        <Text fontSize='3xl'>
          <div>{recipe.mealType}</div>
        </Text>

        <Text fontSize='6xl'>
          <div>{recipe.label}</div>
        </Text>

        <div>{recipe.dishType}</div>

        <Text fontSize='3xl'>Total cooking time:</Text>
        <div>{recipe.totalTime}</div>

        <div>
          <Text fontSize='3xl'>Ingredients:</Text>
        </div>
        <div>{recipe.ingredientLines}</div>

        <Text fontSize='4xl'>Health Labels:</Text>
        <Text w={'fit-content'} bg={'green.300'}>
          <div>{recipe.healthLabels}</div>
        </Text>

        <Text fontSize='3xl'>Diet:</Text>
        <div>{recipe.dietLabels}</div>

        <Text fontSize='3xl'>Cautions:</Text>
        <Text w={'fit-content'} bg={'red.400'}>
          <div>{recipe.cautions}</div>
        </Text>

        <Text fontSize='3xl'>Servings:</Text>
        <div>{recipe.yield}</div>
      </Text>
    </Center>
  );
};

export default RecipeChoice;
