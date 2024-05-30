import React from 'react'
import { BlogRead } from "../utils"

const Content = () => {

    const content = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur. Blandit nulla orci justo vivamus sed.',
            href: '#',
            description:
                'Lorem ipsum dolor sit amet consectetur. Ultricies vulputate eget dignissim ut dolor. Amet ut ullamcorper praesent consequat. Maecenas in curabitur gravida proin egestas nibh maecenas dolor massa. Tellus praesent ipsum potenti tristique justo sit. Egestas lacus amet quam integer commodo massa praesent. Habitant sit dolor sed nam id interdum libero. Nec placerat quam libero aliquam ipsum malesuada. Cursus ipsum viverra pellentesque facilisi integer. Nisl varius scelerisque ultricies sed eros dui cursus lectus. Tempus quisque dignissim sit eget nunc pharetra. Ultricies vitae diam ac quis. Nisi ut eget nibh sit sit porttitor. Eleifend posuere dui sit pretium non porta mauris. Sed tellus arcu diam egestas ac. Auctor enim faucibus quis eget. Lacus cursus varius facilisis netus egestas massa vivamus varius eget. Sed auctor id ut sit urna. In eget mus dignissim aliquam quis ultricies. Eget faucibus eget euismod vitae id nulla quam diam. Bibendum sagittis arcu sit feugiat eu orci at imperdiet. A erat adipiscing lacus nunc pellentesque egestas adipiscing in pellentesque. Semper malesuada nulla elit amet scelerisque et amet interdum ornare. Nisl sed interdum vestibulum in. Mauris quisque orci arcu ipsum est. Ultricies sodales vulputate ut dui quis sed lorem pharetra. Quis natoque tortor ac vitae. Feugiat ullamcorper nisi non auctor sit enim. Lorem faucibus arcu cras leo leo in cras in. Faucibus vestibulum est ut mauris. Sit ornare lorem enim nibh etiam laoreet arcu. Rhoncus amet molestie pharetra nibh pulvinar dui elementum euismod. Nulla vitae quam amet eu gravida et. Massa dolor vitae velit dui id arcu. Nibh velit pulvinar morbi tristique. Proin sodales faucibus id aliquam erat vitae mauris ullamcorper. Praesent fames mauris semper ut blandit. Amet nisi velit non hac viverra dignissim rutrum eget non. Lacus egestas amet rhoncus laoreet tortor at viverra mattis eget. Erat vel elit in dictumst tincidunt morbi. Ridiculus velit in netus neque quis amet accumsan. Cursus id tempor pellentesque neque ultrices senectus faucibus. Ultrices enim nulla tempor elit tincidunt pellentesque. Vestibulum facilisis egestas nullam integer. Sapien felis enim eu aenean varius ut lorem adipiscing. Dui massa tempor eget pellentesque. At velit in auctor risus massa venenatis. Sed et consectetur cras amet pellentesque pellentesque facilisis elementum dis.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            publishedDate: "Published Date",
            time: "3 Min Read",
            author: "Admin",
            comment: "Comments (30)",
        },
    ];

    return (
        <div>
            <BlogRead posts={content} />
        </div>
    )
}

export default Content