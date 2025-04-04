import '../style/style.css';
import NavbarComponent from './NavbarComponent.jsx'; 
import React, { Component } from 'react';
import '../style/style.css'; 

class ProfileComponent extends Component {
  render() {
    return (
      <div className=" .bg-n-tertiary" >
        <header className="bg-secondary">
          <NavbarComponent />
        </header>

        <main className="d-flex justify-content-center align-items-center mt-5">
          <div>
            <h1 className="border-bottom text-white pb-2">Edit Profile</h1>

            {/* Profile Info */}
            <div className="d-flex justify-content-start border-bottom">
              <div className="mt-4 w-25 h-75 position-relative" id="userAvatar">
                <img src="https://placecats.com/300/300" alt="avatar" className="w-100" />
                <i className="bi bi-pencil-fill pencil"></i>
              </div>

              <div className="container ms-2">
                <div className="d-flex flex-column ms-3">
                  <input
                    className="text-white bg-n-secondary border-0 p-2 pe-5 mt-4"
                    type="text"
                    placeholder="Username"
                  />

                  <label for="language" className="text-white mt-4">
                    Language:
                  </label>
                  <select
                    name="language"
                    id="languageMenu"
                    className="bg-black text-white border-2 mt-1 pe-1 w-40 p-1"
                  >
                    <option value="language1">English</option>
                    <option value="language2">Italiano</option>
                    <option value="language4">Español</option>
                    <option value="language5">Français</option>
                    <option value="language6">Deutsch</option>
                    <option value="language7">日本語</option>
                    <option value="language8">中文（简体</option>
                    <option value="language9">한국인</option>
                  </select>

                  <div className="border-top mt-3">
                    <h5 className="text-white pb-2 fs-5 pt-4 ">Maturity Settings</h5>
                    <button className="bg-tertiary text-white p-2 bg-n-secondary border-0">
                      ALL MATURITY RATINGS
                    </button>

                    <p className="text-white mt-3">
                      Show titles of all maturity ratings for this profile.
                    </p>

                    <button className="bg-transparent border p-1 px-4 mb-4 text-white">
                      EDIT
                    </button>
                  </div>

                  <div className="mb-5">
                    <h5 className="text-white pb-2 fs-5 pt-4">Autoplay Controls</h5>
                    <label className="text-white d-flex align-content-center">
                      <input
                        type="checkbox"
                        className="transparent-checkbox"
                      />
                      <span className="ms-2">
                        Autoplay next episode in a series on all devices.
                      </span>
                    </label>

                    <label className="text-white d-flex align-content-center mt-2">
                      <input
                        type="checkbox"
                        className="transparent-checkbox"
                      />
                      <span className="ms-2">
                        Autoplay previews while browsing on all devices.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div>
              <button
                className="bg-white border p-1 px-4 mb-4 text-secondary mt-4 me-3 w-30"
              >
                SAVE
              </button>

              <button
                className="bg-transparent border p-1 px-4 mb-4 text-white mt-4 me-3 w-30"

              >
                CANCEL
              </button>

              <button
                className="bg-transparent border p-1 px-4 mb-4 text-white mt-4 me-3 w-30"
              >
                DELETE PROFILE
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProfileComponent;
