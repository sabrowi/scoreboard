import React, { Component } from "react";
import Player from "./components/Player";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }

  tambahPlayer = () => {
    let player = [...this.state.player];

    let inputbox = prompt("Silakan isi nama player");
    if (inputbox !== null && inputbox !== "") {
      player.push({
        nama: inputbox
      });
    } else {
      alert("nama player kosong!");
    }

    this.setState({ player });
  };

  editPlayer = key => {
    const player = [...this.state.player];

    const data = player.find((value, index) => index === key);

    const inputbox = prompt("Edit nama", data.nama);

    if (inputbox !== null && inputbox !== "") {
      player[key].nama = inputbox;
    } else {
      alert("nama player kosong!");
    }

    this.setState({ player });
  };

  hapusPlayer = key => {
    const player = [...this.state.player];
    const data = player.find((value, index) => index === key);

    const konfirmasi = window.confirm(
      "Apakah anda yakin akan menghapus " + data.nama + "?"
    );

    if (konfirmasi) {
      player.splice(key, 1);
      this.setState({ player });
    }
  };

  render() {
    return (
      <div id="container mt-5">
        <div className="board center">
          <Header title="Papan Skor" center={true} />

          <div
            className="row"
            style={{ backgroundColor: "green", color: "white" }}
          >
            <div className="col-md-2 p-2">No.</div>
            <div className="col-md-4 p-2">Nama</div>
            <div className="col-md-4 p-2 text-center">Score</div>
            <div className="col-md-2 p-2 text-center">Action</div>
          </div>

          {this.state.player.map((value, index) => {
            return (
              <Player
                id={index}
                key={index}
                no={index + 1}
                name={value.nama}
                onEdit={this.editPlayer}
                onHapus={this.hapusPlayer}
              />
            );
          })}
        </div>

        <div className="center">
          <button
            onClick={this.tambahPlayer}
            className="btn-danger btn-block btn"
          >
            Tambah Player
          </button>
        </div>
      </div>
    );
  }
}

export default App;
