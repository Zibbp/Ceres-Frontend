<template>
  <nav
    v-show="!$store.state.expand"
    class="w-full bg-white dark:bg-dark-black-700 shadow"
  >
    <div
      class="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto"
    >
      <div class="flex items-center">
        <nuxt-link to="/" class="mr-7 flex items-center">
          <!-- <svg
            aria-label="Home"
            id="logo"
            enable-background="new 0 0 300 300"
            height="44"
            viewBox="0 0 300 300"
            width="43"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          > -->
          <img src="/images/ceres_logo.png" class="h-8 w-8" alt="Ceres Logo" />

          <h3
            class="text-base text-gray-800 dark:text-dark-purple-600 font-bold tracking-normal leading-tight ml-2 hidden lg:block"
          >
            Ceres
          </h3>
        </nuxt-link>
        <ul class="hidden xl:flex items-center h-full text-base">
          <nuxt-link to="/">
            <li
              class="cursor-pointer h-full dark:text-gray-300 dark:hover:text-dark-purple-600 flex items-center text-base mr-10 text-sm hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Home
            </li></nuxt-link
          >
          <nuxt-link to="/channels">
            <li
              class="cursor-pointer h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Channels
            </li></nuxt-link
          >
          <nuxt-link v-if="isArchiverOrAdmin()" to="/archive">
            <li
              class="cursor-pointer h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Archive
            </li>
          </nuxt-link>
          <nuxt-link v-if="isArchiverOrAdmin()" to="/queue">
            <li
              class="cursor-pointer h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Queue
            </li>
          </nuxt-link>
          <nuxt-link v-if="isAdmin()" to="/admin">
            <li
              class="cursor-pointer h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Admin
            </li>
          </nuxt-link>
        </ul>
      </div>

      <div class="hidden xl:flex items-center justify-end">
        <div class="relative flex">
          <span class="absolute pt-2.5 pl-3">
            <svg
              @click="submitSearch"
              class="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            v-model="searchString"
            v-on:keyup.enter="submitSearch"
            type="text"
            class="w-full py-2 pl-10 pr-4 text-gray-700 border dark:border-0 bg-white rounded-md dark:bg-dark-black-600 dark:text-gray-300 focus:border-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-dark-purple-600"
            placeholder="Search"
          />
        </div>
        <div class="h-full flex">
          <div
            v-if="!$auth.loggedIn"
            class="text-gray-600 w-20 dark:text-gray-300 dark:hover:text-dark-purple-600 justify-center cursor-pointer h-full flex items-center text-md text-base hover:text-indigo-700 transition duration-150 ease-in-out mr-2 tracking-normal"
          >
            <nuxt-link to="/register">Register</nuxt-link>
          </div>
          <div
            v-if="!$auth.loggedIn"
            class="text-gray-600 w-20 h-full flex items-center justify-center"
          >
            <nuxt-link
              to="/login"
              class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Login
            </nuxt-link>
          </div>
          <div
            v-else
            class="flex items-center pl-4 relative cursor-pointer"
            @click="dropdownHandler($event)"
          >
            <ul
              class="p-2 w-40 border-r z-50 bg-white absolute rounded left-0 shadow mt-16 top-0 hidden"
            >
              <li
                class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <nuxt-link to="/profile">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span class="ml-2">My Profile</span>
                  </div></nuxt-link
                >
              </li>
              <li
                @click="$auth.logout()"
                class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span class="ml-2">Signout</span>
              </li>
            </ul>

            <p
              class="text-gray-800 mr-2 dark:text-gray-300 dark:hover:text-dark-purple-600"
            >
              {{ $auth.user.username }}
            </p>
            <avatar
              :size="40"
              :rounded="true"
              :username="$auth.user.username"
            ></avatar>
          </div>
          <div
            class="text-gray-600 ml-2 dark:text-gray-300 dark:hover:text-dark-purple-600 h-full flex items-center justify-center cursor-pointer text-md text-base hover:text-indigo-700 transition duration-150 ease-in-out tracking-normal"
          >
            <div
              v-if="$colorMode.preference == 'light'"
              @click="$colorMode.preference = 'dark'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <div v-else @click="$colorMode.preference = 'light'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="visible xl:hidden flex items-center">
        <ul
          class="p-2 border-r z-50 bg-white dark:bg-dark-black-700 absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden"
        >
          <nuxt-link to="/channels">
            <li
              class="cursor-pointer py-2 h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Channels
            </li></nuxt-link
          >
          <nuxt-link v-if="isArchiverOrAdmin()" to="/archive">
            <li
              class="cursor-pointer py-2 h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Archive
            </li>
          </nuxt-link>
          <nuxt-link v-if="isArchiverOrAdmin()" to="/queue">
            <li
              class="cursor-pointer py-2 h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Queue
            </li>
          </nuxt-link>
          <nuxt-link v-if="isAdmin()" to="/admin">
            <li
              class="cursor-pointer py-2 h-full flex items-center text-sm text-gray-800 dark:text-gray-300 dark:hover:text-dark-purple-600 hover:text-indigo-700 transition duration-150 ease-in-out mr-10 tracking-normal"
            >
              Admin
            </li>
          </nuxt-link>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
          >
            <div class="h-full flex">
              <div
                v-if="!$auth.loggedIn"
                class="text-gray-600 w-20 dark:text-gray-300 dark:hover:text-dark-purple-600 justify-center cursor-pointer h-full flex items-center text-md text-base hover:text-indigo-700 transition duration-150 ease-in-out mr-2 tracking-normal"
              >
                <nuxt-link to="/register">Register</nuxt-link>
              </div>
              <div
                v-if="!$auth.loggedIn"
                class="text-gray-600 w-20 h-full flex items-center justify-center"
              >
                <nuxt-link
                  to="/login"
                  class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Login
                </nuxt-link>
              </div>
              <div
                v-else
                class="flex items-center pl-4 relative cursor-pointer"
                @click="dropdownHandler($event)"
              >
                <ul
                  class="p-2 w-40 border-r z-50 bg-white absolute rounded left-0 shadow mt-16 top-0 hidden"
                >
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                  >
                    <nuxt-link to="/profile">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span class="ml-2">My Profile</span>
                      </div></nuxt-link
                    >
                  </li>
                  <li
                    @click="$auth.logout()"
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span class="ml-2">Signout</span>
                  </li>
                </ul>

                <p
                  class="text-gray-800 mr-2 dark:text-gray-300 dark:hover:text-dark-purple-600"
                >
                  {{ $auth.user.username }}
                </p>
                <avatar
                  :size="40"
                  :rounded="true"
                  :username="$auth.user.username"
                ></avatar>
              </div>
              <div
                class="text-gray-600 ml-2 dark:text-gray-300 dark:hover:text-dark-purple-600 h-full flex items-center justify-center cursor-pointer text-md text-base hover:text-indigo-700 transition duration-150 ease-in-out tracking-normal"
              >
                <div
                  v-if="$colorMode.preference == 'light'"
                  @click="$colorMode.preference = 'dark'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <div v-else @click="$colorMode.preference = 'light'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <svg
          @click="MenuHandler($event, true)"
          aria-haspopup="true"
          aria-label="Main Menu"
          xmlns="http://www.w3.org/2000/svg"
          class="show-m-menu icon icon-tabler icon-tabler-menu"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <line x1="4" y1="8" x2="20" y2="8"></line>
          <line x1="4" y1="16" x2="20" y2="16"></line>
        </svg>
        <div class="hidden close-m-menu" @click="MenuHandler($event, false)">
          <svg
            aria-label="Close"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Avatar from 'vue-avatar'
