import cereal from './images/cereal_b.jpg';
import flower from './images/flower_b.jpg';
import machine from './images/machine_b.jpg';
import candy from './images/candy_b.jpg';

export const gravidaData = [
  {
    id: 1,
    title: 'Cras ac mauris',
    info: 'nteger dictum hendrerit pharetra. Cras fermentum posuere egestas.',
  },
  {
    id: 2,
    title: 'Curabitur elementum',
    info:
      'Cras vel imperdiet mauris. Pellentesque libero mauris, interdum a felis et, condimentum mattis erat.',
  },
  {
    id: 3,
    title: 'Awards and Recognitions',
    info:
      'Aliquam eget ligula mauris. Etiam viverra non turpis eu auctor. Nullam pretium est libero,et condimentum massa egestas id.',
  },
  {
    id: 4,
    title: 'Morbi placerat',
    info: 'Nam feugiat ultrices ligula eget faucibus. Mauris convallis ipsum est.',
  },
  {
    id: 5,
    title: 'Suspendisse eu',
    info: 'Duis pretium elementum dui, id feugiat neque facilisis vel.',
  },
  {
    id: 6,
    title: 'Integer faucibus',
    info:
      'Vivamus at rutrum est, eu pellentesque lacus. Curabitur imperdiet tortor sit amet enim ullamcorper, a aliquet odio rutrum.',
  },
];

export const productData = [
  {
    id: 1,
    title: 'Product Title 1',
    price: 500,
    image: cereal,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Product Title 2',
    price: 1900,
    image: flower,
    content: 'Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.',
  },
  {
    id: 3,
    title: 'Product Title 3',
    price: 2730,
    image: machine,
    content: 'Cras non metus sed odio tristique imperdiet.',
  },
  {
    id: 4,
    title: 'Product Title 4',
    price: 731,
    image: candy,
    content: 'Pellentesque mattis tellus ut molestie dapibus.',
  },
];

export const productsDetails = [
  {
    id: 1,
    order: 1,
    title: 'Product Title 1',
    price: 'Starting at $500',
    desc:
      'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>'
      + '<ul>'
      + '     <li>Non porta dui euismod nec</li>'
      + '     <li>Ut tristique ipsum velit</li>'
      + '     <li>Quisque mollis justo</li>'
      + '</ul>',
    'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
    src: 'material/000010885.jpg',
  },
  {
    id: 2,
    order: 2,
    title: 'Product Title 2',
    price: 'Starting at $1900',
    desc:
      'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
    'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
    src: 'material/ff_x20_008.JPG',
  },
  {
    id: 3,
    order: 3,
    title: 'Product Title 3',
    price: 'Starting at $2730',
    desc:
      'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
    'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
    src: 'material/sample1.jpg',
  },
  {
    id: 4,
    order: 4,
    title: 'Product Title 4',
    price: 'Starting at $731',
    desc:
      'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
    'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
    src: 'material/sample_08.jpg',
  },
];
