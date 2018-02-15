const initialState = {
    content: {
        block_1: {
            title: 'hot offers',
            descriptions: 'Vestibulum ante ipsum primis in Faucibus orci luctus et ultrices' +
                'posuere cubilia curae. Suspendisse sollictudin velit sed leo. Ut' +
                'pharetra augue nec augue. Nam elit magna, hend',
            points: [
                'Vestibulum ante ipsum primis in Faucibus luctus',
                'Nam elit magna hendrerit sit amet tincidunt ac',
                'Quisque diam loren interdum vitae dapibus ac scele',
                'Donec eget tellus non erat lacinia fermentum',
                'Donec in velit vel ipsum auctor pulvin'
            ]
        },
        block_2: {
            title: 'hot offers',
            descriptions: 'Vestibulum ante ipsum primis in Faucibus orci luctus et ultrices' +
            'posuere cubilia curae. Suspendisse sollictudin velit sed leo. Ut' +
            'pharetra augue nec augue. Nam elit magna, hend',
            points: [
                'Vestibulum ante ipsum primis in Faucibus luctus',
                'Nam elit magna hendrerit sit amet tincidunt ac',
                'Quisque diam loren interdum vitae dapibus ac scele',
                'Donec eget tellus non erat lacinia fermentum',
                'Donec in velit vel ipsum auctor pulvin'
            ]
        },
        block_3: {
            title: 'store information',
            points: [
                {
                    img: '',
                    text: 'Company inc., 8901 Marmora Road, Glasgow, D04 89GR'
                },
                {
                    img: '',
                    text: 'Call us now toll Free: (800) 2345-6789'
                },
                {
                    img: '',
                    text: 'Customer support: support@example.com',
                    text_2: 'Press: pressroom@example.com'
                },
                {
                    img: '',
                    text: 'Skype: sample-username'
                }
            ]
        }
    }
};

export default function footerContent(state = initialState, action) {
    return state;
}