export default {
  components: {
    avatar: Avatar,
  },
  data() {
    return {
      colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
      searchString: '',
    }
  },
  methods: {
    isArchiverOrAdmin() {
      if (this.$auth.loggedIn) {
        if (
          this.$auth.user.roles == 'admin' ||
          this.$auth.user.roles == 'archiver'
        ) {
          return true
        }
      }
    },
    isAdmin() {
      if (this.$auth.loggedIn) {
        if (this.$auth.user.roles == 'admin') {
          return true
        }
      }
    },
    dropdownHandler(event) {
      const single = event.currentTarget.getElementsByTagName('ul')[0]
      single.classList.toggle('hidden')
    },
    MenuHandler(el, val) {
      const MainList =
        el.currentTarget.parentElement.getElementsByTagName('ul')[0]
      const closeIcon =
        el.currentTarget.parentElement.getElementsByClassName('close-m-menu')[0]
      const showIcon =
        el.currentTarget.parentElement.getElementsByClassName('show-m-menu')[0]
      if (val) {
        MainList.classList.remove('hidden')
        el.currentTarget.classList.add('hidden')
        closeIcon.classList.remove('hidden')
      } else {
        showIcon.classList.remove('hidden')
        MainList.classList.add('hidden')
        el.currentTarget.classList.add('hidden')
      }
    },
    searchHandler(event) {
      const Input =
        event.currentTarget.parentElement.getElementsByTagName('input')[0]
      Input.classList.toggle('w-0')
      Input.classList.toggle('w-24')
    },
    submitSearch() {
      this.$router.push({
        path: '/search',
        query: {
          search: this.searchString,
        },
      })
      this.searchString = ''
    },
  },
}
</script>
