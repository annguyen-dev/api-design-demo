declare namespace Components {
    namespace Schemas {
        /**
         * Post
         */
        export interface Post {
            id: string; // uri
            title?: string;
            author?: string;
        }
        /**
         * User
         */
        export interface User {
            id: string; // uuid
            name?: string;
            posts?: Post[];
        }
    }
}
declare namespace Paths {
    namespace GetUsers {
        namespace Parameters {
            export type UserName = string;
        }
        export interface QueryParameters {
            userName?: Parameters.UserName;
        }
        namespace Responses {
            export type $200 = Components.Schemas.User[];
        }
    }
}
