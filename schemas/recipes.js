export default {
  name: "recipes",
  title: "Recipes",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "ingridients",
      title: "Ingridients",
      type: "array",
      of: [{type: "string"}]
    },
    {
      name: "steps",
      title: "Steps",
      type: "text"
    }
  ]
}