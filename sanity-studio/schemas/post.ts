export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
    },
    {
      title: 'comment',
      name: 'comment',
      type: 'document',
      fields: [
        {
          title: 'Author',
          name: 'author',
          type: 'reference',
          to: [{type: 'user'}],
        },
        {
          title: 'Content',
          name: 'content',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      authorUsername: 'author.username',
      authorName: 'author.name',
      commentText: 'comment.0.content',
      photo: 'photo',
    },
    prepare(selection: any) {
      const {authorUsername, authorName, commentText, photo} = selection
      return {
        title: commentText,
        subtitle: `${authorName} (${authorUsername})`,
        media: photo,
      }
    },
  },
}
