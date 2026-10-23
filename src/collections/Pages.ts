import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
    {
      name: 'layout', type: 'blocks', required: true,
      blocks: [
        {
          slug: 'profile', fields: [

            { name: 'full-name', type: 'text', required: true },
            { name: 'presentation-line', type: 'text', required: false },
            { name: 'social-media-line', type: 'text', required: false },
            {
              name: 'social-media',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'GitHub', value: 'github' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'X', value: 'x' },
                  ],
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                },
              ],
            },
            { name: 'expertise-line', type: 'text', required: false },
          ]
        }
      ]
    }

  ]
}

