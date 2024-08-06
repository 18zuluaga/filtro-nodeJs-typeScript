import { container } from 'tsyringe';
import { CartRepository, OrderRepository, PermissionsRepository, ProductCartRepository, ProductRepository, UserRepository,  } from '../repositories';
import { CartService, OrderService, PermissionsService, ProductCartService, ProductService, UserService } from '../services';


container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<PermissionsRepository>(PermissionsRepository);
container.registerSingleton<PermissionsService>(PermissionsService);

container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);

container.registerSingleton<ProductCartRepository>(ProductCartRepository);
container.registerSingleton<ProductCartService>(ProductCartService)