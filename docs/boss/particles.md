# Particles

Boss supports ambient particle effects around your Bosses. Each Boss can have its own particle configuration with 8 different animation shapes.

## Configuring Particles

Open `/boss menu` > click on your Boss > Settings > Particles.

You will see a list of available Minecraft particle types. Click one to select it, then configure its shape and parameters in the details menu.

## Shapes

| Shape | Description |
|-------|-------------|
| Ambient Cloud | Particles randomly spread around the Boss |
| Circle | Particles orbit in a flat circle around the Boss |
| Helix | Particles spiral upward around the Boss |
| Vortex | An expanding rising spiral around the Boss |
| Sphere | Particles cover a sphere around the Boss |
| Tornado | A funnel of particles widening upward |
| Wings | Butterfly-shaped wings behind the Boss |
| Cube | A rotating wireframe cube around the Boss |

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Particle Type | The Minecraft particle to use | — |
| Shape | Animation shape from the table above | Ambient Cloud |
| Count | Number of particles per tick | 20 |
| Speed | Particle movement speed | 0.01 |
| Interval | Ticks between particle spawns | 2 |
| Radius | Size of the shape | 1.0 |
| Height | Vertical extent (Helix, Vortex, Tornado only) | 2.0 |
| Strands | Number of spiral arms (Helix, Vortex only) | 3 |
| Forward Offset | Shift the effect along the Boss's facing direction. Negative values move it behind the Boss | 0.0 |

## YAML Example

Particle settings are stored per-Boss in their YAML file under the `Particle` key:

```yaml
Particle:
  Type: FLAME
  Shape: HELIX
  Count: 20
  Speed: 0.01
  Interval_Ticks: 2
  Radius: 1.0
  Height: 2.0
  Strands: 3
  Forward_Offset: 0.0
```

Set `Type` to `NONE` or remove the `Particle` section entirely to disable particles for a Boss.
