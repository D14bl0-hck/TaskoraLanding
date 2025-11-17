/*
  # Create early_creators table

  1. New Tables
    - `early_creators`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text, unique) - Early creator's email
      - `created_at` (timestamptz) - Signup timestamp
  
  2. Security
    - Enable RLS on `early_creators` table
    - Add policy for public insert access
    - Add policy for authenticated users to read entries
*/

CREATE TABLE IF NOT EXISTS early_creators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE early_creators ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join early creators"
  ON early_creators
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read early creators"
  ON early_creators
  FOR SELECT
  TO authenticated
  USING (true);
