// import { UserProps } from '@/interfaces'
// import React from 'react'
// import Header from '@/components/layout/Header';
// import UserCard from '@/components/common/UserCard';

// interface UsersPageProps {
//     posts: UserProps[];
// }

// const Users : React.FC<UsersPageProps> = ({posts}) => {
//   return (
//  <div className="flex flex-col h-screen">
//       <Header />
//       <main className="p-4">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">Users</h1>
//           <button className="bg-green-700 px-4 py-2 rounded-full text-white">
//             Add User
//           </button>
//         </div>

//         <div className="grid grid-cols-3 gap-4">
//           {posts.map((user: UserProps) => (
//             <UserCard key={user.id} {...user} />
//           ))}
//         </div>
//       </main>
//     </div>
//   )
// }
// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
// export default Users;



import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUsers((prev) => [user, ...prev]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
